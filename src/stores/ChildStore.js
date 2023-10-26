// Import Default
import React from 'react';

// Import Libraries
import { makeAutoObservable, runInAction } from 'mobx';
import { get, ref, set } from 'firebase/database';
import { FIREBASE_DB } from '../config/firebase.config';
import { storageStore } from './StorageStore';
import { commonStore } from './CommonStore';

// Import Models
import Child from './models/Child';

class ChildStore {
    children = [];

    child = {};

    constructor() {
        makeAutoObservable(this);
    }

    getChildren = async (userId) => {
        try {
            commonStore.handleCommonStore('isLoading', true);
            await get(ref(FIREBASE_DB, 'children')).then((childrenSnapshot) => {
                if (Object.values(childrenSnapshot.val()).length > 0) {
                    runInAction(() => {
                        this.child = Object.values(childrenSnapshot.val())[0];
                    });
                }
                runInAction(() => {
                    this.children = Object.values(childrenSnapshot.val()).filter((child) => {
                        if (child.userId === userId) {
                            console.log('3');
                            return child;
                        }
                    });
                });
            });
        } catch (error) {
            console.log('error', error);
        } finally {
            commonStore.handleCommonStore('isLoading', false);
        }
    };

    getChild = async (childId) => {
        try {
            commonStore.handleCommonStore('isLoading', true);
            this.handleChangeChildStore('child', await get(ref(FIREBASE_DB, `children/${childId}`)));
        } catch (error) {
            console.log('error', error);
        } finally {
            commonStore.handleCommonStore('isLoading', false);
        }
    };

    setChild = async (userId, child) => {
        try {
            commonStore.handleCommonStore('isLoading', true);
            await storageStore.uploadImageAsync(child.uid, storageStore.imageURL).then(async (avatarURL) => {
                if (avatarURL) {
                    const _child = new Child({
                        uid: child.uid,
                        name: child.name,
                        userId: userId,
                        avatarURL,
                    });
                    await set(ref(FIREBASE_DB, `children/${child.uid}/`), { ..._child }).then(() => {
                        this.handleChangeChildStore('child', _child);
                    });
                }
            });
        } catch (error) {
            console.log('error', error);
        } finally {
            commonStore.handleCommonStore('isLoading', false);
        }
    };

    deleteChild = async (child) => {
        try {
            // update child
        } catch (e) {
            console.log('UpdateUserError ------> ', e.message);
        }
    };

    handleChangeChildStore = (key, value) => {
        if (!key && !value) return;
        this[key] = value;
    };
}

// Instantiate the counter store.
const childStore = new ChildStore();
// Create a React Context with the counter store instance.
export const ChildStoreContext = React.createContext(childStore);
export const useChildStore = () => React.useContext(ChildStoreContext);

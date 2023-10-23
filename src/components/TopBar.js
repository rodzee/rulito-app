// Import Default
import React, { useState } from 'react';

// Import Libraries
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopBar = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            label: 'Lorenzo',
            value: 'lorenzo',
            icon: () => <Icon name='account' size={20} />,
        },
    ]);
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder='Select a Child Profile'
            // Text Styles
            labelStyle={{ fontWeight: 'bold' }}
            textStyle={{ textAlign: 'center' }}
            dropDownContainerStyle={{ backgroundColor: '#F5F5F5', borderWidth: 0, paddingHorizontal: wp('7%') }}
            // General Style
            style={{ borderWidth: 0, paddingHorizontal: wp('10%') }}
        />
    );
};

export default TopBar;

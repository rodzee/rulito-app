// Import Default
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Import Libraries
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const navigation = useNavigation();

const ChildrenScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F1E6E0]">
      <View>
        <Text>Caretakers</Text>
      </View>
    </SafeAreaView>
  );
};

export default ChildrenScreen;

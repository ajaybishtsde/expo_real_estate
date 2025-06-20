import icons from "@/constants/icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MenuBar = ({
  title,
  showLeftIcon,
  showRightIcon,
}: {
  title: string;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
}) => {
  return (
    <View className="flex-1 flex-row justify-between items-center py-2">
      {showLeftIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-11 h-11 rounded-full bg-primary-200 items-center justify-center"
        >
          <Image source={icons.backArrow} className="h-6 w-6" />
        </TouchableOpacity>
      )}

      <Text className="text-xl font-rubik-semibold">{title}</Text>
      {showRightIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          className="w-11 h-11 items-center justify-center"
        >
          <Image source={icons.bell} className="w-6 h-6" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MenuBar;

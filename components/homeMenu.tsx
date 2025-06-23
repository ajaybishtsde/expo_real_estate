import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";

const HomeMenu = () => {
  return (
    <View className="h-11 w-full flex-row justify-between mt-4">
      <View className="flex-row">
        <Image source={images.avatar} className="size-11 me-3" />
        <View className="justify-evenly">
          <Text className="font-rubik-medium text-black-200 text-xs">
            Good Morning
          </Text>
          <Text className="font-rubik-medium text-base">Tamado Kanjiro</Text>
        </View>
      </View>
      <View className="h-11 w-12 items-center justify-center">
        <Image source={icons.bell} className="size-6" />
      </View>
    </View>
  );
};

export default HomeMenu;

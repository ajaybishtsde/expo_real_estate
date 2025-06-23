import MenuBar from "@/components/menuBar";
import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SettingsListsProps = {
  title: string;
  icon: ImageSourcePropType;
  handleClick: () => void;
};

const SettingsLists = ({ title, icon, handleClick }: SettingsListsProps) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleClick}
        hitSlop={10}
        className="flex-row items-center justify-between mb-7"
      >
        <View className="flex-row gap-2">
          <Image source={icon} className="h-7 w-7" />
          <Text className="text-lg font-rubik-medium">{title}</Text>
        </View>

        {title !== "Logout" && (
          <Image source={icons.rightArrow} className="w-5 h-5" />
        )}
      </TouchableOpacity>
    </>
  );
};

const Profile = () => {
  const router = useRouter();
  const handleLogout = () => router.replace("/sign-in");
  return (
    <SafeAreaView className="bg-white h-full p-4">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-10"
      >
        <MenuBar title="Profile" showRightIcon={true} />
        <View className="mt-4 mb-6">
          <TouchableOpacity
            activeOpacity={0.7}
            className="relative h-36 w-36 self-center mb-4"
          >
            <Image source={images.avatar} className="h-36 w-36" />
            <Image
              source={icons.edit}
              className="w-6 h-6 absolute bottom-2 right-2"
            />
          </TouchableOpacity>
          <Text className="font-rubik-semibold text-2xl text-center">
            Tamado Kanjiro
          </Text>
        </View>
        <View className="flex-1 h-full w-full">
          {settings.slice(0, 2).map((item, i) => (
            <SettingsLists
              key={i}
              icon={item.icon}
              title={item.title}
              handleClick={() => {}}
            />
          ))}
        </View>
        <View className="flex-1 h-full w-full mt-4">
          {settings.slice(2).map((item, i) => (
            <SettingsLists
              key={i}
              icon={item.icon}
              title={item.title}
              handleClick={() => {}}
            />
          ))}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleLogout}
            hitSlop={10}
            className="flex-row items-center justify-between mb-7"
          >
            <View className="flex-row gap-2">
              <Image source={icons.logout} className="h-7 w-7" />
              <Text className="text-lg font-rubik-medium">Logout</Text>
            </View>

            <Image source={icons.rightArrow} className="w-5 h-5" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

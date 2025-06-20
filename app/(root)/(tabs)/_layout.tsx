import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabsIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className={`flex-1 items-center p-1 `}>
    <Image
      source={icon}
      className="h-6 w-6"
      tintColor={focused ? "#0061ff" : "#666876"}
    />
    <Text
      className={`text-sm w-full text-center mt-1 ${focused ? "text-primary-300 font-rubik-medium" : "text-black-200 font-rubik"}`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFF",
          position: "absolute",
          minHeight: 70,
          borderTopWidth: 2,
          borderTopColor: "green",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsIcon title="Explore" focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabsIcon title="Profile" focused={focused} icon={icons.person} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

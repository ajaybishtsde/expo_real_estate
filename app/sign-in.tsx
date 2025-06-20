import icons from "@/constants/icons";
import images from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const router = useRouter();
  const handleLogin = () => router.replace("/");
  return (
    <SafeAreaView className="bg-white h-full p-4">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-3">
          <Text className="font-rubik uppercase text-base text-center text-black-200 mb-3">
            Welcome to Restate
          </Text>
          <Text className="text-center font-rubik-bold text-3xl mb-12">
            Let's Get You Closer To {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-center text-black-200 mb-3">
            Login to Real Scout with Google
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-white h-14 w-full shadow-md shadow-zinc-500 rounded-3xl flex-row items-center justify-center"
            onPress={handleLogin}
          >
            <Image
              source={icons.google}
              className="h-5 w-5 me-2"
              resizeMode="contain"
            />
            <Text className="text-center font-rubik-semibold">
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

import MenuBar from "@/components/menuBar";
import SearchComponent from "@/components/searchComponent";
import { cards, categories } from "@/constants/data";
import icons from "@/constants/icons";
import React from "react";
import { FlatList, Image, ImageSourcePropType, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
  const CategoriesRenderer = ({
    item,
  }: {
    item: { title: string; category: string };
  }) => {
    return (
      <View className="px-5 py-3 rounded-3xl bg-primary-300 me-3 self-center">
        <Text className="text-sm font-rubik-bold text-white">{item.title}</Text>
      </View>
    );
  };
  const FlatsRenderer = ({
    item,
  }: {
    item: {
      title: string;
      price: string;
      location: string;
      rating: number;
      category: string;
      image: ImageSourcePropType;
    };
  }) => {
    return (
      <View className="py-3 flex-row gap-3">
        <View className="h-24 w-24 rounded-md ">
          <Image
            source={item.image}
            className="h-full w-full rounded-md"
            resizeMode="cover"
          />
        </View>
        <View className="w-6/12 justify-evenly">
          <Text className="text-lg font-rubik-semibold" numberOfLines={2}>
            {item.title}
          </Text>
          <Text className="text-sm font-rubik-light" numberOfLines={2}>
            {item.location}
          </Text>
        </View>
        <View className="justify-evenly">
          <Image source={icons.heart} className="h-6 w-6" tintColor={"grey"} />
          <Text className="text-lg font-rubik-semibold text-primary-300">
            {item.price}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="h-full px-4 bg-white">
      <MenuBar
        title="Search for Your Ideal Home"
        showLeftIcon={true}
        showRightIcon={true}
        titleStyle="text-lg font-rubik-medium"
      />
      <SearchComponent containerStyle="mt-6" />
      <FlatList
        data={categories}
        keyExtractor={(item) => item.category}
        renderItem={CategoriesRenderer}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="h-16 mt-4"
      />
      <Text className="text-xl font-rubik-semibold mt-4 mb-2">
        Found 182 Apartments
      </Text>
      <FlatList
        data={cards}
        keyExtractor={(cards) => cards.location}
        renderItem={FlatsRenderer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Explore;

import HomeMenu from "@/components/homeMenu";
import SearchComponent from "@/components/searchComponent";
import { cards, categories } from "@/constants/data";
import icons from "@/constants/icons";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cards = ({
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
    <>
      <View className="h-80 w-72 bg-green-500 me-4 rounded-xl relative">
        <Image
          source={item.image}
          className="w-full h-full rounded-xl"
          resizeMode="cover"
        />
        <View className="w-full h-full absolute bg-black-200/30 rounded-xl"></View>
        <View className="px-3 py-1 bg-white rounded-2xl flex-row items-center gap-1 absolute right-6 top-6">
          <Image source={icons.star} />
          <Text className="font-rubik-bold text-sm text-primary-300">
            {item.rating}
          </Text>
        </View>
        <View className="w-full absolute bottom-0 rounded-b-xl pb-5 px-4">
          <Text className="text-xl font-rubik-extrabold text-white">
            {item.title}
          </Text>
          <Text className="font-rubik-medium text-white">{item.location}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-rubik-extrabold text-white">
              {item.price}
            </Text>
            <Image source={icons.heart} className="size-6" />
          </View>
        </View>
      </View>
    </>
  );
};

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

export default function Index() {
  return (
    <SafeAreaView className="flex-1 px-4">
      <ScrollView>
        <HomeMenu />
        <SearchComponent containerStyle="mt-6" />
        <View className="flex-row items-center justify-between mt-6 mb-5">
          <Text className="text-xl font-rubik-bold">Featured</Text>
          <Text className="text-lg font-rubik-bold text-primary-300">
            See All
          </Text>
        </View>
        <FlatList
          data={cards}
          keyExtractor={(item) => item.title}
          renderItem={Cards}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View className="flex-row items-center justify-between mt-6 mb-5">
          <Text className="text-xl font-rubik-bold">Our Recommendation</Text>
          <Text className="text-lg font-rubik-bold text-primary-300">
            See All
          </Text>
        </View>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.category}
          renderItem={CategoriesRenderer}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="h-16"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

import icons from "@/constants/icons";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const SearchComponent = ({ containerStyle }: { containerStyle: string }) => {
  return (
    <View
      className={`h-14 relative px-4 rounded-lg shadow-md shadow-black bg-white ${containerStyle}`}
      style={{ elevation: 1 }}
    >
      <TouchableOpacity>
        <Image source={icons.search} className="h-5 w-5 absolute top-4" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={icons.filter}
          className="h-5 w-5 absolute top-4 right-3"
        />
      </TouchableOpacity>
      <TextInput
        className=" h-full px-3 self-center w-10/12 rounded-md ps-1"
        placeholder="Search"
      />
    </View>
  );
};

export default SearchComponent;

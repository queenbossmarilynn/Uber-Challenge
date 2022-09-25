import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    title: "Get a Ride",
    image:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/308644163_10160019934271508_3808160012728005975_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=js04mk73YToAX_Wy8U_&_nc_ht=scontent-lax3-2.xx&oh=00_AT_5-nrC-fRx20_aPZIjYwc8abLUhvXBvVVEGxrkmB7mfA&oe=63354C06",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image:
      // "./image/uber-logo.png"
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/307924758_10160019934321508_5218203479819759248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=V8O9TUtGz9YAX8LaKhQ&_nc_ht=scontent-lax3-2.xx&oh=00_AT-0CeTWzT-HMNkhfET1dfb-Cu6AMTTlczZZTaZCGib97w&oe=63352368",
    screen: "EatsScreen", //Change in future...
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            //How do I include an image from the image folder instead from a network?
            // require("./image/uber-logo.png")
            url: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/308640915_10160019847431508_7490683271324553557_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=L4XEKsC_Q3kAX9MmYgU&_nc_oc=AQnnGNcU4PhXNNI0YalA0Rnvpj7C-LDv5rERG2vfv1f9rIXWtsBy4ZL0iaiVWVpdo0GRNMuk30TxAITbP0qzzEle&_nc_ht=scontent-lax3-1.xx&oh=00_AT9VgdKI8JNE42W6Q3WGqzSkbt_hwXvVH4FYaS03_4tFQA&oe=63348A24",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});

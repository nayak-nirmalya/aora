import React from "react";
import { View, Text, FlatList } from "react-native";

const Trending = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text key={item.id} className="text-3xl text-white">
          {item.id}
        </Text>
      )}
    />
  );
};

export default Trending;

import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { SearchInput, EmptyState, VideoCard } from "../../components";

const Search = () => {
  const { query } = useLocalSearchParams();

  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className="text-3xl text-white">{query}</Text>
    </SafeAreaView>
  );
};

export default Search;

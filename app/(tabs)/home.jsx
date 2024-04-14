import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";

import { images } from "../../constants";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 1 }, { id: 1 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text key={item.id} className="text-3xl text-white">
            {item.id}
          </Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="flex-row mb-6 items-start justify-between">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Nirmalya Nayak
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            {/* TODO: Search Component */}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

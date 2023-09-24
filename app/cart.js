import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";

import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";

import { COLORS, SIZES } from "../constants";
import user from "../assets/user.png";


const Cart = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 24, color: '#FF6A00' }}>Pitla</Text>
              <Text style={{ fontSize: 24, color: '#000000' }}>Bhakari</Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Pressable style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 24, color: '#000000', marginRight: 2 }}>मराठी</Text>
              </Pressable>
              <ScreenHeaderBtn iconUrl={user} dimension='100%' />
            </View>
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Cart
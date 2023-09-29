import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { BlurView } from 'expo-blur';

import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";

import { COLORS, SIZES } from "../constants";

import user from "../assets/user.png";
import roti from "../assets/roti.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainSection from "../components/home/mainSection";
import OrderNowModal from "../components/home/orderNow/OrderNowModal";
import Feed from "../components/home/feed/Feed";


const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter()

  const handleCardPress = (item) => {
    router.push(`/cart`);
    setSelectedJob(item.job_id);
  };

  const orderNowClick = () => {

  }

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

      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={{ backgroundColor: '#EAEAEA' }}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Feed />
          <MainSection />
        </View>

      </ScrollView>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ height: 100, display: 'flex', alignItems: 'center', paddingVertical: 20 }}>
        <View style={{ width: '90%', marginBottom: 20, alignSelf: 'center', backgroundColor: '#FF6A00', height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 24 }}>
            Order Now
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ display: `${modalVisible ? 'block' : 'none'}` }}>
        
          <OrderNowModal setModalVisible={setModalVisible} modalVisible={modalVisible} />
    
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  }
})
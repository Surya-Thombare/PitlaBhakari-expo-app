import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity } from 'react-native';

import BackArrow from '../../../assets/backArrow.png';
import Onion from "../../../assets/Onion.png";
import Roti from "../../../assets/roti.png";
import Thecha from "../../../assets/Thecha.png";

const OrderModal = ({ modalVisible, setModalVisible }) => {
  //   const [] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width: '100%',display: 'flex', flexDirection: 'row', top: 2, alignItems: 'center',marginBottom: 10}}>
              <Pressable
                style={{alignSelf: 'flex-start'}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text>
                  <Image 
                    source={BackArrow}
                    resizeMode='contain'
                  />
                </Text>
              </Pressable>
              <Text style={styles.modalText}>The Complete Meal</Text>
            </View>
            <View>
              <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginVertical: 10, gap: 10}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Image source={Roti} />
                  <Text>2</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Image source={Onion} />
                  <Text>2</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Image source={Thecha} />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Image source={Roti} />
                </View>
              </View>
              <View style={{margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                  <Text disabled={true} style={{fontSize: 10, color: 'grey'}}>Price</Text>
                  <Text style={{fontSize: 20}}>{'\u20B9'}150</Text>
                </View>
                <View>
                <Pressable
                  style={[styles.button, styles.buttonOpen, {alignSelf: 'flex-end'}]}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.textStyle}>Pay Now</Text>
                </Pressable> 
                </View>
              </View>
            </View>
          </View>
        </View>

      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 12,
    margin: 5,
    textAlign: 'left'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: '100%',
  },
  modalView: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#FF6A00',
    width: 100
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 23,
    textAlign: 'center',
    marginLeft: 50
  },
});

export default OrderModal;
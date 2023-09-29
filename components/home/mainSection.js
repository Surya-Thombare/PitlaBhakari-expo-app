import React from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native";
import pitlaBhakari from "../../assets/pitlaBhakari.png";
import roti from "../../assets/roti.png";
import Thecha from "../../assets/Thecha.png";
import Onion from "../../assets/Onion.png";
import Pitla from "../../assets/pitla.png";
import { COLORS } from '../../constants';

const MainSection = () => {
  return (
    <View style={{width: 'auto', height: 'auto', alignItems: 'center', backgroundColor: COLORS.lightWhite, borderRadius: 25}}>
        <View style={{width: '100%'}}>
            <Image
                source={pitlaBhakari}
                resizeMode='contain'
                style={{width: '100%', height: 200}}
            />
        </View>
        <View style={{padding: 10}}>

            <View style={{textAlign: 'left', alignSelf: 'flex-start'}}>
                <Text style={{fontSize: 20}}>The Complete Meal</Text>
            </View>
            
            <View style={{marginTop: 10}}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={{fontSize: 20, marginBottom: 10}}>Content</Text>
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={roti} resizeMode='cover' style={{height: 44, marginRight: 5}}/>
                            <Text> Bhakari X 2</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 50}}>
                            <Image source={Thecha} resizeMode='cover' style={{height: 35, marginRight: 5}} />
                            <Text>Thecha</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={Pitla} resizeMode='cover' style={{height: 40, width: 40,marginLeft: 10,  marginRight: 5}}/>
                            <Text> Pitla ( For 1 )</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 50}}>
                        <Image source={Onion} resizeMode='cover' style={{height: 30, width: 35, marginRight: 5}}/>
                        <Text> Onion </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
                <Text style={{fontSize: 20}}>The Complete Meal</Text>
    </View>
  )
}

export default MainSection
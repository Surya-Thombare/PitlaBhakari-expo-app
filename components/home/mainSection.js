import React from 'react'
import { Text, View, TouchableOpacity, Image } from "react-native";
import pitlaBhakari from "../../assets/pitlaBhakari.png";
import roti from "../../assets/roti.png";
import Thecha from "../../assets/Thecha.png";
import Onion from "../../assets/Onion.png";
// import roti from "../../assets/roti.png";
import { COLORS } from '../../constants';

const MainSection = () => {
  return (
    <View style={{width: 'auto', height: 'auto', alignItems: 'center', backgroundColor: COLORS.lightWhite}}>
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
                    <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={roti} resizeMode='cover'/>
                            <Text> Bhakari * 2</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={Thecha} resizeMode='cover'/>
                            <Text> Thecha * 2</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={roti} resizeMode='cover'/>
                            <Text> Onion * 2</Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={Onion} resizeMode='cover'/>
                            <Text> Pitla (For 1)</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* <View style={{textAlign: 'left', alignSelf: 'center'}}> */}
            {/* </View> */}
        </View>
                <Text style={{fontSize: 20}}>The Complete Meal</Text>
    </View>
  )
}

export default MainSection
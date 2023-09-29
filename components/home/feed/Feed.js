import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Feedimg from '../../../assets/Feed.png'
import { COLORS } from '../../../constants';


const Feed = () => {
    return (
        <View style={styles.feedContainer}>
            <Image
                source={Feedimg}
                resizeMode='contain'
                style={styles.feedImg}
            />
            <View style={styles.feedStatus}>
                <Text style={styles.feedStatusText}>Your order is being prepared</Text>
                <View style={styles.statusContainer}>
                    <View style={styles.status}>
                        <Text>
                            Status : {'Preapring'}
                        </Text>
                    </View>
                    <Pressable style={styles.modifyButton}>
                        <Text style={styles.modifyBottomText}>
                            Modify
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Feed

const styles = StyleSheet.create({
    feedContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,

        // margin: 10
    },
    feedImg: {
        height: '100%',
        width: '20%',
    },
    feedStatus: {
        display: 'flex',
        flexDirection: 'column',
    },
    feedStatusText: {
        fontSize: 20,
    },
    statusContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    status: {
        fontSize: 15,
    },
    modifyButton: {
        backgroundColor: '#FFB62A',
        height: 30,
        width: 80,
        borderRadius: 10,
        alignSelf: 'flex-end',
        padding: 'auto'
        
    },
    modifyBottomText: {
        textAlign: 'center',
    }

})
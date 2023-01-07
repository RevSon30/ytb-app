import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';




export default ViewVideo = ({ navigation, route }) => {
    // const { data } = route.params
    const { data } = route.params
    React.useEffect(() => {
        // console.log(data)
    })

    return (
        <SafeAreaView style={{ height: '100%', width: '100%' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>{'back'}</Text>
            </TouchableOpacity>
            <View style={{ height: 220, width: '100%' }}>
                <Video
                    source={data.video}
                    controls={true}
                    repeat={true}
                    resizeMode="contain"
                    paused={false}

                    style={styles.backgroundVideo}
                />
            </View>
            <View style={{ margin: 10 }}>
                <Text numberOfLines={3} style={{ fontSize: 17, fontWeight: '600', lineHeight: 22 }}>{data.title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 12, marginRight: 10, marginTop: 2 }}>{data.total}</Text>
                    <Text>|</Text>
                    <Text style={{ fontSize: 12, marginLeft: 10, marginTop: 2 }}>{data.date}</Text>
                    <Text style={{ fontSize: 12, marginLeft: 10, marginTop: 2, fontWeight: '400' }}>...thêm</Text>
                </View>
                <View style={{ width: '100%', height: 40, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ width: 40, height: '100%', borderRadius: 50 }}
                            source={data.img} />
                        <Text style={{ marginLeft: 10, fontSize: 15, fontWeight: '500' }}>{data.author}</Text>
                        <Text style={{ marginLeft: 10, fontSize: 12, fontWeight: '400' }}>{data.follow}</Text>
                    </View>
                    <View style={{ height: '100%', width: 100, backgroundColor: 'black', borderRadius: 25 }}>
                        <Text style={{ alignItems: 'center', padding: 10, paddingLeft: 25, color: 'white' }}>Đăng ký</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'black', borderRadius: 15 }}>
                    <Icon name="like" style={{ fontSize: 22, marginLeft: 10, marginTop: 7, marginBottom: 7, marginRight: 7, color: 'white' }} />
                    <Text style={{ fontSize: 15, marginLeft: 7, marginTop: 7, marginBottom: 7, marginRight: 7, color: 'white' }}>21N</Text>
                    <Text style={{ fontSize: 10, marginLeft: 7, marginTop: 7, marginBottom: 7, marginRight: 7, color: 'white' }}>|</Text>
                    <Icon name="dislike" style={{ fontSize: 20, marginLeft: 7, marginTop: 7, marginBottom: 7, marginRight: 7, color: 'white' }} />
                </View>

                <View style={{ flexDirection: 'row',marginRight: 10, alignItems: 'center' }}>
                    <View style={{  borderColor: 'red', borderRadius: 8, borderWidth: 1 }}>
                        <Fontisto.Button
                            name="share-a"
                            backgroundColor="black"
                            color='white'
                        >
                            Chia sẻ
                        </Fontisto.Button>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
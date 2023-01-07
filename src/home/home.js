
import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    ScrollView,
    AppState
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMa from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

import song from '../../assets/video/song.mp4';
import song1 from '../../assets/video/song1.mp4';
import song2 from '../../assets/video/song2.mp4';
import song3 from '../../assets/video/song3.mp4';

import image from '../../assets/avatar.png'
import { useDispatch } from "react-redux";
import { setEmail } from "../store/reducers";

const windownWidth = Dimensions.get('window').width;
const windownheight = Dimensions.get('window').height;

export default HomePage = ({ navigation }) => {
    const dispatch = useDispatch();
    const DATA = [
        {
            id: "all",
            title: "Tất cả",
        },
        {
            id: "dskh",
            title: "Danh sách kết hợp",
        },
        {
            id: "tc",
            title: "Trò chơi",
        },
    ];

    const configDataVideo = [
        {
            id: 'vd1',
            video: song,
            title: 'BÊN TRÊN TẦNG LẦU REMIX - NHẠC TRẺ REMIX 2023 HAY NHẤT HIỆN NAY - NONSTOP BÁO THỦ 2023 BASS CỰC CĂNG',
            author: 'Pháp Sư Mix',
            total: '21N lượt xem',
            date: '1 ngày trước',
            img: image,
            follow: '21tr N'
        },
        {
            id: 'vd2',
            video: song1,
            title: '2AM ( LoFi Ver.) - JustaTee × Bigdaddy × ENDerlazer Audio Lyric Video | Nguyễn Chí Tài Official',
            author: 'Pháp Sư Mix',
            total: '21N lượt xem',
            date: '1 ngày trước',
            img: image,
            follow: '21tr N'
        },
        {
            id: 'vd3',
            video: song2,
            title: 'Somewhere Only We Know - Keane Cover by Rhianne (Lyrics)',
            author: 'Pháp Sư Mix',
            total: '21N lượt xem',
            date: '1 ngày trước',
            img: image,
            follow: '21tr N'
        },
        {
            id: 'vd4',
            video: song3,
            title: 'Somewhere Only We Know - Keane Cover by Rhianne (Lyrics)',
            author: 'Top Tik Tok',
            total: '8N lượt xem',
            date: '1 năm trước',
            img: image,
            follow: '21tr N'
        },
    ];

    const handleScroll = function (event) {
        // console.log(event.nativeEvent.contentOffset.y);
        // console.log(event)
    }

    const onGoback=()=>{
        dispatch(setEmail({email:'bbbb'}))
        navigation.goBack()
    }

    return (
        <SafeAreaView style={{ height: '100%', width: '100%', }}>
            <View style={{ backgroundColor: '#eae9e9', width: '100%', height: '7%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#676161' }}>
                <View>
                    <TouchableOpacity style={{ width: '100%', flexDirection: 'row', margin: 10 }}
                        onPress={onGoback}>
                        <Icon name="youtube" size={30} color="red" />
                        <Text style={{ margin: 7 }}>Youtube</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 7 }}>
                    <IconMa style={{ marginRight: 15 }} name="add-to-home-screen" size={20} color="black" />
                    <Ionicons style={{ marginRight: 15 }} name="notifications-outline" size={20} color="black" />
                    <Ionicons style={{ marginRight: 15 }} name="ios-search-outline" size={20} color="black" />
                    <Image style={{ width: 20, height: 20, borderRadius: 25 }} source={require('../../assets/avatar.png')} />
                </View>
            </View>
            <View style={{ backgroundColor: '#eae9e9', width: '100%', height: '5%', flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                <View style={{ marginRight: 10, borderColor: 'red', borderRadius: 8, borderWidth: 1 }}>
                    <Ionicons.Button disabled={true}
                        name="ios-compass-outline"
                        backgroundColor="black"
                        color='white'
                    >
                        Khám phá
                    </Ionicons.Button>
                </View>
                <View
                    style={{ height: '100%', margin: 5, borderColor: '#a19b9b', borderWidth: 1 }}>
                </View>
                <ScrollView style={{ flex: 1 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {DATA.map(item => (
                        <View style={{ borderRadius: 8, alignItems: 'center', justifyContent: 'center' }} key={item.id}>
                            <View style={{ borderColor: 'red', borderWidth: 1, marginLeft: 10, backgroundColor: 'black', padding: 10, borderRadius: 8 }}>
                                <Text style={{ color: 'white' }}>{item.title}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <ScrollView style={{ flex: 1 }} scrollEventThrottle={0} onScroll={handleScroll}>
                {configDataVideo.map(item => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ViewVideo', {data: configDataVideo.find(is => is.id == item.id)});
                    }}>
                        <View key={item.id} >
                            <View style={{ width: '100%', height: 250 }}>
                                <Video source={item.video}
                                    playInBackground={true}
                                    controls={false}
                                    allowsExternalPlayback={true}
                                    repeat={true}
                                    resizeMode="contain"
                                    paused={true}

                                    style={styles.backgroundVideo} />
                            </View>
                            <View style={{ width: '100%', height: 70, flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                                <Image
                                    style={{ width: '10%', height: '50%', borderRadius: 50, margin: 15 }}
                                    source={item.img} />
                                <View style={{ width: '80%', }}>
                                    <Text style={{ fontSize: 14, marginBottom: 5, fontWeight: '600' }} numberOfLines={2}>
                                        {item.title}
                                    </Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ marginRight: 5, fontSize: 11 }}>{item.author}</Text>
                                        <Text style={{ fontSize: 11 }}>|</Text>
                                        <Text style={{ marginRight: 5, marginLeft: 5, fontSize: 11 }}>{item.total}</Text>
                                        <Text style={{ fontSize: 11 }}>|</Text>
                                        <Text style={{ marginRight: 5, marginLeft: 5, fontSize: 11 }}>{item.date}</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
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
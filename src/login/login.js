
import React, { Component,useState } from "react";
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../store/reducers";

const windownWidth = Dimensions.get('window').width;
const windownheight = Dimensions.get('window').height;

export default Login = ({ navigation }) => {
    const {email} = useSelector(state=>state.login)
    const dispatch = useDispatch()

    const _setEmail = (value) => {
        console.log("🚀 ~ file: login.js:28 ~ value", value)
        dispatch(setEmail({email:value}))
    }
    
    return (
        <ImageBackground
            style={{ height: '100%', width: '100%' }}
            source={require('../../assets/login.jpg')}
            resizeMode='stretch'>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={style.emailAndPass}>
                    <View style={style.email}>
                        <Text style={style.textEmail}>Email:</Text>
                        <TextInput value={email} autoCapitalize="none" placeholder="Nhap Email" style={style.inputEmail} onChangeText={_setEmail} />
                    </View>
                    <View style={style.password}>
                        <Text style={style.textPassw}>Password:</Text>
                        <TextInput autoCapitalize="none" secureTextEntry placeholder="Nhap Password" style={style.inputPassw} />
                    </View>
                </View>

                <View style={style.containerButton}>
                    <TouchableOpacity style={style.buttonDN}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}>
                        <Text style={style.btnText}>
                            Đăng nhập
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={style.buttonDK}>
                        <Text style={style.btnText}>
                            Đăng ký
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    emailAndPass: {
        width: '100%',
        height: '20%',
        marginTop: 0.3 * windownheight,
        alignItems: 'center'
    },
    email: {
        width: '70%',
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textEmail: {
        color: 'black'
    },
    inputEmail: {
        width: '70%',
        height: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    password: {
        width: '70%',
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
    },
    textPassw: {
        color: 'black'
    },
    inputPassw: {
        width: '70%',
        height: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingRight: 30
    },
    containerButton: {
        width: '100%',
        height: '20%',
        marginTop: 0.15 * windownheight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDN: {
        width: '60%',
        height: '30%',
        backgroundColor: '#3e9af7',
        borderRadius: 25,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 20,
        color: 'white'
    },
    buttonDK: {
        width: '60%',
        height: '30%',
        borderRadius: 25,
        borderWidth: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#423ed9'
    }
})
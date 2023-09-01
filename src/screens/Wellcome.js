import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Color, Dimension, Font, FontSize, Spacing } from '../constants'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import i18n from '../localization/i18n'
import { useTranslation } from 'react-i18next'

const IMG_BACK = require('../../assets/images/wellcome3.png');

export default function Wellcome() {

    const { t }      = useTranslation();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={style.container}>
            <StatusBar style="light"/>
            <ImageBackground source={IMG_BACK} style={style.image} resizeMode="cover"/>
            <View style={style.contentView}>
                <Text style={style.title}>{t("welcomeTitle")}</Text>
                <Text style={style.subTitle}>{t("welcomeSubTitle")}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <LinearGradient
                        colors={['red', Color.text, 'tomato']}
                        style={style.button}>
                        <Text style={style.buttonText}>{t("welcomeBtnTitle")}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    contentView: {
        padding: Spacing.xLarge,
        alignItems: 'center',
    },
    title: {
        color: Color.white,
        fontSize: FontSize.xxLarge,
        fontFamily: Font.bold
    },
    subTitle: {
        color: Color.white,
        fontSize: FontSize.large,
        fontFamily: Font.bold
    },
    button: {
        padding: Spacing.small,
        marginVertical: Spacing.xsmall,
        width: Dimension.width/2,
        borderRadius: 10
    },
    buttonText: {
        color: Color.white,
        fontSize: FontSize.large,
        fontFamily: Font.bold,
        textAlign: 'center'
    }
})


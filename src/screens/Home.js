import { View, Text,  ScrollView, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Color, Dimension, Font, FontSize, Spacing } from '../constants'
import { Categories, GroupCategory, Destination } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTranslation } from 'react-i18next'

const LANGUAGE_TR = require("../../assets/images/flag/tr.png");
const LANGUAGE_EN = require("../../assets/images/flag/en.png");

export default function Home() {

    const { t, i18n } = useTranslation();

    const changeLanguage = value => {
        i18n
            .changeLanguage(value)
            .then(() => console.log(value))
            .catch(err => console.log(err));
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContent}>
                {/* Custom Header Component */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{t("home1")}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={() => changeLanguage("tr")}>
                            <Image source={LANGUAGE_TR} resizeMode="cover" style={styles.avatar}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeLanguage("en")}>
                            <Image source={LANGUAGE_EN} resizeMode="cover" style={styles.avatar}/>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Search Input Component */}
                <View style={styles.searchView}>
                    <TextInput
                        placeholder={t("home2")}
                        placeholderTextColor={Color.white}
                        style={styles.searchInput}
                    />
                </View>

                {/* Categories Component */}
                <Categories/>

                {/* Group Component */}
                <GroupCategory/>

                {/* Destination Component */}
                <Destination/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    scrollContent: {
        paddingHorizontal: Spacing.xsmall
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 3
    },
    headerTitle: {
        color: Color.dark,
        fontSize: FontSize.xLarge,
        fontFamily: Font.bold
    },
    avatar: {
        width: Dimension.width/15,
        height: Dimension.width/15,
        marginHorizontal: Spacing.xsmall,
        aspectRatio: 1
    },
    searchView: {
        marginVertical: Spacing.medium,
        marginTop: Spacing.xxLarge,
        alignItems: 'center',
    },
    searchInput: {
        borderRadius: Spacing.xxLarge,
        width: Dimension.width/1.5,
        height: 50,
        padding: Spacing.small,
        backgroundColor: Color.text,
        color: Color.white,
        fontSize: FontSize.medium,
        fontFamily: Font.medium
    }
})
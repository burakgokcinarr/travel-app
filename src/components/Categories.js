import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Color, Dimension, Font, FontSize, Spacing } from '../constants';
import { categoriesData } from '../data/index'
import { useTranslation } from 'react-i18next'

export default function Categories() {

    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={styles.sub}>
                <Text style={styles.categoryText}>{t("home3")}</Text>
                <TouchableOpacity>
                    <Text style={styles.allText}>{t("home4")}</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
                horizontal
                contentContainerStyle={{paddingHorizontal: Spacing.xsmall}}
                showsHorizontalScrollIndicator={false}>
                {
                    categoriesData.map((data, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => alert(data.title)}>
                                <View style={styles.card}>
                                    <Image source={data.image} style={styles.image}/>
                                    <Text style={styles.catTitle}>{data.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sub: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryText: {
        color: Color.dark,
        fontSize: FontSize.medium,
        fontFamily: Font.bold
    },
    allText: {
        color: Color.text,
        fontSize: FontSize.medium,
        fontFamily: Font.bold,
        textDecorationLine: 'underline'
    },
    card: {
        marginRight: Spacing.medium,
        marginTop: Spacing.large,
        alignItems: 'center'
    },
    image: {
        width: Dimension.width/5,
        height: Dimension.width/5,
        aspectRatio: 1,
        borderRadius: Spacing.xLarge
    },
    catTitle: {
        color: Color.dark,
        fontSize: FontSize.small,
        fontFamily: Font.regular,
        marginTop: Spacing.xsmall
    }
})
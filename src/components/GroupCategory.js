import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Color, Font, FontSize, Spacing } from '../constants'
import { sortCategoryData } from '../data/index'
import { useTranslation } from 'react-i18next'

export default function GroupCategory() {

    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <View style={styles.container}>
            {
                sortCategoryData.map((data, index) => {
                    let isActive          = index == activeIndex;
                    let activeButtonClass = isActive ? { backgroundColor: Color.text, borderRadius: Spacing.xxLarge, padding: Spacing.xsmall } : '';
                        return (
                            <TouchableOpacity key={index} onPress={() => setActiveIndex(index)} style={[styles.groupView, activeButtonClass]}>
                                <Text style={[styles.title, index == activeIndex ? { color: Color.white } : null]}> {t(data)} </Text>
                            </TouchableOpacity>
                        )
                    })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: Spacing.xxLarge,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: Spacing.xxLarge,
        padding: 5
    },
    groupView: {
        backgroundColor: Color.white,
    },
    title: {
        color: Color.dark,
        fontSize: FontSize.medium,
        fontFamily: Font.medium
    }
})
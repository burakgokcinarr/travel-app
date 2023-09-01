import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Color, Dimension, Font, FontSize, Spacing } from '../constants'
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function DestinationCard({ data }) {

    const navigation    = useNavigation();
    const [fav, setFav] = useState(false);  

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("detail", { selectedItem: data })}>
                <Image
                    source={data.image}
                    style={styles.image}
                    resizeMode="cover"
                    borderRadius={Spacing.xxLarge}
                />
                <Text style={styles.title}>{data.title}</Text>
            </TouchableOpacity>
            <LinearGradient
                colors={[Color.text, "tomato", Color.dark]}
                style={styles.fav}>
                <TouchableOpacity onPress={() => setFav(!fav) }>
                    <MaterialIcons name={fav ? "favorite": "favorite-border"} size={30} color={Color.white } />
                </TouchableOpacity>
            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: Spacing.xsmall 
    },
    image: {
        width: Dimension.width/2.5,
        height: 200,
    },
    title: {
        color: Color.white,
        fontSize: FontSize.large,
        fontFamily: Font.medium,
        position: 'absolute',
        bottom: Spacing.xsmall,
        paddingHorizontal: Spacing.small
    },
    fav: {
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: Spacing.xxLarge,
        padding: 5
    }
})
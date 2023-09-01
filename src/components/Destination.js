import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { destinationData } from '../data/index'
import { MasonryFlashList } from "@shopify/flash-list";
import DestinationCard from './DestinationCard';

export default function Destination() {

    return (
        <View style={styles.container}>
            <MasonryFlashList
                data={destinationData}
                numColumns={2}
                renderItem={({ item }) => <DestinationCard data={item}/>}
                estimatedItemSize={200}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Color, Dimension, Font, FontSize, Spacing } from '../constants';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTranslation } from 'react-i18next'

export default function Detail() {

  const { t }      = useTranslation();
  const navigation = useNavigation();
  const route      = useRoute();
  const item       = route.params.selectedItem;

  return (
    <View style={styles.container}>
      <StatusBar style={'light'} />
      <Image source={item.image} style={styles.bgImage} resizeMode="cover" />
      <SafeAreaView style={styles.headerContainer}>
        <Ionicons name="ios-chevron-back-circle" size={40} color={Color.white} onPress={() => navigation.goBack()} />
        <LinearGradient
                colors={[Color.text, "tomato", Color.dark]}
                style={styles.fav}>
                <TouchableOpacity onPress={() => alert("fav") }>
                  <MaterialIcons name={"favorite-border"} size={40} color={Color.white } />
                </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>

      { /* Detail Card */ }
      <View style={styles.destination}>
        <ScrollView contentContainerStyle={{ padding: Spacing.small }}>
          <View style={styles.titleView}>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.price}> $ {item?.price}</Text>
          </View>
          <Text style={styles.longDesc}>{item?.longDescription}</Text>
          <View style={styles.info}>
            <View>
              <Text style={styles.infoDesc}><Ionicons name="md-time-sharp" size={18} color="purple" />{t("Duration")}</Text>
              <Text style={styles.infoDesc}>{item?.duration}</Text>
            </View>
            <View>
              <Text style={styles.infoDesc}><MaterialCommunityIcons name="weather-cloudy" size={18} color="purple" />{t("Weather")}</Text>
              <Text style={styles.infoDesc}>{item?.weather}</Text>
            </View>
            <View>
              <Text style={styles.infoDesc}><MaterialCommunityIcons name="map-marker-distance" size={18} color="purple" />{t("Distance")}</Text>
              <Text style={styles.infoDesc}>{item?.distance}</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <TouchableOpacity>
        <LinearGradient
            colors={['red', Color.text, 'tomato']}
            style={styles.button}>
            <Text style={styles.buttonText}>{t("buttonText")}</Text>
        </LinearGradient>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: '100%',
    height: '50%',
  },
  headerContainer: {
    left: Spacing.xsmall,
    right: Spacing.xsmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute'
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },  
  destination: {
    flex: 1,
    backgroundColor: Color.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: -Spacing.xxLarge,
  },
  title: {
    color: Color.dark,
    fontSize: FontSize.large,
    fontFamily: Font.bold
  },
  price: {
    color: Color.text,
    fontSize: FontSize.xLarge,
    fontFamily: Font.bold
  },
  longDesc: {
    color: Color.dark,
    fontSize: FontSize.small,
    fontFamily: Font.regular,
    padding: Spacing.xsmall
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.small,
    marginTop: Spacing.xxLarge
  },
  infoDesc: {
    color: Color.dark,
    fontSize: FontSize.medium,
    fontFamily: Font.regular,
    textAlign: 'center'
  },
  button: {
    padding: Spacing.xLarge,
    marginVertical: Spacing.large,
    width: Dimension.width/1.5,
    borderRadius: Spacing.xxLarge,
    alignSelf: 'center',
    marginBottom: Spacing.xxLarge
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: Font.bold,
    textAlign: 'center'
  },
  fav: {
    borderRadius: Spacing.xxLarge,
    padding: 1
  }
})
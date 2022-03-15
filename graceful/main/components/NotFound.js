import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import i18n from 'i18n-js'
import {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne} from '../languages/supportedLanguages'
import * as Localization from 'expo-localization';



i18n.fallbacks = true;
i18n.translations = {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne};
i18n.locale = Localization.locale;

export default function NotFound() {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
    <AntDesign name='frowno' size={90} color='black' />
    <Text style={{marginTop:20, fontSize:20}} >{i18n.t('twentyTwo')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        opacity:0.5,
        zIndex:-1
    }
})
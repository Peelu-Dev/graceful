import { StyleSheet,  TextInput, View } from 'react-native'
import React from 'react'
import colors from '../misc/colors'
import { AntDesign } from '@expo/vector-icons'
import {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne} from '../languages/supportedLanguages'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.fallbacks = true;
i18n.translations = {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne};
i18n.locale = Localization.locale;

export default function SearchBar({containerStyle, value,onClear, onChangeText}) {
  return (
    <View style={[styles.container,{...containerStyle}]}>
      <TextInput value={value} onChangeText={onChangeText} style={styles.searchBar} placeholder={i18n.t('twentyThree')}/>
      {value ? <AntDesign name='close' size={20} color={colors.PRIMARY} onPress={onClear} style={styles.clearIcon} /> : null }
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      justifyContent:'center'
    },
    searchBar:{
        borderWidth:0.5,
        color:colors.PRIMARY,
        height:40,
        borderRadius:40,
        paddingLeft:15,
        fontSize:18
    },
    clearIcon:{
      position:"absolute",
      right:10
    }
})
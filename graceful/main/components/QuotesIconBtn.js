import React from 'react';
import {  StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../misc/colors';



export default function QuotesIconBtn({quotesIcon,size, color, style, onPress}) {
  return (
    <AntDesign
    name={quotesIcon}
    size={size||24}
    color={color || colors.LIGHT}
    style={[styles.joke,{...style}]}
    onPress={onPress}
    />
  )
}

const styles = StyleSheet.create({
    joke: {
        backgroundColor: colors.PRIMARY,
        padding: 15,
        borderRadius: 50,
        elevation: 5,
      },
})
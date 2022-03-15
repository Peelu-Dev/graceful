import React from 'react';
import {  StyleSheet } from 'react-native';
import {  Entypo } from '@expo/vector-icons';
import colors from '../misc/colors';



export default function ShareIconBtn({shareIcon,size, color, style, onPress}) {
  return (
    <Entypo
    name={shareIcon}
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
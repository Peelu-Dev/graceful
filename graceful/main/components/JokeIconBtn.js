import React from 'react';
import {  StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../misc/colors';



export default function JokeIconBtn({newIcon,size, color, style, onPress}) {
  return (
    <Ionicons
    name={newIcon}
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
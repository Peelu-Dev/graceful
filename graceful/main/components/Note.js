import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../misc/colors';

const Note = ({item,onPress}) => {
    const {title,desc} = item;

    const RandomRgb = () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      return `rgb(${red}, ${green}, ${blue})`;
  }

  const width = Dimensions.get('window').width - 40;

  return (
    <TouchableOpacity onPress={onPress} style={{
      backgroundColor:RandomRgb(),
        width:width/2 - 10,
        padding:8,
        borderRadius:10
    }}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.desc} numberOfLines={4}>{desc}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:16,
        color:colors.LIGHT
    },
    desc:{
      color:colors.LIGHT
    }
    
})

export default Note


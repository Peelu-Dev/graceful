import { StyleSheet, Text, View,ScrollView, Alert,  } from 'react-native'
import React, { useState } from 'react'
import {useHeaderHeight} from '@react-navigation/elements'
import colors from '../misc/colors'
import RoundIconBtn from './RoundIconBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNotes } from '../contexts/NoteProvider'
import GratitudeInputModal from './GratitudeInputModal'
import {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne} from '../languages/supportedLanguages'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.fallbacks = true;
i18n.translations = {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne};
i18n.locale = Localization.locale;

const formatDate = ms =>{
    const date = new Date(ms);
    const day = date.getDate();
    const month = date.getMonth() + 1 ;
    const year = date.getFullYear();
    const hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`
}



const  NoteDetails = props=> {
    // const {note} = props.route.params
    const [note,setNote] = useState(props.route.params.note)
    const headerHeight = useHeaderHeight()
    const {setNotes} = useNotes()
    const [showModel,setShowModel] = useState(false)
    const [isEdit,setIsEdit] = useState(false)

    const deleteNote = async () => {
        const result = await AsyncStorage.getItem('notes');
        let notes = [];
        if (result !== null) notes = JSON.parse(result);
    
        const newNotes = notes.filter(n => n.id !== note.id);
        setNotes(newNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
        props.navigation.goBack();
      };

    const displayDeleteAlert = ()=>{
        Alert.alert(i18n.t('sixteenth'), i18n.t('seventeenth'),[
            {
                text:i18n.t('eighteenth'),
                onPress : deleteNote
            },
            {
                text: i18n.t('nineteenth'),
                // onPress:()=> console.log('no thanks')
            },
    
        ],{
            cancelable:true
        })
    }

    const handleUpdate = async(title,desc,time)=>{
       const result= await AsyncStorage.getItem('notes')
       let notes = [];
       if(result !== null) notes = JSON.parse(result)

       const newNotes = notes.filter(n=>{
        if (n.id == note.id){
        n.title = title
        n.desc = desc
        n.isUpdated = true
        n.time = time

        setNote(n)
        }
        return n;
       })
       setNotes(newNotes)
       await AsyncStorage.setItem('notes', JSON.stringify(newNotes))
    }
    const handleOnClose = () => setShowModel(false)

    const openEditModal = ()=>{
        setIsEdit(true)
        setShowModel(true)
    }
   
  return (
      <>
    <ScrollView contentContainerStyle={[styles.container, {paddingTop:headerHeight}]} >
       <Text style={styles.time}>{note.isUpdated ? `${i18n.t('twenty')} ${formatDate(note.time)}` : `${i18n.t('twentyOne')} ${formatDate(note.time)}`}</Text> 
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.desc} >{note.desc}</Text>
    </ScrollView>
    <View style={styles.btnContainer}>
          <RoundIconBtn antIconName='delete' style={{backgroundColor:colors.ERROR, marginBottom:15}}
          onPress={displayDeleteAlert}  />
          <RoundIconBtn antIconName='edit' onPress={openEditModal} />
      </View>
      <GratitudeInputModal
      isEdit={isEdit}
      note={note}
      onClose={handleOnClose}
      onSubmit={handleUpdate}
      visible={showModel}
      />
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        paddingHorizontal:15
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:colors.PRIMARY
    },
    desc:{
        fontSize:20,
        opacity:0.6
    },
    time:{
        textAlign:"right",
        fontSize:12,
        opacity:0.5
    },
    btnContainer:{
        position:'absolute',
        right:0,
        bottom:50
    }
})

export default NoteDetails
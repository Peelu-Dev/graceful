import { Keyboard, Modal,  StyleSheet,  TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../misc/colors'
import RoundIconBtn from './RoundIconBtn';
import i18n from 'i18n-js';
import {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne} from '../languages/supportedLanguages';
import * as Localization from 'expo-localization';

i18n.fallbacks = true;
i18n.translations = {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne };
i18n.locale = Localization.locale;



export default function GratitudeInputModal({visible,onClose, onSubmit, isEdit, note}) {
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');
    const handleModalClose = ()=>{
        Keyboard.dismiss();
    };

    useEffect(()=>{
        if(isEdit){
            setTitle(note.title)
            setDesc(note.desc)
        }
    },[isEdit])

    const handleSubmit = ()=>{
        if( !title.trim() && !desc.trim()) return onClose() 

        if(isEdit){
        onSubmit(title,desc,Date.now())  
        }else{
        onSubmit(title,desc);
        setTitle('');
        setDesc('');
        }
        onClose();
    };

    const closeModal = ()=>{
        if(!isEdit){
        setTitle('');
        setDesc('');
        }
        onClose();
    }

    const handleOnChangeText = (text,valueFor)=>{
        if(valueFor==='title') setTitle(text);
        if(valueFor==='desc') setDesc(text);
    };
 
  return(
    <>
   
    <Modal visible={visible} animationType='fade' >
       <View>
       <TextInput
       value={title}
       onChangeText={(text)=>handleOnChangeText(text,'title')}
        placeholder={i18n.t('tenth')}
          style={[styles.input,styles.title]}
          />
       <TextInput
       value={desc}
       multiline
        placeholder={i18n.t('thirteenth')}
         style={[styles.input,styles.desc]}
         onChangeText={(text)=>handleOnChangeText(text,'desc')}
         />
         <View style={styles.btnContainter} >
             <RoundIconBtn 
             size={15}
              antIconName='check'
               onPress={handleSubmit}
               />
             { title.trim() || desc.trim()?(  
             <RoundIconBtn 
             size={15} 
             style={{marginLeft:15}} 
             antIconName='close'
             onPress={closeModal}
              />):null}
         </View>
       </View>
       <TouchableWithoutFeedback onPress={handleModalClose}>
           <View style={[styles.modalBg,StyleSheet.absoluteFillObject]}/>
       </TouchableWithoutFeedback>
   </Modal>
   </>
  )
}

const styles = StyleSheet.create({
    container:{
    paddingHorizontal:20,
    paddingTop:15,
    },
    input:{
    borderBottomWidth:1,
    borderBottomColor:colors.PRIMARY,
    fontSize:20,
    color:colors.DARK,
    },
    title:{
    height:45,
    marginBottom:10,
    fontWeight:'bold'
    },
    desc:{
    height:100,
 

    },
    modalBg:{
     flex:1,
     zIndex:-1
    },
    btnContainter:{
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:15
    }
})
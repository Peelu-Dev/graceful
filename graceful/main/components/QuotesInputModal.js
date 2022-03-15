import React, { useEffect, useState } from "react"
import { View, Text, Modal, TouchableOpacity,StatusBar } from 'react-native'
import {AntDesign,FontAwesome5} from '@expo/vector-icons'
import {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne} from '../languages/supportedLanguages'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';



i18n.fallbacks = true;
i18n.translations = {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne};
i18n.locale = Localization.locale;


var quotes = [
  
    <Text>{i18n.t('quotes1')}</Text>,
    <Text>{i18n.t('quotes2')}</Text>,
    <Text>{i18n.t('quotes3')}</Text>,
    <Text>{i18n.t('quotes4')}</Text>,
    <Text>{i18n.t('quotes5')}</Text>,
    <Text>{i18n.t('quotes6')}</Text>,
    <Text>{i18n.t('quotes7')}</Text>,
    <Text>{i18n.t('quotes8')}</Text>,
    <Text>{i18n.t('quotes9')}</Text>,
    <Text>{i18n.t('quotes10')}</Text>,
    <Text>{i18n.t('quotes11')}</Text>,
    <Text>{i18n.t('quotes12')}</Text>,
    <Text>{i18n.t('quotes13')}</Text>,
    <Text>{i18n.t('quotes14')}</Text>,
    <Text>{i18n.t('quotes15')}</Text>,
    <Text>{i18n.t('quotes16')}</Text>,
    <Text>{i18n.t('quotes17')}</Text>,
    <Text>{i18n.t('quotes18')}</Text>,
    <Text>{i18n.t('quotes19')}</Text>,
    <Text>{i18n.t('quotes20')}</Text>,
    <Text>{i18n.t('quotes21')}</Text>,
    <Text>{i18n.t('quotes22')}</Text>,
    <Text>{i18n.t('quotes23')}</Text>,
    <Text>{i18n.t('quotes24')}</Text>,
    <Text>{i18n.t('quotes25')}</Text>,
    <Text>{i18n.t('quotes26')}</Text>,
    <Text>{i18n.t('quotes27')}</Text>,
    <Text>{i18n.t('quotes28')}</Text>,
    <Text>{i18n.t('quotes29')}</Text>,
    <Text>{i18n.t('quotes30')}</Text>,
    <Text>{i18n.t('quotes31')}</Text>,
    <Text>{i18n.t('quotes32')}</Text>,
    <Text>{i18n.t('quotes33')}</Text>,
    <Text>{i18n.t('quotes34')}</Text>,
    <Text>{i18n.t('quotes35')}</Text>,
    <Text>{i18n.t('quotes36')}</Text>,
    <Text>{i18n.t('quotes37')}</Text>,
    <Text>{i18n.t('quotes38')}</Text>,
    <Text>{i18n.t('quotes39')}</Text>,
    <Text>{i18n.t('quotes40')}</Text>,
    <Text>{i18n.t('quotes41')}</Text>,
    <Text>{i18n.t('quotes42')}</Text>,
    <Text>{i18n.t('quotes43')}</Text>,
    <Text>{i18n.t('quotes44')}</Text>,
    <Text>{i18n.t('quotes45')}</Text>,
    <Text>{i18n.t('quotes46')}</Text>,
    <Text>{i18n.t('quotes47')}</Text>,
    <Text>{i18n.t('quotes48')}</Text>,
    <Text>{i18n.t('quotes49')}</Text>,
    <Text>{i18n.t('quotes50')}</Text>,
    <Text>{i18n.t('quotes51')}</Text>,
    <Text>{i18n.t('quotes52')}</Text>,
    <Text>{i18n.t('quotes53')}</Text>,
    <Text>{i18n.t('quotes54')}</Text>,
    <Text>{i18n.t('quotes55')}</Text>,
    <Text>{i18n.t('quotes56')}</Text>,
    <Text>{i18n.t('quotes57')}</Text>,
    <Text>{i18n.t('quotes58')}</Text>,
    <Text>{i18n.t('quotes59')}</Text>,
    <Text>{i18n.t('quotes60')}</Text>,
    <Text>{i18n.t('quotes61')}</Text>,
    <Text>{i18n.t('quotes62')}</Text>,
    <Text>{i18n.t('quotes63')}</Text>,
    <Text>{i18n.t('quotes64')}</Text>,
    <Text>{i18n.t('quotes65')}</Text>,
    <Text>{i18n.t('quotes66')}</Text>,
    <Text>{i18n.t('quotes67')}</Text>,
    <Text>{i18n.t('quotes68')}</Text>,
    <Text>{i18n.t('quotes69')}</Text>,
    <Text>{i18n.t('quotes70')}</Text>,
    <Text>{i18n.t('quotes71')}</Text>,
    <Text>{i18n.t('quotes72')}</Text>,
    <Text>{i18n.t('quotes73')}</Text>,
    <Text>{i18n.t('quotes74')}</Text>,
    <Text>{i18n.t('quotes75')}</Text>,
    <Text>{i18n.t('quotes76')}</Text>,
    <Text>{i18n.t('quotes77')}</Text>,
    <Text>{i18n.t('quotes78')}</Text>,
    <Text>{i18n.t('quotes79')}</Text>,
    <Text>{i18n.t('quotes80')}</Text>,
    <Text>{i18n.t('quotes81')}</Text>,
    <Text>{i18n.t('quotes82')}</Text>,
    <Text>{i18n.t('quotes83')}</Text>,
    <Text>{i18n.t('quotes84')}</Text>,
    <Text>{i18n.t('quotes85')}</Text>,
    <Text>{i18n.t('quotes86')}</Text>,
    <Text>{i18n.t('quotes87')}</Text>,
    <Text>{i18n.t('quotes88')}</Text>,
    <Text>{i18n.t('quotes89')}</Text>,
    <Text>{i18n.t('quotes90')}</Text>,
    <Text>{i18n.t('quotes91')}</Text>,
    <Text>{i18n.t('quotes92')}</Text>,
    <Text>{i18n.t('quotes93')}</Text>,
    <Text>{i18n.t('quotes94')}</Text>,
    <Text>{i18n.t('quotes95')}</Text>,
    <Text>{i18n.t('quotes96')}</Text>,
    <Text>{i18n.t('quotes97')}</Text>,
    <Text>{i18n.t('quotes98')}</Text>,
    <Text>{i18n.t('quotes99')}</Text>,
    <Text>{i18n.t('quotes100')}</Text>,


    
    
];

// var authors = [
//     <Text>{i18n.t('author1')}</Text>,
//     <Text>{i18n.t('author2')}</Text>,
//     <Text>{i18n.t('author3')}</Text>,
//     <Text>{i18n.t('author4')}</Text>,
//     <Text>{i18n.t('author5')}</Text>,
//     <Text>{i18n.t('author6')}</Text>,
//     <Text>{i18n.t('author7')}</Text>,
//     <Text>{i18n.t('author8')}</Text>,
//     <Text>{i18n.t('author9')}</Text>,
//     <Text>{i18n.t('author10')}</Text>,
//     <Text>{i18n.t('author11')}</Text>,
//     <Text>{i18n.t('author12')}</Text>,
//     <Text>{i18n.t('author13')}</Text>,
//     <Text>{i18n.t('author14')}</Text>,
//     <Text>{i18n.t('author15')}</Text>,
//     <Text>{i18n.t('author16')}</Text>,
//     <Text>{i18n.t('author17')}</Text>,
//     <Text>{i18n.t('author18')}</Text>,
//     <Text>{i18n.t('author19')}</Text>,
//     <Text>{i18n.t('author20')}</Text>,
//     <Text>{i18n.t('author21')}</Text>,
//     <Text>{i18n.t('author22')}</Text>,
//     <Text>{i18n.t('author23')}</Text>,
//     <Text>{i18n.t('author24')}</Text>,
//     <Text>{i18n.t('author25')}</Text>,
//     <Text>{i18n.t('author26')}</Text>,
//     <Text>{i18n.t('author27')}</Text>,
//     <Text>{i18n.t('author28')}</Text>,
//     <Text>{i18n.t('author29')}</Text>,
//     <Text>{i18n.t('author30')}</Text>,
//     <Text>{i18n.t('author31')}</Text>,
//     <Text>{i18n.t('author32')}</Text>,
//     <Text>{i18n.t('author33')}</Text>,
//     <Text>{i18n.t('author34')}</Text>,
//     <Text>{i18n.t('author35')}</Text>,
//     <Text>{i18n.t('author36')}</Text>,
//     <Text>{i18n.t('author37')}</Text>,
//     <Text>{i18n.t('author38')}</Text>,
//     <Text>{i18n.t('author39')}</Text>,
//     <Text>{i18n.t('author40')}</Text>,
//     <Text>{i18n.t('author41')}</Text>,
//     <Text>{i18n.t('author42')}</Text>,
//     <Text>{i18n.t('author43')}</Text>,
//     <Text>{i18n.t('author44')}</Text>,
//     <Text>{i18n.t('author45')}</Text>,
//     <Text>{i18n.t('author46')}</Text>,
//     <Text>{i18n.t('author47')}</Text>,
//     <Text>{i18n.t('author48')}</Text>,
//     <Text>{i18n.t('author49')}</Text>,
//     <Text>{i18n.t('author50')}</Text>,
//     <Text>{i18n.t('author51')}</Text>,
//     <Text>{i18n.t('author52')}</Text>,
//     <Text>{i18n.t('author53')}</Text>,
//     <Text>{i18n.t('author54')}</Text>,
//     <Text>{i18n.t('author55')}</Text>,
//     <Text>{i18n.t('author56')}</Text>,
//     <Text>{i18n.t('author57')}</Text>,
//     <Text>{i18n.t('author58')}</Text>,
//     <Text>{i18n.t('author59')}</Text>,
//     <Text>{i18n.t('author60')}</Text>,
//     <Text>{i18n.t('author61')}</Text>,
//     <Text>{i18n.t('author62')}</Text>,
//     <Text>{i18n.t('author63')}</Text>,
//     <Text>{i18n.t('author64')}</Text>,
//     <Text>{i18n.t('author65')}</Text>,
//     <Text>{i18n.t('author66')}</Text>,
//     <Text>{i18n.t('author67')}</Text>,
//     <Text>{i18n.t('author68')}</Text>,
//     <Text>{i18n.t('author69')}</Text>,
//     <Text>{i18n.t('author70')}</Text>,
//     <Text>{i18n.t('author71')}</Text>,
//     <Text>{i18n.t('author71')}</Text>,
//     <Text>{i18n.t('author73')}</Text>,
//     <Text>{i18n.t('author74')}</Text>,
//     <Text>{i18n.t('author75')}</Text>,
//     <Text>{i18n.t('author76')}</Text>,
//     <Text>{i18n.t('author77')}</Text>,
//     <Text>{i18n.t('author78')}</Text>,
//     <Text>{i18n.t('author79')}</Text>,
//     <Text>{i18n.t('author80')}</Text>,
//     <Text>{i18n.t('author81')}</Text>,
//     <Text>{i18n.t('author82')}</Text>,
//     <Text>{i18n.t('author83')}</Text>,
//     <Text>{i18n.t('author84')}</Text>,
//     <Text>{i18n.t('author85')}</Text>,
//     <Text>{i18n.t('author86')}</Text>,
//     <Text>{i18n.t('author87')}</Text>,
//     <Text>{i18n.t('author88')}</Text>,
//     <Text>{i18n.t('author89')}</Text>,
//     <Text>{i18n.t('author90')}</Text>,
//     <Text>{i18n.t('author91')}</Text>,
//     <Text>{i18n.t('author92')}</Text>,
//     <Text>{i18n.t('author93')}</Text>,
//     <Text>{i18n.t('author94')}</Text>,
//     <Text>{i18n.t('author95')}</Text>,
//     <Text>{i18n.t('author96')}</Text>,
//     <Text>{i18n.t('author97')}</Text>,
//     <Text>{i18n.t('author98')}</Text>,
//     <Text>{i18n.t('author99')}</Text>,
//     <Text>{i18n.t('author100')}</Text>,
// ]




export default function QuotesScreen({ visible,onClose}) {
    const [quote, setQuotes] = useState('Loading...');
    // const [author,setAuthor] = useState('Loading')

 
    const RandomRgb = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`;
    }

    const randomQuotes = ()=> {
         const res =  <Text>{quotes[Math.floor(Math.random() * quotes.length)]}</Text>
        //  const Author = <Text>{authors[Math.floor(Math.random() * authors.length)]}</Text>
        //  const newAuthor = Author
         const result = res
         setQuotes(result)
        //  setAuthor(newAuthor)
      }
    const submit = () => {
        return onClose()
    
    }

  

    useEffect(()=>{
        randomQuotes();
    },[]);
    
    return (
        <>
        <Modal visible={visible} animationType='fade' >
        <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: RandomRgb(),
      }}>
        <StatusBar barStyle="light-content" />
      <View
        style={{
          width: '90%',
          backgroundColor: '#fff',
          borderRadius: 20,
          padding: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '600',
            color: '#333',
            marginBottom: 20,
          }}>
          {i18n.t('fourteenth')}
        </Text>
        <FontAwesome5
          name='quote-left'
          style={{fontSize: 20, marginBottom: -12}}
          color="#000"
        />
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}>
          {quote}
        </Text>
        <FontAwesome5
          name='quote-right'
          style={{
            fontSize: 20,
            textAlign: 'right',
            marginTop: -20,
            marginBottom: 20,
          }}
          color="#000"
        />
        <TouchableOpacity
          onPress={randomQuotes}
          style={{
            backgroundColor: 'rgba(83, 114, 240, 0.7)',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20,
          }}>
          <Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
            {i18n.t('fifteenth')}
          </Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={submit}>
    <AntDesign name="back" size={40} />
    </TouchableOpacity> 
        </View>
      </View>
     </Modal>
        </>
    )
}




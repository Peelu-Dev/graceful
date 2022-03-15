import React, { useEffect, useState } from "react"
import { View, Text, Modal, TouchableOpacity,StatusBar } from 'react-native'
import {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne} from '../languages/supportedLanguages'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { AntDesign } from "@expo/vector-icons";







i18n.fallbacks = true;
i18n.translations = {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne};
i18n.locale = Localization.locale;





export default function JokesScreen({ visible,onClose}) {

   
 

    const [joke, setJoke] = useState('Loading...');
    // const [joker,setButton] = useState('Loading')


    const jokes = [
        <Text>{i18n.t('joke1')}</Text>,
        <Text>{i18n.t('joke2')}</Text> ,
        <Text>{i18n.t('joke4')}</Text>,
        <Text>{i18n.t('joke5')}</Text>,
        <Text>{i18n.t('joke6')}</Text>,
        <Text>{i18n.t('joke7')}</Text>,
        <Text>{i18n.t('joke8')}</Text>,
        <Text>{i18n.t('joke9')}</Text>,
        <Text>{i18n.t('joke10')}</Text>,
        <Text>{i18n.t('joke11')}</Text>,
        <Text>{i18n.t('joke12')}</Text>,
        <Text>{i18n.t('joke13')}</Text>,
        <Text>{i18n.t('joke14')}</Text>,
        <Text>{i18n.t('joke15')}</Text>,
        <Text>{i18n.t('joke16')}</Text>,
        <Text>{i18n.t('joke17')}</Text>,
        <Text>{i18n.t('joke18')}</Text>,
        <Text>{i18n.t('joke19')}</Text>,
        <Text>{i18n.t('joke20')}</Text>,
        <Text>{i18n.t('joke21')}</Text>,
        <Text>{i18n.t('joke22')}</Text>,
        <Text>{i18n.t('joke23')}</Text>,
        <Text>{i18n.t('joke24')}</Text>,
        <Text>{i18n.t('joke25')}</Text>,
        <Text>{i18n.t('joke26')}</Text>,
        <Text>{i18n.t('joke27')}</Text>,
        <Text>{i18n.t('joke28')}</Text>,
        <Text>{i18n.t('joke29')}</Text>,
        <Text>{i18n.t('joke30')}</Text>,
        <Text>{i18n.t('joke31')}</Text>,
        <Text>{i18n.t('joke32')}</Text>,
        <Text>{i18n.t('joke33')}</Text>,
        <Text>{i18n.t('joke34')}</Text>,
        <Text>{i18n.t('joke35')}</Text>,
        <Text>{i18n.t('joke36')}</Text>,
        <Text>{i18n.t('joke37')}</Text>,
        <Text>{i18n.t('joke38')}</Text>,
        <Text>{i18n.t('joke39')}</Text>,
        <Text>{i18n.t('joke40')}</Text>,
        <Text>{i18n.t('joke41')}</Text>,
        <Text>{i18n.t('joke42')}</Text>,
        <Text>{i18n.t('joke43')}</Text>,
        <Text>{i18n.t('joke44')}</Text>,
        <Text>{i18n.t('joke45')}</Text>,
        <Text>{i18n.t('joke46')}</Text>,
        <Text>{i18n.t('joke46')}</Text>,
        <Text>{i18n.t('joke48')}</Text>,
        <Text>{i18n.t('joke49')}</Text>,
        <Text>{i18n.t('joke50')}</Text>,
        <Text>{i18n.t('joke51')}</Text>,
        <Text>{i18n.t('joke52')}</Text>,
        <Text>{i18n.t('joke53')}</Text>,
        <Text>{i18n.t('joke54')}</Text>,
        <Text>{i18n.t('joke55')}</Text>,
        <Text>{i18n.t('joke56')}</Text>,
        <Text>{i18n.t('joke57')}</Text>,
        <Text>{i18n.t('joke58')}</Text>,
        <Text>{i18n.t('joke59')}</Text>,
        <Text>{i18n.t('joke60')}</Text>,
        <Text>{i18n.t('joke61')}</Text>,
        <Text>{i18n.t('joke62')}</Text>,
        <Text>{i18n.t('joke63')}</Text>,
        <Text>{i18n.t('joke64')}</Text>,
        <Text>{i18n.t('joke65')}</Text>,
        <Text>{i18n.t('joke66')}</Text>,
        <Text>{i18n.t('joke67')}</Text>,
        <Text>{i18n.t('joke68')}</Text>,
        <Text>{i18n.t('joke69')}</Text>,
        <Text>{i18n.t('joke70')}</Text>,
        <Text>{i18n.t('joke71')}</Text>,
        <Text>{i18n.t('joke72')}</Text>,
        <Text>{i18n.t('joke73')}</Text>,
        <Text>{i18n.t('joke74')}</Text>,
        <Text>{i18n.t('joke75')}</Text>,
        <Text>{i18n.t('joke76')}</Text>,
        <Text>{i18n.t('joke77')}</Text>,
        <Text>{i18n.t('joke78')}</Text>,
        <Text>{i18n.t('joke79')}</Text>,
        <Text>{i18n.t('joke80')}</Text>,
        <Text>{i18n.t('joke81')}</Text>,
        <Text>{i18n.t('joke82')}</Text>,
        <Text>{i18n.t('joke83')}</Text>,
        <Text>{i18n.t('joke84')}</Text>,
        <Text>{i18n.t('joke85')}</Text>,
        <Text>{i18n.t('joke86')}</Text>,
        <Text>{i18n.t('joke87')}</Text>,
        <Text>{i18n.t('joke88')}</Text>,
        <Text>{i18n.t('joke89')}</Text>,
        <Text>{i18n.t('joke90')}</Text>,
        <Text>{i18n.t('joke91')}</Text>,
        <Text>{i18n.t('joke92')}</Text>,
        <Text>{i18n.t('joke93')}</Text>,
        <Text>{i18n.t('joke94')}</Text>,
        <Text>{i18n.t('joke95')}</Text>,
        <Text>{i18n.t('joke96')}</Text>,
        <Text>{i18n.t('joke97')}</Text>,
        <Text>{i18n.t('joke98')}</Text>,
        <Text>{i18n.t('joke99')}</Text>,
        <Text>{i18n.t('joke100')}</Text>,
            
    ];

   
    

  
  


    const RandomRgb = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`;
    }

    const randomJoke = ()=> {
         const res =  <Text>{jokes[Math.floor(Math.random() * jokes.length)]}</Text>
         const result = res
         setJoke(result)
      }
    const submit = () => {
        return onClose()
    
    }

  

    useEffect(()=>{
        randomJoke();
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
         color: '#000',
         fontSize: 16,
         lineHeight: 26,
         letterSpacing: 1.1,
         fontWeight: '400',
         textAlign: 'center',
         marginBottom: 10,
         paddingHorizontal: 30,
       }}>
       <Text>{joke} </Text> 
     </Text>
     <TouchableOpacity
    onPress={randomJoke}
    style={{
    backgroundColor:  'rgba(83, 114, 240, 1)',
  padding: 20,
  borderRadius: 30,
  marginVertical: 20,
}}>
<Text style={{color: '#fff', fontSize: 18, textAlign: 'center'}}>
{i18n.t('twelveth')}
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





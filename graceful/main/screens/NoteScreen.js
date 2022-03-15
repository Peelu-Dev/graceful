import { StatusBar, StyleSheet, Text, TouchableWithoutFeedback,Share, View,Keyboard, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../misc/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SearchBar from '../components/SearchBar';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne} from '../languages/supportedLanguages'
import RoundIconBtn from '../components/RoundIconBtn';
import JokeIconBtn from '../components/JokeIconBtn';
// import NoteInputModal from '../components/NoteInputModal';
import JokesScreen from '../components/JokeInputModal';
import GratitudeInputModal from '../components/GratitudeInputModal';
import Note from '../components/Note';
import { useNotes } from '../contexts/NoteProvider';
import NotFound from '../components/NotFound';
import QuotesIconBtn from '../components/QuotesIconBtn';
import QuotesScreen from '../components/QuotesInputModal';
import ShareIconBtn from '../components/ShareIconBtn';
import LinkingSettings from 'react-native-linking-settings'




i18n.fallbacks = true;
i18n.translations = {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne };
i18n.locale = Localization.locale;

const reverseData = data =>{
    return data.sort((a,b) =>  {
    const aInt = parseInt(a.time);
    const bInt = parseInt(b.time);
    if(aInt<bInt) return 1;
    if(aInt==bInt) return 0;
    if(aInt>bInt) return -1
    })
}


export default function NoteScreen({user,navigation}) {
    const [greet,setGreet] = useState('');
    // const [modalVisible,setModalVisible] = useState(false);
    const [gratitudeVisible,setGratitudeVisible] = useState(false)
    const [jokeVisible,setJokeVisible] = useState(false);
    const [quotesVisible, setQuotesVisible] = useState(false)
    const [searchQuery,setSearchQuery] = useState('')
    const {notes,setNotes,findNotes} = useNotes()
    const [resultNotFound,setResultNotFound] = useState(false)


    const onShare = async () => {
        try {
          const result = await Share.share({
            message:   "Feel Grateful with Graceful.Share and Download the app now,AppLink:https://play.google.com/store/apps/details?id=com.graceful",
            url:"https://play.google.com/store/apps/details?id=com.graceful"
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      }   

   

    const findGreet = ()=>{
        const hrs = new Date().getHours();
        if(hrs===0 || hrs<12) return setGreet(i18n.t('third'))
        else if (hrs===12 || hrs<17) return setGreet(i18n.t('fourth'))
        else if (hrs===17 || hrs<19) return setGreet(i18n.t('fifth'))
        setGreet(i18n.t('sixth'));
    };

    const RandomRgb = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`;
    }

  //  const handleOnSubmit = (onPress)=>{
  //   AsyncStorage.removeItem(),
  //   onPress = alert(i18n.t('seventh'))
  //  };



   const handleOnGrateful = async(title,desc)=>{
    const note = {id: Date.now(),title,desc,time:Date.now()}
    const updatedNotes = [...notes,note];
    setNotes(updatedNotes);
    await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes))
   };

    

    useEffect(()=>{
        findGreet();
    },[])

    const reverseNotes = reverseData(notes)

    const openNote = (note)=>{
        navigation.navigate('NoteDetails', {note})
    }

    const handleOnSearchInput = async (text)=>{
        setSearchQuery(text)
        if(!text.trim()){
            setSearchQuery('')
            setResultNotFound(false)
            return await findNotes()
        }
        const filteredNotes = notes.filter(
            note=>{
                if(note.title.toLowerCase().includes(text.toLowerCase())){
                    return note;
                }
            })
            if(filteredNotes.length){
                setNotes([...filteredNotes])
            }else{
                setResultNotFound(true)
            }
    }

    const handleOnClear = async()=>{
        setSearchQuery('')
        setResultNotFound(false)
        await findNotes()
    }

    const language = ()=>{
        if(Platform.OS=='android'){
          LinkingSettings.openSettings('LOCALE_SETTINGS');
        }else{
          LinkingSettings.openSettings('SETTINGS');
        }
      }

  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT}/>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <Text style={{
             fontSize:25,
             fontWeight:'bold',
             color:RandomRgb()
        }}>{`${i18n.t('eighth')} ${greet} ${user.name} `}</Text> 
        {
            notes.length ?(
                <SearchBar value={searchQuery} onChangeText={handleOnSearchInput} containerStyle={{marginVertical:15}} onClear={handleOnClear} />
            )
        :null}

        {resultNotFound ? <NotFound/> :  <FlatList data={reverseNotes} 
       numColumns={2} 
       columnWrapperStyle={{justifyContent:"space-between", marginBottom:15}}
       keyExtractor={item => item.id.toString()}
       renderItem ={({item})=> <Note onPress={()=> openNote(item)} item={item} 
       />} /> }
        
       {!notes.length ? (
            <View style={[StyleSheet.absoluteFillObject,styles.emptyHeaderContainer]}>
       <Text style={styles.emptyHeader}>{i18n.t('ninth')}</Text>
          </View> )
           :null}

    <JokeIconBtn 
    onPress={()=> setJokeVisible(true)}
    newIcon='happy'
    style={styles.jokeBtn}
    />  

    <QuotesIconBtn
    onPress={()=> setQuotesVisible(true)}
    quotesIcon='infocirlce'
    style={styles.quotesBtn}
    />

    <ShareIconBtn
    onPress={onShare}
    shareIcon='share'
    style={styles.shareBtn}
    />
    <ShareIconBtn
    shareIcon='language'
    onPress={language}
    style={styles.languageBtn}
    />
    </View>
    </TouchableWithoutFeedback>



   

    <RoundIconBtn
           onPress={()=> setGratitudeVisible(true)}
           antIconName='pluscircle'
           style={styles.gratitudeBtn}
           />
    {/* <RoundIconBtn 
          onPress={()=> setModalVisible(true)}
          antIconName='plus' 
           style={styles.addBtn}  /> */}
           
          
    {/* <NoteInputModal 
    visible={modalVisible} 
    onClose={()=> setModalVisible(false)}
    onSubmit={handleOnSubmit}
     /> */}
     <GratitudeInputModal
     visible={gratitudeVisible}
     onClose={()=> setGratitudeVisible(false)}
     onSubmit={handleOnGrateful}
     />
      <JokesScreen
     visible={jokeVisible}
     onClose={()=>setJokeVisible(false)}
     />
     <QuotesScreen
     visible={quotesVisible}
     onClose={()=> setQuotesVisible(false)}
     />
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        flex:1,
        zIndex:1,
    },
    emptyHeader:{
    fontSize:30,
    textTransform:'uppercase',
    fontWeight:'bold',
    opacity:0.4
    },
    emptyHeaderContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        zIndex:-1
    },
    addBtn:{
    position:'absolute',
    right:0,
    bottom:50,
    zIndex:1
    },
    gratitudeBtn:{
        position:'absolute',
        right:0,
        bottom:190,
        zIndex:1
    },
    jokeBtn:{
        position:'absolute',
        right:0,
        bottom:120,
        },
   quotesBtn:{
       position:'absolute',
       right:0,
       bottom:260
   },
   shareBtn:{
       position:"absolute",
       right:0,
       bottom:330
   },
  languageBtn:{
    position:'absolute',
    right:0,
    bottom:400
  }
      
})
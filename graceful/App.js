import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{ useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Intro from './main/screens/Intro';
import NoteScreen from './main/screens/NoteScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import NoteDetails from './main/components/NoteDetails';
import {NavigationContainer} from '@react-navigation/native'
import NoteProvider from './main/contexts/NoteProvider';
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator()

export default function App() {
  const [user,setUser] = useState({})
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false)
  const findUser = async ()=>{
    const result = await AsyncStorage.getItem('user');

    if(result === null) return setIsAppFirstTimeOpen(true)
    
      setUser(JSON.parse(result));
      setIsAppFirstTimeOpen(false)
  }

  useEffect(()=>{
    SplashScreen.hide()
    findUser();
    // AsyncStorage.clear()
  },[]);

  const RenderNoteScreen = (props)=> <NoteScreen {...props} user={user}/>
  if(isAppFirstTimeOpen) return <Intro onFinish={findUser} />
  return <NavigationContainer>
    <NoteProvider>
    <Stack.Navigator 
    screenOptions={{ headerTitle:"", headerTransparent:true }}
     >
    <Stack.Screen component={RenderNoteScreen} name='NoteScreen' />
    <Stack.Screen component={NoteDetails} name='NoteDetails' />
  </Stack.Navigator>
    </NoteProvider>
  </NavigationContainer>
  
  // <NoteScreen user={user}/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

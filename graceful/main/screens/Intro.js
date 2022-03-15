import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne} from '../languages/supportedLanguages'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import RoundIconBtn from '../components/RoundIconBtn';
import colors from '../misc/colors';

i18n.fallbacks = true;
i18n.translations = {en,hi,es,mr,de,ta,gu,it,ja,ko,sv,te,tr,ne};
i18n.locale = Localization.locale;


const Intro = ({onFinish}) => {
    const [name, setName] = useState('');
    const handleOnChangeText = text => setName(text);

    const handleSubmit = async ()=> {
        const user = {name:name}
        await AsyncStorage.setItem('user',JSON.stringify(user))
        if (onFinish) onFinish();
    }

    return (
        <>
          <StatusBar hidden />
          <View style={styles.container}>
            <Text style={styles.inputTitle}>{i18n.t('first')}</Text>
            <TextInput
              value={name}
              onChangeText={handleOnChangeText}
              placeholder={i18n.t('second')}
              style={styles.textInput}
            />
            {name.trim().length >= 3 ? (
              <RoundIconBtn antIconName='arrowright' onPress={handleSubmit} />
            ) : null}
          </View>
        </>
      );
    };
    
    const width = Dimensions.get('window').width - 50;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textInput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        color: colors.PRIMARY,
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
        marginBottom: 15,
      },
      inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 25,
        marginBottom: 5,
        opacity: 0.5,
      },
    });
    
    export default Intro;
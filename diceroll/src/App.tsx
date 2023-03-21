/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageSourcePropType,
  Image,
  Pressable
} from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};


const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [diceImage2, setDiceImage2] = useState<ImageSourcePropType>(DiceOne);
  const [total, setTotal]  = useState(2);

  const rollDiceOnTop = () =>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    setTotal(randomNumber+randomNumber2);    

    switch(randomNumber)
    {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }

    switch(randomNumber2)
    {
      case 1:
        setDiceImage2(DiceOne);
        break;
      case 2:
        setDiceImage2(DiceTwo);
        break;
      case 3:
        setDiceImage2(DiceThree);
        break;
      case 4:
        setDiceImage2(DiceFour);
        break;
      case 5:
        setDiceImage2(DiceFive);
        break;
      case 6:
        setDiceImage2(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);

  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTop}>
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
      <Dice imageUrl={diceImage2}/>
      <Text style={styles.totalText}>Total: {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  totalText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 18,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;

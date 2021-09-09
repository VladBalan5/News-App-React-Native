import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Colors from '../constants/Colors';
import {selectTheme, SELECT_THEME} from '../store/actions/themes';
import Styles from './Styles/ColorPickerStyle';

const ColorPicker = props => {
  const [number, setnumber] = useState(1);

  const dispatch = useDispatch();

  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android') {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={Styles.buttonsContainer}>
      <Touchable
        onPress={() => {
          dispatch(selectTheme(Colors.Blue));
          setnumber(1);
        }}>
        <View
          style={{
            ...Styles.buttons,
            backgroundColor: Colors.Blue,
            borderColor: number === 1 ? Colors.Selected : Colors.Unselected,
          }}></View>
      </Touchable>

      <Touchable
        onPress={() => {
          dispatch(selectTheme(Colors.Green));
          setnumber(2);
        }}>
        <View
          style={{
            ...Styles.buttons,
            backgroundColor: Colors.Green,
            borderColor: number === 2 ? Colors.Selected : Colors.Unselected,
          }}></View>
      </Touchable>

      <Touchable
        onPress={() => {
          dispatch(selectTheme(Colors.Orange));
          setnumber(3);
        }}>
        <View
          style={{
            ...Styles.buttons,
            backgroundColor: Colors.Orange,
            borderColor: number === 3 ? Colors.Selected : Colors.Unselected,
          }}></View>
      </Touchable>

      <Touchable
        onPress={() => {
          dispatch(selectTheme(Colors.Purple));
          setnumber(4);
        }}>
        <View
          style={{
            ...Styles.buttons,
            backgroundColor: Colors.Purple,
            borderColor: number === 4 ? Colors.Selected : Colors.Unselected,
          }}></View>
      </Touchable>
    </View>
  );
};

export default ColorPicker;

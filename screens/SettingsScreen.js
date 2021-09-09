import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import ColorPicker from '../components/ColorPicker';

import Styles from './Styles/SettingsScreenStyle';

const SettingsScreen = props => {
  return (
    <SafeAreaView style={Styles.screen}>
      <View style={Styles.titleContainer}>
        <Text style={Styles.title}>Settings</Text>
      </View>
      <View style={Styles.textContainer}>
        <Text style={Styles.text}>Theme color:</Text>
      </View>
      <View>
        <ColorPicker />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

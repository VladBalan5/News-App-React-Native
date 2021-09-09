import React from 'react';
import {View, Text, Platform, ActivityIndicator} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';

import Styles from './Styles/LoadingIndicatorStyle';

const LoadingIndicator = props => {
  return (
    <View style={Styles.container}>
      <View style={Styles.loading}>
        {Platform.OS === 'ios' ? (
          <ActivityIndicator color="grey" size="large" />
        ) : (
          <MaterialIndicator color="grey" />
        )}
      </View>
      <View style={Styles.textt}>
        <Text style={Styles.text}>Loading articles...</Text>
      </View>
    </View>
  );
};

export default LoadingIndicator;

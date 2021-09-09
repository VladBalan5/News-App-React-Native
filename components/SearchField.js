import React from 'react';
import {View, TextInput, Image} from 'react-native';

import Colors from '../constants/Colors';
import Styles from './Styles/SearchFieldStyle';

const SearchField = props => {
  let text;
  return (
    <View style={Styles.search}>
      <View style={Styles.icon}>
        <Image source={require('../assets/search.png')} style={Styles.image} />
      </View>
      <TextInput
        {...props}
        value={text}
        style={{...Styles.input, ...props.style}}
        placeholder="Search for articles"
        placeholderTextColor={Colors.Search}
        onChangeText={text => {
          if (text.length > 3) props.onChangeText(text);
        }}
      />
    </View>
  );
};

export default SearchField;

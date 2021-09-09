import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

import Styles from './Styles/ArticleItemStyle';

const ArticleItem = props => {
  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android') {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={Styles.item}>
      <Touchable
        activeOpacity={0.8}
        onPress={props.onSelect}
        style={Styles.article}>
        <Image style={Styles.image} source={{uri: props.image}} />
        <View style={Styles.container}>
          <Text style={Styles.title} numberOfLines={2}>
            {props.title}
          </Text>
          <Text style={Styles.author} numberOfLines={1}>
            {props.author}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default ArticleItem;

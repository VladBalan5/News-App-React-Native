import React from 'react';
import {View, Text, Image} from 'react-native';

import Styles from './Styles/ArticleDetailsStyle';

const ArticleDetails = props => {
  return (
    <View style={Styles.container}>
      <Image style={Styles.image} source={{uri: props.image}} />
      <Text numberOfLines={2} style={Styles.title}>
        {props.title}
      </Text>
      <Text style={Styles.author}>{props.author}</Text>
      <View style={Styles.line}></View>
      <Text style={Styles.description}>{props.description}</Text>
    </View>
  );
};

export default ArticleDetails;

import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ArticleItem from '../components/ArticleItem';
import Styles from './Styles/SavedScreenStyle';

const SavedScreen = props => {
  const savedArticles = useSelector(state => state.articles.saved);

  if (savedArticles.length === 0) {
    return (
      <View style={Styles.container}>
        <Text style={{fontSize: 20}}>No saved articles!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={Styles.screen}>
      <View style={Styles.title}>
        <Text style={Styles.text}>Saved articles</Text>
      </View>
      <View style={Styles.list}>
        <FlatList
          keyExtractor={(item, index) => index}
          data={savedArticles}
          renderItem={itemData => (
            <ArticleItem
              image={itemData.item.imageUrl}
              title={itemData.item.title}
              author={itemData.item.author}
              onSelect={() => {
                props.navigation.navigate('Details', {
                  articleTitle: itemData.item.title,
                  articleImage: itemData.item.imageUrl,
                  articleAuthor: itemData.item.author,
                  articleDescription: itemData.item.description,
                });
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SavedScreen;

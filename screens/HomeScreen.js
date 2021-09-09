import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, SafeAreaView, Text, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import * as articlesActions from '../store/actions/articles';
import ArticleItem from '../components/ArticleItem';
import SearchField from '../components/SearchField';
import LoadingIndicator from '../components/LoadingIndicator';
import Styles from './Styles/HomeScreenStyle';

const HomeScreen = props => {
  const [isLoading, setisLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, seterror] = useState();
  const [search, setsearch] = useState('React native');

  const articles = useSelector(state => state.articles.articles);

  const dispatch = useDispatch();

  const loadArticles = useCallback(
    async search => {
      seterror(null);
      setIsRefreshing(true);
      setisLoading(true);
      try {
        await dispatch(articlesActions.fetchArticles(search));
      } catch (err) {
        seterror(err.message);
        console.log(error);
      }
      setIsRefreshing(false);
      setisLoading(false);
    },
    [dispatch, setisLoading, seterror, search],
  );

  useEffect(() => {
    loadArticles(search);
  }, [dispatch, loadArticles]);

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>An error occured!</Text>
        <Button title="Try again" onPress={loadArticles} />
      </View>
    );
  }

  return (
    <SafeAreaView style={Styles.screen}>
      <View>
        <SearchField
          underlineColorAndroid="transparent"
          onChangeText={text => {
            setsearch(text);
          }}
        />
      </View>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <View style={Styles.list}>
          <FlatList
            onRefresh={loadArticles}
            refreshing={isRefreshing}
            data={articles}
            keyExtractor={item => item.id}
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
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

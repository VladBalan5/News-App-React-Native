import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ArticleDetails from '../components/ArticleDetails';
import * as articlesActions from '../store/actions/articles';
import Colors from '../constants/Colors';
import Styles from './Styles/DetailsScreenStyle';

const DetailsScreen = props => {
  const articleTitle = props.route.params.articleTitle;
  const articleImage = props.route.params.articleImage;
  const articleAuthor = props.route.params.articleAuthor;
  const articleDescription = props.route.params.articleDescription;

  // const availableArticles = useSelector(state => state.articles.saved);

  const theme = useSelector(state => state.theme);

  const [isSaved, setisSaved] = useState(false);

  const dispatch = useDispatch();

  let Touchable = TouchableOpacity;

  if (Platform.OS === 'android') {
    Touchable = TouchableNativeFeedback;
  }

  const SaveHandler = useCallback(() => {
    if (isSaved === false) {
      setisSaved(true);
    } else if (isSaved === true) {
      setisSaved(false);
    }
  }, [setisSaved]);

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Touchable
          onPress={() => {
            dispatch(articlesActions.saveArticle(articleTitle));
            if (isSaved === false) {
              SaveHandler(() => {});
            } else if (isSaved === true) {
              SaveHandler(() => {});
              props.navigation.navigate('Saved');
            }
          }}
          style={Styles.button}>
          {isSaved ? (
            <Image
              title="Save"
              source={require('../assets/bookmark1.png')}
              style={{tintColor: theme.theme}}
            />
          ) : (
            <Image
              title="Save"
              source={require('../assets/bookmark0.png')}
              style={{tintColor: Colors.Inactive}}
            />
          )}
        </Touchable>
      ),
    });
  });

  return (
    <View style={Styles.screen}>
      <ArticleDetails
        title={articleTitle}
        image={articleImage}
        author={articleAuthor}
        description={articleDescription}
      />
    </View>
  );
};

export default DetailsScreen;

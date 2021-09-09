import Article from '../../models/article';

export const GET_ARTICLE = 'GET_ARTICLE';
export const SAVE_ARTICLE = 'SAVE_ARTICLE';

export const saveArticle = title => {
  return dispatch => dispatch({type: SAVE_ARTICLE, articleTitle: title});
};

export const fetchArticles = search => {
  return async dispatch => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=0ae111e0c74341a3b4e8e1ddcc4b23cc`,
      );

      const resData = await response.json();
      const articles = [];

      for (const key in resData.articles) {
        articles.push(
          new Article(
            resData.articles[key].title,
            resData.articles[key].description,
            key,
            resData.articles[key].urlToImage,
            resData.articles[key].author,
          ),
        );
      }

      dispatch({type: GET_ARTICLE, articles: articles});
    } catch (err) {
      console.log(err);
    }
  };
};

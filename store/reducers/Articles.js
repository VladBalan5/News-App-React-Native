import {GET_ARTICLE, SAVE_ARTICLE} from '../actions/articles';

const initialState = {
  articles: [],
  saved: [],
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE:
      return {
        articles: action.articles,
        saved: state.saved,
      };
    case SAVE_ARTICLE:
      const existingArticles = state.saved.findIndex(
        articles => articles.title === action.articleTitle,
      );
      if (existingArticles >= 0) {
        const updatedSaved = [...state.saved];
        updatedSaved.splice(existingArticles, 1);
        return {...state, saved: updatedSaved};
      } else {
        const articles = state.articles.find(
          articles => articles.title === action.articleTitle,
        );
        return {...state, saved: state.saved.concat(articles)};
      }
    default:
      return state;
  }
};

export default articlesReducer;

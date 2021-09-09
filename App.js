import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import TabBar from './components/TabBar';
import articlesReducer from './store/reducers/articles';
import themeReducer from './store/reducers/themes';

const rootReducer = combineReducers({
  articles: articlesReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabBar />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

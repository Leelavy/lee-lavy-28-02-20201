import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers/index';
import { Provider, provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00286B',
    },
    secondary: {
      main: '#005DAF',
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

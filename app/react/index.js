// Style
require('./styles/index.styl');

window.React = React;
window.ReactDOM = ReactDOM;

import { Provider } from 'react-redux';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router'

// Components
import App from './components/App';
import Home from './components/Home';
import Playlist from './components/Playlist';
import PlaylistEditor from './components/PlaylistEditor';
import Search from './components/Search';
import ArticlePreview from './components/ArticlePreview';
import ArticleCaption from './components/ArticleCaption';
import ImageSelector from './components/ImageSelector';
import Login from './components/Login';
import StyleGuide from './components/StyleGuide';

import { createHistory } from 'history';
import configureStore from './store/configureStore';

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store)

class PlaylistApp extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/playlists" component={PlaylistEditor}>
              <Route path="/playlists/article/images" component={ImageSelector} />
              <Route path="/playlists/article/caption" component={ArticleCaption} />
            </Route>
            <Route path="/playlists/article/search" component={Search} />
          </Route>
          <Route path="/styleguide" component={StyleGuide}/>
        </Router>
      </Provider>
    )
  }
}

registerComponent('PlaylistApp', PlaylistApp);


class Permalink extends React.Component{
  render() {
    return (
      <Playlist {...this.props}/>
    );
  }
}

registerComponent('Permalink', Permalink);


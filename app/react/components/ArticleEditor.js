import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { connect } from 'react-redux';

class ArticleEditor extends React.Component {
  render() {
    return (
      <div>
        <SearchForm {...this.props}/>
        {this._currentQuery()}
      </div>
    )
  }

  _currentQuery() {
    const {query, history} = this.props.searchApp;
    if(query !== undefined && query.length) {
      return (
        <div>
          <h2>Search For: "{query}"</h2>
          <SearchResults query={history[query]}/>
        </div>
      );
      
    } else {
      return null;
    }
  }
}

export default connect( state => {return state})(ArticleEditor);
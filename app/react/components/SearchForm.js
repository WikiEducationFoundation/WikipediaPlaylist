import { updateQuery, fetchQuery, addSearch, isSearching } from '../actions';
import { search } from '../actions/SearchAPI';
import Icon from './Icon';

export default class SearchForm extends React.Component {
  constructor() {
    super()
    this._debouncedSearch = _.debounce(this._debouncedSearch, 300)
  }

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <div className='relative'>
          <input 
               
               onKeyPress={this._handleKeyUp.bind(this)}
               id='Search'
               type='text'
               autoComplete='off'
               placeholder='Search Wikipedia'
               defaultValue={this.props.Search.queries[this.props.index]}
               className='field border-bottom search__input'/>
          <div className='search-icon'><Icon size="18px" icon="search" fill={'silver'} /></div>
        </div>
      </form>
    );
  }

  _handleKeyUp(e) {
    e.persist()
    this._debouncedSearch(e.target.value)
  }

  _debouncedSearch(query) {
    const {dispatch, index} = this.props;
    dispatch(updateQuery(index, query))
    dispatch(isSearching(true))
    search(query, this._handleResults.bind(this));
  }
  _handleResults(results) {
    this.props.dispatch(addSearch(results, this.props.index))
    this.props.dispatch(isSearching(false))
  }
}

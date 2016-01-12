import { Link } from 'react-router';
import { connect } from 'react-redux';
import childrenWithProps from '../utils/childrenWithProps';
import DevTools from '../containers/DevTools';
import { login, logout, addUser } from '../actions';

class App extends React.Component {
  render() {
    const { logged_in, current_user } = this.props.Account;

    let account = <Link to="/playlist/login">Login</Link>;
    if(logged_in && current_user) {
      account = (
        <span>Hi {current_user.username} <a href="#" data-sign-out>Logout</a></span>
        );
    }

    return (
      <div className="p2">
        <h1>Wikipedia Playlist</h1>
        <nav className="py2 flex">
          <div className="px1">
            <Link to="/">Home</Link>
          </div>
          <div className="px1">
            <Link to="/playlist">Create a Playlist</Link>
          </div>
          <div className="px1">
            {account}
          </div>
        </nav>
        {this.props.children}
        {this._devTools()}
      </div>
    )
  }

  _devTools() {
    // return null;
    if(process.env.NODE_ENV === 'development') {
      return <DevTools/>
    } else {
      return null;
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    $(document).on('authSuccess', ()=>{dispatch(login())});
    $(document).on('authLogout', ()=>{dispatch(logout())});
    $(document).on('authUser', (data)=>{
      const { email, username } = data;
      dispatch(addUser({ 
        email,
        username
      }))
    });
  }
}

function select(state) {
  return state;
}

export default connect(select)(App);


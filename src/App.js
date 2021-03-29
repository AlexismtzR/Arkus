import './App.css';
import { Provider } from 'react-redux'
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail'
import { Store } from './redux/Store'
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Route exact path='/' component={ContactList}/>
        <Route path='/ContactDetail/:userid' component={ContactDetail}/>
      </Router>
    </Provider>
  );
}

export default App;

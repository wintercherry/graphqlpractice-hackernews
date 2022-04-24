import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header';
import CreateLink from './CreateLink';
import LinkList from './LinkList';
import Login from './Login';
import Search from './Search';
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to="/new/1" />}
        />
        <Route
          path="/create"
          element={<CreateLink/>}
        />
        <Route path="/login" element={<Login/>}/>
        <Route path="/search"element={<Search/>}/>
        <Route path="/top" element={<LinkList/>} />
        <Route
          path="/new/:page"
          element={<LinkList/>}
        />
      </Routes>
    </div>
  </div>
);

export default App;

import './style.scss';
import logo from '../../assets/logo-react.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <h1>React Todo</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Nav />
    </header>
  );
}

export default Header;
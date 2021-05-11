import logo from '../images/logo.png';
import logo2 from '../images/logoRM.png';
import '../stylesheets/components/Header.scss';

function Header() {
  return (
    <header className="Header">
    <img className="Header__img" src={logo} alt="Rick and Morty logo" />
      <img className="Header__img" src={logo2} alt="Rick and Morty logo 2" />
    </header>
  );
}

export default Header;

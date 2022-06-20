import './style.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

function Main() {
  return (
    <div className="Main">
      <Header />
      <div className='linha-header'></div>
      <Navbar />
    </div>
  );
}

export default Main;

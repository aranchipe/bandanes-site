import './style.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import carros1 from '../../assets/carros1.png'
import carros2 from '../../assets/carros2.png'
import { useState } from 'react';

function Main() {
  const [carrosselImg, setCarrosselImg] = useState(0)

  function passarImg() {
    setCarrosselImg(2)
  }

  function voltarImg() {
    if (!carrosselImg) {
      return
    }
    setCarrosselImg(1)
  }

  console.log(carrosselImg)
  return (
    <div className="Main">
      <Header />
      <div className='linha-header'></div>
      <Navbar />
      <div className='carrossel-container'>
        <div className={carrosselImg === 2 ? 'carrossel proximo' : carrosselImg === 1 ? 'carrossel anterior' : 'carrossel'}>
          <a href='https://www.youtube.com/'><img src={carros1} /></a>
          <img src={carros2} />

        </div>
        <div className='bolinhas'>
          <div
            onClick={() => voltarImg()}
            className={carrosselImg === 1 || carrosselImg === 0 ? 'bolinha-aberta' : 'bolinha-fechada'}
          >

          </div>
          <div
            onClick={() => passarImg()}
            className={carrosselImg === 2 ? 'bolinha-aberta' : 'bolinha-fechada'}
          >

          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;

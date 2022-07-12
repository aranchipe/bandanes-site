import './style.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import carros1 from '../../assets/carros1.png'
import carros2 from '../../assets/carros2.png'
import { useState } from 'react';
import CategoriaCard from '../../components/CategoriaCard';
import categorias from '../../categorias';
import nextIcon from '../../assets/right-arrow.png'
import previousIcon from '../../assets/left-arrow.png'
import ModalCategorias from '../../components/ModalCategorias';

function Main() {
  const [carrosselImg, setCarrosselImg] = useState(0)
  const [carrosselCategorias, setCarrosselCategorias] = useState(1)
  const [categoriasModal, setCategoriasModal] = useState(false)

  function passarImg() {
    setCarrosselImg(2)
  }

  function voltarImg() {
    if (!carrosselImg) {
      return
    }
    setCarrosselImg(1)
  }


  return (
    <div className="Main-body">
      <Header />
      <div className='linha-header'></div>
      <Navbar
        setCategoriasModal={setCategoriasModal}
      />
      {categoriasModal && <ModalCategorias
        setCategoriasModal={setCategoriasModal}
      />}
      <div className='carrossel-container'>
        <div className={carrosselImg === 2 ? 'carrossel proximo' : carrosselImg === 1 ? 'carrossel anterior' : 'carrossel'}>
          <img src={carros1} alt='carrossel1' />
          <img src={carros2} alt='carrossel2' />

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
      <div className='categorias'>
        <div onClick={() => setCarrosselCategorias(1)} className='nextIcon'>
          <img src={previousIcon} alt='previous' />

        </div>
        {carrosselCategorias === 1 ? categorias.slice(0, 5).map((item) => (
          <CategoriaCard
            imagem={item.imagem}
            categoria={item.nome}
          />

        )) : categorias.slice(5, 10).map((item) => (
          <CategoriaCard
            imagem={item.imagem}
            categoria={item.nome}
          />
        ))}
        <div onClick={() => setCarrosselCategorias(2)} className='nextIcon'>
          <img src={nextIcon} alt='next' />
        </div>

      </div>
    </div>
  );
}

export default Main;

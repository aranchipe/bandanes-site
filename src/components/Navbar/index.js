import './style.css'
import whatsapp from '../../assets/whatsapp.svg'
import instagram from '../../assets/instagram.svg'

function Navbar() {
    return (
        <div className='container-navbar'>
            <div>
                <h3>Home</h3>
            </div>
            <div>
                <h3>Sobre Nós</h3>

            </div>
            <div>
                <h3>Personalizados</h3>

            </div>
            <div>
                <h3>Categorias</h3>

            </div>
            <div>
                <h3>Contato</h3>

            </div>
            <div className='redes-sociais'>
                <img src={whatsapp} alt='whatsapp' />
                <img src={instagram} alt='instagram' />

            </div>
        </div>
    )
}

export default Navbar
import './style.css'
import bandanes from '../../assets/bandanes.jpeg'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <div className='container-header'>
            <div className='div-logo'>
                <img className='logo' src={logo} alt='logo' />

            </div>
            <div className='div-bandanes'>
                <img className='bandanes' src={bandanes} alt='bandanes' />
            </div>


        </div>
    )
}

export default Header
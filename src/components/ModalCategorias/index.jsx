import './style.css'
import categorias from '../../categorias';

function ModalCategorias({ setCategoriasModal }) {
    return (
        <div onMouseOut={() => setCategoriasModal(false)} onMouseOver={() => setCategoriasModal(true)} className='container-modal-categorias'>
            {categorias.map((item) => (
                <li onClick={() => console.log(item.id)}>{item.nome}</li>
            ))}
        </div>
    )
}

export default ModalCategorias
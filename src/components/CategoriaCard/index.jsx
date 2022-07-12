import './style.css'

function CategoriaCard({ imagem, categoria }) {
    return (
        <div className='container-categoria-card'>
            <img src={imagem} className='imagem' />
            <h2>{categoria}</h2>
        </div>
    )
}

export default CategoriaCard
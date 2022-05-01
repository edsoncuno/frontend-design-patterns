import './index.css'
import Title from './../../components/Title'
import Descripcion from './../../components/Description'
const App = () => {

    const description = 'En este ejercio se crea una lista de usuario, donde se agregan cuando'
        + 'inician sesion. La lista es una instancia de Singelton, asi que no sera posible'
        + 'reemplazar la lista por otra y asi ';
    return (
        <div className="singeltonStyle">
            <div className='area1'>
            <div className='title'>
                <Title text={'Singelton'} fontSize={'2rem'} />
            </div>
            <div className='description'>
                <Descripcion text={description} />
            </div>
            </div>
            <div className='form'>
            </div>
            <div className='list'>
            </div>
        </div>
    );
}

export default App;
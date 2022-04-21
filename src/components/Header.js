import Title from './Title'
import Navbar from './Navbar'
import './Header.css'

const App = () => {
    return (<header className='headerStyle'>
        <Title name={'Design Patterns'}/>
        <Navbar />
    </header>);
}

export default App;
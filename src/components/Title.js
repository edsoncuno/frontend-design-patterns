import './Title.css'

const App = (props) => {

    const appStyle = {
        'fontSize': `${props.fontSize}`
    }

    return (<div className='titleStyle' style={appStyle}>{props.text}</div>);
}

export default App;
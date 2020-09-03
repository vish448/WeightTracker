import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import api from './utils/api'

class App extends React.Component{
    componentDidMount() {
        api.readAll().then((w) => {
            console.log(w)
        })
    }
    render(){
        return(
            <div>Hello World123</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
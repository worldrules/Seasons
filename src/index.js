import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {lat: 40, errorMesage: '' }

        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({ lat: position.coords.latitude })
            },
            err =>{
                this.setState({ errorMesage: err.message })
            }
            
        );
    }

    render () {
        
        return (
        <div className="content">
            Latitude: {this.state.lat} <br/>
            Error: {this.state.errorMesage}
        </div>
        
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));
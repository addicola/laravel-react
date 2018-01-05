import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <div className='container'>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default App;

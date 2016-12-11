import React, {Component} from 'react'

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div id="app-main">
                {this.props.children}
            </div>
        )
    }
}

export default App
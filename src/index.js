import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./HemisphereDisplay";

class App extends React.Component {

    state = { lattitude: null, errorMessage: '' }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lattitude: position.coords.latitude })
            },
            (error) => {
                this.setState({ errorMessage: error.message })
            }
        );
    }
    render() {

        if (this.state.errorMessage && !this.state.lattitude) {
            return <div>{this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lattitude) {
            return <div><HemisphereDisplay lattitude={this.state.lattitude} /></div>
        }
        else {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));

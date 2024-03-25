const React = require('react');
const ReactDOM = require('react-dom');

class HelloUser extends React.Component {

    // constructor
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
        }
    }

    // event handler for name change
    HandleNameChange = (e) => {
        this.setState({
            username: e.target.value,
        });
    }


    render() {
        return (
            <div>
                <p>What's up, {this.state.username} </p>
                <label>Change Username:</label>
                <input type="text" value={this.state.username} onChange={this.HandleNameChange} />
            </div>
        )
    };

}

const init = () => {
    reactDOM.render(<HelloUser username="De'Andre" />, document.getElementById('app'));
}

window.onload = init;
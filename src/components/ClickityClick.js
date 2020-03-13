import React from 'react'

class ClickityClick extends React.Component {
    state = {
        hasBeenClicked: false,
        count: 0
    }

    handleClick = () => {
        this.setState( { hasBeenClicked: !this.state.hasBeenClicked } )
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <p>
                    I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
                </p>
                <button onClick={this.handleClick}>Click Here</button>
                <h3>Counter: {this.state.count}</h3>
            </div>
        )
    }
}
export default ClickityClick
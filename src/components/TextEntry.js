import React, { Component } from 'react'

class TextEntry extends Component {
    render () {
        return (
            <React.Fragment>
                <h2 className="App__subtitle">
                    Type or paste your original paragraph below.
                </h2>
                <span className="App__field">
                    <a className="App__cta" onClick={this.props.reset}>Reset</a>
                    <textarea autoFocus
                        ref={this.props.inputRef}
                        className="App__textarea"
                        onBlur={this.props.onEntry}
                        value={this.props.text}
                        onChange={this.props.onTextChange}
                        placeholder='Lorem ipsum dolor sit amet...'
                    />
                </span>
            </React.Fragment>
        )
    }
}

export default TextEntry

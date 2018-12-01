import React, { Component } from 'react'

class WordSelection extends Component {
    render () {
        return (
            <React.Fragment>
                <h2 className="App__subtitle">
                    Click on the words you wish to add in the word bank.
                </h2>
                <p className="App__text">
                    {this.props.words && this.props.words.map(word => (
                        <React.Fragment key={word.id}>
                            <span
                                className={word.selected ? 'App__word--selected' : null}
                                onClick={this.props.onSelect.bind(this, word.id)}
                            >
                                {word.text}
                            </span>
                            <span>&nbsp;</span>
                        </React.Fragment>
                    ))}
                </p>
            </React.Fragment>
        )
    }
}

export default WordSelection

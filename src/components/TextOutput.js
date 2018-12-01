import React, { Component } from 'react'

class TextOutput extends Component {
    state = {
        wordbank: null,
        paragraph: null
    }

    setWordBankRef = element => {
        this.setState({ wordbank: element })
    }

    setParagraphRef = element => {
        this.setState({ paragraph: element })
    }

    copy = (ref) => {
        ref.select()
        document.execCommand('copy')
    }

    render () {
        return (
            <React.Fragment>
                <h2 className="App__subtitle">
                    All done! If you wish to make changes, simply click the previous button.
                </h2>
                <span className="App__field">
                    <a className="App__cta" onClick={this.copy.bind(this, this.state.wordbank)}>Click to Copy</a>
                    <label className="App__label">Word Bank</label>
                    <textarea ref={this.setWordBankRef} className="App__textarea short" defaultValue={this.props.wordbank} readOnly></textarea>
                </span>
                <span className="App__field">
                    <a className="App__cta" onClick={this.copy.bind(this, this.state.paragraph)}>Click to Copy</a>
                    <label className="App__label">Paragraph</label>
                    <textarea ref={this.setParagraphRef} className="App__textarea short" defaultValue={this.props.paragraph} readOnly></textarea>
                </span>
            </React.Fragment>
        )
    }
}

export default TextOutput

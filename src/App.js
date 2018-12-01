import React, { Component } from 'react'
import './App.css'

import Missing from './components/Missing'
import TextEntry from './components/TextEntry'
import TextOutput from './components/TextOutput'
import WordSelection from './components/WordSelection'

class App extends Component {
    entryInput = null

    state = {
        step: 1,
        totalSteps: 3,
        text: '',
        words: [],
        wordbank: '',
        paragraph: ''
    }

    renderStep = () => {
        switch (this.state.step) {
            case 1:
                return (
                    <TextEntry
                        inputRef={el => this.entryInput = el}
                        text={this.state.text}
                        onTextChange={this.updateText}
                        onEntry={this.enterWords}
                        reset={this.reset}
                    />
                )
            case 2:
                return (
                    <WordSelection
                        words={this.state.words}
                        onSelect={this.toggleSelectWord}
                    />
                )
            case 3:
                return (
                    <TextOutput
                        copy={this.copy}
                        wordbank={this.state.wordbank}
                        paragraph={this.state.paragraph}
                    />
                )
            default:
                return <Missing />
        }
    }

    prevStep = () => {
        if (this.state.step > 1)
            this.setState({ step: this.state.step - 1 })
    }

    nextStep = () => {
        if (this.state.step < this.state.totalSteps) {
            this.setState({ step: this.state.step + 1 })

            switch (this.state.step) {
                case 2:
                    const wordbank = this.state.words
                            .filter(word => word.selected === true)
                            .map(word => word.text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ''))
                            .map(text => text.charAt(0).toLowerCase() + text.substr(1))
                            .sort()
                            .join('    ')
                    const paragraph = this.state.words
                            .map(word => word.selected ? '＿'.repeat(word.text.length) + word.text.replace(/[A-z\s]/g, '') : word.text)
                            .join(' ')
                    this.setState({ wordbank, paragraph })
                    break;
                default:
                    break;
            }
        }
    }

    updateText = (event) => {
        this.setState({ text: event.target.value })
    }

    enterWords = (event) => {
        const text = event.target.value
        const words = text.split(' ').map((word, i) => ({
            id: i,
            text: word,
            selected: false
        }))
        this.setState({ text, words })
    }

    toggleSelectWord = (id) => {
        const words = this.state.words
        let word = words.find(word => word.id === id)
        word.selected = !word.selected
        this.setState({ words })
    }

    reset = () => {
        this.setState({
            step: 1,
            text: '',
            words: [],
            wordbank: '',
            paragraph: ''
        })
        this.entryInput.focus()
    }

    render () {
        return (
            <div className="App">
                <h1 className="App__title">Word Bank Generator</h1>
                <div className="App__content">
                    {this.renderStep()}
                </div>
                <button
                    className="App__button secondary"
                    onClick={this.prevStep}
                    disabled={this.state.step <= 1}
                >
                    Previous
                </button>
                <button
                    className="App__button primary"
                    onClick={this.nextStep} 
                    disabled={this.state.step >= this.state.totalSteps || this.state.text === ''}
                >
                    Next
                </button>
            </div>
        )
    }
}

export default App

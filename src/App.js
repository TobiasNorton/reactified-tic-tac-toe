import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPlayer: 'X',
      board: ['', '', '', '', '', '', '', '', '']
    }
  }

  _click = event => {
    console.log(event.target.dataset)
    console.log(event.target.dataset.index)
    const index = parseInt(event.target.dataset.index)
    this.state.board[index] = this.state.currentPlayer
    let nextPlayer

    if (this.state.currentPlayer === 'X') {
      nextPlayer = 'O'
    } else {
      nextPlayer = 'X'
    }

    this.setState({
      currentPlayer: nextPlayer,
      board: this.state.board
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          <div className="row">
            <div data-index="0" onClick={this._click}>
              {this.state.board[0]}
            </div>
            <div data-index="1" onClick={this._click}>
              {this.state.board[1]}
            </div>
            <div data-index="2" onClick={this._click}>
              {this.state.board[2]}
            </div>
          </div>
          <div className="row">
            <div data-index="3" onClick={this._click}>
              {this.state.board[3]}
            </div>
            <div data-index="4" onClick={this._click}>
              {this.state.board[4]}
            </div>
            <div data-index="5" onClick={this._click}>
              {this.state.board[5]}
            </div>
          </div>
          <div className="row">
            <div data-index="6" onClick={this._click}>
              {this.state.board[6]}
            </div>
            <div data-index="7" onClick={this._click}>
              {this.state.board[7]}
            </div>
            <div data-index="8" onClick={this._click}>
              {this.state.board[8]}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

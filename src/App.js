import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: ['', '', '', '', '', '', '', '', '']
    }
  }

  _click = event => {
    const index = parseInt(event.target.className)
    this.state.board[index] = 'X'
    this.setState({
      board: this.state.board
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <div className="board">
          <div className="row">
            <div className="0" onClick={this._click}>
              {this.state.board[0]}
            </div>
            <div className="1" onClick={this._click}>
              {this.state.board[1]}
            </div>
            <div>{this.state.board[2]}</div>
          </div>
          <div className="row">
            <div>{this.state.board[3]}</div>
            <div>{this.state.board[4]}</div>
            <div>{this.state.board[5]}</div>
          </div>
          <div className="row">
            <div>{this.state.board[6]}</div>
            <div>{this.state.board[7]}</div>
            <div>{this.state.board[8]}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

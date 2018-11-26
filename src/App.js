import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Enjoy the Game!',
      currentPlayer: 'X',
      board: ['', '', '', '', '', '', '', '', '']
    }
  }

  detectTieGame = () => {
    if (this.detectWinner('X')) {
      return
    }

    if (this.detectWinner('O')) {
      return
    }

    const isEverySquareOccupied = this.state.board.every(square => {
      return square !== ''
    })
    if (isEverySquareOccupied) {
      this.setState({
        message: 'Tie Game!'
      })
    }
  }

  detectWinner = player => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    let isWinner = winningCombinations.some(combination => {
      return (
        this.state.board[combination[0]] === player &&
        this.state.board[combination[1]] === player &&
        this.state.board[combination[2]] === player
      )
    })
    return isWinner
  }

  _click = event => {
    const index = parseInt(event.target.dataset.index)

    if (this.state.board[index] !== '') {
      return
    }

    this.state.board[index] = this.state.currentPlayer

    if (this.state.currentPlayer === 'X') {
      this.setState({
        currentPlayer: 'O'
      })
    } else {
      this.setState({
        currentPlayer: 'X'
      })
    }
    console.log(`Clicked at index ${event.target.dataset.index}`)

    this.setState(
      {
        board: this.state.board
      },
      () => {
        if (this.detectWinner('X')) {
          this.setState({
            message: 'X Wins!'
          })
        }

        if (this.detectWinner('O')) {
          this.setState({
            message: 'O Wins!'
          })
        }
        this.detectTieGame()
        //This code is called after the state is updated
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <h3>{this.state.message}</h3>
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

'use strict'

import React, { Component } from 'react'

import AddFilm from './AddFilm.jsx'
import FilmList from './FilmList.jsx'

// FIXME: this is just temporary until the server is hooked up again
let randomId = () => 'a'.repeat(Math.floor(Math.random() * (100 - 1) + 1))

class Filog extends Component {
  constructor () {
    super()

    this.state = { films: [], newFilm: '' }
    this.handleChange = this.handleChange.bind(this)
    this.addFilmToList = this.addFilmToList.bind(this)
  }

  handleChange (event) {
    this.setState({ newFilm: event.target.value })
  }

  addFilmToList (event) {
    event.preventDefault()
    const { films, newFilm } = this.state

    if (newFilm === '') return

    this.setState({
      films: films.concat([{name: newFilm, id: randomId()}]),
      newFilm: ''
    })
  }

  render () {
    return (
      <div>
        <AddFilm addFilmHandler={this.addFilmToList}
          changeHandler={this.handleChange}
          newFilm={this.state.newFilm}
        />

        <FilmList films={this.state.films} />
      </div>
    )
  }
}

export default Filog

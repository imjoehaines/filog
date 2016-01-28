'use strict'

import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'

import AddFilm from './AddFilm.jsx'
import FilmList from './FilmList.jsx'

class Filog extends Component {
  static get propTypes () {
    return {
      addFilm: PropTypes.func.isRequired,
      filmsFetch: PropTypes.instanceOf(PromiseState).isRequired
    }
  }

  constructor () {
    super()

    this.state = { newFilm: '' }
    this.handleChange = this.handleChange.bind(this)
    this.addFilmToList = this.addFilmToList.bind(this)
  }

  handleChange (event) {
    this.setState({ newFilm: event.target.value })
  }

  addFilmToList (event) {
    event.preventDefault()
    const { newFilm } = this.state
    if (newFilm.trim() === '') return

    this.props.addFilm(newFilm)
    this.setState({ newFilm: '' })
  }

  render () {
    return (
      <div>
        <AddFilm addFilmHandler={this.addFilmToList}
          changeHandler={this.handleChange}
          newFilm={this.state.newFilm}
        />

        <FilmList filmsFetch={this.props.filmsFetch} />
      </div>
    )
  }
}

export default connect(props => ({
  // perform a GET request to '/get' as soon as the component mounts
  filmsFetch: '/get',

  // inject an 'addFilm' prop which is a function that will POST to /add
  addFilm: newFilm => ({
    addFilmResponse: {
      url: '/add',
      method: 'POST',
      body: JSON.stringify({ newFilm }),

      // after the POST, issue the GET request again
      andThen: () => ({
        filmsFetch: {
          url: '/get',
          force: true,
          refreshing: true
        }
      })
    }
  })
}))(Filog)

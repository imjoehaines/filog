'use strict'

import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'

import AddFilm from './components/AddFilm'
import FilmList from './components/FilmList'

class Filog extends Component {
  static get propTypes () {
    return {
      addFilm: PropTypes.func.isRequired,
      rateFilm: PropTypes.func.isRequired,
      deleteFilm: PropTypes.func.isRequired,
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

        <FilmList filmsFetch={this.props.filmsFetch}
          deleteFilm={this.props.deleteFilm}
          rateFilm={this.props.rateFilm}
        />
      </div>
    )
  }
}

const refreshFieldsFetch = () => ({
  filmsFetch: {
    url: '/films/',
    force: true,
    refreshing: true
  }
})

export default connect(props => ({
  // perform a GET request to '/films/' as soon as the component mounts
  filmsFetch: '/films/',

  // inject an 'addFilm' prop which is a function that will POST to /films/
  addFilm: name => ({
    addFilmResponse: {
      url: '/films/',
      method: 'POST',
      body: JSON.stringify({ name }),

      // after the POST, issue the GET request again
      andThen: refreshFieldsFetch
    }
  }),

  // inject a 'deleteFilm' prop which is a function that will DELETE to /films/:id
  deleteFilm: id => ({
    deleteFilmRequest: {
      method: 'DELETE',
      url: `/films/${id}`,

      // after the DELETE, issue the GET request again
      andThen: refreshFieldsFetch
    }
  }),

  // inject a 'rateFilm' prop which is a function that will POST to /films/:id/rate/:rating
  rateFilm: (id, rating) => ({
    rateFilmRequest: {
      method: 'POST',
      url: `/films/${id}/rate/${rating}`,

      // after the POST, issue the GET request again
      andThen: refreshFieldsFetch
    }
  })
}))(Filog)

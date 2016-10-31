'use strict'

import React, { Component, PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'

import AddFilm from './components/AddFilm'
import FilmList from './components/FilmList'
import FilmPreview from './components/FilmPreview'

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
    this.props.searchForFilm(event.target.value)
    this.setState({ newFilm: event.target.value })
  }

  addFilmToList (event) {
    event.preventDefault()
    const newFilm = this.props.searchForFilmResponse.value.Title
    if (newFilm.trim() === '') return

    this.props.addFilm(newFilm)
    this.setState({ newFilm: '' })
  }

  render () {
    let stuff = <p>stuff</p>

    if (this.props.searchForFilmResponse && this.props.searchForFilmResponse.pending) {
      stuff = <p>Loading...</p>
    } else if (this.props.searchForFilmResponse && this.props.searchForFilmResponse.rejected) {
      stuff = <p>{this.props.searchForFilmResponse.reason}</p>
    } else if (this.props.searchForFilmResponse && this.props.searchForFilmResponse.fulfilled) {
      if (this.props.searchForFilmResponse.value.Error) {
        stuff = <p>{this.props.searchForFilmResponse.value.Error}</p>
      } else {
        stuff = (
          <FilmPreview
            name={this.props.searchForFilmResponse.value.Title}
            releaseDate={this.props.searchForFilmResponse.value.Released}
            genre={this.props.searchForFilmResponse.value.Genre}
            actors={this.props.searchForFilmResponse.value.Actors}
            poster={this.props.searchForFilmResponse.value.Poster}
          />
        )
      }
    }

    return (
      <div>
        <AddFilm addFilmHandler={this.addFilmToList}
          changeHandler={this.handleChange}
          newFilm={this.state.newFilm}
        />

        {stuff}

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

  searchForFilm: name => ({
    searchForFilmResponse: {
      url: `/films/search/${name}`
    }
  }),

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

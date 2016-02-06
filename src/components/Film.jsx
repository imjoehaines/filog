'use strict'

import React, { Component, PropTypes } from 'react'

import Rater from './Rater.jsx'

class Film extends Component {
  static get propTypes () {
    return {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rateFilm: PropTypes.func.isRequired,
      deleteFilm: PropTypes.func.isRequired,
      dateCreated: PropTypes.string.isRequired
    }
  }

  render () {
    const { name, rateFilm, deleteFilm, dateCreated } = this.props

    return (
      <li>
        {name} &mdash;
        <Rater rateFilm = {rateFilm} />
        <a className = 'delete' onClick = {deleteFilm}>✕</a>
        <em className = 'date'>{dateCreated}</em>
      </li>
    )
  }
}

export default Film

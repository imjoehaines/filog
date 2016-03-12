'use strict'

import React, { PropTypes } from 'react'

import Rater from './Rater.jsx'

const Film = ({ name, rateFilm, deleteFilm, dateCreated }) => (
  <li>
    {name} &mdash;
    <Rater rateFilm = {rateFilm} />
    <a className = 'delete' onClick = {deleteFilm}>✕</a>
    <em className = 'date'>{dateCreated}</em>
  </li>
)

Film.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rateFilm: PropTypes.func.isRequired,
  deleteFilm: PropTypes.func.isRequired,
  dateCreated: PropTypes.string.isRequired
}

export default Film

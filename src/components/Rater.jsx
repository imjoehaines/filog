'use strict'

import React, { PropTypes } from 'react'

const Rater = ({ rateFilm, rating }) => (
  <span className = 'rater action'>
    <a onClick = {rateFilm.bind(null, 1)}>{rating && rating >= 1 ? '★' : '☆'}</a>
    <a onClick = {rateFilm.bind(null, 2)}>{rating && rating >= 2 ? '★' : '☆'}</a>
    <a onClick = {rateFilm.bind(null, 3)}>{rating && rating >= 3 ? '★' : '☆'}</a>
    <a onClick = {rateFilm.bind(null, 4)}>{rating && rating >= 4 ? '★' : '☆'}</a>
    <a onClick = {rateFilm.bind(null, 5)}>{rating && rating >= 5 ? '★' : '☆'}</a>
  </span>
)

Rater.propTypes = {
  rating: PropTypes.number.isRequired,
  rateFilm: PropTypes.func.isRequired
}

export default Rater

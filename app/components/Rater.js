'use strict'

import React, { PropTypes } from 'react'

const Rater = ({ rateFilm, rating = 0 }) =>
  <span className='rater action'>
    <a onClick={() => rateFilm(1)}>{rating >= 1 ? '★' : '☆'}</a>
    <a onClick={() => rateFilm(2)}>{rating >= 2 ? '★' : '☆'}</a>
    <a onClick={() => rateFilm(3)}>{rating >= 3 ? '★' : '☆'}</a>
    <a onClick={() => rateFilm(4)}>{rating >= 4 ? '★' : '☆'}</a>
    <a onClick={() => rateFilm(5)}>{rating >= 5 ? '★' : '☆'}</a>
  </span>

Rater.propTypes = {
  rating: PropTypes.number,
  rateFilm: PropTypes.func.isRequired
}

export default Rater

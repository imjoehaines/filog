'use strict'

import React, { PropTypes } from 'react'

const Rater = ({ rateFilm }) => (
  <span>
    <a onClick = {rateFilm.bind(null, 1)}>1</a>
    <a onClick = {rateFilm.bind(null, 2)}>2</a>
    <a onClick = {rateFilm.bind(null, 3)}>3</a>
    <a onClick = {rateFilm.bind(null, 4)}>4</a>
    <a onClick = {rateFilm.bind(null, 5)}>5</a>
  </span>
)

Rater.propTypes = {
  rateFilm: PropTypes.func.isRequired
}

export default Rater

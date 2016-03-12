'use strict'

import React, { PropTypes } from 'react'

const Rater = ({ rateFilm }) => (
  <span className = 'rater'>
    <a onClick = {rateFilm.bind(null, 1)}>☆</a>
    <a onClick = {rateFilm.bind(null, 2)}>☆</a>
    <a onClick = {rateFilm.bind(null, 3)}>☆</a>
    <a onClick = {rateFilm.bind(null, 4)}>☆</a>
    <a onClick = {rateFilm.bind(null, 5)}>☆</a>
  </span>
)

Rater.propTypes = {
  rateFilm: PropTypes.func.isRequired
}

export default Rater

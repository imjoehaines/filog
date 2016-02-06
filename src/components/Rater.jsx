'use strict'

import React, { Component, PropTypes } from 'react'

class Rater extends Component {
  static get propTypes () {
    return {
      rateFilm: PropTypes.func.isRequired
    }
  }

  render () {
    const { rateFilm } = this.props

    return (
      <span>
        <a onClick = {rateFilm.bind(null, 1)}>1</a>
        <a onClick = {rateFilm.bind(null, 2)}>2</a>
        <a onClick = {rateFilm.bind(null, 3)}>3</a>
        <a onClick = {rateFilm.bind(null, 4)}>4</a>
        <a onClick = {rateFilm.bind(null, 5)}>5</a>
      </span>
    )
  }
}

export default Rater

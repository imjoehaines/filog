'use strict'

import moment from 'moment'
import React, { Component, PropTypes } from 'react'

class Film extends Component {
  static get propTypes () {
    return {
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      deleteFilm: PropTypes.func.isRequired,
      dateCreated: PropTypes.string.isRequired
    }
  }

  render () {
    const { id, name, dateCreated, deleteFilm } = this.props

    return (
      <li>
        {name}
        <a className='delete' onClick={() => deleteFilm(id)}>✕</a>
        <em className='date'>{moment(dateCreated).fromNow()}</em>
      </li>
    )
  }
}

export default Film

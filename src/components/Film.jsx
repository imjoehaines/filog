'use strict'

import moment from 'moment'
import React, { Component, PropTypes } from 'react'

class Film extends Component {
  static get propTypes () {
    return {
      name: PropTypes.string.isRequired,
      dateCreated: PropTypes.string.isRequired
    }
  }

  render () {
    const { name, dateCreated } = this.props

    return <li>{name} <em className='date'>{moment(dateCreated).fromNow()}</em></li>
  }
}

export default Film

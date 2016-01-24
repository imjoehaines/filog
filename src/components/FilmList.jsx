'use strict'

import moment from 'moment'
import React, { Component, PropTypes } from 'react'

class FilmList extends Component {
  static get propTypes () {
    return { films: PropTypes.array.isRequired }
  }

  render () {
    const filmList = this.props.films.map(film => {
      return (
        <li key={film.id}>
          {film.name}
          <em style={{ float: 'right', color: '#ccc' }}>
            Added {moment(film.date_created).fromNow()}
          </em>
        </li>
      )
    })

    return <ol>{filmList}</ol>
  }
}

export default FilmList

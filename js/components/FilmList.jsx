import React, { Component, PropTypes } from 'react'

import Film from '../lib/film'

class FilmList extends Component {
  static get propTypes () {
    return { films: PropTypes.arrayOf(PropTypes.instanceOf(Film)) }
  }

  render () {
    const filmList = this.props.films.map(film => <li key={film.id}>{film.name}</li>)

    return <ol>{filmList}</ol>
  }
}

export default FilmList

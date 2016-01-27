'use strict'

import React, { Component, PropTypes } from 'react'

class AddFilm extends Component {
  static get propTypes () {
    return {
      newFilm: PropTypes.string.isRequired,
      changeHandler: PropTypes.func.isRequired,
      addFilmHandler: PropTypes.func.isRequired
    }
  }

  render () {
    return (
      <form onSubmit={this.props.addFilmHandler}>
        <input onChange={this.props.changeHandler}
          placeholder='Enter a film title...'
          value={this.props.newFilm}
        />

        <button onClick={this.props.addFilmHandler}
          disabled={this.props.newFilm.trim() === ''}
        >
          Add film
        </button>
      </form>
    )
  }
}

export default AddFilm

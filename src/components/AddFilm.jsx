'use strict'

import React, { Component, PropTypes } from 'react'

class AddFilm extends Component {
  static get propTypes () {
    return {
      addFilmHandler: PropTypes.func.isRequired,
      changeHandler: PropTypes.func.isRequired,
      newFilm: PropTypes.string.isRequired
    }
  }

  render () {
    return (
      <form onSubmit={this.props.addFilmHandler}>
        <input value={this.props.newFilm}
          onChange={this.props.changeHandler}
          placeholder='Enter a film title...'
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

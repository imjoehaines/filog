'use strict'

import React, { PropTypes } from 'react'

const AddFilm = ({ addFilmHandler, changeHandler, newFilm }) =>
  <form onSubmit={addFilmHandler}>
    <input onChange={changeHandler}
      placeholder='Enter a film title...'
      value={newFilm}
    />

    <button onClick={addFilmHandler}
      disabled={newFilm.trim() === ''}
    >
      Add film
    </button>
  </form>

AddFilm.propTypes = {
  newFilm: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  addFilmHandler: PropTypes.func.isRequired
}

export default AddFilm

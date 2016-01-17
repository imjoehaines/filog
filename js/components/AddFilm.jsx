import React, { Component } from 'react'

class AddFilm extends Component {
  constructor () {
    super()

    // TODO: use redux
    this.state = { films: [], newFilm: '' }

    this.handleChange = this.handleChange.bind(this)
    this.addFilmToList = this.addFilmToList.bind(this)
  }

  handleChange (event) {
    this.setState({ newFilm: event.target.value })
  }

  addFilmToList () {
    this.setState({
      films: this.state.films.concat([this.state.newFilm]),
      newFilm: ''
    })
  }

  render () {
    // TODO: refactor this to a separate component - this should just be the form
    let key = 0
    const filmList = this.state.films.map(film => <li key={key++}>{film}</li>)

    return (
      <div>
        <form onSubmit={this.addFilmToList}>
          <input
            value={this.state.newFilm}
            onChange={this.handleChange}
            placeholder='Enter a film title...'
          />

          <button
            onClick={this.addFilmToList}
            disabled={this.state.newFilm === ''}
          >Add film</button>
        </form>

        <ol>{filmList}</ol>
      </div>
    )
  }
}

export default AddFilm

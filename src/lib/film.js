'use strict'

import uniquid from 'uniquid'

class Film {
  constructor (name) {
    this.name = name
    this.id = uniquid()
  }
}

export default Film

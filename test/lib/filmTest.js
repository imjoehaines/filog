'use strict'

import test from 'tape'
import Film from '../../src/lib/film'

test('it should accept a name', t => {
  const film = new Film('bob')
  t.is(film.name, 'bob')
  t.end()
})

test('it should give itself an id', t => {
  const film = new Film('bob')
  t.ok(film.id)
  t.end()
})

test('the id should change between films', t => {
  const film1 = new Film('bob')
  const film2 = new Film('alice')
  t.notSame(film1.id, film2.id)
  t.end()
})

'use strict'

import test from 'ava'

import 'babel-core/register'
import Film from '../../js/lib/film'

test('it should accept a name', t => {
  const film = new Film('bob')
  t.is(film.name, 'bob')
})

test('it should give itself an id', t => {
  const film = new Film('bob')
  t.ok(film.id)
})

test('the id should change between films', t => {
  const film1 = new Film('bob')
  const film2 = new Film('alice')
  t.notSame(film1.id, film2.id)
})

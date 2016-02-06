'use strict'

import test from 'tape'

import formatDate from '../../src/utils/formatDate'

const dates = [
  { input: '2010-01-01', expected: 'Fri Jan 01 2010' },
  { input: '2016-02-06', expected: 'Sat Feb 06 2016' },
  { input: '2015-12-12', expected: 'Sat Dec 12 2015' },
  { input: '1950-11-21', expected: 'Tue Nov 21 1950' },
  { input: '1992-04-25', expected: 'Sat Apr 25 1992' }
]

dates.forEach(({ input, expected }) => {
  test(`it formats "${input}" to "${expected}"`, t => {
    t.is(formatDate(input), expected)
    t.end()
  })
})

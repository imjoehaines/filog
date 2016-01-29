'use strict'

import tape from 'tape'
import addAssertions from 'extend-tape'
import jsxEquals from 'tape-jsx-equals'
import React, { createElement } from 'react'
import { createRenderer } from 'react-addons-test-utils'

import Film from '../../src/components/Film.jsx'

const test = addAssertions(tape, { jsxEquals })

test('it renders correctly', t => {
  const renderer = createRenderer()

  const props = {
    id: 'abc',
    name: 'Terminonter 2',
    deleteFilm: () => {},
    dateCreated: new Date().toISOString()
  }

  renderer.render(createElement(Film, props))
  const result = renderer.getRenderOutput()

  t.jsxEquals(
    result,
    <li>
      Terminonter 2
      <a className='delete' onClick={() => {}}>✕</a>
      <em className='date'>a few seconds ago</em>
    </li>
  )

  t.end()
})

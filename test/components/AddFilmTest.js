'use strict'

import test from 'tape'
import { createElement } from 'react'
import { createRenderer } from 'react-addons-test-utils'

import AddFilm from '../../src/components/AddFilm.jsx'

test.skip('it should render a form', t => {
  const renderer = createRenderer()
  renderer.render(createElement(AddFilm))
  const result = renderer.getRenderOutput()

  t.true(result.props.children.some(child => child.type === 'form'))
  t.end()
})

test.skip('the form should have an input', t => {
  const renderer = createRenderer()
  renderer.render(createElement(AddFilm))
  const result = renderer.getRenderOutput()

  const formChildren = result.props.children.find(child => child.type === 'form').props.children

  t.ok(formChildren.find(child => child.type === 'input'))
  t.end()
})

test.skip('the form should have a button', t => {
  const renderer = createRenderer()
  renderer.render(createElement(AddFilm))
  const result = renderer.getRenderOutput()

  const formChildren = result.props.children.find(child => child.type === 'form').props.children

  t.ok(formChildren.find(child => child.type === 'button'))
  t.end()
})

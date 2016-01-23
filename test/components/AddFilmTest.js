'use strict'

import test from 'ava'
import { createElement } from 'react'
import { createRenderer } from 'react-addons-test-utils'

import 'babel-core/register'
import AddFilm from '../../public/components/AddFilm.jsx'

test('it should render a form', t => {
  const renderer = createRenderer()
  renderer.render(createElement(AddFilm))
  const result = renderer.getRenderOutput()

  t.true(result.props.children.some(child => child.type === 'form'))
})

test('the form should have an input', t => {
  const renderer = createRenderer()
  renderer.render(createElement(AddFilm))
  const result = renderer.getRenderOutput()

  const formChildren = result.props.children.find(child => child.type === 'form').props.children

  t.ok(formChildren.find(child => child.type === 'input'))
})

test('the form should have a button', t => {
  const renderer = createRenderer()
  renderer.render(createElement(AddFilm))
  const result = renderer.getRenderOutput()

  const formChildren = result.props.children.find(child => child.type === 'form').props.children

  t.ok(formChildren.find(child => child.type === 'button'))
})

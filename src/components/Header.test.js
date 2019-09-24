import React from 'react'
import Header from './Header'
import renderer from 'react-test-renderer'

describe('Header', () => {
  it('Renders on the Header directly to the page', () => {
    const tree = renderer
    .create(<Header />)
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
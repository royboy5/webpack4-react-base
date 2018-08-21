import React from 'react'
import { shallow } from 'enzyme'

import Home from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'

it('Shows a Header', () => {
  const wrapped = shallow(<Home />)

  expect(wrapped.find(Header).length).toEqual(1)
})

it('Shows a Footer', () => {
  const wrapped = shallow(<Home />)

  expect(wrapped.find(Footer).length).toEqual(1)
})

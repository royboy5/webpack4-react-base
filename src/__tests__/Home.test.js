import React from 'react'
import { shallow } from 'enzyme'

import Home from '@pages/Home'
import Header from '@components/Header'
import Footer from '@components/Footer'

let wrapped

beforeEach(() => {
  wrapped = shallow(<Home />)
})

it('Shows a Header', () => {
  expect(wrapped.find(Header).length).toEqual(1)
})

it('Shows a Footer', () => {
  expect(wrapped.find(Footer).length).toEqual(1)
})

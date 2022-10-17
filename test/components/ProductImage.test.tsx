import React from 'react'
import renderer from 'react-test-renderer'
import ProductImage from '../../src/components/ProductImage'
import ProductCard from '../../src/components/ProductCard'
import { product2 } from '../data/products'

describe('Product Image', () => {
  it('renders with img', () => {
    const wrapper = renderer.create(
      <ProductImage img='./cofee.jpg' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with product title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage />}
      </ProductCard>
    )
    expect(wrapper).toMatchSnapshot()
  })
})

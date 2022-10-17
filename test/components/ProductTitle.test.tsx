import React from 'react'
import renderer from 'react-test-renderer'
import ProductTitle from '../../src/components/ProductTitle'
import ProductCard from '../../src/components/ProductCard'
import { product1 } from '../data/products'

describe('Product Title', () => {
  it('renders with custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title='Custom Product' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with product title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <ProductTitle />}
      </ProductCard>
    )
    expect(wrapper).toMatchSnapshot()
  })
})

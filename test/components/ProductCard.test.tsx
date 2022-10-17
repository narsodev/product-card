import React from 'react'
import { create, act } from 'react-test-renderer'
import ProductCard from '../../src/components/ProductCard'
import { product1 } from '../data/products'

describe('Product Card', () => {
  it('renders children', () => {
    const wrapper = create(
      <ProductCard product={product1}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('increases counter', () => {
    const wrapper = create(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>+</button>
          </>
        )}
      </ProductCard>
    )

    expect(wrapper).toMatchSnapshot()

    const button = wrapper.root.findByType('button')
    act(() => {
      button.props.onClick()
    })

    const count = wrapper.root.findByType('span')
    expect(count.children).toEqual(['1'])
  })
})

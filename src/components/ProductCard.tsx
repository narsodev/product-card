import React from 'react'

import { createContext, CSSProperties } from 'react'
import useProduct from '../hooks/useProduct'
import { InitialValues, onChangeArgs, Product, ProductCardHandlers } from '../interfaces/interfaces'

import { ProductContextProps } from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
  // children?: ReactElement | ReactElement[],
  className?: string,
  initialValues?: InitialValues,
  product: Product,
  style?: CSSProperties,
  value?: number,
  children: (args: ProductCardHandlers) => JSX.Element,
  onChange?: (args: onChangeArgs) => void
}


const ProductCard = ({ product, children, className = '', style, onChange, value, initialValues }: Props) => {
  const { counter, isMaxCountReached, maxCount, increaseBy, reset } = useProduct({ product, onChange, value, initialValues })

  return (
    <Provider value={{
      counter,
      isMaxCountReached,
      product,
      increaseBy
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  )
}

export default ProductCard

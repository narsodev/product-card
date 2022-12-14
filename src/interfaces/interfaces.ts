import { Props as ProductCardProps } from '../components/ProductCard'
import { Props as ProductTitleProps } from '../components/ProductTitle'
import { Props as ProductImageProps } from '../components/ProductImage'
import { Props as ProductButtonsProps } from '../components/ProductButtons'

export interface Product {
  id: string,
  title: string,
  img?: string
}

export interface ProductContextProps {
  counter: number,
  isMaxCountReached: boolean,
  product: Product,
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element,
  Buttons: (props: ProductButtonsProps) => JSX.Element
  Image: (props: ProductImageProps) => JSX.Element,
  Title: (props: ProductTitleProps) => JSX.Element,
}

export interface onChangeArgs {
  product: Product,
  count: number
}

export interface InitialValues {
  count?: number,
  maxCount?: number
}

export interface ProductCardHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCount?: number,
  product: Product,
  increaseBy: (value: number) => void,
  reset: () => void
}

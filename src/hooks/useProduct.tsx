import { useEffect, useState, useRef } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  initialValues?: InitialValues,
  product: Product,
  value?: number,
  onChange?: (args: onChangeArgs) => void
}

const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>((initialValues && initialValues.count) ?? value)
  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    const newCounter = (Math.max(counter + value, 0))

    const maxCount = initialValues && initialValues.maxCount

    if (maxCount && newCounter > maxCount) return

    setCounter(newCounter)

    onChange && onChange({ product, count: newCounter })
  }

  const reset = () => {
    setCounter((initialValues && initialValues.count) ?? 0)
  }

  useEffect(() => {
    if (isMounted.current) setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    isMaxCountReached: counter >= ((initialValues && initialValues.maxCount) ?? Infinity),
    maxCount: initialValues && initialValues.maxCount,
    increaseBy,
    reset
  }
}

export default useProduct

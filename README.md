# product-card

Product card component for React.

Learning purposes.

## Example

```tsx
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'product-card'
```

```tsx
const product = {
  id: '1',
  title: 'Coffee Mug - Card'
}
```

```tsx
<ProductCard
  product={product}
  initialValues={{ count: 1, maxCount: 10 }}
>
  {
    ({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
      <>
        <ProductImage />
        <ProductTitle  />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```

import { createFileRoute } from '@tanstack/react-router'
import ProductListItem from '@/components/ProductListItem'
import { useShoppingCartStore } from '@/stores/shoppingCart.store'

export const Route = createFileRoute('/shopping-cart/')({
  component: ShoppingCart,
})

function ShoppingCart() {
  const cartItems = useShoppingCartStore((state) => state.cartItems)

  return (
    <div className="h-full p-6">
      <h1 className="font-bold text-2xl text-center mb-6 mt-5">
        Carrinho de Compras
      </h1>

      <div className="flex flex-col gap-5">
        {cartItems.length > 0 &&
          cartItems.map((product) => (
            <ProductListItem
              key={product.id}
              product={product}
              quantity={product.quantity}
            />
          ))}
      </div>
    </div>
  )
}

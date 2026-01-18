import { createFileRoute } from '@tanstack/react-router'
import ProductCard from '@/components/ProductCard'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="border-1 p-12">
      <div className="border-1 h-full pl-6 pr-6 pb-6">
        <h1 className="text-2xl text-center mb-5 mt-5">
          Lista de Produtos - Coloque no Carrinho.
        </h1>

        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
              key={index}
              product={{
                id: index,
                name: `This is a product card - Product ${index + 1}`,
                description: `Descrição do produto com detalhes e características principais - Product ${index + 1}`,
                price: Math.floor(Math.random() * (300 - 50 + 1)) + 50,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

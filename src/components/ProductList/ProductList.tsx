import { Product } from '../../@types/product';

type ProductListProps = {
  products : Product[],
  onProductUpdateQuantity: (id: string, move: 'up'|'down', quantity: number) => void;
  onProductDelete: (id: string) => void
}

export default function ProductList({
  products, onProductUpdateQuantity,onProductDelete
} : ProductListProps) {

  return (
    <section>
      {products.map(product => (
        <ProductListItem {...product}
          key={product.id}
          onUpdateQuantity={onProductUpdateQuantity} 
          onDelete={onProductDelete} />
      ))}
    </section>
  )
}

type ProductListItemProps = Product & {
  onUpdateQuantity: (id: string, move: 'up'|'down', quantity: number) => void;
  onDelete: (id: string) => void
}

function ProductListItem({
  id, name, price, quantity,
  onUpdateQuantity, onDelete
}: ProductListItemProps) {

  const priceFormatted = price.toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol'
  });

  return (
    <article>
      <p>{name} : {quantity}x ({priceFormatted})</p>
      <div>
        <button onClick={() => onUpdateQuantity(id, 'up', 1)}>+1</button>
        <button onClick={() => onUpdateQuantity(id, 'down', 1)}>-1</button>
        <button onClick={() => onDelete(id)}>🗑</button>
      </div>
    </article>
  );
}
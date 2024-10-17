import { useDispatch, useSelector } from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import { StateStore } from '../../store/store';
import { productRemove, productUpdateQuantity } from '../../store/product/product.action';


//! Composant qui consomme les données du store
export default function ProductPage() {

  // Récuperation du dispatcher
  const dispatch = useDispatch();

  // Récuperation des données
  const products = useSelector((state : StateStore) => state.product.products);


  const handleUpdateQuantity = (id: string, move: "up" | "down", quantity: number) => {
    dispatch(productUpdateQuantity({ id, move, quantity }));
  }

  const handleDelete = (id: string) => {
    dispatch(productRemove(id));
  }

  return (
    <>
      <h1>Produits</h1>
      <ProductList products={products}
        onProductUpdateQuantity={handleUpdateQuantity}
        onProductDelete={handleDelete} />
    </>
  );
};
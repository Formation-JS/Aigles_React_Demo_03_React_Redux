import { useDispatch } from 'react-redux';
import { ProductFormData } from '../../@types/product';
import ProductForm from '../../components/ProductForm/ProductForm';
import { productAdd } from '../../store/product/product.action';

//! Composant connecté au store pour envoyé une action
export default function ProductAddForm() {

  //? Récuperation du "dispatcher" du store de Redux
  const dispatch = useDispatch();

  //? Traitement de l'event du form
  const handleProductValided = (product : ProductFormData) => {

    // - Créer l'objet action via l'action creator
    const action = productAdd(product);
    // - On envoie l'action au store via le dispatcher
    dispatch(action);

    // ↓ Idem en une ligne
    // dispatch(productAdd(product));
  }

  return (
    <ProductForm onProductValided={handleProductValided} />
  )
}
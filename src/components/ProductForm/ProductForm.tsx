import { useForm } from 'react-hook-form';
import { ProductFormData } from '../../@types/product';

type ProductFormProps = {
  onProductValided?: (data: ProductFormData) => void
};

export default function ProductForm({ 
  onProductValided = () => {}
}: ProductFormProps) {

  const { register, handleSubmit, reset } = useForm<ProductFormData>({
    defaultValues: {
      name: '', quantity: 0, price: 0
    }
  });

  const handleProductSubmit = (data: ProductFormData) => {
    onProductValided(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleProductSubmit)}>
      <div>
        <label>Nom : </label>
        <input type="text" {...register('name', { required: true })} />
      </div>
      <div>
        <label>Quantité : </label>
        <input type="number" {...register('quantity', { min: 1, required: true })} />
      </div>
      <div>
        <label>Price : </label>
        <input type="number" {...register('price', { min: 1, required: true })} />
      </div>
      <div>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
}
import { useForm } from 'react-hook-form';
import { ProductFormData } from '../../@types/product';

type ProductFormProps = {
  onProductValided?: (data: ProductFormData) => void
};

type ProductInnerForm = {
  name: string;
  price: string;
  quantity: string;
}

export default function ProductForm({ 
  onProductValided = () => {}
}: ProductFormProps) {

  const { register, handleSubmit, reset } = useForm<ProductInnerForm>({
    defaultValues: {
      name: '', quantity: '', price: ''
    }
  });

  const handleProductSubmit = (data: ProductInnerForm) => {
    onProductValided({
      name: data.name,
      price: parseFloat(data.price),
      quantity: parseInt(data.quantity)
    });
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
        <input type="number" step={0.01} {...register('price', { min: 1, required: true })} />
      </div>
      <div>
        <button type="submit">Valider</button>
      </div>
    </form>
  );
}
//! Action creator -> Fonction pour créer l'objet "action"

import { createAction } from '@reduxjs/toolkit';
import { Product, ProductFormData } from '../../@types/product';

// - Ajouter un produit
export const productAdd = createAction('product/add', (product: ProductFormData) => {

  // Création de l'objet "Payload"
  const payload: Product = {
    ...product,
    id: '42',
    createAt: new Date().toISOString(),
    updateAt: new Date().toISOString(),
    isActive: true
  };

  // Le return d'un objet qui contient le payload
  return {
    payload
  };
});

// - Modifier les quantités d'un produit
type ProductActionQuantity = {
  id: string;
  move: 'up' | 'down';
  quantity: number;
};
export const productUpdateQuantity = createAction('product/update-quantity', (data: ProductActionQuantity) => {
  // Ajout de la date d'update dans le payload
  return {
    payload: {
      ...data,
      updateAt: new Date().toISOString()
    }
  };
});

// - Modifier le prix d'un produit
export const productUpdatePrice = createAction('product/update-price', (data: { id: string, price: number }) => {
  return {
    payload: {
      ...data,
      updateAt: new Date().toISOString()
    }
  };
});

// - Changer la disponibilité d'un produit
export const productDispo = createAction<{ id: string, dispo: boolean; }>('product/dispo');

// - Retirer un produit
export const productRemove = createAction<string>('product/remove');

// - Supprimer tous les produits
export const productRemoveAll = createAction('product/remove-all');

import { create } from 'zustand';
import { CartItem, Document } from './types';

interface StoreState {
  language: 'ar' | 'en' | null;
  cart: CartItem[];
  setLanguage: (lang: 'ar' | 'en') => void;
  addToCart: (doc: Document) => void;
  removeFromCart: (docId: string) => void;
  updateQuantity: (docId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  language: null,
  cart: [],
  setLanguage: (lang) => set({ language: lang }),
  addToCart: (doc) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === doc.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === doc.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...doc, quantity: 1 }] };
    }),
  removeFromCart: (docId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== docId),
    })),
  updateQuantity: (docId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === docId ? { ...item, quantity } : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
}));
import { create } from "zustand";

const API_ENDPOINT = "https://fakestoreapi.com/products";

const useProductStore = create((set) => ({
  products: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  fetchProducts: async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      const products = await response.json();
      set({ products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));

export default useProductStore;

import { create } from "zustand"

import { Product } from "../types"

interface State {
	products: Product[]
	isLoading: boolean
	error: any
}

interface Actions {
	fetchData: () => Promise<void>
}

const INITIAL_STATE: State = {
	products: [],
	isLoading: false,
	error: null,
}

export const useProductsStore = create<State & Actions>(set => ({
	products: INITIAL_STATE.products,
	isLoading: INITIAL_STATE.isLoading,
	error: INITIAL_STATE.error,
	fetchData: async () => {
		try {
			set({ isLoading: true, error: null })
			const response = await fetch("https://dummyjson.com/products")
			const data = await response.json()
			set({ products: data.products, isLoading: false })
		} catch (error) {
			set({ error, isLoading: false })
		}
	},
}))

import { useEffect, useState } from "react"

import Header from "@/components/ui/Header"
import Drawer from "@/components/ui/Drawer"
import Cart from "@/components/minicart/Cart"
import ProductList from "@/components/products/ProductList"

import { useProductsStore } from "@/stores/useProductsStore"

export default function Home() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const { products, isLoading, error, fetchData } = useProductsStore()

	useEffect(() => {
		fetchData()
	}, [fetchData])

	const handleCartIconClick = () => {
		setIsDrawerOpen(!isDrawerOpen)
	}

	return (
		<>
			<Header onCartIconClick={handleCartIconClick} />
			<Drawer isOpen={isDrawerOpen} onCartIconClick={handleCartIconClick}>
				<Cart />
			</Drawer>
			<main className='container mx-auto md:w-10/12 py-8 px-4'>
				{isLoading ? <div className='text-center text-lg'>Loading...</div> : <ProductList products={products} />}
			</main>
		</>
	)
}

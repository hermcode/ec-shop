import { useEffect, useState } from "react"

export const useGetProducts = (url) => {
	const [ isLoading, setIsLoading ] = useState(true)
  const [ products, setProducts ] = useState([])

	useEffect(() => {
		setTimeout(() => {
			const getProducts = async() => {
				const data = await fetch(url)
				const response = await data.json()
				setProducts(response)
				setIsLoading(false)
			}
			getProducts()
		}, 4000)
	}, [])

  return {
		products,
		isLoading
	}
}
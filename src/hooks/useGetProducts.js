import { useEffect, useState } from "react"

export const useGetProducts = (url, setIsLoading) => {
  const [ products, setProducts ] = useState([])

	useEffect(() => {
		setTimeout(() => {
			const getProducts = async() => {
				const data = await fetch(url)
				const response = await data.json()
				setProducts(response)
			}
			getProducts()
			setIsLoading(false)
		}, 500)
		
	}, [])

  return products
}
import { useContext } from 'react'
import { ProductContext } from '../Contexts/ProductContext'

export function useProduct() {
    const { products, setSearchResult, searchResult } = useContext(ProductContext)

    function handleSearch(searchInput, category) {
        if (searchInput === "" && category === "") {
            setSearchResult(null);
            return;
        }

        const searched = products.filter(product =>
            searchInput !== ""
                ? product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                  product.category.toLowerCase().includes(searchInput.toLowerCase())
                : product.category.toLowerCase().includes(category.toLowerCase())
        );

        setSearchResult(searched);
    }

    return {
        products,
        searchResult,
        handleSearch
    }
}
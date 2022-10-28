export const loadProducts = async (setProductosFromFetch, setProductsFiltered, setLoading) =>{
    setLoading(true);
    const response = await fetch("https://62cec386826a88972d028bbc.mockapi.io/articles");
    const data = await response.json();
    setProductosFromFetch(data);
    setProductsFiltered(data);
    setTimeout(() => {
        setLoading(false)
    }, 1000);
}


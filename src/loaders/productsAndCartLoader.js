export const productsAndCartLoader = async() => {
  //get products data
  const productsData = await fetch('products.json')
  const products = await productsData.json()
  
  //get cart
  let savedCart = localStorage.getItem('shopping-cart')
  const previousCart = []
    if(savedCart)
    {
      let objectaCart = JSON.parse(savedCart)
      for(const id in objectaCart)
      {
        const addedProduct = products.find(product => product.id === id)
        if(addedProduct)
        {
          const quantity = objectaCart[id]
          addedProduct.quantity = quantity
          previousCart.push(addedProduct)
        }
      }
    }

    return {products : products, previousCart : previousCart}
} 
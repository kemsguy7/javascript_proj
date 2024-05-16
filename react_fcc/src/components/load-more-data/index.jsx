import { useEffect } from 'react'
import { useState } from 'react'
import './styles.css'

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [disabledButton, setDisabledButton] = useState(false)

  async function fetchProducts() {
    //this function fetches the product from an external API
    try {
      setLoading(true)
      const response = await fetch(
        `http://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      )

      const result = await response.json()

      console.log(result)

      if (result && result.products && result.products.length) {
        // setProducts(result.products)
        setProducts((prevData) => [...prevData, ...result.products])
        setLoading(false)
      }
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [count])

  useEffect(() => {
    if (products && products.length === 100) setDisabledButton(true) //if the products on a page are up to 100, disable he load more button
  }, [products])

  if (loading) {
    return <div>Loading data ! Please Wait.</div>
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <div className="button-container">
          <button disabled={disabledButton} onClick={() => setCount(count + 1)}>
            Load More Products
          </button>
          {disabledButton ? <p>You have reached up to 100 products </p> : null}
        </div>
      </div>
    </div>
  )
}

import { useEffect, useState } from 'react'

export default function Cart() {
  const [item, setitem] = useState([null])

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch('/api/cart', {
        method: 'GET',
        body: JSON.stringify({
          limit: 10,
        }),
      })

      return response.json()
    }

    fetchCart().then(([item]) => {
        setitem([item])
    })
  }, [])

  return (
    <div>
      <h1>Your Cart</h1>
      {!item ? '...loading' : <pre>{JSON.stringify(item, null, 2)}</pre>}
    </div>
  )
}
import { useEffect, useState } from 'react'

export default function ImageSlider({ url, limit }) {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchImages(getUrl) {
    try {
      setLoading(true) // before getting data, set loading to true

      const response = await fetch(getUrl)
      const data = await response.json()

      if (data) {
        setImages(data)
        setLoading(false) // after getting data, set loading to false
      }
    } catch (e) {
      setErrorMsg(e.message)
    }
  }

  useEffect(() => {
    if (url !== '') fetchImages(url)
  }, [url])

  if (loading) {
    return <div className="container"> Loading data ! Please Wait ...</div>
  }

  if (errorMsg !== null) {
    return <div> Error Occured ! {errorMsg} </div>
  }

  return <div className="container"></div>
}

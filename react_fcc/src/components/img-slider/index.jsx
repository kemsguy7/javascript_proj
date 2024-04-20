import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchImages(getUrl) {
    try {
      setLoading(true) // before getting data, set loading to true

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()

      if (data) {
        setImages(data)
        setLoading(false) // after getting data, set loading to false
      }
    } catch (e) {
      setErrorMsg(e.message)
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1) // if the current slide is 0, then set it to the last slide else decrement it by 1
  }

  function handleNext() {
    setCurrentSlide(currentSlide ==== images.length - 1 ? 0: currentSlide + 1) // if the current slide is at the last slide, go abck to the first slide, else increment it by 1
  }

  useEffect(() => {
    if (url !== '') fetchImages(url)
  }, [url])

  console.log(images)

  if (loading) {
    return <div className="container"> Loading data ! Please Wait ...</div>
  }

  if (errorMsg !== null) {
    return <div> Error Occured ! {errorMsg} </div>
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className="current-image"
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className="current-indicator"></button>
            ))
          : null}
      </span>
    </div>
  )
}

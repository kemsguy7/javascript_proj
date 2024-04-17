import './App.css'
import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/img-slider'

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      {/* <Accordion /> */}

      {/*  Random color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/*<*StarRating noOfStars={10} /> */}

      {/* Image Slider Component */}
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'1'}
        limit={'10'}
      />
    </div>
  )
}

export default App

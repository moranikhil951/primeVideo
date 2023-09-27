// Write your code here
import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const ActionMovies = moviesList.filter(
    movies => movies.categoryId === 'ACTION',
  )

  const ComedyMovies = moviesList.filter(
    movies => movies.categoryId === 'COMEDY',
  )
  return (
    <div className="Prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={ActionMovies} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={ComedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo

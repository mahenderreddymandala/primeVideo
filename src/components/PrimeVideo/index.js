// Write your code her

import MoviesSlider from '../MoviesSlider'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    each => each.categoryId === actionMovie,
  )

  const comedyMovies = moviesList.filter(
    each => each.categoryId === comedyMovie,
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="prime-video"
      />
      <h1 className="am">Action Movies</h1>
      <MoviesSlider moviesList={actionMovies} />
      <h1 className="am">Comedy Movies</h1>

      <MoviesSlider moviesList={comedyMovies} />
    </div>
  )
}

export default PrimeVideo

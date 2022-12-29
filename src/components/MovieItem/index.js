// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props

  const {thumbnailUrl, id, videoUrl} = movieDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            <img src={thumbnailUrl} alt={id} className="image" />
          </button>
        }
      >
        {close => (
          <>
            <div className="arrange">
              <button
                type="button"
                className="trigger-buttons"
                onClick={() => close()}
              >
                <IoMdClose size="32" />
              </button>

              <div>
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

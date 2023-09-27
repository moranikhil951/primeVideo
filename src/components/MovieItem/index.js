// Write your code here
// Write your code here

import './index.css'

import 'reactjs-popup/dist/index.css'

import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {eachMovie} = props
  return (
    <div className="pop-container">
      <Popup
        modal
        trigger={
          <img
            className="thumbnail"
            src={eachMovie.thumbnailUrl}
            alt="thumbnail"
          />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              data-testid="closeButton"
              type="button"
              className="close-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={eachMovie.videoUrl} controls size="80px" />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

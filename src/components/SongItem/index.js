import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongItem = props => {
  const {songDetails, onDelete} = props
  const {imageUrl, name, id, genre, duration} = songDetails
  const onClickButton = () => {
    onDelete(id)
  }
  return (
    <li className="card-container">
      <div className="image-section">
        <img className="image" src={imageUrl} alt="track" />
        <div className="name-section">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-section">
        <p className="duration">{duration}</p>
        {/* eslint-disable-next-line */}
        <button
          className="del-btn"
          type="button"
          onClick={onClickButton}
          data-testid="delete"
        >
          <AiOutlineDelete color="#ffffff" className="icon" />
        </button>
      </div>
    </li>
  )
}

export default SongItem

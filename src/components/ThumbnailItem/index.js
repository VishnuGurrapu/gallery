// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, updatedImg, isActive} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} =
    imgDetails
  const onClick = () => {
    updatedImg(id)
  }
  const imgClass = isActive ? 'activeImgClass' : 'inactiveImgClass'
  return (
    <li className="item">
      <button className="btn">
        <img
          onClick={onClick}
          src={thumbnailUrl}
          className={`thumbnail ${imgClass}`}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem

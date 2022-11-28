const Card = ({image, children}) => {

  return (
    <div className="card">
      {image && <img src={image} className="card-img-top" alt="..." />}
      <div className="card-body">
        {children}
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Card;
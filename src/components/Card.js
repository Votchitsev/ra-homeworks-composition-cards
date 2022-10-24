/* eslint-disable jsx-a11y/anchor-is-valid */

function Card(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      { props.children }
      <div className="card-body">
        <h5 className="card-title">{ props.title }</h5>
        <p className="card-text">{ props.text }</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Card;

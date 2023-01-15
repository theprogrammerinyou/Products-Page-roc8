import 'styles/productCard.css';

export function ProductCard(props) {
  const { title, price, image, description, brand } = props;

  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="product" width="150" />
      </div>
      <div className="card-content">
        <div className="card-brand">
          <h3>{brand}</h3>
        </div>
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-description">
          <h4>{description}</h4>
        </div>
        <div className="card-price">
          <h4>
            Price:
            <span>
              <i className="fa-light fa-indian-rupee-sign" />
            </span>
            {price}
          </h4>
        </div>
      </div>
    </div>
  );
}

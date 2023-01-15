import 'styles/Header.css';

export function Header() {
  return (
    <div className="container">
      <div />
      <div className="nav-container">
        <div className="img-container">
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="logo"
            width="75"
          />
          <p>
            Explore{' '}
            <span>
              Plus
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                width="10"
                alt="plus-icon"
              />
            </span>
          </p>
        </div>
        <div className="search-container">
          <input id="search" placeholder="Search for products, brands and more" type="text" />
          <span>
            <i className="fa-solid icon fa-magnifying-glass" />{' '}
          </span>
        </div>
        <div className="btn-container">
          <button id="login-btn" type="submit">
            Login
          </button>
        </div>
        <div>
          <h4 className="title">Become a Seller</h4>
        </div>
        <div className="more-container">
          <h4 className="title">More</h4>
          <span>
            <svg
              width="4.7"
              height="8"
              viewBox="0 0 16 27"
              className="more-icon"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                fill="#fff"
                className="more-icon-fill"
              />
            </svg>
          </span>
        </div>
        <div className="cart-container">
          <span>
            <i className="fa-solid fa-cart-shopping" />
          </span>
          <h4 className="title">Cart</h4>
        </div>
      </div>
      <div />
    </div>
  );
}

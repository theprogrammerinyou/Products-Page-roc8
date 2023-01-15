import { ProductCard } from 'components/ProductCard';
import 'styles/productPage.css';
import { products } from 'products';

export function ProductPage() {
  return (
    <div className="product-container">
      {products.length > 0 &&
        products.map(({ Name, Price, Brand, image, id, Description }) => {
          return (
            <ProductCard
              key={id}
              brand={Brand}
              title={Name}
              description={Description}
              image={image}
              price={Price}
            />
          );
        })}
    </div>
  );
}

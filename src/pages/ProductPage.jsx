import { ProductCard } from 'components/ProductCard';
import 'styles/productPage.css';
import { useProductContext } from 'context/product-context';

export function ProductPage() {
  const { product } = useProductContext();

  return (
    <div className="product-container">
      {product.length > 0 &&
        product.map(({ Name, Price, Brand, image, id, Description }) => {
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

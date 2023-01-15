import { Filters } from 'components/Filters';
import { Header } from 'components/Header';
import { ProductPage } from 'pages/ProductPage';
import { ProductProvider } from 'context/product-context';
import './styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <ProductProvider>
        <div className="content-container">
          <Filters />
          <ProductPage />
        </div>
      </ProductProvider>
    </div>
  );
}

export default App;

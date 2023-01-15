import { Filters } from 'components/Filters';
import { Header } from 'components/Header';
import { ProductPage } from 'pages/ProductPage';
import './styles/App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <Filters />
        <ProductPage />
      </div>
    </div>
  );
}

export default App;

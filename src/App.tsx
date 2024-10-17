import './App.css'
import Header from './containers/Header/Header';
import ProductAddForm from './features/Product/ProductAddForm';
import ProductPage from './features/Product/ProductPage';

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>Demo de Redux</h1>
        <ProductAddForm />
        <hr />
        <ProductPage />
      </main>
    </>
  )
}

export default App

import './App.css';
import Catalog from './components/Catalog.js';
import CategoryFilters from './components/CategoryFilters';

function App() {
  return (
    <div className="App">
      <CategoryFilters />
      <Catalog />
    </div>
  );
}

export default App;

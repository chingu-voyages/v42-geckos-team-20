import './App.css';

import Catalog from './components/Catalog.js';
import Heading  from './components/Heading.js';
import CategoryFilters from './components/CategoryFilters';

function App() {
  return (

    <div className="App">
      <Heading />
      <CategoryFilters />
      <Catalog />
    </div>
  );
}

export default App;

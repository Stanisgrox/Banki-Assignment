import { ProductList } from './components/productlist';
import { SearchBox } from './components/searchbox';
import { SortInput } from './components/sorting';

function App() {
  return (
    <div className="App">
      <div className='max-w-4xl mr-auto ml-auto pl-2 pr-2'>
        <SearchBox />
        <SortInput />
        <ProductList />
      </div>
    </div>
  );
}

export default App;

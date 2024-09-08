import { ProductCard } from './components/productcard';
import { SearchBox } from './components/searchbox';
import { SortInput } from './components/sorting';

function App() {
  return (
    <div className="App">
      <div className='max-w-4xl mr-auto ml-auto pl-2 pr-2'>
        <SearchBox />
        <SortInput />
        <ProductCard 
          amount = {1000}
          name = 'Т-Банк'
          logo = "//static3.banki.ru/ugc/d4/e8/54/40/195706.png"
        />
      </div>
    </div>
  );
}

export default App;

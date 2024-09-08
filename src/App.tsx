import { useEffect } from 'react';
import { ProductList } from './components/productlist';
import { SearchBox } from './components/searchbox';
import { SortInput } from './components/sorting';
import { useAppDispatch } from './hooks/redux';
import { productsSlice } from './store/reducers/ProductSlice';

/*
  Главная страница App.

  Тут помимо общей раскладки приложения выполняется считывание параметров из ссылки, если вдруг пользователь перешел по ней.
  sorting - вид сортировки (ASC/DESC)
  filter - минимальная сумма для поиска

  Если эти значения присутствуют в ссылке, они отправляются в Reducer.
*/

function App() {

  const {setFilter, setSorting} = productsSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {

    if (window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);
      const sorting = urlParams.get('sort');
      const filter = urlParams.get('filter');

      if (filter) dispatch(setFilter(filter));
      if (sorting) dispatch(setSorting(sorting));
    }

  })

  return (
    <div className="App">
      <div className='max-w-4xl mr-auto ml-auto pl-2 pr-2 pb-16'>
        <SearchBox />
        <SortInput />
        <ProductList />
      </div>
    </div>
  );
}

export default App;

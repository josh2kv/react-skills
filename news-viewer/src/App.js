import React, { useCallback, useState } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');

  // onSelect를 사용하는 해당 Component<Categories>에서 정의하지 않고 상위 Component<App>에서 선언해서 내려 보내는 이유?
  // <Categories>와 <NewsList>에서 사용하는 state를 업데이트 하기 위해
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <main>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </main>
  );
};

export default App;

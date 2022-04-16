import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '52b9bba7db644f99a7f030b0098452c9';
const App = () => {
  const [data, setData] = useState('');

  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
      );

      setData(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <main>
      <div>
        <button onClick={onClick}>Load</button>
      </div>
      <div>
        {data && <textarea rows="7" value={JSON.stringify(data, null, 2)} />}
      </div>
    </main>
  );
};

export default App;

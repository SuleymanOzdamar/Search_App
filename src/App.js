import { createContext, useState } from 'react';
import Images from './components/Images';
import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import useAxios from './hooks/useAxios';


export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');

  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=person&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const values = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value = {values}>
      <Jumbutron>
        <SearchField/>
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;

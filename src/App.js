import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import { AppContext } from './context/contextApi';
import Header from '../src/components/Header'
import Feed from '../src/components/Feed'
import SearchResult from '../src/components/SearchResult'
import VideoDetails from '../src/components/VideoDetails'

function App() {
  return (
   <AppContext>
    <BrowserRouter>
    <div className='flex flex-col h-full'>
      <Header/>
      <Routes>
        <Route path='/'exact element={<Feed/>}/>
        <Route path='/searchResult/:searchQuery'exact element={<SearchResult/>}/>
        <Route path='/video/:id' exact element={<VideoDetails/>}/>
      </Routes>
    </div>
    </BrowserRouter>
   </AppContext>
  );
}

export default App;

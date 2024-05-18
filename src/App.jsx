import './App.css';
import { Home } from './components/Home/Home';
import { MiniAppView } from './components/MiniAppView/MiniAppView';
import { PlayNow } from './components/PlayNow/PlayNow';

function App() {

  return (
    <>
      <PlayNow />
      <MiniAppView />
      <Home />
    </>
  );
}

export default App;

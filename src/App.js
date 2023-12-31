import logo from './logo.svg';
import './App.css';
import List from './components/List';
import SongDetails from './components/SongDetails';
import { useSelector } from 'react-redux';
import EditSong from './components/EditSong';

function App() {
  let selected = useSelector(sta => sta.selectedSong)
  let selectedForEdit = useSelector(sta => sta.selectedSongForEdit)
  return (<>
    <List />
    {selected && <SongDetails />}
    {selectedForEdit && <EditSong />}

  </>
  );
}

export default App;

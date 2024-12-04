import { useAppContext } from './store/AppContext'
import AppRouter from './AppRouter';
import ContactCard from './components/ContactCard';

function App() {

  const {store,actions} = useAppContext();
  return (
    <>
    <AppRouter/>
    </>
  )
}

export default App

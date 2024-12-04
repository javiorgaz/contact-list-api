import { createRoot } from 'react-dom/client'
import injectContext from './store/AppContext.jsx'
import App from './App.jsx';
const AppWithContext = injectContext(App);

createRoot(document.getElementById('root')).render(<AppWithContext />)

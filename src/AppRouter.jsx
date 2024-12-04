import AddContact from './pages/AddContact'
import Contacts from "./pages/Contacts"
import ErrorPage from './pages/ErrorPage'
import { BrowserRouter,Routes,Route } from 'react-router'
import UpdateContact from './pages/UpdateContact'

const AppRouter = () => {

    return(
        <BrowserRouter basename=''>
            <Routes>
                <Route path='/' element = {<AddContact/>}></Route>
                <Route path='/contact-list' element = {<Contacts/>}></Route>
                <Route path= {'/update-list/:id'} element = {<UpdateContact/>}></Route>
                <Route path='/*' element = {<ErrorPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default AppRouter;
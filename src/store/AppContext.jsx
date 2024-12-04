import { createContext, useContext,useState,useEffect } from "react";
import getState from './flux.jsx';

const Context = createContext(null);

//provider
export const injectContext = (PassedComponents) => {
    const storeWrapper = (props) => {
        //esto se pasara como el valor del contexto
        const[state,setState] = useState(
            
            getState({
                //nos devuelve los valores del store
                getStore : () => state.store,
                //nos devuelve los valores de actions
                getActions : () => state.actions,
                //setStore recibe un objeto con la clave a modificar y actualiza el store
                setStore : (updatedStore) => 
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: {...state.actions}
                    })
            })
        );

        useEffect(() => {

        },[]);

        return (
            <Context.Provider value = {state}>
                <PassedComponents {...props}/>
            </Context.Provider>
        );
    };
    return storeWrapper
}

export const useAppContext = () => useContext(Context);

export default injectContext;

//revisar
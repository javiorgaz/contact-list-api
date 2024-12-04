import ContactCard from "../components/ContactCard";
import { Link } from "react-router";
import { useAppContext } from "../store/AppContext";
import './Contacts.css'
import { useEffect } from "react";

const Contacts = () => {

    const {store,actions} = useAppContext();

    useEffect(() => {
        actions.getApi();
    },[])

    return(
        <>
        <div className="contact-wrapper">
        <div className="header">
            <Link className="newContact" to={'/'}>Add new Contact</Link>
        </div>
        <div>
            {store.contactList.map((item,index) => {
                return <ContactCard id = {item.id} index={index} name = {item.name} email = {item.phone} phone = {item.email} address = {item.address}/>
            })}
        </div>
        </div>
        </>
    )

}

export default Contacts;
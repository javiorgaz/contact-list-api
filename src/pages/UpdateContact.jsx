import { useState,useEffect } from "react";
import { Link,Navigate,useNavigate,useParams } from "react-router";
import { useAppContext } from "../store/AppContext";


const UpdateContact = () => {

    const {store,actions} = useAppContext();
    const {id} = useParams();
    
    const navigate = useNavigate();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');

    useEffect(() => {
        const contact = store.contactList.find(contact => contact.id === id)   
        if(contact){
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setAddress(contact.address);
        }
    },[id,store.contactList]);

    const handleSubmit = async(e) => {
        e.preventDefault()
        await actions.updateContact(id,name,email,phone,address)
        await actions.getApi()
        navigate('/contact-list')
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <h1>Update Contact</h1>
        <div className="name-input">
            <p>Full name</p>

            <input 
            type="text" 
            value={name}
            placeholder = "Enter name"
            onChange = {(e) => setName(e.target.value)}
            required
            />

        </div>
        <div className="email-input">
            <p>Email</p>
            <input 
            type="text" 
            value={email}
            placeholder="Enter email"
            onChange = {(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className="phone-input">
            <p>Phone</p>
            <input 
            type="text" 
            value={phone}
            placeholder="Enter phone"
            onChange = {(e) => setPhone(e.target.value)}
            required
            />
        </div>
        <div className="address-input">
            <p>Address</p>
            <input 
            type="text"
            value={address}
            placeholder="Enter address"
            onChange = {(e) => setAddress(e.target.value)}
             />
        </div>

        <div>
            <button type="submit">Update Contacts</button>
        </div>

        <Link to={'/contact-list'}>Go to contacts</Link>
        </form>

        </>
    )

}

export default UpdateContact;
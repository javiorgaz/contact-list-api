import { useState } from "react";
import { Link } from "react-router";
import { useAppContext } from "../store/AppContext";


const AddContact = () => {

    const {store,actions} = useAppContext();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');

    const handleSubmit = async() => {

        const success = await actions.addContact(name,email,phone,address);

        if(success){

            setName('');
            setEmail('');
            setPhone('');
            setAddress('');

            actions.getApi();

            alert('Campos añadidos correctemente!')
        }else{
            alert('Ha habido algun problema...')
        }

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <h1>Add a new contact</h1>
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
            <button type="submit">Submit</button>
        </div>

        <Link to={'/contact-list'}>Go to contacts</Link>
        </form>

        <button onClick={actions.getApi}>Boton pruebas...</button>
        </>
    )

}

export default AddContact;
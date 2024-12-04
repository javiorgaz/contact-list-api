import { useEffect } from "react";
import { useAppContext } from "../store/AppContext";
import { Link } from "react-router";

const ContactCard = ({id,index,name,email,phone,address}) => {

    const {store,actions} = useAppContext();


    return(
        <div className="contact-card">
            <div className="contact-image">
                <img src={'contact_image.jpg'}></img>
            </div>
            

            <div className="contact-body">              
                <h3>{name}</h3>

                <div className="address">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{address}</p>
                </div>

                <div className="telephone">
                    <i className="fa-solid fa-phone"></i>
                    <p>+34 {phone}</p>
                </div>
                
                <div className="email">
                    <i className="fa-solid fa-envelope"></i>
                    <p>{email}</p>
                </div>
            </div>


            <div className="delete-edit-container">
                <Link to = {`/update-list/${id}`}
                className="fa-solid fa-pencil"
                onClick={() => {
                
                }}
                ></Link>
                <i 
                className="fa-solid fa-trash"
                onClick={() => {
                    actions.deleteContact(store.contactList[index].id)
                    actions.getApi();
                }}
                ></i>
            </div>


        </div>
    )

}

export default ContactCard;
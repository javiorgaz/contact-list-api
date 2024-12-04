const getState = ({getStore, getActions , setStore}) => {

    const slug = '/clientes';

    //devuelve un objeto con store y actions
    return {
        store: {
            contactList:[],
        },

        actions: {

            //actualizamos el array a traves de la API
            getApi: async() => {
                try {
                    const result = await fetch(`https://playground.4geeks.com/contact/agendas${slug}`)
                    if(!result.ok){
                        throw new Error ('Error...')
                    }
                    const data = await result.json();
                    const newArray = data.contacts;
                    setStore({contactList : newArray});
                } catch (error) {
                    console.log('Error obteniendo API')
                }
            },

            //añadir contacto
            addContact : async(name,phone,email,address) => {

                const body = {
                    "name": name,
                    "phone": phone,
                    "email": email,
                    "address": address
                }

                try {
                    const result = await fetch(`https://playground.4geeks.com/contact/agendas${slug}/contacts`,
                        {
                            method : 'POST',
                            headers : {
                                'accept' : 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body : JSON.stringify(body)

                        }
                    )
                    
                    if(!result.ok){
                        throw new Error ('No se ha realizado la peticion correctamente')
                    }

                    return true;

                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            //---------------------------------------------------

            //eliminar contacto
            deleteContact : async(id) => {

                try {
                    const result = await fetch(`https://playground.4geeks.com/contact/agendas${slug}/contacts/${id}`,
                        {
                            method : 'DELETE',
                            headers : {
                                'accept' : 'application/json',
                            },

                        }
                    )
                    
                    if(!result.ok){
                        throw new Error ('No se ha realizado la peticion correctamente')
                    }

                } catch (error) {
                    console.log(error);
                }
            },

            updateContact : async(id,name,phone,address,email) => {
                
                const body = {
                    "name": name,
                    "phone": phone,
                    "email": email,
                    "address": address
                }

                try {
                    const result = await fetch(`https://playground.4geeks.com/contact/agendas${slug}/contacts/${id}`,{
                        method: 'PUT',
                        headers:{
                            'accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body),
                    })
                        
                    if(!result.ok){
                        throw new Error ('ERROR DE LA LLAMADA A LA API')
                    }
                    
                } catch (error) {
                    console.log('ERROR ACTUALIZANDO EL CONTANTO')
                }
            }

            

            
        }
    };
};

export default getState;

// curl -X 'GET' \
//   'https://playground.4geeks.com/contact/agendas/clientes' \
//   -H 'accept: application/json'


// curl -X 'POST' \
//   'https://playground.4geeks.com/contact/agendas/clientes/contacts' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "name": "pedro",
//   "phone": "9131",
//   "email": "pedro@gmail.com",
//   "address": "toledo"
// }'


// curl -X 'PUT' \
//   'https://playground.4geeks.com/contact/agendas/clientes/contacts/40' \
//   -H 'accept: application/json' \
//   -H 'Content-Type: application/json' \
//   -d '{
//   "name": "string",
//   "phone": "string",
//   "email": "string",
//   "address": "string"
// }'


// curl -X 'DELETE' \
//   'https://playground.4geeks.com/contact/agendas/clientes/contacts/40' \
//   -H 'accept: application/json'
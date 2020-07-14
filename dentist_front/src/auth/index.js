import { API } from '../config'; 

export const appointCreate = appoint => {
    return fetch(`${API}/appointmentCreate`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appoint)
        
    })
        .then
        (response => {
            console.log(response)
            console.log("hey1")
            return response.json();
        })
        .catch(err => {
            console.log("hey2")
            console.log(err);
        });
};


 export const getTimes = (time) => {
     return fetch(`${API}/slots/${time}`, {
        method: 'GET'
     })
     .then(response => {
         return response.json();

     })
     .catch(err => {
        console.log(err);
    });
 }

import React, {useState} from "react"

import {appointCreate, getTimes} from '../auth'





const Booking = () => {

    let hora = ["07:00","07:30","08:00","08:30","09:00", "09:30",
    "10:00", "10:30", "11:30", "14:00", "14:30", "15:00",
    "15:30", "16:00", "16:30", "17:00", "17:30"]
    let horaBooked = []
    let horaUpdate = []

    

    const [values, setValues] = useState({
        horaPicked: [],
        name: "",
        email: "",
        phone: "",
        slot_date: "",
        slot_time: "",
        error: "",
        msg:"",
        msgW:"",
        success: false,
        loading: false,
        redirectToReferrer: false
    });

    const { horaPicked, name, email, phone, slot_date, slot_time, loading, error, msg, msgW, success } = values;
    

    const handleChange = name => event => {
        event.preventDefault();
        setValues({ ...values, error: false, msg: false, msgW: false, [name]: event.target.value });
    };

    const setDate = (event) => {
        event.preventDefault();
        //console.log(event.target.value)
        if([6,0].indexOf(new Date(event.target.value).getUTCDay()) !== -1){
        

            setValues({
                ...values,
                msgW: true,
                horaPicked: []
                
            });

            
        }
        else {
        setValues({
            ...values,
            slot_date: event.target.value,
            msgW: false
            
        });
      }
    }


    const compare = (a,b) => {
        
        a = a.filter(val => !b.includes(val))
        return a

    }
    
    const clickDate = event => {
        event.preventDefault();
        getTimes(slot_date).then(data => {
            
            if(data === undefined || data.err) {
                //console.log(error),
                
                setValues({
                    ...values,
                    error: "Por favor escolha uma data"
                    
                  });

                
            } else {

                data.map((d,i) => (
                    horaBooked.push(d.slot_time)
                ))
                
                return horaUpdate= compare(hora,horaBooked),

                //console.log(horaUpdate),
                
                setValues({
                    ...values,
                    horaPicked: horaUpdate,
                    error: false,
                    msgW: false
                    
                  });

                }
                
        })
    }




    const setHora = (event) => {
        event.preventDefault();
        setValues({
            ...values,
            slot_time: event.target.value,
            msg: true
        });
    }
    

    let obr = "Os campos Nome Completo e Email são obrigatórios. Por favor, complete-os e confirme novamente sua consulta."

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        appointCreate({ name, email, phone, slot_date, slot_time }).then(data => {
            if (data.err) {
                
                setValues({ ...values, error: obr, loading: false });
            } else {
                    
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        phone: '',
                        slot_date: '',
                        slot_time: '',
                        error: '',
                        msg: '',
                        success: true
                    });
                
            }
        });
    };

    const showMsgW = () => {
        
            return <div className="alert alert-info"
            style={{ display: msgW ? "" : "none" }}>
                Desculpa, não fazemos marcações online para finais de semana
                </div>;
        
    };


    const showMsg = () => {
        
            return <div className="alert alert-info"
            style={{ display: msg ? "" : "none" }}><h4 >Você deseja confirmar a 
                marcação da consulta par o dia {slot_date} às {slot_time}?</h4>
                <button onClick={clickSubmit}>Sim, confirmar consulta.</button>
                </div>;
        
    };

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );


    const showSuccess = () => (
        <div className="alert alert-success" style={{ display: success ? '' : 'none' }}>
            Sua consulta foi marcada com sucesso.
        </div>
    );
    



    const appointForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Nome Completo</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>    

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control"
                    value={email}
                    required={true}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Telefone</label>
                <input
                    onChange={handleChange("phone")}
                    type="tel"
                    className="form-control"
                    value={phone}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Data</label>
                <input
                    
                    onChange={setDate}
                    
                    type="date"
                    
                    className="form-control"
                    value={slot_date}
                    
                    
                />
            </div>

            <button onClick={clickDate} className="btn btn-primary">
                Verifique horários
            </button>

            <div>
            
                
                {
                    horaPicked.map((h,i) => (
                        <button onClick={setHora} value={h} key={i}>{h}</button>
                 
                     ))
                }

                
            
            </div>

           
            
            {/* {JSON.stringify(slot_date)}
            {JSON.stringify(slot_time)} 
            {console.log(slot_time)}
            {console.log(slot_date)} */}

        </form>
    );

        



    return (

        
        
        <div>
       

                

                <div className="col-md-12">

                {appointForm()}
                {showError()}
                {showSuccess()}
                {showMsg()}
                {showMsgW()}

                   
                </div>

                 
 
      
        </div>    
        
    



        
    )
}

export default Booking;
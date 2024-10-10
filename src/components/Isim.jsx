import { IsimDiv, IsimSoyisimInput, Not, TextArea } from "../styles";
import { useState } from "react";

export default function Isim() {
    
    const NameSurnameForm = {
        name: "",
        surname: ""
    };

    
    const nameErrorMessages = {
        nameError: "İsiminizi en az 3 karakter giriniz",
        surnameError: "Soyisiminizi en az 3 karakter giriniz" 
    };

    
    const [NameSurnameState, setNameSurnameState] = useState(NameSurnameForm);
    const [NameSurnameErrorsState, setNameSurnameErrorsState] = useState({
        name: false,
        surname: false,
    });

    
    const handleChangeNameSurname = (event) => {
        const { name, value } = event.target;
        setNameSurnameState({ ...NameSurnameState, [name]: value }); 

        
        if (name === "name") {
            setNameSurnameErrorsState({ ...NameSurnameErrorsState, [name]: value.trim().length < 3 });
        }

        if (name === "surname") { 
            setNameSurnameErrorsState({ ...NameSurnameErrorsState, [name]: value.trim().length < 3 });
        }
    }

    return (
        <Not>
            <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Sipariş Notu</h1>
            <IsimDiv>
                <label htmlFor="name">İsim:</label>
                <IsimSoyisimInput 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder="İsminizi giriniz" 
                    onChange={handleChangeNameSurname} 
                    value={NameSurnameState.name}
                />
                {NameSurnameErrorsState.name && <p style={{ color: "red" }}>{nameErrorMessages.nameError}</p>}
                
                <label htmlFor="surname">Soyisim:</label>
                <IsimSoyisimInput 
                    type="text" 
                    id="surname"
                    name="surname" 
                    placeholder="Soyisminizi giriniz" 
                    onChange={handleChangeNameSurname} 
                    value={NameSurnameState.surname}
                />
                {NameSurnameErrorsState.surname && <p style={{ color: "red" }}>{nameErrorMessages.surnameError}</p>} 
            
                <TextArea type="textarea" placeholder="Siparişine eklemek istediğin bir not var mı?" />
            </IsimDiv>
        </Not>
    );
}

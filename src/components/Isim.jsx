import { IsimDiv, IsimSoyisimInput, Not, TextArea } from "../styles";
import { useState } from "react";

export default function Isim(props) {
    const {handleChangeNameSurname, NameSurnameState, NameSurnameErrorsState, nameErrorMessages} = props;
    

    
    

    
    
    

    
    
    // console.log(NameSurnameState)
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
                <label htmlFor="note">Notunuz:</label>
                <TextArea type="textarea" placeholder="Siparişine eklemek istediğin bir not var mı?" id="note" name="note" onChange={handleChangeNameSurname} value={NameSurnameState.note}/>
            </IsimDiv>
        </Not>
    );
}

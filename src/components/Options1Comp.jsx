import { useState } from "react";
import { Boyut, BoyutOption, Hamur, HamurOption, Options1 } from "../styles";

export default function Options1Comp() {

    const[isCheckedSize, setIsCheckedSize] = useState()
        
    const handleChangeSize = (event) => {
        
        const {value} = event.target

        setIsCheckedSize(value)
     
        console.log(isCheckedSize)
        
    }

    return(

        <Options1>
                <Boyut>
                    <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Boyut Seç</h1>
                    <BoyutOption>
                        <label htmlFor="kucuk"><input type="radio" name="boyut" id="kucuk" onChange={handleChangeSize}/>Küçük</label>
                        <label htmlFor="orta"><input type="radio" name="boyut" id="orta" onChange={handleChangeSize}/>Orta</label>
                        <label htmlFor="buyuk"><input type="radio" name="boyut" id="buyuk" onChange={handleChangeSize}/>Büyük</label>
                    </BoyutOption>
                </Boyut>
                <Hamur>
                    <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Hamur Seç</h1>
                    <HamurOption>
                        <select name="" id="">
                            <option value="">Hamur Kalınlığı</option>
                            <option value="">İnce</option>
                            <option value="">Normal</option>
                        </select>
                    </HamurOption>
                </Hamur>
            </Options1>
    )
}
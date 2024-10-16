import { useState } from "react";
import { Boyut, BoyutOption, Hamur, HamurOption, Options1 } from "../styles";

export default function Options1Comp(props) {

    const {CheckedSize, handleChangeSize, handleChangeThickness} = props;

    return(

        <Options1>
                <Boyut>
                    <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Boyut Seç</h1>
                    <BoyutOption>
                        <label htmlFor="kucuk"><input type="radio" name="boyut" id="kucuk" onChange={handleChangeSize} value="small" checked={CheckedSize === "small"}/>Küçük</label>
                        <label htmlFor="orta"><input type="radio" name="boyut" id="orta" onChange={handleChangeSize} value="medium" checked={CheckedSize === "medium"}/>Orta</label>
                        <label htmlFor="buyuk"><input type="radio" name="boyut" id="buyuk" onChange={handleChangeSize} value="large" checked={CheckedSize === "large"}/>Büyük</label>
                    </BoyutOption>
                </Boyut>
                <Hamur>
                    <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Hamur Seç</h1>
                    <HamurOption>
                        <select onChange={handleChangeThickness}>
                            <option value="thin">İnce</option>
                            <option value="thick">Normal</option>
                        </select>
                    </HamurOption>
                </Hamur>
            </Options1>
    )
}
import { useState } from "react";
import { Arttır, Azalt, Sayı, SiparisSayı } from "../styles";

export default function IncDecComp(props) {

    const {pizzaNumber, pizzaNumberDec, pizzaNumberInc} = props;

    return(
        <SiparisSayı>
                    <Azalt onClick={pizzaNumberDec}>-</Azalt>
                    <Sayı>{pizzaNumber}</Sayı>
                    <Arttır onClick={pizzaNumberInc}>+</Arttır>
                </SiparisSayı>
    )
}
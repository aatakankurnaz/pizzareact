import { useState } from "react";
import { AltKısım } from "../styles";
import Amount from "./Amount";
import IncDecComp from "./IncDecComp";

export default function LowerComponent(props) {

    const {price, selectedIngredientsState, CheckedSize, errorIngredientsState, pizzaName, selectedThickness, NameSurnameState} = props;

    const [pizzaNumber, setPizzaNumber] = useState(1)

    const pizzaNumberInc = () => {
        setPizzaNumber((prev) => prev + 1)
    }

    const pizzaNumberDec = () => {
        setPizzaNumber((prev) => prev > 1 ? prev - 1 : prev)
        }
    

    return(

        <AltKısım>
                <IncDecComp pizzaNumberDec={pizzaNumberDec} pizzaNumber={pizzaNumber} pizzaNumberInc={pizzaNumberInc}/>
                <Amount price={price} NameSurnameState={NameSurnameState} selectedThickness={selectedThickness} selectedIngredientsState={selectedIngredientsState} pizzaNumber={pizzaNumber} CheckedSize={CheckedSize} errorIngredientsState={errorIngredientsState} pizzaName={pizzaName}/>
                
        </AltKısım>
    )
}
import { useState } from "react";
import { AltKısım } from "../styles";
import Amount from "./Amount";
import IncDecComp from "./IncDecComp";

export default function LowerComponent(props) {

    const {price, selectedIngredientsState} = props;

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
                <Amount price={price} selectedIngredientsState={selectedIngredientsState} pizzaNumber={pizzaNumber}/>
                
        </AltKısım>
    )
}
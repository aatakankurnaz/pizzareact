import { SonucYazi, } from "../styles";
import SelectedIncAmount from "./SelectedIncAmount";
import TotalAmount from "./TotalAmount";

export default function AmountDetail(props) {

    const {price, selectedIngredientsState, pizzaNumber, selectedTotalAmount, finalTotalAmount} = props;

     
    
    
    return(
    <SonucYazi>
        <SelectedIncAmount selectedIngredientsState={selectedIngredientsState} selectedTotalAmount={selectedTotalAmount}/>
        <TotalAmount price={price} selectedTotalAmount={selectedTotalAmount} pizzaNumber={pizzaNumber} finalTotalAmount={finalTotalAmount}/>
    </SonucYazi>
    )
}
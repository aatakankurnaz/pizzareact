import { SonucYazi, } from "../styles";
import SelectedIncAmount from "./SelectedIncAmount";
import TotalAmount from "./TotalAmount";

export default function AmountDetail(props) {

    const {price, selectedIngredientsState, pizzaNumber} = props;

    const selectedTotalAmountCalc = () => {
        return(selectedIngredientsState.length * 5) * pizzaNumber
        } 
    
    const selectedTotalAmount = selectedTotalAmountCalc()

    return(
    <SonucYazi>
        <SelectedIncAmount selectedIngredientsState={selectedIngredientsState} selectedTotalAmountCalc={selectedTotalAmountCalc()}/>
        <TotalAmount price={price} selectedTotalAmount={selectedTotalAmount} pizzaNumber={pizzaNumber}/>
    </SonucYazi>
    )
}
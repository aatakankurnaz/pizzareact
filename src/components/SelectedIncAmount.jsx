import { Secimler } from "../styles";

export default function SelectedIncAmount(props) {

    const {selectedIngredientsState, selectedTotalAmountCalc} = props;


    return(
        <Secimler>
            <p style={{ color: "#5F5F5F", fontWeight: "bold" }}>Seçimler</p>
            <p style={{ color: "#5F5F5F", fontWeight: "bold" }}>{`${selectedTotalAmountCalc}₺`}</p>
        </Secimler>
    )
}
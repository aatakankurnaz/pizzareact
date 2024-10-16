import { Secimler } from "../styles";

export default function SelectedIncAmount(props) {

    const {selectedIngredientsState, selectedTotalAmount} = props;


    return(
        <Secimler>
            <p style={{ color: "#5F5F5F", fontWeight: "bold" }}>Seçimler</p>
            <p style={{ color: "#5F5F5F", fontWeight: "bold" }}>{`${selectedTotalAmount}₺`}</p>
        </Secimler>
    )
}
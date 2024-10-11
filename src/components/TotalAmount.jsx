import { Toplam } from "../styles";

export default function TotalAmount(props) {

    const {price, selectedTotalAmount, pizzaNumber} = props;

    const finalTotalAmount = Number(price) * pizzaNumber + Number(selectedTotalAmount || 0)
    return(

        <Toplam>
            <p style={{ fontWeight: "bold", color: "#CE2829" }}>Toplam</p>
            <p style={{ fontWeight: "bold", color: "#CE2829" }}>{finalTotalAmount.toFixed(2)}₺</p>
        </Toplam>
    )
}
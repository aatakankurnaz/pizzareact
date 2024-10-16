import { Toplam } from "../styles";

export default function TotalAmount(props) {

    const {finalTotalAmount} = props;

    
    return(

        <Toplam>
            <p style={{ fontWeight: "bold", color: "#CE2829" }}>Toplam</p>
            <p style={{ fontWeight: "bold", color: "#CE2829" }}>{finalTotalAmount.toFixed(2)}₺</p>
        </Toplam>
    )
}
import { Toplam } from "../styles";

export default function TotalAmount(props) {

    const {formattedPrice} = props;

    return(

        <Toplam>
            <p style={{ fontWeight: "bold", color: "#CE2829" }}>Toplam</p>
            <p style={{ fontWeight: "bold", color: "#CE2829" }}>{formattedPrice}</p>
        </Toplam>
    )
}
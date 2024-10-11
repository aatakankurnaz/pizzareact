export default function PriceValue(props) {
    const {formattedPrice} = props;
    

    return(<p style={{ fontWeight: "bold", fontSize: "26px" }}>{formattedPrice}</p>)
}
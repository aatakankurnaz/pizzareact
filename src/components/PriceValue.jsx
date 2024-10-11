export default function PriceValue(props) {
    const {price} = props;
    

    return(<p style={{ fontWeight: "bold", fontSize: "26px" }}>{Number(price).toFixed(2)}₺</p>)
}
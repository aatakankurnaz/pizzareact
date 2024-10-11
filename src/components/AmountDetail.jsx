import { SonucYazi, } from "../styles";
import SelectedIncAmount from "./SelectedIncAmount";
import TotalAmount from "./TotalAmount";

export default function AmountDetail(props) {

    const {formattedPrice} = props;

    return(
    <SonucYazi>
        <SelectedIncAmount />
        <TotalAmount formattedPrice={formattedPrice}/>
    </SonucYazi>
    )
}
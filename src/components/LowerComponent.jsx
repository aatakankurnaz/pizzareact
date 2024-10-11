import { AltKısım } from "../styles";
import Amount from "./Amount";
import IncDecComp from "./IncDecComp";

export default function LowerComponent(props) {

    const {formattedPrice} = props;

    return(

        <AltKısım>
                <IncDecComp />
                <Amount formattedPrice={formattedPrice}/>
                
        </AltKısım>
    )
}
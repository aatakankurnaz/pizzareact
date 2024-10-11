import {
    Wrapper
} from "../styles"

import HeaderComponent from "./HeaderComponent"
import LowerComponent from "./LowerComponent";
import MainComponent from "./MainComponent"

export default function Form() {

    const price = 85.50
    const formattedPrice = `${price.toFixed(2)} ₺`;

    return (
        <Wrapper>
            <HeaderComponent />
            <MainComponent formattedPrice={formattedPrice}/>
            
        </Wrapper>
    )
}
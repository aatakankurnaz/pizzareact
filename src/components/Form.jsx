import {
    Wrapper
} from "../styles"

import HeaderComponent from "./HeaderComponent"
import MainComponent from "./MainComponent"

export default function Form() {

    const price = 85.50
    const pizzaName = "Position Absolute Acı Pizza"
    

    return (
        <Wrapper>
            <HeaderComponent />
            <MainComponent price={price} pizzaName={pizzaName}/>
            
        </Wrapper>
    )
}
import { useState } from "react";
import { AraYazı, Cizgi, FormAnaDiv} from "../styles";
import Isim from "./Isim";
import LowerComponent from "./LowerComponent";
import Options1Comp from "./Options1Comp";
import Options2Comp from "./Options2Comp";
import ProductInf from "./ProductInf";

export default function MainComponent(props) {

     const {price} = props;
    
    const [selectedIngredientsState, setSelectedIngredientsState] = useState([]);
    const [errorIngredientsState, setErrorIngredientsState] = useState({
        high: false,
        below: false
    });

    const handleIngredientsChange = (event) => {
        const { name, checked } = event.target;

        
        if (checked) {
            
            const updatedIngredients = [...selectedIngredientsState, name];

            
            if (updatedIngredients.length > 10) {
                setErrorIngredientsState({ high: true, below: false });
            } else {
                setSelectedIngredientsState(updatedIngredients);
                
                setErrorIngredientsState({ high: false, below: updatedIngredients.length < 4 });
            }
        } else {
           
            const updatedIngredients = selectedIngredientsState.filter((option) => option !== name);
            setSelectedIngredientsState(updatedIngredients);

           
            setErrorIngredientsState({ 
                high: false, 
                below: updatedIngredients.length < 4 
            });
        }
    };

    return (
        <FormAnaDiv>
            <ProductInf price={price}/>
            <Options1Comp />
            <AraYazı>
                <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Ek Malzemeler</h1>
                <p style={{ color: "#5F5F5F" }}>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            </AraYazı>
            <Options2Comp selectedIngredientsState={selectedIngredientsState} errorIngredientsState={errorIngredientsState} handleIngredientsChange={handleIngredientsChange}/>
            <Isim />
            <Cizgi />
            <LowerComponent price={price} selectedIngredientsState={selectedIngredientsState}/>
        </FormAnaDiv>

    )
}
import { useState } from "react";
import { AraYazı, Cizgi, FormAnaDiv} from "../styles";
import Isim from "./Isim";
import LowerComponent from "./LowerComponent";
import Options1Comp from "./Options1Comp";
import Options2Comp from "./Options2Comp";
import ProductInf from "./ProductInf";

export default function MainComponent(props) {

    const {price, pizzaName} = props;
    
    const nameErrorMessages = {
        nameError: "İsiminizi en az 3 karakter giriniz",
        surnameError: "Soyisiminizi en az 3 karakter giriniz" 
    };

    const NameSurnameForm = {
        name: "",
        surname: "",
        note:""
    };

    const [selectedIngredientsState, setSelectedIngredientsState] = useState([]);
    const [errorIngredientsState, setErrorIngredientsState] = useState({
        high: false,
        below: true
    });
    const[CheckedSize, setCheckedSize] = useState("small")
    const [selectedThickness, setSelectedThickness] = useState("thin")
    const [NameSurnameState, setNameSurnameState] = useState(NameSurnameForm);
    const [NameSurnameErrorsState, setNameSurnameErrorsState] = useState({
        name: false,
        surname: false,
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

    const handleChangeSize = (event) => {
        
        const {value} = event.target

        setCheckedSize(value)
    }

    const handleChangeThickness = (event) => {
        const {value} = event.target

        setSelectedThickness(value)

    }
    
    const handleChangeNameSurname = (event) => {
        const { name, value } = event.target;
        setNameSurnameState({ ...NameSurnameState, [name]: value }); 

        
        if (name === "name") {
            setNameSurnameErrorsState({ ...NameSurnameErrorsState, [name]: value.trim().length < 3 });
        }

        if (name === "surname") { 
            setNameSurnameErrorsState({ ...NameSurnameErrorsState, [name]: value.trim().length < 3 });
        }
    }


    // console.log(selectedIngredientsState)
    // console.log(selectedThickness)
    // console.log(CheckedSize)
    return (
        <FormAnaDiv>
            <ProductInf price={price} pizzaName={pizzaName}/>
            <Options1Comp CheckedSize={CheckedSize} handleChangeSize={handleChangeSize} handleChangeThickness={handleChangeThickness}/>
            <AraYazı>
                <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Ek Malzemeler</h1>
                <p style={{ color: "#5F5F5F" }}>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            </AraYazı>
            <Options2Comp selectedIngredientsState={selectedIngredientsState} errorIngredientsState={errorIngredientsState} handleIngredientsChange={handleIngredientsChange}/>
            <Isim handleChangeNameSurname={handleChangeNameSurname} NameSurnameState={NameSurnameState} NameSurnameErrorsState={NameSurnameErrorsState} nameErrorMessages={nameErrorMessages}/>
            <Cizgi />
            <LowerComponent price={price} NameSurnameState={NameSurnameState} selectedIngredientsState={selectedIngredientsState} CheckedSize={CheckedSize} errorIngredientsState={errorIngredientsState} pizzaName={pizzaName} selectedThickness={selectedThickness}/>
        </FormAnaDiv>

    )
}
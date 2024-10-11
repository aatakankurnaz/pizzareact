import { AraYazı, Cizgi, FormAnaDiv} from "../styles";
import Isim from "./Isim";
import LowerComponent from "./LowerComponent";
import Options1Comp from "./Options1Comp";
import Options2Comp from "./Options2Comp";
import ProductInf from "./ProductInf";

export default function MainComponent(props) {

    const {formattedPrice} = props;

    return (
        <FormAnaDiv>
            <ProductInf formattedPrice={formattedPrice}/>
            <Options1Comp />
            <AraYazı>
                <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Ek Malzemeler</h1>
                <p style={{ color: "#5F5F5F" }}>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            </AraYazı>
            <Options2Comp />
            <Isim />
            <Cizgi />
            <LowerComponent formattedPrice={formattedPrice}/>
        </FormAnaDiv>

    )
}
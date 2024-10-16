import { Fiyat, FiyatPuan, Puan, UrunBilgi } from "../styles";
import PriceValue from "./PriceValue";

export default function ProductInf(props) {

    const {price, pizzaName} = props;

    return(
    <UrunBilgi>
        <h2>{pizzaName}</h2>
        <FiyatPuan>
            <Fiyat>
                <PriceValue price={price} />
            </Fiyat>
            <Puan style={{ color: "#5F5F5F" }}>
                <p>4.9</p>
                <p>(200)</p>
            </Puan>
        </FiyatPuan>
        <p style={{ lineHeight: "2", color: "#5F5F5F" }}>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam<br />
            sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle<br />
            kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek<br />
            sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı<br />
            hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya<br />
            bazen pizzetta denir.</p>
    </UrunBilgi>
    )
}
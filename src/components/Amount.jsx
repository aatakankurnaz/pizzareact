import {SiparisVer, Sonuc, SonucBaslik,Tutar } from "../styles";
import AmountDetail from "./AmountDetail";

export default function Amount(props) {

    const {formattedPrice} = props;

    return (
        <Tutar>
            <Sonuc>
                <SonucBaslik>
                    <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Sipariş Toplamı</h1>
                </SonucBaslik>
                <AmountDetail formattedPrice={formattedPrice}/>
                </Sonuc>
                <SiparisVer style={{ fontWeight: "bold", fontSize: "16px" }}>Sipariş Ver</SiparisVer>
            
        </Tutar>
    )
}
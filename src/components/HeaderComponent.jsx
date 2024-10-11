import { Baslik, FormUstDiv, FormUstP } from "../styles";

export default function HeaderComponent() {

    return(
        <FormUstDiv>
                <Baslik>Teknolojik Yemekler</Baslik>
                <FormUstP>
                    Anasayfa - <span style={{ fontWeight: 'bold' }}>Sipariş Oluştur</span>
                </FormUstP>
            </FormUstDiv>
    )
}
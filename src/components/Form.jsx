import { Baslik, FormAnaDiv, FormUstDiv, FormUstP, UrunAdi } from "../styles"

export default function Form() {

    return (
        <>
        <FormUstDiv>
            <Baslik>Teknolojik Yemekler</Baslik>
            <FormUstP>
                Anasayfa - <span style={{ fontWeight: 'bold' }}>Sipariş Oluştur</span>
            </FormUstP>
        </FormUstDiv>
        <FormAnaDiv>
            <UrunAdi>Position Absolute Acı Pizza</UrunAdi>
        </FormAnaDiv>

        </>
    )
}
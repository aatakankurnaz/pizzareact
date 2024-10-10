import {
    AraYazı, Baslik, Boyut, BoyutOption, Fiyat, FiyatPuan, FormAnaDiv, FormUstDiv, FormUstP,
    Hamur, HamurOption, Options1, Options2, Puan,
    UrunBilgi, Wrapper,
    Cizgi,
    Tutar,
    SiparisSayı,
    Azalt,
    Sayı,
    Sonuc,
    SiparisVer,
    AltKısım, Arttır,
    SonucYazi,
    Secimler,
    Toplam,
    SonucBaslik,
} from "../styles"
import Isim from "./Isim"

export default function Form() {

    const malzemeler = [
        { id: 1, name: "Peperoni" },
        { id: 2, name: "Tavuk Izgara" },
        { id: 3, name: "Mısır" },
        { id: 4, name: "Sarımsak" },
        { id: 5, name: "Ananas" },
        { id: 6, name: "Sosis" },
        { id: 7, name: "Soğan" },
        { id: 8, name: "Sucuk" },
        { id: 9, name: "Biber" },
        { id: 10, name: "Kabak" },
        { id: 11, name: "Kanada Jambonu" },
        { id: 12, name: "Domates" },
        { id: 13, name: "Jalapeno" },
        { id: 14, name: "Sucuk" }
    ]


    return (
        <Wrapper>
            <FormUstDiv>
                <Baslik>Teknolojik Yemekler</Baslik>
                <FormUstP>
                    Anasayfa - <span style={{ fontWeight: 'bold' }}>Sipariş Oluştur</span>
                </FormUstP>
            </FormUstDiv>
            <FormAnaDiv>
                <UrunBilgi>
                    <h2>Position Absolute Acı Pizza</h2>
                    <FiyatPuan>
                        <Fiyat>
                            <p style={{ fontWeight: "bold", fontSize: "26px" }}>85.50₺</p>
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
                <Options1>
                    <Boyut>
                        <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Boyut Seç</h1>
                        <BoyutOption>
                            <label htmlFor=""><input type="radio" />Küçük</label>
                            <label htmlFor=""><input type="radio" />Orta</label>
                            <label htmlFor=""><input type="radio" />Büyük</label>
                        </BoyutOption>
                    </Boyut>
                    <Hamur>
                        <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Hamur Seç</h1>
                        <HamurOption>
                            <select name="" id="">
                                <option value="">Hamur Kalınlığı</option>
                                <option value="">İnce</option>
                                <option value="">Normal</option>
                            </select>
                        </HamurOption>
                    </Hamur>
                </Options1>
                <AraYazı>
                    <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Ek Malzemeler</h1>
                    <p style={{ color: "#5F5F5F" }}>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                </AraYazı>
                <Options2>
                    {malzemeler.map((malzeme) => {
                        return <label key={malzeme.id}><input type="checkbox" />{malzeme.name}</label>
                    })}
                </Options2>
                <Isim />
                <Cizgi />
                <AltKısım>
                    <SiparisSayı>
                        <Azalt>-</Azalt>
                        <Sayı>1</Sayı>
                        <Arttır>+</Arttır>
                    </SiparisSayı>
                    <Tutar>
                        <Sonuc>
                            <SonucBaslik>
                            <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Sipariş Toplamı</h1>
                            </SonucBaslik>
                            <SonucYazi>
                                <Secimler>
                                    <p style={{ color: "#5F5F5F", fontWeight: "bold" }}>Seçimler</p>
                                    <p style={{ color: "#5F5F5F", fontWeight: "bold" }}>25.00₺</p>
                                </Secimler>
                                <Toplam>
                                    <p style={{fontWeight: "bold", color: "#CE2829" }}>Toplam</p>
                                    <p style={{ fontWeight: "bold", color: "#CE2829" }}>110.50₺</p>
                                </Toplam>
                            </SonucYazi>
                        </Sonuc>
                            
                            <SiparisVer style={{ fontWeight: "bold", fontSize: "16px" }}>Sipariş Ver</SiparisVer>
                            
                       
                    </Tutar>
                </AltKısım>
            </FormAnaDiv>

        </Wrapper>
    )
}
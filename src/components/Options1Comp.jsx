import { Boyut, BoyutOption, Hamur, HamurOption, Options1 } from "../styles";

export default function Options1Comp() {

    return(

        <Options1>
                <Boyut>
                    <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Boyut Seç</h1>
                    <BoyutOption>
                        <label htmlFor=""><input type="radio" name="boyut" />Küçük</label>
                        <label htmlFor=""><input type="radio" name="boyut" />Orta</label>
                        <label htmlFor=""><input type="radio" name="boyut" />Büyük</label>
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
    )
}
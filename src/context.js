import React, {Component} from 'react';
const ProductsContext = React.createContext();

export class ProductsProvider extends Component{
    state = {
        searchValue:null,
        arr:[],
        Furniture:[
            {
                category:"softset",
                id:1,
                image:"https://media.4rgos.it/i/Argos/1120-m0014-m007-m050-asym-m008-m022-smallroomideas-3378595_1?qlt=75&fmt.jpeg.interlaced=true",
                name: "Leno",
                aboutinfo:"Material:DSP / Laklı fasad / Güzgü / Parça / Metal dəstək"
            },
            {
                category:"softset",
                id:2,
                image:"https://www.tarzmobilya.com/rima-modern-koltuk-takimi-modern-koltuk-takimlari-64614-19-B.jpg",
                name: "Vira",
                aboutinfo:"Material:DSP / MDF / MDF Profil / Güzgü / Şüşə / Boya / Ağac ayaq / Şpon"

            },
            {
                category:"softset",
                id:3,
                image:"https://www.roomservice360.com/pub/media/catalog/product/cache/7c18853c49ec578e856aacced9c3ff04/e/s/escape-end-table-04.jpg",
                name: "Flora",
                aboutinfo:"Material:DSP / MDF / MDF Profil / Güzgü / Şüşə / Boya / Ağac ayaq / Şpon"

            },
            {
                category:"softset",
                id:4,
                image:"https://images.evgor.com.tr/hermes-yatakli-koltuk-takimi-201231-28-B.jpg",
                name: "Flora",
                aboutinfo:"Material:DSP / Laklı fasad / Güzgü / Parça / Metal dəstək"
            },
            {
                category:"softset",
                id:5,
                image:"https://images-na.ssl-images-amazon.com/images/I/81MUooSgfQL._AC_SL1500_.jpg",
                name: "Nirvana",
                aboutinfo:"Material:DSP / Laklı fasad / Güzgü / Parça / Metal dəstək"
            },
            {
                category:"softset",
                id:6,
                image:"https://okl.scene7.com/is/image/OKL/091916_sofa_Lead?wid=1000&op_sharpen=1",
                name: "Viktoria",
                aboutinfo:"Material:DSP / Laklı fasad / Güzgü / Parça / Metal dəstək"
            },
            {
                category:"softset",
                id:7,
                image:"https://www.bellona.com.tr/files/pi/big/violet-koltuk-takimi-melsonbejbordoefesanadesen-tab-01.jpg",
                name: "Viktoria",
                aboutinfo:"Material:DSP / Laklı fasad / Güzgü / Parça / Metal dəstək"
            },
            {       
                category:"softset",
                id:8,
                image:"https://www.engince.com.tr/Uploads/UrunResimleri/buyuk/Natalie-Koltuk-Takimi-2059.jpg",
                name: "Senyora",
                aboutinfo:"Material:DSP / Laklı fasad / Güzgü / Parça / Metal dəstək"
            },
            {
                id:9,
                category:"kitchhen",
                image:"https://www.buseterim.com.tr/upload/default/2016/7/17/10buyuleyicimutfak3.jpg",
                name: "Safir",
                aboutinfo:"Material:DSP / MDF / MDF Profil / Güzgü / Şüşə / Boya / Ağac ayaq / Şpon"
            },
            {
                id:10,
                category:"kitchhen",
                image:"https://www.mondi.com.tr/files/pi/big/diana-mutfak-masa-sandalye-takimi-mavi-mor-krem-03.jpg",
                name: "Nirivana",
                aboutinfo:"Material:DSP / MDF / MDF Profil / Güzgü / Şüşə / Boya / Ağac ayaq / Şpon"
            },
            {
                id:11,
                category:"kitchhen",
                image:"https://www.trendmobilya.com/uploads//en_urun_resimleri/908-essa-mutfak-masa-takimiJPG.JPG",
                name: "Toskana",
                aboutinfo:"Material:DSP / MDF / MDF Profil / Güzgü / Şüşə / Boya / Ağac ayaq / Şpon"
            },
            {
                id:12,
                category:"kitchhen",
                image:"https://www.sefaart.com.tr/img/mutfak_tasarimlari/sefaart_mutfak_tasarim_resimleri_4.jpg",
                name: "Alyans",
                aboutinfo:"Material:DSP / MDF / MDF Profil / Güzgü / Şüşə / Boya / Ağac ayaq / Şpon"
            },
            {
                id:13,
                category:"kitchhen",
                image:"https://i4.hurimg.com/i/hurriyet/75/615x0/5d78ae3545d2a023a0d2cf21",
                name: "Gloria",
                aboutinfo:"Material:DSP / MDF / MDF Profil / Güzgü / Şüşə / Boya / Ağac ayaq / Şpon"
            },
            {
                id:14,
                category:"kitchhen",
                image:"https://www.leofurniture.net/wp-content/uploads/2019/12/Warna-Cat-Biru-Muda-Untuk-Dapur-1024x526.jpg",
                name: "Leno",
                aboutinfo:"Material:DSP / MDF / MDF Profil / Güzgü / Şüşə / Boya / Ağac ayaq / Şpon"
            }
        ],
    };
    render(){
        return(
            <ProductsContext.Provider value={this.state}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}
const ProductConsumer = ProductsContext.Consumer;
export default ProductConsumer;

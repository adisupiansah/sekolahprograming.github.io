import Hero from "./Hero";
import Cardjurusan from "./Cardjurusan";
import Cardkegiatan from "./Cardkegiatan";
import jurusan1 from './../assets/section 3.jpg';
import jurusan2 from './../assets/section 4.jpg';
import jurusan3 from './../assets/section 2.jpg';
import kegiatan1 from './../assets/section.jpg';
import kegiatan2 from  './../assets/section 2.jpg'
import kegiatan3 from  './../assets/section 3.jpg'
import kegiatan4 from  './../assets/section 4.jpg'
import kegiatan5 from  './../assets/section 5.jpg'

const Maincontent = () => {
    return (
        <div>

        <Hero/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center my-5">
                    <h1>Jurusan Sekolah</h1>
                </div>
                <div className="col-lg-4 col-12">
                    <Cardjurusan image={jurusan1} jurusan ="Data Analisis" description="keahlian dalam mmenganalisis data perusahaann sesuai konsep"/>
                </div>
                <div className="col-lg-4 col-12">
                    <Cardjurusan image={jurusan2} jurusan ="Server Jaringan" description="kehalian dalam membuat server "/>
                </div>
                <div className="col-lg-4 col-12">
                    <Cardjurusan image={jurusan3} jurusan ="Programming Mobile" description="keahlian dalam menggunakan bahasa mesin dan membuat aplikasi untuk android dan ios"/>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center my-5">
                    <h1>Kegiatan</h1>
                </div>
                <div className="col-12 my-2 shadow none p-3 mb-5">
                    <Cardkegiatan image = {kegiatan1} desc ="ini adalah kegiatan memperbaiki cpu yang sudah russak karena overhead"/>
                </div>
                <div className="col-12 my-2 shadow none p-3 mb-5">
                    <Cardkegiatan image = {kegiatan2} desc ="ini adalah kegiatan memperbaiki cpu yang sudah russak karena overhead"/>
                </div>
                <div className="col-12 my-2 shadow none p-3 mb-5">
                    <Cardkegiatan image = {kegiatan3} desc ="ini adalah kegiatan memperbaiki cpu yang sudah russak karena overhead"/>
                </div>
                <div className="col-12 my-2 shadow none p-3 mb-5">
                    <Cardkegiatan image = {kegiatan4} desc ="ini adalah kegiatan memperbaiki cpu yang sudah russak karena overhead"/>
                </div>
                <div className="col-12 my-2 shadow none p-3 mb-5">
                    <Cardkegiatan image = {kegiatan5} desc ="ini adalah kegiatan memperbaiki cpu yang sudah russak karena overhead"/>
                </div>
            
            </div>
        </div>
        </div>

    )

}

export default Maincontent;
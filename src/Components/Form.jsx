import React, {useState} from "react"
import Sidebar from "./Sidebar";
import { FaPlus } from "react-icons/fa6";
import Footer from "./Footer";

const Form = () => {
    const [formData, setFormData] = useState({
        noPeminjam: '',
        nama: '',
        kelas: '',
        tglPinjam: '',
        tglKembali: '',
        status: ''
    });

    // Handle untuk mengubah state saat nilai input berubah
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle untuk mengirim formulir 
    const handleSubmit = (e) =>{
        e.preventDefault();
        //Melakukan sesuatu dengan data form, untuk mengirim data ke server atau validasi
        console.log('Data Formulir', formData);
    };

    return(
        <div>
                <div className="flex flex-row">
                <Sidebar />
                <div className="px-5 py-10 w-screen">
                    <a>
                        <FaPlus />
                        <p></p>
                    </a>
                    <form className="flex flex-col bg-putih rounded-3xl py-10">
                        <div className="form-coun">
                            <label className="form-label">No Peminjam</label>
                            <input
                            type="number"
                            name="noPeminjam"
                            value={formData.noPeminjam}
                            onChange={handleChange}
                            className="form-input"/>
                        </div>
                        <div className="form-coun">
                            <label className="form-label">Nama</label>
                            <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            className="form-input"/>
                        </div>
                        <divn className="form-coun">
                            <label className="form-label">Kelas</label>
                            <input
                            type="text"
                            name="kelas"
                            value={formData.kelas}
                            onChange={handleChange}
                            className="form-input"/>
                        </divn>
                        <div className="form-coun">
                            <label className="form-label">Tanggal Pinjam</label>
                            <input
                            type="date"
                            name="tglPinjam"
                            value={formData.tglPinjam}
                            onChange={handleChange}
                            className="form-input"/>
                        </div>
                        <div className="form-coun">
                            <label className="form-label">Tanggal Kembali</label>
                            <input
                            type="date"
                            name="tglKembali"
                            value={formData.tglKembali}
                            onChange={handleChange}
                            className="form-input"/>
                        </div>
                        <div className="form-coun">
                            <label className="form-label">Status</label>
                            <input
                            type="text"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="form-input"/>
                        </div>
                        <div className="flex justify-end mr-20 ">
                            <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-green3 border-solid rounded-full text-base px-7 py-1 font-bold text-white hover:bg-green">
                                Pinjam
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default Form;
import React, { useState } from "react";
import Navbar from "./Navbar";
import SidebarAdmin from "./SidebarAdmin";
import Footer from "./Footer";
import { MdDeleteForever } from "react-icons/md";


// Data Dummy untuk halaman rak buku
const DataKategori =[
    {
        id: 1,
        name: 'Kelas X'
    },
    {
        id: 2,
        name: 'Kelas XI'
    },
    {
        id: 3,
        name: 'Kelas XII'
    }
]


function DataKategoriBuku (){
    const [items, setItems] = useState(DataKategori);

    function handleAddItem(item){
        setItems([...items, item]);
    }


    function handleDeleteItem(id){
        setItems((items) => items.filter((item) => item.id !== id));
    }

    return(
        <div>
            <div>
            <Navbar />
            </div>
                <div className="flex flex-row">
                    <SidebarAdmin />
                    <div className="px-5 h-screen py-10 w-screen">
                        <div className="bg-green3 rounded-xl px-5 py-3">
                            <p className="text-white font-bold text-xl">Data Kategori Buku</p>
                        </div>
                        {/* Form */}
                        <TambahKategori onAddItem={handleAddItem} />
                        <form items={items} onDeleteItem={handleDeleteItem}>
                            <div className="flex flex-col items-center justify-center py-10 ">
                                <table className="w-10/12 md:w-8/12 shadow-md rounded-xl ">
                                    <thead className="bg-blue-gray-100 h-5 md:h-10">
                                        <tr className="text-sm md:text-base">
                                            <th>Kategori</th>
                                            <th>Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="py-5">
                                        {items.map((item) =>(
                                        <Item item={item} key={item.id} onDeleteItem={handleDeleteItem}/>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

function Item({item, onDeleteItem}){
    return(
        <tr key={item.id} >
            <td className="flex items-center justify-center">{item.name}</td>
                <td>
                    <span className="flex flex-row items-center justify-center gap-1 cursor-pointer">
                        <MdDeleteForever className="text-red-700 text-lg  hover:text-red-300" onClick={() => onDeleteItem(item.id)}/>
                    </span>
                </td>
        </tr>
    )
}


function TambahKategori({onAddItem}){
    const [name, setName] = useState ('');
    function handleSubmit(e){
        e.preventDefault();
        // Guard Clause (untuk menghilangkan tambah item yang kosong)
        if(!name) return;

        //variabel untuk dijadikan objek 
        const newItem ={name}
        onAddItem(newItem);
        console.log(newItem)
        // untuk menghilangkan value ketika sudah di tambah 
        setName('');


    }
    return(
        <div>
            <form className="flex flex-col items-center justify-center py-3" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-start pl-2 py-5 w-5/12 md:w-8/12 ">
                <label className="py-2 text-base font-bold">Tambah Kategori</label>
                <input
                type="text"
                name="name_kategori"
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="flex flex-row border-solid border-2 border-blue-gray-100 bg-white h-8 px-2 py-2 justify-center items-center md:w-8/12 md:h-10 md:py-2"
                />
                <div  className="flex justify-end py-3">
                    <button 
                    type="submit"
                    className="bg-green3 border-solid rounded-full text-sm px-7 py-1 font-bold text-white hover:bg-green md:mr-56">
                        Tambah
                    </button>
                </div>
                
            </div>
            
        </form>
        </div>
    )
}


export default DataKategoriBuku
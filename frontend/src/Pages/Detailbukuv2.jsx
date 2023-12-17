import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Detailbukuv2 = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row ">
        <div className="hidden md:block h-full">
          <Sidebar />
        </div>
        <div className="fle flex-col m-8">
          <div className="bg-green2 h-12 rounded-3xl flex items-center space-x-10">
            <UserCircleIcon className="h-10 w-10 text-white mx-4" />
            <p className="text-white font-noto font-semibold text-3xl">
              Detail Buku
            </p>
          </div>
          <img
            className="object-cover rounded-xl m-auto py-8"
            src="https://ebooks.gramedia.com/ebook-covers/31754/big_covers/ID_MIZ2016MTH03DDADT_B.jpg"
            alt="Book Cover"
          />
          <div className="uppercase tracking-wide text-xl font-semibold italic">
            Novel Dilan 1990
          </div>
          <p className="block mt-1 text-lg leading-tight font-semibold text-black">
            Pidi Baiq
          </p>
          <p className="mt-2 text-gray-600 text-justify text-sm">
            Novel berjudul Dia Adalah Dilanku Tahun 1990 merupakan karya dari
            Pidi Baiq. Dilan Dia Adalan Dilanku menceritakan percintaan anak SMA
            yang cukup unik. Novel dengan tebal 348 halaman ini diterbitkan pada
            tahun 2014. Ada beberapa penerbit yang telah menerbitkan novel Dilan
            1990, yakni penerbit Pastel Books pada 2014 dan penerbit Mizan
            Pustaka pada 2015. Baca selengkapnya di artikel Sinopsis Novel
            'Dilan' Dia Adalah Dilanku Tahun 1990 - Pidi Baiq.
          </p>
          <p className="mt-4 font-semibold">Jumlah Buku: 30</p>
          <Popup />
          <Keterangan />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function Keterangan() {
  return (
    <ul className="md:pl-10 font-semibold flex-start flex-col md:flex-coloumn">
      <li className="mb-1.5">
        <span style={{ minWidth: "160px", display: "inline-block" }}>
          ISSBN
        </span>
        <span>:</span>
        <span className="ml-4">20056</span>
      </li>
      <li className="mb-1.5">
        <span style={{ minWidth: "160px", display: "inline-block" }}>
          Judul Buku
        </span>
        <span>:</span>
        <span className="ml-4">Dilan 1990</span>
      </li>
      <li className="mb-1.5">
        <span style={{ minWidth: "155px", display: "inline-block" }}>
          Nama Pengarang
        </span>
        <span> :</span>
        <span className="ml-4">Pidi Baiq</span>
      </li>
      <li className="mb-1.5">
        <span style={{ minWidth: "160px", display: "inline-block" }}>
          Penerbit
        </span>
        <span>:</span>
        <span className="ml-4">Pastel Books (Mizan Group)</span>
      </li>
      <li className="mb-1.5">
        <span style={{ minWidth: "160px", display: "inline-block" }}>
          Tahun Buku
        </span>
        <span>:</span>
        <span className="ml-4">2015</span>
      </li>
    </ul>
  );
}

function Popup() {
  const [showDialog, setShowDialog] = useState(false);

  const handleButtonClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };
  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="mt-4 bg-green5 hover:bg-green2 text-white font-bold py-2 px-4 rounded-lg"
      >
        Pinjam
      </button>

      {/*--------------------------Pop Up--------------------------*/}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-center">
              DETAIL PEMINJAMAN
            </h2>
            <br></br>
            {/* Gantilah dengan data peminjaman yang sesuai */}
            <ul>
              <li className="mb-1.5">
                <span style={{ minWidth: "140px", display: "inline-block" }}>
                  Nama Peminjam
                </span>
                <span>:</span>
                <span className="ml-4">Rani</span>
              </li>
              <li className="mb-1.5">
                <span style={{ minWidth: "140px", display: "inline-block" }}>
                  Nama Buku
                </span>
                <span>:</span>
                <span className="ml-4">Dilan 1990</span>
              </li>
              <li className="mb-1.5">
                <span style={{ minWidth: "140px", display: "inline-block" }}>
                  Tanggal Dipinjam
                </span>
                <span>:</span>
                <span className="ml-4">11 November 2023</span>
              </li>
              <li className="mb-1.5">
                <span style={{ minWidth: "140px", display: "inline-block" }}>
                  Tanggal Kembali
                </span>
                <span>:</span>
                <span className="ml-4">18 Oktober 2023</span>
              </li>
            </ul>
            <br></br>
            <div className="mt-4 flex justify-center gap-5">
              <button
                onClick={handleCloseDialog}
                className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-6 mr-2 rounded-full h-10 w-28"
              >
                Kembali
              </button>
              <button
                className="bg-green2 hover:bg-green5 text-white font-bold py-2 px-6 rounded-full h-10 w-28"
                // Tambahkan logika untuk aksi 'Pinjam' di sini
              >
                Pinjam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detailbukuv2;

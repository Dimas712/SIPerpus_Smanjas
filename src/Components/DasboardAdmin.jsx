import React from 'react'

const DasboardAdmin = () => {
    const data = [
        { id: 1, jumlah: '312', nama: 'Anggota'},
        { id: 2, jumlah: '321', nama: 'Dikembalikan'},
        { id: 3, jumlah: '421', nama: 'Dipinjam'},
        // Tambahkan data grup lain jika diperlukan
      ];
    const Card = ({ jumlah, nama,}) => {
        return (
          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-bold">{jumlah}</h2>
            <h2 className="text-lg font-bold">{nama}</h2>
            <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md">
              Selengkapnya
            </button>
          </div>
        );
      };
    return <div className="flex justify-center items-center h-screen gap">
      {data.map((group) => (
        <Card key={group.id} {...group} />
      ))}
    </div>;
}

export default DasboardAdmin
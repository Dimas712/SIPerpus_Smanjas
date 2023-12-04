import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import LoginAdmin from './Components/LoginAdmin'
import LoginSiswa from './Components/LoginSiswa'
import ProfilSiswa from './Components/ProfilSiswa'
import EditProfilSiswa from './Components/EditProfilSiswa'
import CariBuku from './Components/CariBuku'
import Form from './Components/Form'
import Carousel from './Components/Carousel'
import CardBook from './Components/CardBook'
import PeminjamanSiswa from './Components/peminjamansiswa'
import Pengembaliansiswa from './Components/Pengembaliansiswa'
import Detailbuku from './Components/Detailbuku'
import ProfilAdmin from './Components/ProfilAdmin'
import DasboardAdmin from './Components/DasboardAdmin'
import EditAdmin from './Components/EditAdmin'
import PeminjamanAdmin from './Components/PeminjamanAdmin'
import PengembalianAdmin from './Components/PengembalianAdmin'
import DataBukuAdmin from './Components/DataBukuAdmin'
import DataPengguna from './Components/DataPengguna'
import DataPenggunaList from './Components/DataPenggunaList'
import Tambahbuku from './Components/Tambahbuku'
import RakBuku from './Components/RakBuku'
import DataKategoriBuku from './Components/DataKategoriBuku'
import Buku from './Components/Buku'
function App () {
  
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<LoginAdmin/>}/>
        <Route path='/siswa' element={<LoginSiswa/>}/>
        <Route path='/profil' element={<ProfilSiswa/>}/>
        <Route path='/profiladmin' element={<ProfilAdmin/>}/>
        <Route path='/editsiswa' element={<EditProfilSiswa/>}/>
        <Route path='/editadmin' element={<EditAdmin/>}/>
        <Route path='/caribuku' element={<CariBuku/>}/>
        <Route path='/buku' element={<Buku/>}/>
        <Route path='/formpinjambuku' element={<Form/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/cardbook' element={<CardBook/>}/>
        <Route path='/pinjamsiswa' element={<PeminjamanSiswa/>}/>
        <Route path='/kembalisiswa' element={<Pengembaliansiswa/>}/>
        <Route path='/pinjamadmin' element={<PeminjamanAdmin/>}/>
        <Route path='/kembaliadmin' element={<PengembalianAdmin/>}/>
        <Route path='/detailbuku' element={<Detailbuku/>}/>
        <Route path='/dashboard' element={<DasboardAdmin/>}/>
        <Route path='/databukuadmin' element={<DataBukuAdmin/>}/>
        <Route path='/datapengguna' element={<DataPengguna/>}/>
        <Route path='/datapenggunalist' element={<DataPenggunaList/>}/>3
        <Route path='/tambahbuku' element={<Tambahbuku/>}/>
        <Route path='/rakbuku' element={<RakBuku/>}/>
        <Route path='/datakategoribuku' element={<DataKategoriBuku/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;

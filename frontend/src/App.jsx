import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Navbar from './Components/Navbar'
import LoginAdmin from './Pages/LoginAdmin'
import LoginSiswa from './Pages/LoginSiswa'
import ProfilSiswa from './Pages/ProfilSiswa'
import EditProfilSiswa from './Pages/EditProfilSiswa'
import CariBuku from './Pages/Caribuku'
import Form from './Components/Form'
import Carousel from './Components/Carousel'
import CardBook from './Components/CardBook'
import Pengembaliansiswa from './Pages/Pengembaliansiswa'
import Detailbuku from './Pages/Detailbuku'
import ProfilAdmin from './Pages/ProfilAdmin'
import DasboardAdmin from './Pages/DasboardAdmin'
import EditAdmin from './Pages/EditAdmin'
import PeminjamanAdmin from './Pages/PeminjamanAdmin'
import PengembalianAdmin from './Pages/PengembalianAdmin'
import DataBukuAdmin from './Pages/DataBukuAdmin'
import DataPengguna from './Pages/DataPengguna'
import DataPenggunaList from './Pages/DataPenggunaList'
import Tambahbuku from './Pages/Tambahbuku'
import RakBuku from './Pages/RakBuku'
import DataKategoriBuku from './Pages/DataKategoriBuku'
import Buku from './Components/Buku'
import Halbuku from './Pages/halbuku'
import PeminjamanSiswa from './Pages/Peminjamansiswa'
function App () {
  
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<LoginAdmin/>}/>
        <Route path='/siswa' element={<LoginSiswa/>}/>
        <Route path='/profil' element={<ProfilSiswa/>}/>
        <Route path='/editsiswa' element={<EditProfilSiswa/>}/>
        <Route path='/profiladmin' element={<ProfilAdmin/>}/>
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
        <Route path='/halbuku' element={<Halbuku/>}/>
        <Route path='/datakategoribuku' element={<DataKategoriBuku/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;

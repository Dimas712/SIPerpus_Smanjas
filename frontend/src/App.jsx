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
import Halbuku from './Components/halbuku'
import EditDataPengguna from './Components/editdatapengguna'
import Detailbook from './Components/detailbook'
import Privateroute from './Components/privateroute'


function App () {
  
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<LoginAdmin/>}/>
        <Route path='/siswa' element={<LoginSiswa/>}/>
        <Route path='/profil' element={
        <Privateroute>
          <ProfilSiswa/>
        </Privateroute>
        }/>

        <Route path='/editsiswa' element={
        <Privateroute>
          <EditProfilSiswa/>
        </Privateroute>
        }/>

        <Route path='/profiladmin' element={
        <Privateroute>
          <ProfilAdmin/>
        </Privateroute>
        }/>

        <Route path='/editadmin' element={
        <Privateroute>
          <EditAdmin/>
        </Privateroute>
        }/>
        <Route path='/editdatapengguna/:id' element={<EditDataPengguna/>}/>
        <Route path='/caribuku' element={<CariBuku/>}/>
        <Route path='/buku' element={<Buku/>}/>
        <Route path='/formpinjambuku' element={<Form/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/cardbook' element={<CardBook/>}/>
        <Route path='/pinjamsiswa' element={
          <Privateroute>
            <PeminjamanSiswa/>
          </Privateroute>
        }/>

        <Route path='/kembalisiswa' element={
        <Privateroute>
          <Pengembaliansiswa/>
        </Privateroute>
        }/>

        <Route path='/pinjamadmin' element={
        <Privateroute>
          <PeminjamanAdmin/>
        </Privateroute>
        }/>

        <Route path='/kembaliadmin' element={
        <Privateroute>
          <PengembalianAdmin/>
        </Privateroute>
        }/>

        <Route path='/detailbuku' element={<Detailbuku/>}/>
        <Route path='/dashboard' element={
          <Privateroute>
            <DasboardAdmin/>
          </Privateroute>
        }/>

        <Route path='/databukuadmin' element={
        <Privateroute>
          <DataBukuAdmin/>
        </Privateroute>
        }/>

        <Route path='/datapengguna' element={<DataPengguna/>}/>
        <Route path='/datapenggunalist' element={
          <Privateroute>
            <DataPenggunaList/>
          </Privateroute>
        }/>

        <Route path='/tambahbuku' element={<Tambahbuku/>}/>
        <Route path='/rakbuku' element={
        <Privateroute>
          <RakBuku/>
        </Privateroute>
        }/>

        <Route path='/halbuku' element={<Halbuku/>}/>
        <Route path='/datakategoribuku' element={
        <Privateroute>
          <DataKategoriBuku/>
        </Privateroute>
        }/>

        <Route path='/detailbook' element={<Detailbook/>}/>

      </Routes>
    </Router>
    </div>
  )
}

export default App;

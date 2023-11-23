import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import LoginAdmin from './Components/LoginAdmin'
import LoginSiswa from './Components/LoginSiswa'
import ProfilSiswa from './Components/ProfilSiswa'
import EditProfilSiswa from './Components/EditProfilSiswa'
import PeminjamanSiswa from './Components/PeminjamanSiswa'
// import PeminjamanSiswa from './Components/Peminjamansiswa'
// import PeminjamanSiswa from './Components/Peminjamansiswa'
import CariBuku from './Components/Caribuku'
import Form from './Components/Form'
import Carousel from './Components/Carousel'
import CardBook from './Components/CardBook'
// import PeminjamanSiswa from './Components/Peminjamansiswa'
import Pengembaliansiswa from './Components/Pengembaliansiswa'
import Detailbuku from './Components/Detailbuku'

function App () {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<LoginAdmin/>}/>
        <Route path='/siswa' element={<LoginSiswa/>}/>
        <Route path='/profil' element={<ProfilSiswa/>}/>
        <Route path='/editsiswa' element={<EditProfilSiswa/>}/>
        {/* <Route path='/pinjamsiswa' element={<PeminjamanSiswa/>}/> */}
        <Route path='/caribuku' element={<CariBuku/>}/>
        <Route path='/formpinjambuku' element={<Form/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/cardbook' element={<CardBook/>}/>
        <Route path='/kembalisiswa' element={<Pengembaliansiswa/>}/>
        <Route path='/detailbuku' element={<Detailbuku/>}/>
        <Route path='/peminjamansiswa' element={<PeminjamanSiswa/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;

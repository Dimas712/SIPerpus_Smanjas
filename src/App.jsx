import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
<<<<<<< HEAD
import Navbar from './Components/Navbar'
import LoginAdmin from './Components/LoginAdmin'
import LoginSiswa from './Components/LoginSiswa'
import ProfilSiswa from './Components/ProfilSiswa'

=======
import Form from './Components/Form'
import Card from './Components/Cards'
>>>>>>> 68331475f1404e0e2044c7de93d65d2abb79da55


function App () {
  return (
<<<<<<< HEAD
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<LoginAdmin/>}/>
        <Route path='/siswa' element={<LoginSiswa/>}/>
        <Route path='/profil' element={<ProfilSiswa/>}/>
      </Routes>
    </Router>
    </div>
=======
   <>
    <Card/>
   </>
>>>>>>> 68331475f1404e0e2044c7de93d65d2abb79da55
  )
}

export default App

import './App.css'
import LogoHeader from './Components/Header/LogoHeader/LogoHeader'
import Navbar from './Components/Header/Navbar/Navbar'
import Banner from './Components/Header/Banner/Banner'
import Services from './Components/Services/Services'
import Card from './Components/Card/Card'
import CardList from './Components/Card/CardList'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <div>
      <LogoHeader />
      <Navbar />
      <Banner />
      <Services />
      <CardList />
      <Contact />
    </div>
  )
}

export default App

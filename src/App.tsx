import { Suspense } from "react"
import Banner from "./Component/Banner"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Products from "./Products/Products"
import type { Iproducts } from "./type"

function App() {
  
  const Promisedata = async():Promise<Iproducts[]>=>{
    const response = await fetch("/object.json")
    const data = await response.json()
    return data
  }
    
  return (
  <>
   <Navbar/>
   <Banner/>
   <Suspense fallback={<h2>Loading.......</h2>}>
   <Products Promisedata={Promisedata()}/>
   </Suspense>
   <Footer/>
  </>
  )
}

export default App

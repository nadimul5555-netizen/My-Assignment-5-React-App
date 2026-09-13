import { Suspense, useState } from 'react'
import Nav from './component/Nav'
import Banner from './component/Banner'
import Technologies from './component/Technologies';
import  type{ TechTypes } from './TechTypes';

const TechDataFetch = async():Promise<TechTypes[]>=>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data
}

function App() {

  const [TechPromis]=useState(()=>TechDataFetch())
  
  return (
    <>
  <Nav></Nav>
  <Banner></Banner>
  <Suspense fallback={<p>Loadding ....</p>}>

  <Technologies TechPromis={TechPromis} ></Technologies>
  </Suspense>
    </>
  )
}

export default App

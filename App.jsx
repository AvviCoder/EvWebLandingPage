import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  
  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your passions"},
  ]

  const [herocount, setHeroCount] = useState(2);
  const [playstatus, setPlaystatus] = useState(false);
  
  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count ===2?0:count+1})
    }, 5000);
  },[])
  return (
    <div>
      <Background playstatus={playstatus} herocount={herocount}></Background>
      <Navbar/>
      <Hero
        setPlayStatus = {setPlaystatus}
        heroData = {heroData[herocount]}
        herocount = {herocount}
        setHeroCount = {setHeroCount}
        playstatus = {playstatus}
      /> 
    </div>
  )
}

export default App
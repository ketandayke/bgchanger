import { useState,useEffect } from "react"
function App() {
  const [color,setColor] = useState("olive")

  const getRandomColor=()=>{
    let clr="#";
    const string="0123456789ABCDEF";

    for(let i=0;i<6;i++){
      clr+=string[Math.floor(Math.random()*16)];

    }
    console.log("color is ",clr);
     setColor(clr);
     localStorage.setItem("background",clr);
  }

  const changeGradientBack=()=>{
    let clr1="#";
    let clr2="#";
    const string="0123456789ABCDEF";
    for(let i=0;i<6;i++ ){
       clr1+=string[Math.floor(Math.random()*16)];
       clr2+=string[Math.floor(Math.random()*16)];
    }
    let clr=`linear-gradient(to right,${clr1},${clr2})`;
    console.log("gradient color",clr);
    setColor(clr);
    localStorage.setItem("background",clr);
  }
  
  const changeBackgroundImage =(e)=>{
    console.log(e.target.files);
    const file=URL.createObjectURL(e.target.files[0]);
    console.log("input file is",file)
    setColor(`url(${file})`);
  }

  useEffect(()=>{
    let savedColor=localStorage.getItem("background");
    if(savedColor)
    setColor(savedColor);

  },[]);

  useEffect(()=>{
    const interValid=setInterval(
      getRandomColor
    ,5000);
    return ()=> clearInterval(interValid);

  },[]);

  return (
   <div className="w-full h-screen" style={{background:"olive"}}>
    <div className="w-full h-screen" style={{background:color}}>
      <div className="w-1/2 lg:h-12 md:h-20 sm: h-28 flex flex-wrap gap-4 absolute bottom-14 justify-center bg-slate-200 left-0 py-1 ">
          <button class="min-w-min px-2 rounded-lg" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>
          <button class="min-w-min px-2 rounded-lg" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
          <button class="min-w-min px-2 rounded-lg" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
          <button class="min-w-min px-2 rounded-lg" style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>white</button>
          <button class="min-w-min px-2 rounded-lg" style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>

        </div>
        <div className="w-1/2 lg:h-12 md:h-20  sm:h-28  flex flex-wrap gap-4 justify-center absolute bottom-14 bg-slate-600 right-0 py-1">
          <button className="min-w-min px-2 rounded-lg font-bold " style={{background:"linear-gradient(to right,red,blue,green,white,yellow)" ,color:"black"}} onClick={getRandomColor}>Change random color</button>

          <button className="min-w-min px-2 rounded-lg font-bold " style={{background:"linear-gradient(to right,red,blue,green,white,yellow)" ,color:"black"}} onClick={changeGradientBack}>Change gradient color</button>

          <input type="file" id="filebg"  style={{display:"none"}} onChange={changeBackgroundImage}/>

          <label htmlFor="filebg" className="min-w-min px-2 rounded-lg font bold outline-2 bg-blue-500 text-black font-bold flex items-center justify-center" style={{background:"",backgroundSize:"cover",backgroundPosition:"center"}}>Upload Background </label>
        </div>
    </div>
       

   </div>
  )
}

export default App

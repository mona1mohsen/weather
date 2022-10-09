import Image from "next/image";
import search from "../../public/search.png"
import sun from "../../public/sun.png"
import cloud from "../../public/cloud.png"
import light from "../../public/light.png"
import snow from "../../public/snow.png"
import storm from "../../public/storm.png"
import rain from "../../public/rain.png"
import wind from "../../public/wind.png"
import images from "../../public/images.png"
const Project = ({OnClick,weather}) =>{
   console.log(weather)
    return (
    <div id='section'>
         <div className="background-img">
        <div id="sec1">
     <h1> THE WEATHER</h1>
         {/* <div id='icon'>
            <Image src={sun}/>
            <Image src={cloud}/>
            <Image src={light}/>
            <Image src={snow}/>
            </div> */}
            </div>
            <div id="search">
         <div className="search-bar">
            <input type="text" placeholder="Enter city" name="q" onChange={(e) =>OnClick(e.target.value)}></input>
            <button type="submit"><Image src={search}/></button>
         </div>
         </div>
   
    <div id="sec2">
       <div id="row">
       <div id="content" >
         {/* <Image src={images} width={80} height={30}/> */}
         {weather.weather?<img width="150px" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />:null}
          
         {weather.main?<h1 class="C_temp">{Math.round(weather.main.temp)}°F</h1>:null}
         
          
             </div>
             <div className="city">
            {weather?<h3> { weather.name}</h3>:null}
               {/* <h3>Paris</h3>
               // <h3>Sanaa</h3> */}

             </div>
            
         </div>

            <div className="week">
            <div>
             <h5>Rainy</h5>
                <Image src={rain} width={40} height={40}/>
            </div>
            <div>
            <h5>sunny</h5>
            <Image src={sun} width={40} height={40}/>
            </div>
            <div>
            <h5>cloudy</h5>
            <Image src={cloud} width={40} height={40}/>
            </div>
            <div>
            <h5>stormy</h5>
            <Image src={storm} width={40} height={40}/>
            </div>
            <div>
            <h5>snowy</h5>
            <Image src={snow} width={40} height={40}/>
            </div>
            <div>
            <h5>windy</h5>
            <Image src={wind} width={40} height={40}/>
            </div>
            </div>

      
    </div>
    </div>
    
    </div>
         
     
    )
}
export default Project;
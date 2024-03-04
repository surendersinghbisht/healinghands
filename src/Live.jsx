import axios from "axios";
import React from "react";
import LiveRow from "./LiveRow";
import { Link } from "react-router-dom";
import Button from "./Button";

function Live() {

    const [LiveData, updateLiveData] = React.useState([]);
    React.useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            updateLiveData(response.data)
            console.log('data',response.data)
        })
            },[])

  return (
    <div>

  <Link to='/mainPage' className="font-bold text-xl "><Button>BACK</Button></Link>
  <div className="p-6 rounded-lg  ">
    <div className="space-y-4">
    
    <div className="flex">
    <span class="flex w-6 h-6 bg-red-600 rounded-full"></span>
    <h1 className="ml-4 font-bold">HIGH RISK!</h1>
    </div>

    <div className="flex">
    <span class="flex  w-6 h-6 bg-orange-400 rounded-full"></span>
    <h1 className="ml-4 font-bold">MODERATE RISK!</h1>
    </div>

<div className="flex">
<span class="flex  w-6 h-6 bg-yellow-400 rounded-full"></span>
<h1 className="ml-4 font-bold">LOW RISK!</h1>
</div>

<div className="flex">
<span class="flex  w-6 h-6 bg-green-500 rounded-full"></span>
<h1 className="ml-4 font-bold">NO RISK!</h1>
</div>
 
    </div>

<div className="bg-slate-500">
  <div>
        {LiveData.filter((f,i) => {
          return i <= 25;
        }).map((data,i) => 
         <LiveRow  dataL = {data} index = {i}></LiveRow>
        )
        }
        </div>
        </div>
        </div>
</div>
  );
}

export default Live;

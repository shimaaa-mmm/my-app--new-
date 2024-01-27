import { Fragment, useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import "./Genra.css"

export default function Genra(){ 
const [movieData,setmovieData] = useState([]);
    const [loading , setLoading] = useState(false);
    useEffect(() => {
      getApi();
        
    },[]);

    async function getApi() {
        try{
            setLoading(true)
            const response = await api.get("https://moviesapi.ir/api/v1/genres");
            setmovieData(response.data);
            setLoading(false);  
        }catch(e){
            setLoading(false); 
        }
    }
    const renderFarm =()=> {
        return movieData.map(({id,name})=>{       // dar data araye khalii ast chizi return nemikone
            return(
                <ul key={id}>
                  <Link to={`/Genra/${id}`} ><h2 className="titrg flex">{name}</h2></Link>
                </ul>
            );
        });                                                                     // dobare return ejra mishe baed movie data ye araye poor mishe va rosh halghe mizana                                   // 
    }                                                                           //va be ezaye harkodam yeki li namayesh midahad.
    return(                               
        <Fragment>
            { loading ?<h1>loading...</h1> : <div>{renderFarm()}</div> }
            <Link to="/">back</Link> 
            <br></br>                      
        </Fragment >
    )
}
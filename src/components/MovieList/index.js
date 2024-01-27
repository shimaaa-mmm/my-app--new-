import { Fragment, useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";

export default function MovieList(props){
    const{serverApiUrl} = props;                                  // inja yek props taerif mikonam be nam serverApiUrl.url ra az props di straccher kon
    const [movieData,setmovieData] = useState({        // avalin bar ba state khali runn mishe 
        data: [],
        metadata:{
            current_page: 1,
            per_page: 10,
            page_count: 25,
            total_count: 250,
        },                                                        //mogheei component maute 
    });
    const [loading , setLoading] = useState(false);
    useEffect(() => {
      getApi();
        
    },[]);
    // function getApi(){
    //     setLoading(true);

    async function getApi() {
        try{
            setLoading(true)
            const response = await api.get(serverApiUrl);
            setmovieData(response.data);
            setLoading(false);  
        }catch(e){
            setLoading(false); 
        }
    }
    const renderFarm =()=> {
        return movieData.data.map(({id,title,poster})=>{       // dar data araye khalii ast chizi return nemikone
            return(
                <ul key={id}>
                     <li key={id}>
                        <img src= {poster}/>
                    <Link to={`/m/${id}`}><h4>{title}</h4></Link>
                    </li>
                </ul>
            );
        });                                                                     // dobare return ejra mishe baed movie data ye araye poor mishe va rosh halghe mizana                                   // 
    }                                                                           //va be ezaye harkodam yeki li namayesh midahad.
    return(                               
        <Fragment>
            <div>{renderFarm()}</div>                        
        </Fragment>
    )
}
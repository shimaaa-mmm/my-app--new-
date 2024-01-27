import { useEffect, useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";


export default function SingleGenra(){
    const {genraId} = useParams();
    const [Loading , setLoading] = useState(false);
    const [data , setData] = useState ({
        data:[],
    });

    useEffect(function(){
        getApi();
    },[]);
    async function getApi(){
        try{
            setLoading(true);
            const response = await api.get(`genres/${genraId}/movies`);
            setData(response.data);
            setLoading(false);
        } catch(e){
            setLoading(false);
        }
       
    }
    function renderFarm(){
        return data.data.map(function({id,title,poster}){
            return(
                <li key={id}>
                     <h4>{title}</h4>
                    <img src={poster}/>
                </li>
            );
        });
    }
    return (
        <Fragment>
            <div>
            <h1>by Genra</h1>
            {renderFarm()}
            </div>
        </Fragment>
    );
}
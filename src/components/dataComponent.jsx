import React,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWeather } from "../redux/actions/weather"
function Datas(){
    const dispatch=useDispatch()
    const data=useSelector(state=>state.data.data)
    const loading=useSelector(state=>state.data.loading)
    const error=useSelector(state=>state.data.error)
    useEffect(()=>{
        dispatch(getWeather())
    },[])
    return(
        <>
       {data.loading &&<p>loading...</p>}
       {data.length>0 && <h1>{data.weather.description}</h1>}
       {data.length>0&&data.map((data)=><h1>{data.weather.description}</h1>)}
       {data.length===0&& !loading&&<p>No data available</p>}
       {error && !loading &&<p>{error}</p>}
        </>
    )
}
export default Datas
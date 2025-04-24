import React from 'react'
import { WiDegrees } from 'react-icons/wi';

const Main = ({loading,errorMessage,error, errorCode,userinfo}) => {
    const {
        weather,
        name,
        country,
        temp,
        
    } = userinfo;

    if(loading)
        return(
            <div className='leftSide'>
                <div className='loading'>
                    <h6>Loading...</h6>
                </div>
            </div>
        ) 

    if(error)
        return(
            <div className='leftSide'>
                <h2>Error {errorCode}</h2>
                <h2>City not found</h2>
            </div>
        )

   
  return(
        <div className='leftSide'>    
    
              {weather?.map(it=>{
                  return(
                      <>
                         <img src={`http://openweathermap.org/img/wn/${it.icon}@2x.png`} className='reportImage'></img>
                         <h3>{temp}<span><WiDegrees className='deg'/></span><span className='deg2'>C</span></h3>
                         <h4>{it.description}</h4>
                         <h2>{name}, {country}</h2>
                      </>
                  );
              })}
        </div>

);
     
}

export default Main;
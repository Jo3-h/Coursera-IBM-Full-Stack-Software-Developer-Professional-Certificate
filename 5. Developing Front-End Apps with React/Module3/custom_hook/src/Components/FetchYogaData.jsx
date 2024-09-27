import React from 'react'
import UseFetch from './UseFetch';

const FetchYogaData = () => {

    // get data from API
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');

    return (
        <>
        <ul className="list_data_main">
            <h1 className='usefetch_heading'>Yoga Data</h1>
            {data && data.map((e) => 
            <>
            <li className="list_data">
                <h3>{e.name}</h3>
                <p><strong>Benefits: </strong>{e.benefits}</p>
                <p><strong>time/duration: </strong>{e.time_duration}</p>
            </li>
            </> 
            )}
        </ul>
        </>
    )
}

export default FetchYogaData
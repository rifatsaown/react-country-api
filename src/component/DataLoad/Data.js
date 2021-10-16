import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
import './Data.css'

const Data = () => {
    const[countries , setCountries]= useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Countries Number : {countries.length}</h1>
            <div className="countries">
            {
                countries.map(country => <Countries key={country.name} country={country}></Countries>)
            }
            </div>
        </div>
    );
};

export default Data;
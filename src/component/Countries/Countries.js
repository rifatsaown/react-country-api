import React from 'react';
import './Countries.css'
const Countries = (props) => {
    const {name, capital, flag, region} = props.country;
    return (
        <div className="country">
            <h3>Name: {name}</h3>
            <img src={flag}  alt=''/>
            <p><small>Region: {region}</small></p>
            <p>Capital:{capital}</p>
        </div>
    );
};

export default Countries;
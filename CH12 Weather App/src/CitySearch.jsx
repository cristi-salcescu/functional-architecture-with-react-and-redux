import React from 'react';
import { connect } from 'react-redux';
import { partial } from 'lodash';
import { changeCityName } from './actions';
import { fetchCity } from './operations';
import { withChange } from './helpers';

function CitySearch({ cityName, changeCityName, fetchCity }){
    return(
        <div>
           <input 
            type="text" 
            value={cityName} 
            onChange={withChange(changeCityName)} />

           <button 
           type="button" 
           onClick={partial(fetchCity, cityName)} >
               Add City
           </button>
        </div>
    )
}

function mapState({cityName}){
    return {
        cityName
    }
}
  
export default connect(
    mapState,
    { changeCityName, fetchCity }
)(CitySearch)
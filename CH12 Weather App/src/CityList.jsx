import React from 'react';
import { connect } from 'react-redux';
import CityItem from './CityItem';

function CityList({cities}){   
    return (
        <div>
            { cities.map(city => (
                <CityItem key={city.id} city={city} />   
            ))}
        </div>
    )
}

function mapState({cities}){
    return {
        cities
    }
}
  
export default connect(
    mapState
)(CityList)
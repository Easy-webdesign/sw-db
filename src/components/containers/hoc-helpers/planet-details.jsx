import React from 'react';
import { withContext } from '../../hoc';
import { ItemDetails, Record } from '..';

const PlanetDetails = props => {
    return <ItemDetails {...props}>
                <Record field='population' label='Population'/>
                <Record field='rotationPeriod' label='Rotation period'/>
                <Record field='diameter' label='Diameter'/>
            </ItemDetails>
}

const mapMethodsToProps = sw => {
    return {
        getData: sw.getPlanet,
        getImageUrl: sw.getPlanetImage
    }
};

export default withContext(mapMethodsToProps)(PlanetDetails);
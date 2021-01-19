import React from 'react';
import { withContext } from '../../hoc';
import { ItemDetails, Record } from '..';

const StarshipDetails = props => {
    return <ItemDetails {...props}>
                <Record field='model' label='Model'/>
                <Record field='cost' label='Cost'/>
                <Record field='length' label='Length'/>
            </ItemDetails>
}

const mapMethodsToProps = sw => {
    return {
        getData: sw.getStarship,
        getImageUrl: sw.getStarshipImage
    }
};

export default withContext(mapMethodsToProps)(StarshipDetails);
import React from 'react';
import { withContext } from '../../hoc';
import { ItemDetails, Record } from '..';

const PersonDetails = props => {
    return <ItemDetails {...props}>
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
                <Record field='birthYear' label='Birth Year'/>
            </ItemDetails>
}

const mapMethodsToProps = sw => {
    return {
        getData: sw.getPerson,
        getImageUrl: sw.getPersonImage
    }
};

export default withContext(mapMethodsToProps)(PersonDetails);
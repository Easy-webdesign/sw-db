import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList, Row } from '../components';

const PeoplePage = ({history, match}) => {


        return <Row 
                    left={<PersonList onItemSelected={(id) => history.push(id)}/>} 
                    right={<PersonDetails itemId={match.params.id || 3}/>}
                />
};

export default withRouter(PeoplePage);
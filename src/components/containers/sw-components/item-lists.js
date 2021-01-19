import React from 'react';
import { withContext, withData } from '../../hoc';
import { ItemList } from '../item-list';

const withChildFunction = (Wrapped, fn) => p => {
    return <Wrapped {...p}>
                {fn}
            </Wrapped>
}

const childFunc = (p) => `${p.name}`;

const mapMethodsToPropsPeople = sw => ({getData: sw.getAllPeople});
const mapMethodsToPropsPlanet = sw => ({getData: sw.getAllPlanets});
const mapMethodsToPropsStarship = sw => ({getData: sw.getAllStarships});

const PersonList = withContext(mapMethodsToPropsPeople)
                    (withChildFunction(
                        withData(ItemList), childFunc));  

const PlanetList = withContext(mapMethodsToPropsPlanet)
                    (withChildFunction(
                        withData(ItemList), childFunc));  

const StarshipList = withContext(mapMethodsToPropsStarship)
                    (withChildFunction(
                        withData(ItemList), childFunc));  

export {PersonList, PlanetList, StarshipList};
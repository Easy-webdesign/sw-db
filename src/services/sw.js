export class SwapiService{
    url = 'https://swapi.py4e.com/api/';
    imgBase = 'https://starwars-visualguide.com/assets/img/';
  
    getResourse = async (url) => {
      const res = await fetch(this.url+url);
    
      if(!res.ok){
        throw new Error(`Could not fetch ${this.url+url}, received ${res.status}`)
      }
    
      return await res.json();
    }
  
    getAllPeople = async() => {
      const res = await this.getResourse('people');
      return res.results.map(this._transformPerson).slice(0, 5);
    };
    
    getAllPlanets = async() => {
      const res = await this.getResourse('planets');
      return res.results.map(this._transformPlanet).slice(0, 5);
    };
    
    getAllStarships = async() => {
      const res = await this.getResourse('starships');
      return res.results.map(this._transformStarhip).slice(0, 5);
    };
  
  
    getPerson = async id => {
      const res = await this.getResourse('people/' + id);
      return this._transformPerson(res);;
    };
  
    getPlanet = async id => {
      const res = await this.getResourse('planets/' + id);
      return this._transformPlanet(res);
    };
  
    getStarship = async id => {
      const res = await this.getResourse('starships/' + id);
      return this._transformStarhip(res);
    };

    getPersonImage = ({id}) => {
      return `${this.imgBase}characters/${id}.jpg`
    }
    getPlanetImage = ({id}) => {
      return `${this.imgBase}planets/${id}.jpg`
    }
    getStarshipImage = ({id}) => {
      return `${this.imgBase}starships/${id}.jpg`
    }


    _regExpId = ({url}) => {
      const reg = /\/([0-9]*)\/$/;

      return url.match(reg)[1];
    }
  

    _transformPerson = (el) => {
      const id = this._regExpId(el);
      
      return {
        id,
        name: el.name,
        gender: el.gender,
        birthYear: el.birth_year,
        eyeColor: el.eye_color
      }
    }
    _transformPlanet = (el) => {
      const id = this._regExpId(el);
      return {
        id,
        name: el.name,
        population: el.population,
        rotationPeriod: el.rotation_period,
        diameter: el.diameter
      }
    }
    _transformStarhip = (el) => {
      const id = this._regExpId(el);
      return {
        id,
        name: el.name,
        cost: el.cost_in_credits,
        length: el.length,
        model: el.model
      }
    }
  
  
  }
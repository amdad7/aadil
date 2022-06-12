import { combineReducers } from 'redux';
const axios = require('axios')


/*export function addBird(bird) {
  return {
    type: ADD_BIRD,
    bird,
  }
}*/

export function addpeople(people) {
    return {
        type: 'ADD_PEOPLE',
        people
    }
}


const defaultPeople = [
];

function People(state=defaultPeople, action) {
  switch (action.type) {
    case 'ADD_PEOPLE':
      return [
          ...state,{
              id:action.people.id,
              name: action.people.name,
              avatar: action.people.avatar,
              first_name: action.people.first_name,
              last_name: action.people.last_name,
              email: action.people.email
          }
      ]
        
    default:
      return state;
  }
}

const peopleApp = combineReducers({
  People
});

export default peopleApp;
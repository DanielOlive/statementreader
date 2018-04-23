/* import { call, put } from "redux-saga";
import * as TYPES from "../types";

const api = url => fetch(url).then(response => response.json());

export const fetchStarwarsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_REQUEST
});

export function* fetchPerson(action) {
  try {
    const person = yield call(api, "https://swapi.co./api/people");
  } catch (e) {
    console.log(e)
  }
}
 */

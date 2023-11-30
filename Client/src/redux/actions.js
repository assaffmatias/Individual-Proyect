import axios from 'axios';
export const GET_DRIVERS = "GET_DRIVERS";
export const GET_DRIVER_ID = "GET_DRIVER";
export const POST_DRIVER = "POST_DRIVER";
export const GET_TEAMS = "GET_TEAMS";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const SELECT_TEAM = "SELECT_TEAM";

export const getDrivers = (name) => {
    return async function (dispatch) {
        let url = "http://localhost:3001/drivers/"
        
        if (name) {
            url += `?name=${name}`;
        };

        const apiData = await axios.get(url)
        const drivers = apiData.data;

        dispatch({type: GET_DRIVERS, payload: drivers})
    };
};

export const getDriverById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/drivers/${id}`)

        const driver = apiData.data;
        dispatch({type: GET_DRIVER_ID, payload: driver})
    };
};

export const postDriver = (form) => {
    return async function (dispatch) {
        const apiData = await axios.post("http://localhost:3001/drivers/", form);

        const driver = apiData.data
        dispatch({type: POST_DRIVER, payload: driver})
    };
};

export const getTeams = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/teams/");

        const teams = apiData.data
        dispatch({type: GET_TEAMS, payload: teams})
    };
};

export const filterDrivers = (filterValue) => {
    return {
        type: FILTER,
        payload: filterValue,
    };
};

export const orderDrivers = (value) => {
    return {
        type: ORDER,
        payload: value,
    };
};

export const selectTeam = (teamName) => {
    return {
        type: SELECT_TEAM,
        payload: teamName,
    };
};

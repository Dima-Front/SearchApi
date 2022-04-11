export const ADD_RESULT = 'ADD_RESULT';
export const IS_FETCHING = 'IS_FETCHING';
export const CLEAR_RESULT = 'CLEAR_RESULT';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


export const addResultAC = (data) => {
    return {
        type: ADD_RESULT,
        payload: data
    }
}

export const isLoadAC = (bool) => {
    return {
        type: IS_FETCHING,
        payload: bool
    }
}

export const clearResAC = () => {
    return {
        type: CLEAR_RESULT
    }
}

export const setCurrentPageAC = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}

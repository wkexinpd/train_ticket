import {
  ACTION_SET_FROM,
  ACTION_SET_TO,
  ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
  ACTION_SET_CITY_DATA,
  ACTION_SET_IS_LOADING_CITY_DATA,
  ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
  ACTION_SET_IS_HIGH_SPEED
} from './actionType'

// import {getState} from 'redux'

export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  }
}

export function setTo(to) {
  return {
    type: ACTION_SET_TO,
    payload: to
  }
}

export function setIsLoadingCityData(isLoadingCityData) {
  return {
    type: ACTION_SET_IS_LOADING_CITY_DATA,
    payload: isLoadingCityData
  }
}

export function setCityData(cityData) {
  return {
    type: ACTION_SET_CITY_DATA,
    payload: cityData
  }
}

export function toggleHighSpeed() {
  return (dispatch,getState)=>{
    const { isHighSpeed } = getState()
    dispatch({
      type: ACTION_SET_IS_HIGH_SPEED,
      payload: !isHighSpeed
    })
  }
}

export function showCitySelector(currentSelectingLeftCity) {
  return (dispatch) => {
    dispatch({
      type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
      payload:true
    })
    dispatch({
      type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
      payload:currentSelectingLeftCity
    })
  }
}

export function hideCitySelector() {
  return {
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: false
  }
}

export function setSelectedCity(city) {
  return (dispatch, getState) => {
    const { currentSelectingLeftCity } = getState()
    if(currentSelectingLeftCity){
      dispatch(setFrom(city))
    } else{
      dispatch(setTo(city))
    }
  }
}

export function showDateSelector() {
  return {
    type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    payload: false
  }
}

export function exchangeFromTo() {
  return (dispatch, getState) =>{
    const {from,to} = getState()
    dispatch(setFrom(to))
    dispatch(setTo(from))
  }
}

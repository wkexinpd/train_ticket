import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

import reducers from './reducers'
import thunk from 'redux-thunk'
export default createStore(
  combineReducers(reducers),
  //state的默认值
  {
    from: '北京',  //始发城市
    to: '上海',    //目的城市
    isCitySelectorVisible: false,  //是否打开城市选择浮层
    currentSelectingLeftCity: false, //当前选择的是不是from
    cityData: [], //城市选择浮层上全部的城市数据
    isLoadingCityData: false, //当前是否正在加载城市数据
    isDateSelectorVisible: false, //是否打开日期选择浮层
    isHighSpeed: false //是否选择了高铁动车
  },
  applyMiddleware(thunk)
)
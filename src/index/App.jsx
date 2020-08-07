import { connect } from 'react-redux'
import React, {useCallback} from 'react';
import Header from '../components/header/Header.jsx'
import Journey from './Journey/Journey.jsx'
import DepartDate from './DepartDate/DepartDate.jsx'
import HighSpeed from './HighSpeed/HighSpeed.jsx'
import Submit from './Submit/Submit.jsx';
import './App.css'

function App(props) {
  const onBack = useCallback(() => {
    window.history.back();
  },[])
  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
      </div>
      <Journey/>
      <DepartDate/>
      <HighSpeed/>
      <Submit/>
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return {dispatch}
  }
)(App)

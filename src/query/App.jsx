import { connect } from 'react-redux'
import React, {useCallback} from 'react';
import Header from '../components/header/Header.jsx'
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

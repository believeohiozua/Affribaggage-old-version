import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {TravellersPage, RegistrationLoginPage} from 'pages'
import 'fonts.css'

const App = () => {
  return (
    <Switch>
      <Route path="/travellers-page" component={TravellersPage}/>
      <Route path="/" component={RegistrationLoginPage}/>
    </Switch>
  )
}

export default App
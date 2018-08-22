import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Main from './Main'
import About from './../route1/About'
import Info from './Info'
import Topics from './../route1/Topics'
import NotMatch from './Notmatch'

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route path="/main" render={() =>
              <Main>
                <Route path="/main/:mainId" component={Info}></Route>
              </Main>
            }></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
            <Route component={NotMatch}></Route>
          </Switch>
        </Home>
      </Router>
    )
  }
}
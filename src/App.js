import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './App.css';
import Home from './Home/Home';
import About from './About/About';
import WithTransition from './WithTransition/WithTransition';

class App extends Component {
  state = {
    transition: true,
    init: false
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({ transition: false, init: true });
    }, 1400);
  }
  startTransition = () => {
    this.setState({ transition: true, init: false });
  }
  endTransition = () => {
    this.setState({ transition: false });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/about' exact>About</NavLink>
          </header>
          <WithTransition active={this.state.transition} init={this.state.init}/>
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                onEntering={this.startTransition}
                onExited={this.endTransition}
                timeout={1400}
                classNames='fade'
                key={location.key}
              >
                <Switch location={location}>
                  <Route path='/' exact component={Home} />
                  <Route path='/about' exact component={About} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routeList';
import { removeAuthenticatedState } from '../../services/Auth'
import DefaultFooter from './DefaultFooter'
import DefaultHeader from './DefaultHeader'

class DefaultLayout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.signOut = this.signOut.bind(this)
  }
  

  signOut(e) {
    e.preventDefault()
    removeAuthenticatedState()
    this.props.history.push('/login')
  }

  render() {
    const mystyle = {
      backgroundColor: "white",
    };
    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main" style={mystyle}>
            <AppBreadcrumb appRoutes={routes} router={router}/>
            
            <Container fluid >
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  {/* <Redirect from="/" to="/dashboard" /> */}
                </Switch>
            </Container>
          </main>
        </div>
        <AppFooter>
            <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;

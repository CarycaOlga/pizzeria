import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TablesBookingId from './components/views/TablesBookingId/TablesBookingId';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEventId from './components/views/TablesEventId/TablesEventId';
import TablesEventNew from './components/views/TablesEventNew/TablesEventNew';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import WaiterOrderId from './components/views/WaiterOrderId/WaiterOrderId';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F'},
    //secondary: { main: '#11cb5f'},
  },
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingId} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBookingNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/event/new`} component={TablesEventId} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={TablesEventNew} />
              <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrderId} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;

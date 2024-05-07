import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@mui/material';
import Profile from './component/Profile/Profile';
import Header from './component/Header/Header';
import Portfolio from './Pages/Portfolio/Portfolio';
import Resume from './Pages/Resume/Resume';
import Footer from './component/Footer/Footer'; 

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';



const App = () => {
  return (
   <Container>
    <Grid container>
      <Grid item xs={12} sm={12} md={4} lg={3}>
        <Profile />
      </Grid>
      <Grid item xs>
        <Header />

        <Router>
        <Switch>
          <Route path="/portfolio">
              <Portfolio />
          </Route>
          <Route path="/">
              <Resume />
          </Route>
        </Switch>
        </Router>

        <Footer />
      </Grid>
    </Grid>
   </Container>
  );
}

export default App;

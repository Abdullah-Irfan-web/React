


import {Route,Switch} from 'react-router-dom';

import AddNewMetup from './Pages/AddNewMetup';
import AllMeetup from './Pages/AllMeetup';
import Favorites from './Pages/Favorites';
import Layout from './componenets/layout/Layout';

function App() {
  return (
   
    
      <Layout>
     <Switch>
      <Route path="/" exact>
       <AllMeetup/>
         
      </Route>
      <Route path="/add" exact>
        <AddNewMetup/>

      </Route>
      <Route path="/favorites"exact>
       <Favorites/>

      </Route>
     </Switch>
   </Layout>
  );
}

export default App;

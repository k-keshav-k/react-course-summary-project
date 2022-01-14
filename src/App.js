import { Route } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetUps";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <AllMeetupPage />
      </Route>
      <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </Layout>
  );
}

export default App;

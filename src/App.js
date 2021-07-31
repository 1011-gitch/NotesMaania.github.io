import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Notesmania from "./components/notesmania";
import Create from "./components/create";
import Update from "./components/update";
import Delete from "./components/delete";
import Notfound from "./components/notfound";
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Notesmania}></Route>
          <Route exact path="/create" component={Create}></Route>
          <Route exact path="/update" component={Update}></Route>
          <Route exact path="/delete" component={Delete}></Route>
          <Route component={Notfound}></Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;

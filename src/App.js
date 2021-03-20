import Login from './views/Login'
import List from './views/List'
import SimpleComponent from "./views/SimpleComponent";
import ClassComponent from "./views/ClassComponent";
import StateComponent from "./views/StateComponent";
import PropsComponent from "./views/PropsComponent";
import RefsComponent from "./views/RefsComponent";
import UncontrolledComponent from "./views/UncontrolledComponent";
import ControlledComponent from "./views/ControlledComponent";

function App() {
  return (
    <div>
        <Login />
        <List />
        <SimpleComponent />
        <ClassComponent />
        <StateComponent />
        <PropsComponent />
        <RefsComponent />
        <UncontrolledComponent />
        <ControlledComponent />
    </div>
  );
}

export default App;

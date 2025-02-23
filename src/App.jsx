import "./App.css";
import Cake from "./features/cake/Cake";
import IceCream from "./features/iceCream/IceCream";
import Users from "./features/users/Users";

function App() {
  return (
    <div className="app">
      <Cake />
      <IceCream />
      <Users />
    </div>
  );
}

export default App;

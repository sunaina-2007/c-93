import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./project/Login";
import SignUp from "../project/SignUp";
import Today from "../project/Today";
import Profile from "../project/Profile.js";
import Exercise from "../project/Exercise.js";

const Navigator = createStackNavigator({
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Today: { screen: Today },
  Profile: { screen: Profile },
  Exercise: { screen: Exercise },
});

const App = createAppContainer(Navigator);

export default App;
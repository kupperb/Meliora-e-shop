import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import AboutUsPage from "../pages/AboutUsPage";
import LoginPage from "../pages/LoginPage";


type NavType = {
    name: string;
    path: string;
    component: React.FC;
  };
  
const NavigationPath: NavType[] = [
    {
      name: "HOME",
      path: "/",
      component: LandingPage,
    },
    {
      name: "SHOP",
      path: "/dashboard",
      component: Dashboard,
    },
    {
      name: "ABOUT",
      path: "/about",
      component: AboutUsPage,
    },
    {
      name: "SignInUp",
      path: "/sign",
      component: LoginPage,
    },
    
];
  
export default NavigationPath;
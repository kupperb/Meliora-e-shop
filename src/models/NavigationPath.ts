import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import AboutUsPage from "../pages/AboutUsPage";
import LoginPage from "../pages/LoginPage";


type NavType = {
    name: string;
    path: string;
    component: React.FC;
    hasLogo: boolean;
  };
  
const NavigationPath: NavType[] = [
    {
      name: "HOME",
      path: "/",
      component: LandingPage,
      hasLogo: false,
    },
    {
      name: "SHOP",
      path: "/dashboard",
      component: Dashboard,
      hasLogo: true,
    },
    {
      name: "ABOUT",
      path: "/about",
      component: AboutUsPage,
      hasLogo: true,
    },
    {
      name: "SignInUp",
      path: "/sign",
      component: LoginPage,
      hasLogo: true,
    },
    
];
  
export default NavigationPath;
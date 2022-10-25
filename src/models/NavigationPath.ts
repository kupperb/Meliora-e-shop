import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import AboutUsPage from "../pages/AboutUsPage";

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
      path: "/shop",
      component: Dashboard,
    },
    {
      name: "ABOUT US",
      path: "/aboutus",
      component: AboutUsPage,
    },
];
  
export default NavigationPath;
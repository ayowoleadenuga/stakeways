import {
  MdHistory,
  MdHome,
  MdGames,
  MdPerson
} from "react-icons/md";
import Home from "../component/home/home";
import AllGames from "../component/all_games/allGames";
import Transactions from "../component/transactions/transaction";
import AccountSettings from "../component/account/accountSettings";

export const routeConstants = {
  HOME: {
    key: "home",
    title: "Home",
    exact: true,
    name: "Home",
    path: "/",
    icon: MdHome,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: Home,
    enabled: true
  },
  ALL_GAMES: {
    key: "all_games",
    title: "All Games",
    name: "All Games",
    path: "/all_games",
    icon: MdGames,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: AllGames,
    enabled: true
  },
  TRANSACTIONS: {
    key: "history",
    title: "History",
    name: "History",
    path: "/history",
    icon: MdHistory,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: Transactions,
    enabled: true
  },
  ACCOUNT: {
    key: "account_settings",
    title: "Account Settings",
    name: "Account Settings",
    path: "/account_settings",
    icon: MdPerson,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: AccountSettings,
    enabled: true
  }
};

export const createRoutes = () => {
  const routes = [];
  for (var route in routeConstants) {
    routeConstants[route].enabled && routes.push(routeConstants[route]);
  }
  return routes;
};

export const routes = createRoutes();

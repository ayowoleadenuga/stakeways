import {
  MdHistory,
  MdHome,
  MdGames,
  MdPerson,
  MdViewList
} from "react-icons/md";
import Home from "../component/home/home";
import AllGames from "../component/all_games/allGames";
import Transactions from "../component/transactions/transaction";
import AccountSettings from "../component/account/accountSettings";
import History1 from "../component/history/history";

export const routeConstants = {
  HOME: {
    key: "home",
    title: "Home",
    exact: true,
    name: "Home",
    path: "/home",
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
  HISTORY: {
    key: "history",
    title: "History",
    name: "History",
    path: "/history",
    icon: MdHistory,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: History1,
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
  },
  TRANSACTIONS: {
    key: "transaction",
    title: "Transaction",
    name: "Transactions",
    path: "/transactions",
    icon: MdViewList,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: Transactions,
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

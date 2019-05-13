import {
  MdHistory,
  MdHome,
  MdGames,
  MdPerson,
  MdViewList
} from "react-icons/md";
import Home from "../component/App/home/home";
import AllGames from "../component/App/all_games/allGames";
import ManageTransactions from "../component/App/transactions/ManageTransaction";
import AccountSettings from "../component/App/account/accountSettings";
import ManageHistory from "../component/App/history/ManageHistory";

export const routeConstants = {
  HOME: {
    key: "home",
    exact: true,
    title: "Home",
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
    path: "/all-games",
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
    pageComponent: ManageHistory,
    enabled: true
  },
  ACCOUNT: {
    key: "account_settings",
    title: "Account Settings",
    name: "Account Settings",
    path: "/account-settings",
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
    title: "Transactions",
    name: "Transactions",
    path: "/transactions",
    icon: MdViewList,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: ManageTransactions,
    enabled: true
  },
  ALL: {
    key: "all",
    title: "all",
    name: "all",
    path: "*",
    icon: MdHome,
    menu: false,
    menuOptions: {
      darken: false
    },
    pageComponent: Home,
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

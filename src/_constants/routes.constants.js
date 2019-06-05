import {
  MdHistory,
  MdHome,
  MdGames,
  MdViewList,
  MdCardTravel,
  MdDns,
  MdAssignment,
  MdPeopleOutline,
  MdDashboard
} from "react-icons/md";
import Home from "../component/App/home/home";
import AllGames from "../component/App/all_games/allGames";
import ManageTransactions from "../component/App/transactions/ManageTransaction";
import BetManagerTable from "../component/App/admin/BetManagerTable"
import ManageHistory from "../component/App/history/ManageHistory";
import AccountSettings from "../component/App/account/accountSettings";
import ResultInfoTable from "../component/App/admin/ResultInfoTable";
import RolesTable from "../component/App/admin/RolesTable";
import UsersTable from "../component/App/admin/UsersTable";
import GamesInfoTable from "../component/App/admin/GamesInfoTable";

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
    key: "reset-password",
    title: "Reset Password",
    name: "Reset Password",
    path: "/reset-password",
    icon: MdHistory,
    menu: false,
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

export const routeConstantsAdmin = {
  BET_MANAGER: {
    key: "bet-manager",
    title: "Bet Manager",
    name: "Bet Manager",
    path: "/bet-manager",
    icon: MdCardTravel,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: BetManagerTable,
    enabled: true
  },
  RESULT: {
    key: "result",
    title: "Result",
    name: "Result",
    path: "/result",
    icon: MdDashboard,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: ResultInfoTable,
    enabled: true
  },
  ROLES: {
    key: "roles",
    title: "Roles",
    name: "Roles",
    path: "/roles",
    icon: MdDns,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: RolesTable,
    enabled: true
  },
  USERS: {
    key: "users",
    title: "Users",
    name: "Users",
    path: "/users",
    icon: MdPeopleOutline,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: UsersTable,
    enabled: true
  },
  GAMES_INFO: {
    key: "games-info",
    title: "Games-Info",
    name: "Games-Info",
    path: "/games-info",
    icon: MdAssignment,
    menu: true,
    menuOptions: {
      darken: false
    },
    pageComponent: GamesInfoTable,
    enabled: true
  }
}

export const createRoutes = () => {
  const routes = [];
  for (var route in routeConstants) {
    routeConstants[route].enabled && routes.push(routeConstants[route]);
  }
  return routes;
};

export const createRoutes2 = () => {
  const routes = [];
  for (var route in routeConstantsAdmin) {
    routeConstantsAdmin[route].enabled && routes.push(routeConstantsAdmin[route]);
  }
  return routes;
};

export const adminRoutes = createRoutes2();
export const routes = createRoutes();

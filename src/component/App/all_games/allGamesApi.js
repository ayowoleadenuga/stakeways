// import GameTemplate from "../game/game";
import premier from "../../assets/premier.png";
import ghana from "../../assets/ghana.jpg";
import golden from "../../assets/golden.jpg";
import rands from "../../assets/rands.jpg";

export const routeConst = {
    BABA_IJEBU: {
      key: "baba-ijebu",
      title: "Baba Ijebu",
      exact: true,
      img: {premier},
      name: "premier",
      path: "/baba-ijebu",
      menu: true,
      enabled: true
    },
    GHANA: {
        key: "ghana-lotto",
        title: "Ghana Lotto",
        img: {ghana},
        name: "ghana",
        path: "/ghana",
        enabled: true
      },
      GOLDEN: {
        key: "golden-lotto",
        title: "Golden Lotto",
        img: {golden},
        name: "golden",
        path: "/golden",
        enabled: true
      },
      RANDS: {
        key:"rands-lotto",
        title: "Rands Lotto",
        img: {rands},
        name: "rands",
        path: "/rands",
        enabled: true
      },
  };
  
  export const createRoutes = () => {
    const routes = [];
    for (var route in routeConst) {
      routeConst[route].enabled && routes.push(routeConst[route]);
    }
    return routes;
  };
  
  export const routes = createRoutes();
  
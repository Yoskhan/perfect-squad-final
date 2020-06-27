import Home from "../components/Home.vue";
import Favourites from "../components/Favourites.vue";
import Players from "../components/Players.vue";
import PlayerDetails from "../components/PlayerDetails.vue";

export const routes = [
  { path: "/", component: Home },
  {
    path: "/players",
    component: Players,
    children: [
      {
        path: ":player",
        component: PlayerDetails,
        props: true,
      },
    ],
  },
  { path: "/favourites", component: Favourites },
];

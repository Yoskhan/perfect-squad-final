import Home from '../components/Home.vue'
import Favourites from '../components/Favourites.vue'
import Players from '../components/Players.vue'

export const routes = [
    { path: '/', component: Home},
    { path: '/players', component: Players },
    { path: '/favourites', component: Favourites }
  ]
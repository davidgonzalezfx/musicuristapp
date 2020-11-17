import HomeView from '../views/home';
import TrackView from '../views/track';

const RoutesConfig = {
  '/home': {
    exact: true,
    component: HomeView
  },
  '/track/:id': {
    exact: true,
    component: TrackView
  }
}

export { RoutesConfig }
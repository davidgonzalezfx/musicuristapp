import HomeView from '../views/home';
// import TrackDetail from '../views/trackDetail';

const RoutesConfig = {
  '/home': {
    exact: true,
    component: HomeView
  },
  // '/track:id': {
  //   exact: true,
  //   component: BrandsView
  // }
}

export { RoutesConfig }
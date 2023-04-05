import Home from '../Pages/Home';
import Status from '../Pages/Status';
import Add from '../Pages/Add';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/Status', component: Status },
  { path: '/Add', component: Add },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };

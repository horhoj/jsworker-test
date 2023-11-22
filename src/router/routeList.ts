import { RouteItem } from './types';
import { Page404 } from '~/app/pages/Error404Page';
import { AboutPage } from '~/features/about/pages/AboutPage';
import { ListOfPeoplePage } from '~/features/people/pages/ListOfPeoplePage';
import { getUUID } from '~/utils/getUUID';

export const routeList = [
  {
    id: getUUID(),
    component: ListOfPeoplePage,
    inMenu: true,
    name: 'listOfPeople',
    path: '/list-of-people',
    title: 'List of people',
  },
  {
    id: getUUID(),
    component: AboutPage,
    inMenu: true,
    name: 'about',
    path: '/about',
    title: 'About',
  },
  {
    id: getUUID(),
    name: 'error404',
    path: '*',
    component: Page404,
    inMenu: false,
    title: '',
  },
] as const satisfies readonly RouteItem[];

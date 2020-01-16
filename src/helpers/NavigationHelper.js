import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default class NavigationHelper {
  static navigateTo (path: string, params?:{}) {
    history.push(path, params);
  }

  static goBack () {
    history.goBack();
  }
}

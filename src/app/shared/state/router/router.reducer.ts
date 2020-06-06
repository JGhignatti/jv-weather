import { Params, RouterStateSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterState {
  url: string;
  params: Params;
  queryParams: Params;
  fragment: string;
}

export class CustomRouterSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    const { fragment } = routerState.root;

    let route = routerState.root;
    const params: Params = {};
    do {
      if (!!route.params) {
        Object.keys(route.params).forEach(key => {
          params[key] = route.params[key];
        });
      }
      route = route.firstChild;
    } while (!!route);

    return { url, params, queryParams, fragment };
  }
}

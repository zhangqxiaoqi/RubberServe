import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'E:/Projects/github/RubberServe/ADMIN/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
          LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    routes: [
      {
        path: '/',
        name: 'baseinfo',
        icon: 'file-text',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__BaseInfo__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/BaseInfo/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__BaseInfo__index" */ '../BaseInfo/index'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../BaseInfo/index').default,
        exact: true,
      },
      {
        name: 'news',
        path: '/news',
        icon: 'file-text',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__News__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/News/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__News" */ '../News'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../News').default,
        children: [{}],
        exact: true,
      },
      {
        name: 'news.add',
        path: '/news/add',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__News__AddOrEdit__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/News/AddOrEdit/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__News__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/News/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__News__AddOrEdit" */ '../News/AddOrEdit'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../News/AddOrEdit').default,
        hideInMenu: true,
        exact: true,
      },
      {
        name: 'news.edit',
        path: '/news/edit',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__News__AddOrEdit__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/News/AddOrEdit/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__News__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/News/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__News__AddOrEdit" */ '../News/AddOrEdit'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../News/AddOrEdit').default,
        hideInMenu: true,
        exact: true,
      },
      {
        name: 'about',
        path: '/about',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__About__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/About/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__About" */ '../About'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../About').default,
        hideInMenu: true,
        exact: true,
      },
      {
        name: 'produce.add',
        path: '/produce/add',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__Produce__AddOrEdit__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Produce/AddOrEdit/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__Produce__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Produce/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__Produce__AddOrEdit" */ '../Produce/AddOrEdit'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../Produce/AddOrEdit').default,
        hideInMenu: true,
        exact: true,
      },
      {
        name: 'produce.edit',
        path: '/produce/edit',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__Produce__AddOrEdit__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Produce/AddOrEdit/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__Produce__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Produce/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__Produce__AddOrEdit" */ '../Produce/AddOrEdit'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../Produce/AddOrEdit').default,
        hideInMenu: true,
        exact: true,
      },
      {
        name: 'produce',
        path: '/produce',
        icon: 'file-text',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__Produce__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Produce/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__Produce" */ '../Produce'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../Produce').default,
        exact: true,
      },
      {
        name: 'pro.add',
        path: '/pro/add',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__Pro__AddOrEdit__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Pro/AddOrEdit/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__Pro__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Pro/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__Pro__AddOrEdit" */ '../Pro/AddOrEdit'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../Pro/AddOrEdit').default,
        hideInMenu: true,
        exact: true,
      },
      {
        name: 'pro.edit',
        path: '/pro/edit',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__Pro__AddOrEdit__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Pro/AddOrEdit/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
                import(/* webpackChunkName: 'p__Pro__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Pro/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__Pro__AddOrEdit" */ '../Pro/AddOrEdit'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../Pro/AddOrEdit').default,
        hideInMenu: true,
        exact: true,
      },
      {
        name: 'pro',
        icon: 'file-text',
        path: '/pro',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__Pro__model.js' */ 'E:/Projects/github/RubberServe/ADMIN/src/pages/Pro/model.js').then(
                  m => {
                    return { namespace: 'model', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__Pro" */ '../Pro'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../Pro').default,
        exact: true,
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('E:/Projects/github/RubberServe/ADMIN/node_modules/_umi-build-dev@1.11.3@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import(/* webpackChunkName: "p__404" */ '../404'),
          LoadingComponent: require('E:/Projects/github/RubberServe/ADMIN/src/components/PageLoading/index')
            .default,
        })
      : require('../404').default,
    exact: true,
  },
  {
    component: () =>
      React.createElement(
        require('E:/Projects/github/RubberServe/ADMIN/node_modules/_umi-build-dev@1.11.3@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}

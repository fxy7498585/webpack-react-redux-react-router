### 使用路由

1. 使用 this.props.history.push('./'); 即可
2. 自定义的prop上需继承 RouteComponentProps ； import {RouteComponentProps} from 'react-router';
3. 组件内 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterComponent));

### 子路由的跳转

1. 使用react-router-config

2. 路由配置文件 route.ts

   ```
   import layoutComponent from '../component/layout/layout';
   import userComponent from '../component/user/user';
   import CounterComponent from '../component/counter'
   
   const routes = [
     {
       path: '/',
       // exact: true,
       component: layoutComponent,
       children: [
         {
           path: '/user',
           component: userComponent
         },{
           path: '/counter',
           component: CounterComponent
         }
       ]
     }
   ]
   
   export {routes};
   ```

3. 根组件的使用

   ```
   import { BrowserRouter } from 'react-router-dom'
   import { renderRoutes } from 'react-router-config'
   import { routes } from '../router/route'
   <BrowserRouter>
    		{renderRoutes(routes)}
    </BrowserRouter>
   ```

4. 子组件的使用

   ```
   this.state = {
     route: props.route,
   }
   {renderRoutes(this.state.route.children)}
   ```

   
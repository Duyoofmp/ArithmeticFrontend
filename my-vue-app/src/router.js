import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from './components/LoginComponent.vue';
import CalculatorComponent from './components/CalculatorComponent.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: LoginComponent
    },
    {
      path: '/calculator',
      component: CalculatorComponent
    }
  ]
});

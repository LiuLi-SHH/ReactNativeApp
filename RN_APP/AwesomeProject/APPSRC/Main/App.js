
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';  

import Home from '../../MyCode/HOME/Home';
import Site from '../../MyCode/SITE/Site';
import Setting from '../../MyCode/SETTING/Setting';
import SiteAddReduce from '../../MyCode/SITE/SiteAddReduce';
import SiteNetWork from '../../MyCode/SITE/SiteNetWork';
import SiteNativeBridge from '../../MyCode/SITE/SiteNativeBridge';
import SiteNativeUI  from '../../MyCode/SITE/SiteNativeUI'


export const App = StackNavigator(  
  {  
    Route_HomePage: 
    {
      screen: Home,
      navigationOptions:{
        headerTitle:"首页"
      }
    },
   Route_SitePage: 
   {
     screen: Site,
   },

   Route_SettingPage: 
   {
     screen: Setting,
   },
   Route_SiteAddReduce: 
   {
     screen: SiteAddReduce,
   },

   Route_SiteNetWork:
   {
     screen: SiteNetWork
   },
   Route_SiteNativeBridge:
   {
     screen: SiteNativeBridge
   },
   Route_SiteNativeUI:
   {
     screen: SiteNativeUI
   }

  },


);  






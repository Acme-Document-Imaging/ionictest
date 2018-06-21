import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ManateeScanner} from '../providers/mantee-scanner';

import { TabsPage } from '../pages/tabs/tabs';
declare var device:any;

@Component({
  templateUrl: 'app.html',
  providers:[ManateeScanner]
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,manateeScanner:ManateeScanner) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Heconsole.log(reason);re you can do any higher level native things you might need.

      console.log('Before Config');
      manateeScanner.config(()=>{
        //manateeScanner.scanner.setCallback((result:any) =>{});
      //  var mw_c : any =  manateeScanner.scanner.getConstants();
        var settings : any = [
                {"method" : 'MWBenableZoom', "value" : [true]},
                // {"method" : 'MWBsetZoomLevels', "value" : [200, 400, 1]},
                // {"method" : 'MWBsetInterfaceOrientation', "value" : [mw_c.OrientationLandscapeLeft]},
                // {"method" : 'MWBsetOverlayMode', "value" : [mw_c.OverlayModeImage]}
            ];
        var keys : any = {
            'Android'   : "gTfjK3J+lVKKVNdt5YS/1NaFXE2QPXcHJ1Fmh4Whk9c=",
            'iOS'       : "VALID_IOS_KEY",
            'Win32NT'   : "VALID_WIN_WP8_KEY",
            'windows'   : "VALID_WIN_10_UWP_KEY"
        };
        // var key : any = (keys[device.platform])?keys[device.platform]:'';

        // return manateeScanner.scanner.setKey(key).then((response:any)=>{
        //     return manateeScanner.scanner.loadSettings(settings).then((response:any)=>{}).catch((reason:any)=>{
        //                     console.log(reason)
        //                 });
        // });
      });   
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Serial } from '@ionic-native/serial';
import {ManateeScanner} from '../../providers/mantee-scanner';
//https://manateeworks.com/blog/ionic-app
//https://github.com/manateeworks/manateeworks-barcodescanner-ionic-starter/blob/master/src/pages/history-list/history-list.ts
//https://cmbdn.cognex.com/knowledge/cordova-plugin-for-cmbsdk

//declare var cmbScanner:any; 
declare var mwbScanner:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private barcodescanner:BarcodeScanner,private manateeScanner:ManateeScanner) {

  }
  rawData:string;
doSerial()
{

  //alert(this.manateeScanner.scanner);
  // alert("Manatee Scanner ");
 debugger;
 

  mwbScanner.startScanning().then(function(response){
    console.log('show the result here');
    console.log(response);
    //actual example in home.ts is different
  });
// alert("Serial");
// this.serial.requestPermission().then(() => {
//   this.serial.open({
//     baudRate: 9800,
//     dataBits: 4,
//     stopBits: 1,
//     parity: 0,
//     dtr: true,
//     rts: true,
//     sleepOnPause: false
//   }).then(() => {
//     //console.log('Serial connection opened');
//     alert("Connectin open");
//   });
// }).catch((error: any) => 
// //console.log(error) 
// alert('Serial Error: '+error)
// );
};
  doScan()
  {
    this.rawData='';
    this.barcodescanner.scan(
      {
        //torchOn:true,
       showTorchButton:true, 
       //preferFrontCamera:true,
       showFlipCameraButton:true,
        formats:'PDF_417'
        //'QR_CODE,DATA_MATRIX,UPC_E,UPC_A,EAN_8,EAN_13,CODE_128,CODE_39,CODE_93,CODABAR,ITF,RSS14,RSS_EXPANDED, PDF_417'
      } ).then(barcodeData => {
      
      this.rawData=barcodeData.format+':'+ barcodeData.text;
      //console.log('Barcode data', barcodeData);
     }).catch(err => {
        alert('Error'+ err);
     }
    );
  };

}

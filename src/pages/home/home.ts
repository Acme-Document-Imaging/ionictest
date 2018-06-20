import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Serial } from '@ionic-native/serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private barcodescanner:BarcodeScanner,private serial:Serial) {

  }
  rawData:string;
doSerial()
{
alert("Serial");
this.serial.requestPermission().then(() => {
  this.serial.open({
    baudRate: 9800,
    dataBits: 4,
    stopBits: 1,
    parity: 0,
    dtr: true,
    rts: true,
    sleepOnPause: false
  }).then(() => {
    //console.log('Serial connection opened');
    alert("Connectin open");
  });
}).catch((error: any) => 
//console.log(error) 
alert('Serial Error: '+error)
);
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
        formats:'PDF_417,QR_CODE'
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

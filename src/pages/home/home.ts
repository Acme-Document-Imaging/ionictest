import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private barcodescanner:BarcodeScanner) {

  }
  rawData:string;

  doScan()
  {
    this.rawData='';
    this.barcodescanner.scan(
      {
        //torchOn:true,
       showTorchButton:true, 
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

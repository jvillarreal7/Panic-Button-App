import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx'
import { AlertController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';


declare var sms: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  phoneNum: number;
  textMsg: string;
  error: string;
  constructor(private sms: SMS, private androidPermissions: AndroidPermissions, private geolocation: Geolocation) {

  }

  sendSMS() {
    var mapsGeoloc = "http://www.google.com/maps/place/";


    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]).then(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
        var URLparameter = resp.coords.latitude + "," + resp.coords.longitude + "/";
        //alert(mapsGeoloc + latlong);
        var messageInfo = {
          phoneNumber: "1111111111",
          textMessage: "Alerta de prueba" + "\n" + mapsGeoloc + URLparameter
        };
        sms.sendMessage(messageInfo, function (message) {
          alert(message);
        }, function (error) {
          alert(error);
        });
      }).catch((error) => {
        alert(error);
      });


    }).catch((err) => {
      alert(JSON.stringify(err));
    });
  }
}

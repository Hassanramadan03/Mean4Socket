import { Injectable } from '@angular/core';
import { Helpers } from '../helpers'
import { ScriptLoaderService } from "../_services/script-loader.service";

@Injectable()
export class UtilitiesService {

    constructor(private _script: ScriptLoaderService, ) {
    }

    setLoading(value) {
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(() => {
                Helpers.setLoading(value);
            });
    }

    convertDatetoNormal(date) {
        let formatedDate;
        let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        date = new Date(`${date}`);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let currentYear = new Date().getFullYear();
        let dayTime;
        if (day < 10) {
            day = '0' + day;
        }

        if (hour > 12) {
            hour = hour - 12;
            dayTime = 'pm'
        } else {
            dayTime = 'am'
        }

        if (currentYear == year) {
            formatedDate = `${day} ${monthNames[month - 1]} ${hour}:${minutes} ${dayTime}`;
        } else {
            formatedDate = `${day} ${monthNames[month - 1]} ${year}`;
        }
        //console.log(formatedDate);
        return formatedDate;
    }

    autoHeightTextarea(e, item?) {
        // console.log(e.srcElement.id);
        // console.log('asdasdasd');
        let val = document.getElementById(`${e.srcElement.id}`).scrollHeight;
        // console.log(val);
        let h = document.getElementById(`${e.srcElement.id}`).offsetHeight;
        let cal = Number(h) - 2;
        if (val > cal) {
            h = h + 50;
            return item.textAreaHeight = { height: h + 'px' };
        }
        // console.log(h)
    }

}

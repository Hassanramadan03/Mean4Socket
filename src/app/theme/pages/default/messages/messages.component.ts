import {
    Component, OnInit, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy,
    ViewChild, ElementRef
} from '@angular/core';
@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class MessagesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

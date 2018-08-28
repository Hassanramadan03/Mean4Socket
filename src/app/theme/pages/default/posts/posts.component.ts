import { ProfileService } from './../profile/profile.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UtilitiesService } from '../../../../shared/utilities.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    feed: any;
    feeds: any[];
    toggleLoading: boolean = true;
    constructor(private utilitiesService: UtilitiesService, private cd: ChangeDetectorRef, private _profileService: ProfileService) { }

    ngOnInit() {
    }
    getAllFeeds() {
        this.utilitiesService.setLoading(this.toggleLoading);
        this._profileService.getAllPosts()
            .subscribe(data => {
                console.log("data" + data);

                this.toggleLoading = false;
                this.utilitiesService.setLoading(this.toggleLoading);
                this.feeds = data.msg;
                console.log(data);
                console.log(this.feeds);
                this.feeds.map((feed) => {
                    feed.created_timeView = this.utilitiesService.convertDatetoNormal(feed.created_at);
                });
                this.cd.markForCheck();
            },
            err => {
                console.log('failed');
                this.cd.markForCheck();
                this.toggleLoading = false;
                this.utilitiesService.setLoading(this.toggleLoading);
            });
    }

}

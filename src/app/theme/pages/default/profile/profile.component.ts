import { AuthenticationService } from './../../../../auth/_services/authentication.service';
import { UtilitiesService } from "../../../../shared/utilities.service";
import { ProfileService } from "./profile.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
    Component, OnInit, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy,
    Sanitizer, ViewChild, ViewContainerRef, ComponentFactoryResolver,
} from '@angular/core';
import { FeedService } from '../feed/feed.service';
import { DomSanitizer } from "@angular/platform-browser";
@Component({
    selector: '.m-wrapper',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],

})
export class ProfileComponent implements OnInit {
    toggleLoading: boolean = true;
    profile: any = {};
    updatedprofile: any = {};
    newUser: any = {};
    results: any = {};
    status: any = {};
    image: string;
    trustedImgUrl: any;
    uploadedFiles: any[] = [];
    activeTab: number;
    likes: any = [];
    allSups: any = [];
    allComments: any = [];
    allLikes: any = [];
    isDirty: boolean = false;
    tiers: any[];
    selectedTier: any;
    // objectKeys = Object.keys;
    id: any;
    feed: any;
    feeds: any[];
    userDetails: any;
    isEditable: boolean = false;
    constructor(
        private utilitiesService: UtilitiesService,
        private feedService: FeedService,
        private _authservice: AuthenticationService,
        private _profileService: ProfileService,
        private route: ActivatedRoute,
        private cd: ChangeDetectorRef, private sanitizer: DomSanitizer, private cfr: ComponentFactoryResolver) {
        // this.getAllFeeds();
        this.userDetails = this._authservice.getCurentUser();

        let id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.id = id;
            console.log("route id" + this.id);
            this.showProfile();
            this.getProfile(this.id)
        }
        else {

            this.getProfile(this.userDetails.id)
        }


    }

    ngOnInit() {



        this.feed = {
            username: 'mohamed',
            createdDate: 12 / 3 / 2017,
            description: 'some text we are here and there',
            isLiked: false,
            likes: 5,
            isSubscribed: false,

        };
    }
    userProfile() {

    }
    currentProfile() {

    }
    dirtyIT(): void {
        this.isDirty = true;
    }


    getProfile(id) {
        this._profileService.getProfile(id).subscribe(data => {
            this.profile = data;
            this.activeTab = 1;
            this.updatedprofile.firstname = data.firstname;
            this.updatedprofile.lastname = data.lastname;
            this.updatedprofile.username = data.username;
            this.updatedprofile.description = data.result.profile_description;
            this.results = data.result;
            this.status = data.result.status;
            this.image = data.result.profile_picture;

        });

    }

    showProfile() {
        this.isEditable = true;
        return 0;
    }
    showFeed() {
        this.isEditable = false;
        return 0;
    }

    getAllFeeds() {
        this.utilitiesService.setLoading(this.toggleLoading);
        this._profileService.getAllPosts()
            .subscribe(data => {


                this.toggleLoading = false;
                this.utilitiesService.setLoading(this.toggleLoading);
                this.feeds = data.msg;

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

    setActiveTab(tabNum) {
        console.log(tabNum);
        this.activeTab = tabNum;
        this.cd.markForCheck();
    }
    ActiveTab(tabNum) {
        // console.log(tabNum)
        if (tabNum == this.activeTab) {
            return ['activeTab'];
        } else {
            return [];
        }
    }
    addNewUser(value) {
        console.log(value);

    }

    showAtView(event) {
        // this.uploadedFiles = [];
        console.log(event.files[0]);
        this.trustedImgUrl = this.sanitizer.bypassSecurityTrustUrl(event.files[0].objectURL.changingThisBreaksApplicationSecurity);

        this.uploadedFiles.push(event.files[0]);
    }
    updateProfile(value) {
        value.uploadedfrom = 'web';
        console.log(this.uploadedFiles[0]);

        value.userPhoto = this.uploadedFiles[0];
        console.log(value);
        console.log(value);

        this._profileService.editProfile(value).subscribe(data => {
            if (data) {

                this.getProfile(this.userDetails.id)
                this.isDirty = false;
            }
        });


    }

}

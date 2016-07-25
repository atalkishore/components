import {Component, ElementRef, OnInit, OnDestroy} from '@angular/core';
//import {StatsService} from "../../services/stats-service";
import {LoadingIndicator} from "./loading.component";
import { LoadingService } from "./loadindicator.service";


@Component({
    templateUrl: "/app/LoadingIndicator/loading.html",
    directives: [LoadingIndicator]
})
export class StatsOverviewPage {
    isShow: boolean = false;
    private stats: Array<any> = [];

    constructor( private loadingService: LoadingService) { }

    onPageLoaded(isShow: boolean): void {
        this.isShow = !isShow;
        debugger
        this.loadingService.toggleLoadingIndicator(this.isShow);
       
    }
}
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

    onPageLoaded(): void {
        //this.isShow = !isShow
        this.loadingService.toggleLoadingIndicator(true);

        //this.loadingService.toggleLoadingIndicator(this.isShow);
        //setTimeout(2000);
        this.getDataSlowly().then(response => {
            
            this.loadingService.toggleLoadingIndicator(false);
        });
       
    }
    getDataSlowly() {
        
        return new Promise<boolean>(resolve => setTimeout(() => resolve(true), 2000));
         // 2 seconds
    }
}
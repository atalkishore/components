
import {Component, ElementRef, OnInit, OnDestroy} from 'angular2/core';
//import {StatsService} from "../../services/stats-service";
import {LoadingIndicator} from "./loading.component";
import {LoadingService} from "./loading.service";

@Component({
    templateUrl: 'build/pages/stats-overview-page/stats-overview-page.html',
    providers: [StatsService],
    directives: [LoadingIndicator]
})
export class StatsOverviewPage {
    private stats: Array<any> = [];

    constructor(public statsService: StatsService, private loadingService: LoadingService) { }

    onPageLoaded(): void {
        this.loadingService.toggleLoadingIndicator(true);
        this.statsService.getStats()
            .subscribe(response => {
                this.loadingService.toggleLoadingIndicator(false);
                this.stats = response.json();
            });
    }
}
}
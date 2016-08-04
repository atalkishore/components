///// <reference path="../lesson/rxjs-operators.ts" />
//import { Injectable }     from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';

//// Add the RxJS Observable operators we need in this app.
//import { Observable }     from 'rxjs/Observable';
//import '../lesson/rxjs-operators';

//import { ViewLessonTopic } from "../../../app/models/learn/ViewLessonTopic.model"
//import { LessonTopic } from "../../../app/models/learn/lessontopic.model"


//@Injectable()
//export class LessonTopicService {
//    constructor(private http: Http) { }
//    private LTDashboardUrl = 'api/LessonTopic/getLessonTopic1/';  // URL to web API
//    private LessonTopicUrl = 'api/LessonTopic/getLessonTopic/';  // URL to web API
//    private TopicId: number;
//    private TopicUrl: string;

//    setTopicUrl(topicUrl: string) {
//        this.TopicUrl = topicUrl;
//    }
//    getTopicUrl() {
//        return this.TopicUrl;
//    }
//    getLTDashboard(name: string): Observable<LessonTopic[]> {
//        debugger
//        return this.http.get(this.LessonTopicUrl + name)
//            .map(this.extractData)
//            .catch(this.handleError);
//    }

//    getLessonTopics(name: string): Observable<ViewLessonTopic[]> {

//        return this.http.get(this.LTDashboardUrl + name)
//            .map(this.extractData)
//            .catch(this.handleError);
//    }

//    addTopicIds(id: number) {
//        this.TopicId = id;
//    }

//    getTopicId() {
//        return this.TopicId;
//    }

//    //getLessonTopics(name: string): Observable<LessonTopic> {
//    //    let body = JSON.stringify({ name });
//    //    let headers = new Headers({ 'Content-Type': 'application/json' });
//    //    let options = new RequestOptions({ headers: headers });

//    //    return this.http.post(this.LessonTopicUrl, body, options)
//    //        .map(this.extractData)
//    //        .catch(this.handleError);
//    //}

//    public addLessonTopic(lessonTopic: LessonTopic): Observable<boolean> {
//        debugger
//        let body = JSON.stringify(lessonTopic);
//        let headers = new Headers({ 'Content-Type': 'application/json' });
//        let options = new RequestOptions({ headers: headers });

//        return this.http.post('api/admin/learn/lessontopic/', body, options)
//            .map(this.extractData)
//            .catch(this.handleError);
//    }
//    public addLearnTopic(): Observable<boolean> {
//        let topicId = this.TopicId;
//        let body = JSON.stringify(topicId);
//        let headers = new Headers({ 'Content-Type': 'application/json' });
//        let options = new RequestOptions({ headers: headers });

//        return this.http.post('api/admin/learn/learntopic/', body, options)
//            .map(this.extractData)
//            .catch(this.handleError);
//    }
//    private extractData(res: Response) {
//        let body = res.json();
//        return body;
//    }

//    private handleError(error: any) {
//        // In a real world app, we might use a remote logging infrastructure
//        // We'd also dig deeper into the error to get a better message
//        let errMsg = (error.message) ? error.message :
//            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//        console.error(errMsg); // log to console instead
//        return Observable.throw(errMsg);
//    }
//}
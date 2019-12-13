import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
export interface EndpointComponent {
    endpoint: string;
}
@Injectable({
    providedIn: 'root'
})
export class ResolveService implements Resolve<any> {
    public userid: any;
    public userCookies: any;

    constructor(private _apiService: ApiService, public cookieservice: CookieService , public activedrouter:ActivatedRoute) {

        if (this.cookieservice.get('user_details') != undefined && this.cookieservice.get('user_details') != null && this.cookieservice.get('user_details') != '') {
            this.userCookies = JSON.parse(this.cookieservice.get('user_details'));
            this.userid = this.userCookies._id;
            console.log('>>>>',this.userid)   
            }
        // if (this.cookieservice.get('userid') != null)
        //     this.userid = this.cookieservice.get('userid');
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        let _id = route.params['id'];

        console.log('>>++>>',_id)
       
        // if (route.data.requestcondition.condition._id == 'id') {
        //     route.data.requestcondition.condition._id = _id;
        //     delete route.data.requestcondition.condition.id;
        //     console.log(route.data.requestcondition.condition)
        // }
        var endpoint = route.data.link;
        var source = route.data.source;
        var condition = route.data.condition;

            




            if (route.data.requestcondition.condition.id == 'userid' && route.data.requestcondition.condition.id != null) {
                route.data.requestcondition.condition.id=this.userid;
            } else if(route.url[0].path == 'blogdetail') {
                route.data.requestcondition.condition._id_object = route.params['id'] ;
            } else {
                route.data.requestcondition = Object.assign(route.data.requestcondition, route.params);
                delete route.data.requestcondition.condition.id;
            }

            return new Promise((resolve) => {
                this._apiService.getDatalistForResolve(route.data).subscribe(api_object =>{
                    if (api_object) {
                        return resolve(api_object);
                    } else { // id not found
                        return true;
                    }
                })
            });
    }
}
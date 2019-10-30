/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class BlogComponent {
    // ====================================================================================================
    constructor() {
        this.loader = false;
    }
    // ======================================================================================
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        this.blogListConfig = {
            apiUrl: receivedData.apiBaseUrl,
            listEndPoint: receivedData.listEndPoint,
            datasource: receivedData.datasource,
            tableName: receivedData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "updated_at", "image", "description_html"],
            listArray_modify_header: { "blogtitle": "Blog Title", "description": "Description", "priority": "Priority", "status": "Status", "parentcategoryname": "Parent Category Name" },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            search_settings: {
                textsearch: [{ label: "Search by blog title...", field: 'blogtitle' }, { label: "Search by parent category...", field: 'parentcategoryname' }],
                selectsearch: [{ label: 'Search By status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
            },
        };
        this.loader = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BlogComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-Blog',
                template: "<mat-card *ngIf=\"loader==true\">\r\n    <mat-spinner class=\"spinner\"></mat-spinner>\r\n</mat-card>\r\n\r\n\r\n\r\n<!-- ------------------------lib listing being called------------------------ -->\r\n<mat-card *ngIf=\"loader==false\">\r\n    <lib-listing class=\"formfilterdiv\"\r\n        *ngIf=\"blogListConfig.datasource !=null && blogListConfig.datasource.length > 0\"\r\n        [datasource]=\"blogListConfig.datasource\" [skip]=\"blogListConfig.listArray_skip\"\r\n        [modify_header_array]=\"blogListConfig.listArray_modify_header\" [sourcedata]=\"blogListConfig.tableName\"\r\n        [statusarr]=\"blogListConfig.statusarr\" [jwttoken]=\"blogListConfig.jwtToken\"\r\n        [apiurl]=\"blogListConfig.apiUrl\" [editroute]=\"blogListConfig.editUrl\"\r\n        [deleteendpoint]=\"blogListConfig.deleteEndPoint\"\r\n        [date_search_source]=\"blogListConfig.view\"\r\n       [date_search_endpoint]=\"blogListConfig.listEndPoint\"\r\n       [search_settings]=\"blogListConfig.search_settings\"\r\n       [detail_datatype]=\"blogListConfig.pendingmodelapplicationarray_detail_datatype\">\r\n    </lib-listing>\r\n<!-- ----------------------------------------------------------------------------->\r\n\r\n    <h2 *ngIf=\"blogListConfig.datasource.length == 0\">No record found.</h2>\r\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
BlogComponent.ctorParameters = () => [];
BlogComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BlogComponent.prototype.blogListConfig;
    /** @type {?} */
    BlogComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2Jsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN6RCxNQUFNLE9BQU8sYUFBYTs7SUF3Q3hCO1FBcENBLFdBQU0sR0FBUyxLQUFLLENBQUM7SUFvQ0wsQ0FBQzs7Ozs7OztJQWhDakIsSUFDSSxNQUFNLENBQUMsWUFBaUI7UUFFMUIsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNwQixNQUFNLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDL0IsWUFBWSxFQUFFLFlBQVksQ0FBQyxZQUFZO1lBQ3ZDLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtZQUNuQyxTQUFTLEVBQUUsWUFBWSxDQUFDLFNBQVM7WUFDakMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLE9BQU8sRUFBQyxrQkFBa0IsQ0FBQztZQUN4Rix1QkFBdUIsRUFBRSxFQUFFLFdBQVcsRUFBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUMsc0JBQXNCLEVBQUM7WUFDM0ssdUJBQXVCLEVBQUUsT0FBTztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7WUFDckUsU0FBUyxFQUFFLFlBQVksQ0FBQyxjQUFjO1lBQ3RDLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztZQUM3QixRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVE7WUFDL0IsY0FBYyxFQUFFLFlBQVksQ0FBQyxjQUFjO1lBQzNDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtZQUN2QixlQUFlLEVBQUM7Z0JBQ2QsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxDQUFDO2dCQUM3SSxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDbkk7U0FPRixDQUFBO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQUtELFFBQVE7SUFDUixDQUFDOzs7WUFoREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiwyeUNBQWtDOzthQUVuQzs7Ozs7cUJBU0UsS0FBSzs7OztJQUxOLHVDQUFtQjs7SUFDbkIsK0JBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItQmxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICdibG9nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc3R5bGUuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9uPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBibG9nTGlzdENvbmZpZzphbnk7XHJcbiAgbG9hZGVyOmJvb2xlYW49ZmFsc2U7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09SW5wdXQgRm9yIExpYiBMaXN0aW5nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb25maWcocmVjZWl2ZWREYXRhOiBhbnkpIHtcclxuICAgXHJcbiAgICB0aGlzLmJsb2dMaXN0Q29uZmlnID0ge1xyXG4gICAgICBhcGlVcmw6IHJlY2VpdmVkRGF0YS5hcGlCYXNlVXJsLFxyXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXHJcbiAgICAgIGRhdGFzb3VyY2U6IHJlY2VpdmVkRGF0YS5kYXRhc291cmNlLFxyXG4gICAgICB0YWJsZU5hbWU6IHJlY2VpdmVkRGF0YS50YWJsZU5hbWUsXHJcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwidXBkYXRlZF9hdFwiLFwiaW1hZ2VcIixcImRlc2NyaXB0aW9uX2h0bWxcIl0sXHJcbiAgICAgIGxpc3RBcnJheV9tb2RpZnlfaGVhZGVyOiB7IFwiYmxvZ3RpdGxlXCI6XCJCbG9nIFRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmlwdGlvblwiLCBcInByaW9yaXR5XCI6IFwiUHJpb3JpdHlcIiwgXCJzdGF0dXNcIjogXCJTdGF0dXNcIiAsXCJwYXJlbnRjYXRlZ29yeW5hbWVcIjpcIlBhcmVudCBDYXRlZ29yeSBOYW1lXCJ9LFxyXG4gICAgICBhZG1pbnRhYmxlbmFtZVRhYmxlTmFtZTogXCJhZG1pblwiLFxyXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcclxuICAgICAgdXBkYXRldXJsOiByZWNlaXZlZERhdGEudXBkYXRlRW5kcG9pbnQsXHJcbiAgICAgIGVkaXRVcmw6IHJlY2VpdmVkRGF0YS5lZGl0VXJsLFxyXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxyXG4gICAgICBkZWxldGVFbmRQb2ludDogcmVjZWl2ZWREYXRhLmRlbGV0ZUVuZFBvaW50LFxyXG4gICAgICB2aWV3OiByZWNlaXZlZERhdGEudmlldyxcclxuICAgICAgc2VhcmNoX3NldHRpbmdzOntcclxuICAgICAgICB0ZXh0c2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggYnkgYmxvZyB0aXRsZS4uLlwiLCBmaWVsZDogJ2Jsb2d0aXRsZScgfSx7IGxhYmVsOiBcIlNlYXJjaCBieSBwYXJlbnQgY2F0ZWdvcnkuLi5cIiwgZmllbGQ6ICdwYXJlbnRjYXRlZ29yeW5hbWUnIH1dLFxyXG4gICAgICAgIHNlbGVjdHNlYXJjaDogW3sgbGFiZWw6ICdTZWFyY2ggQnkgc3RhdHVzJywgZmllbGQ6ICdzdGF0dXMnLCB2YWx1ZXM6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSB9XSxcclxuICAgICAgfSxcclxuICAgICAgLy8gIC8qU2hvd2luZyBJbWFnZSBpbiB0aGUgTW9kYWwqL1xyXG4gICAgICAvLyAgcGVuZGluZ21vZGVsYXBwbGljYXRpb25hcnJheV9kZXRhaWxfZGF0YXR5cGU6IFt7XHJcbiAgICAgIC8vICAga2V5OiBcImltYWdlXCIsXHJcbiAgICAgIC8vICAgdmFsdWU6ICdpbWFnZScsXHJcbiAgICAgIC8vICAgZmlsZXVybDogJ2h0dHBzOi8vczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vY3JtZmlsZXMuaW5mbHV4aG9zdHNlcnZlci90ZXN0aW1vbmlhbC8nICAgICAgICAgICAgIC8vIEltYWdlIHBhdGggXHJcbiAgICAgIC8vIH1dLFxyXG4gICAgfVxyXG4gICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcclxuICB9XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=
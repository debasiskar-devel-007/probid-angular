/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar } from "@angular/material";
import { map, startWith } from 'rxjs/operators';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
    /** @type {?} */
    DialogData.prototype.videourl;
}
export class AddeditBlogmanagementComponent {
    // -----------------------------------------------------------------------------------------
    /**
     * @param {?} http
     * @param {?} apiservice
     * @param {?} activatedRoute
     * @param {?} router
     * @param {?} formBuilder
     * @param {?} dialog
     * @param {?} snackBar
     */
    constructor(http, apiservice, activatedRoute, router, formBuilder, dialog, snackBar) {
        this.http = http;
        this.apiservice = apiservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackBar = snackBar;
        /**
         * ckeditor start here
         */
        this.Editor = ClassicEditor; //for ckeditor
        //for ckeditor
        this.editorConfig = {
            placeholder: 'Description*',
        };
        this.model = {
            editorData: ''
        };
        /**
         * ckeditor end here
         */
        // ---------------------declarations-------------------------------------
        this.headerText = 'Add Blog Management Data';
        this.buttonText = 'SUBMIT';
        this.blogCategoryArray = [];
        this.isSubmitted = false;
        this.video_prefix = 'https://www.youtube.com/watch?v=';
        this.options = [''];
        this.myControl = new FormControl();
        this.tags_array = [];
        this.testTag = [];
        this.flag = false;
        this.images_array = [];
        this.images_array_edit = [];
        this.file_array = [];
        this.file_array_edit = [];
        this.blogManagementForm = this.formBuilder.group({
            blogtitle: ['', [Validators.required]],
            blogcat: ['',],
            description: ['', [Validators.required]],
            priority: ['', [Validators.required]],
            status: ['true',],
            // metatitle: ['', [Validators.required]],
            // metadesc: ['', [Validators.required]],
            author: ['', [Validators.required]],
            credentials: this.formBuilder.array([]),
            tags: [''],
            blogs_image: [''],
            blogs_file: ['']
        });
    }
    // -----------------------------------------------------------------------
    // ----------------------------------------------Input Section-----------------------
    // Input receiving from add/edit app 
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @param {?} serverUrl
     * @return {?}
     */
    set serverUrl(serverUrl) {
        this.serverUrlData = (serverUrl) || '<no name set>';
        this.serverUrlData = serverUrl;
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set getDataEndpoint(endpointUrlval) {
        this.getDataEndpointData = (endpointUrlval) || '<no name set>';
        this.getDataEndpointData = endpointUrlval;
    }
    /**
     * @param {?} endpointUrlval
     * @return {?}
     */
    set addEndpoint(endpointUrlval) {
        this.addEndpointData = (endpointUrlval) || '<no name set>';
        this.addEndpointData = endpointUrlval;
    }
    /**
     * @param {?} listval
     * @return {?}
     */
    set listRoute(listval) {
        this.listUrl = (listval) || '<no name set>';
        this.listUrl = listval;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /**Observable start here**/
        this.apiservice.clearServerUrl();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setServerUrl(this.serverUrlData);
        }), 50);
        this.apiservice.cleargetdataEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setgetdataEndpoint(this.getDataEndpointData);
        }), 50);
        this.apiservice.clearaddEndpoint();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.apiservice.setaddEndpoint(this.addEndpointData);
        }), 50);
        /**Observable end here**/
        if (this.action2 != 'edit')
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.addYoutubeVideo('', '', '');
            }), 500);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getBlogCategory();
        }), 50);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.getTagsCount();
        }), 50);
        if (this.action2 == 'edit') {
            this.headerText = "Edit Blog Management Data";
            this.flag = true;
            this.params_id = this.setData._id;
            this.buttonText = "Update";
            this.blogManagementForm.controls['blogtitle'].patchValue(this.setData.blogtitle);
            this.blogManagementForm.controls['blogcat'].patchValue(this.setData.blogcat);
            this.blogManagementForm.controls['description'].patchValue(this.setData.description);
            this.blogManagementForm.controls['priority'].patchValue(this.setData.priority);
            this.blogManagementForm.controls['status'].patchValue(this.setData.status);
            this.blogManagementForm.controls['blogs_image'].patchValue(this.setData.blogs_image);
            this.blogManagementForm.controls['blogs_file'].patchValue(this.setData.blogs_file);
            this.blogManagementForm.controls['author'].patchValue(this.setData.author);
            /*Image works*/
            for (let i = 0; i < this.setData.blogs_image.length; i++) {
                this.img_var = this.setData.blogs_image[i].basepath + this.setData.blogs_image[i].image;
                this.image_name = this.setData.blogs_image[i].name;
                this.image_type = this.setData.blogs_image[i].type;
                this.images_array_edit.push({ 'img_var': this.img_var, 'image_name': this.image_name, 'image_type': this.image_type });
                this.images_array.push({
                    "basepath": this.setData.blogs_image[i].basepath,
                    "image": this.setData.blogs_image[i].image,
                    "name": this.setData.blogs_image[i].name,
                    "type": this.setData.blogs_image[i].type
                });
            }
            /*File works*/
            for (let i2 = 0; i2 < this.setData.blogs_file.length; i2++) {
                this.file_array_edit.push(this.setData.blogs_file[i2].name);
                this.file_array.push({
                    "basepath": this.setData.blogs_file[i2].basepath,
                    "file": this.setData.blogs_file[i2].file,
                    "name": this.setData.blogs_file[i2].name,
                    "type": this.setData.blogs_file[i2].type
                });
            }
            for (const vid in this.setData.credentials) {
                this.addYoutubeVideo(this.setData.credentials[vid].video_url, this.setData.credentials[vid].video_title, this.setData.credentials[vid].video_description);
            }
            if (this.setData.tags != "")
                this.setData.tags.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                element => {
                    this.tags_array.push(element);
                }));
        }
        // ------------------------------Autocomplete Functions----------------------------------
        this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
        // ------------------------------------------------------------------------------------------
    }
    // ------------------------------------_Filter FUnction----------------------------------
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.toLowerCase().indexOf(filterValue) === 0));
    }
    // --------------------------------------------------------------------------------------------
    /**
     * @param {?} action
     * @return {?}
     */
    set action(action) {
        this.action2 = action;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set imageUpload(getConfig) {
        this.imageConfigData = getConfig;
    }
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set fileUpload(getConfig) {
        this.fileConfigData = getConfig;
    }
    // ------------------------------------MODAL Function--------------------------------------------
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '45%',
            height: '500px',
            data: { msg: x }
        });
        // this.sanitizer.bypassSecurityTrustResourceUrl
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    // ----------------------------------------------------------------------------------------------
    // ----------------------------Ediatble material Form Array-------------------
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFn(index) {
        return index;
    }
    // -----------------------------------------------------------------------------
    // ----------------------------------Add Credential Fucntions-----------------
    /**
     * @param {?} vid_url
     * @param {?} vid_tit
     * @param {?} vid_desc
     * @return {?}
     */
    addYoutubeVideo(vid_url, vid_tit, vid_desc) {
        /** @type {?} */
        const creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.push(this.formBuilder.group({
            video_url: [vid_url],
            video_title: [vid_tit],
            video_description: [vid_desc]
        }));
    }
    // ---------------------------------------------------------------------------
    // ---------------------------------Delete Credetial Fucntions----------------
    /**
     * @return {?}
     */
    deleteCreds() {
        /** @type {?} */
        const creds = (/** @type {?} */ (this.blogManagementForm.controls.credentials));
        creds.removeAt(1);
    }
    // ----------------------------------------------------------------------------
    // ----------------------------------Get Blog Category Function-------------------
    /**
     * @return {?}
     */
    getBlogCategory() {
        /** @type {?} */
        var data;
        data = {
            'source': 'blog_category'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            this.blogCategoryArray = result.res;
        }));
    }
    // ----------------------------------------------------------------------------------
    // ----------------------------------TAGS view Function-------------------
    /**
     * @return {?}
     */
    getTagsCount() {
        /** @type {?} */
        var data;
        data = {
            'source': 'tags_view'
        };
        this.apiservice.getData(data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            let result;
            result = response;
            if (result != null && result.res != null && result.res[0] != null)
                this.options = result.res[0].tags;
        }));
    }
    // ----------------------------------------------------------------------------------
    //  -----------------------------EDIT RESOLVE FUNCTION------------------------------
    /**
     * @param {?} editDatavals
     * @return {?}
     */
    set singleData(editDatavals) {
        this.setData = editDatavals;
    }
    // -----------------------------------------------------------------------------------
    // ---------------------------------SUBMIT----------------------------------------
    /**
     * @return {?}
     */
    onSubmit() {
        /*__________________________IMAGE UPLOADER________________________________________*/
        if (this.imageConfigData) {
            for (const loop in this.imageConfigData.files) {
                this.images_array =
                    this.images_array.concat({
                        "basepath": this.imageConfigData.files[loop].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                        "image": this.imageConfigData.files[loop].upload.data.data.fileservername,
                        "name": this.imageConfigData.files[loop].name,
                        "type": this.imageConfigData.files[loop].type
                    });
            }
            this.blogManagementForm.value.blogs_image = this.images_array;
        }
        else {
            this.blogManagementForm.value.blogs_image = false;
        }
        /*_____________________________________________________________________________________*/
        /*_________________________________________FILE UPLOADER_______________________________*/
        if (this.fileConfigData) {
            for (const loop in this.fileConfigData.files) {
                this.file_array =
                    this.file_array.concat({
                        "basepath": this.fileConfigData.files[loop].upload.data.basepath + '/' + this.fileConfigData.path + '/',
                        "file": this.fileConfigData.files[loop].upload.data.data.fileservername,
                        "name": this.fileConfigData.files[loop].name,
                        "type": this.fileConfigData.files[loop].type
                    });
            }
            this.blogManagementForm.value.blogs_file = this.file_array;
        }
        else {
            this.blogManagementForm.value.blogs_file = false;
        }
        // ___________________________________________________________________________________
        this.blogManagementForm.value.tags = this.tags_array;
        this.blogManagementForm.controls['description'].markAsTouched();
        if (this.blogManagementForm.valid) {
            if (this.blogManagementForm.value.status)
                this.blogManagementForm.value.status = parseInt("1");
            else
                this.blogManagementForm.value.status = parseInt("0");
            if (this.params_id != null) { //update part
                this.messageText = "One row updated!!!";
                this.blogManagementForm.value.tags = this.tags_array;
                data = {
                    "source": "blogs",
                    "data": {
                        "id": this.params_id,
                        "blogtitle": this.blogManagementForm.value.blogtitle,
                        "blogcat": this.blogManagementForm.value.blogcat,
                        "description": this.blogManagementForm.value.description,
                        "priority": this.blogManagementForm.value.priority,
                        "status": this.blogManagementForm.value.status,
                        "metatitle": this.blogManagementForm.value.metatitle,
                        "metadesc": this.blogManagementForm.value.metadesc,
                        "tags": this.blogManagementForm.value.tags,
                        "credentials": this.blogManagementForm.value.credentials,
                        "blogs_image": this.blogManagementForm.value.blogs_image,
                        "blogs_file": this.blogManagementForm.value.blogs_file,
                        "author": this.blogManagementForm.value.author
                    },
                    "sourceobj": ["blogcat"]
                };
            }
            else {
                this.isSubmitted = true;
                /** @type {?} */
                var data;
                data = {
                    //add part
                    "source": "blogs",
                    "data": this.blogManagementForm.value,
                    "sourceobj": ["blogcat"]
                };
            }
            this.apiservice.addData(data).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            response => {
                /** @type {?} */
                let result;
                result = response;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.router.navigateByUrl('/' + this.listUrl);
                }), 3000);
            }));
        }
        else
            console.log("Form is invalid");
    }
    // -----------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    get onSignUpValidate() {
        return this.blogManagementForm.controls;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputBlur(val) {
        this.blogManagementForm.controls[val].markAsUntouched();
    }
    // -------------------------------Select Tags AutoComplete Field-----------------------
    /**
     * @param {?} event
     * @return {?}
     */
    showval(event) {
        if (event.keyCode == 13) {
            this.tags_array.push(event.target.value);
            this.blogManagementForm.controls['tags'].patchValue("");
            return;
        }
    }
    // ------------------------------------------------------------------------------------
    // ---------------------------------------VIDEO URL PREVIEW-----------------------------
    /**
     * @param {?} video_index
     * @return {?}
     */
    preview_video(video_index) {
        this.openDialog(this.blogManagementForm.value.credentials[video_index].video_url);
    }
    // -------------------------------------------------------------------------------------
    // --------------------------------------------CLEAR TAGS---------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clearTags(index) {
        this.tags_array.splice(index, 1);
    }
    // -------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    openSnackBar() {
        this.snackBar.openFromComponent(YoutubeComponent, {
            // duration: 1500,
            panelClass: ['snackbar-color']
        });
    }
    // --------------------------------------Blogs Image clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clear_image(index) {
        this.images_array.pop(this.setData.blogs_image[index]);
        this.images_array_edit.splice(index, 1);
    }
    // ------------------------------------------------------------------------------------
    // --------------------------------------Blogs File clear-------------------------------
    /**
     * @param {?} index
     * @return {?}
     */
    clearFileTags(index) {
        this.file_array.pop(this.setData.blogs_file[index]);
        this.file_array_edit.splice(index, 1);
    }
}
AddeditBlogmanagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-addedit-blogmanagement',
                template: "<mat-card>\n    <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n        <h2 class=\"headerSpan\">{{headerText}}</h2>\n    </mat-toolbar>\n\n\n\n    <span class=\"formspan\">\n        <mat-card-content class=\"example-container\">\n            <form [formGroup]=\"blogManagementForm\">\n                <!-- ----------------------------Blog title---------------------------- -->\n                <mat-form-field>\n                    <input matInput placeholder=\"Blog title*\" formControlName=\"blogtitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['blogtitle'].valid\n        && blogManagementForm.controls['blogtitle'].errors.required && blogManagementForm.controls['blogtitle'].touched\">\n                        Blog title is required.</mat-error>\n\n                   \n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------ -->\n\n\n                <!-- -------------------------Blog Category---------------------------- -->\n                <mat-form-field>\n                    <mat-label>Blog Category</mat-label>\n                    <select matNativeControl required formControlName=\"blogcat\"\n                      >\n                        <option *ngFor=\"let item of blogCategoryArray\" value=\"{{item._id}}\">{{ item.blogtitle }}\n                        </option>\n                    </select>\n\n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- -------------------------Author---------------------------- -->\n                <mat-form-field>\n                    \n                    <input matInput formControlName=\"author\" placeholder=\"Author*\">\n                    <mat-error *ngIf=\"!blogManagementForm.controls['author'].valid\n    && blogManagementForm.controls['author'].errors.required && blogManagementForm.controls['author'].touched\">\n                        Author is required.</mat-error>\n\n                    \n                </mat-form-field><br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n                <!-- ------------------------------------Blog Content------------------ -->\n\n                <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n                  ></ckeditor>\n                <mat-error\n                    *ngIf=\"!blogManagementForm.controls['description'].valid\n    && blogManagementForm.controls['description'].errors.required && blogManagementForm.controls['description'].touched\">\n                    Blog description is required.</mat-error>\n\n              \n                <br>\n                <!-- -----------------------------------------------------------------  -->\n\n\n\n\n                <!-- -----------------------------------Priority------------------------ -->\n                <mat-form-field>\n                    <input matInput type=\"number\" placeholder=\"Priority*\" formControlName=\"priority\"\n                        >\n\n                    <mat-error *ngIf=\"!blogManagementForm.controls['priority'].valid && blogManagementForm.controls['priority'].errors.required\">\n                        Priority is required.</mat-error>\n\n                </mat-form-field><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Status---------------------------- -->\n                <mat-checkbox formControlName=\"status\" color=\"primary\">Active</mat-checkbox><br>\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n\n\n                <!-- --------------------------------Meta title-------------------------  -->\n                <!-- <mat-form-field>\n                    <input matInput placeholder=\"Meta title\" formControlName=\"metatitle\"\n                       >\n                    <mat-error\n                        *ngIf=\"!blogManagementForm.controls['metatitle'].valid\n        && blogManagementForm.controls['metatitle'].errors.required && blogManagementForm.controls['metatitle'].touched\">\n                        Meta title is required.</mat-error>\n\n                   \n                </mat-form-field> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- ----------------------------------Meta Description------------------ -->\n                <!-- <mat-form-field>\n                    <textarea matInput placeholder=\"Meta Description\" formControlName=\"metadesc\"\n                      ></textarea>\n                    <mat-error *ngIf=\"!blogManagementForm.controls['metadesc'].valid\n      && blogManagementForm.controls['metadesc'].errors.required && blogManagementForm.controls['metadesc'].touched\">\n                        Meta description is required.</mat-error>\n\n                </mat-form-field><br> -->\n                <!-- -------------------------------------------------------------------- -->\n\n\n\n                <!-- --------------------------------------Video URL--------------------- -->\n                <mat-label>Attach Videos:</mat-label>\n                <div formArrayName=\"credentials\"\n                    *ngFor=\"let creds of blogManagementForm.controls.credentials?.value; let i = index; trackBy: trackByFn\">\n                    <ng-container [formGroupName]=\"i\">\n                        <mat-form-field class=\"video_embed\">\n                            <input type=\"text\" matInput formControlName=\"video_url\">\n                            <span matPrefix>{{ video_prefix }}</span>\n                            <mat-icon matSuffix class=\"clickable\" (click)=\"preview_video(i)\">remove_red_eye</mat-icon>\n                            <i style=\"position: absolute; cursor: pointer;                           right: 4px;\n                            bottom: 7px;\" class=\"material-icons\" (click)=\"openSnackBar()\">\n                                contact_support\n                            </i>\n\n\n                        </mat-form-field>\n\n\n                        <!-- Video Title  -->\n                        <mat-form-field>\n                            <input type=\"text\" matInput formControlName=\"video_title\" placeholder=\"Video title\">\n                            <mat-icon matSuffix>title</mat-icon>\n                        </mat-form-field>\n                        <!-- Video Description  -->\n                        <mat-form-field>\n\n                            <textarea type=\"text\" matInput formControlName=\"video_description\"\n                                placeholder=\"Video description\"></textarea>\n                            <mat-icon matSuffix>description</mat-icon>\n                        </mat-form-field>\n\n                        <button type=\"button\" (click)=\"addYoutubeVideo('','','')\">\n                            <mat-icon matSuffix>add_box</mat-icon>\n                        </button>\n                        <span *ngIf=\"i!=0\"><button type=\"button\" (click)=\"deleteCreds()\">\n                                <mat-icon matSuffix>delete</mat-icon>\n                            </button></span>\n                    </ng-container>\n                </div><br>\n                <!-- ------------------------------------------------------------------- -->\n\n\n                <!-- -----------------------------Multi Tags---------------------------- -->\n                <div>\n                    <mat-label>Tags:</mat-label>\n                    <mat-form-field class=\"example-full-width\">\n                        <input type=\"text\" placeholder=\"Tag something\" formControlName=\"tags\" matInput\n                            [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (keyup)=\"showval($event)\">\n\n                        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                                {{option}}\n                            </mat-option>\n                        </mat-autocomplete>\n                        <mat-error *ngIf=\"!blogManagementForm.controls['tags'].valid\n        && blogManagementForm.controls['tags'].errors.required\">\n                            Tags are required.</mat-error>\n\n                    </mat-form-field>\n                    <div>\n\n                        <mat-chip-list class=\"mat_chip\">\n                            <!-- <li *ngFor=\"let item of tags_array;let j = index\">{{ item }}<mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon></li> -->\n                            <mat-chip color=\"primary\" selected *ngFor=\"let item of tags_array;let j = index\">{{ item }}\n                                <mat-icon matSuffix class=\"clickable\" (click)=\"clearTags(j)\">clear</mat-icon>\n                            </mat-chip>\n                        </mat-chip-list>\n\n                    </div>\n                </div>\n                <!-- ----------------------------------------------------------------- -->\n\n\n                <!-- ---------------------------------------------Image Uploader--------------------- -->\n                <h1>Blogs Image:</h1>\n                <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <ng-container *ngIf=\"flag==true\">\n                    <!-- CARD VIEW  -->\n                    <mat-card-content class=\"files-view\" *ngFor=\"let img of images_array_edit; let i2 = index\">\n                        <mat-card class=\"example-card\">\n                            <img mat-card-image [src]=\"img.img_var\">\n                            <mat-card-title>{{ img.image_name }}</mat-card-title>\n                            <mat-card-subtitle>{{img.image_type}}</mat-card-subtitle>\n                            <span class=\"closecard\" (click)=\"clear_image(i2)\"><i class=\"material-icons\">clear</i></span>\n\n                        </mat-card>\n                    </mat-card-content>\n                    <!-- ---------  -->\n                </ng-container>\n\n\n\n\n\n                <!-- ---------------------------------------------File Uploader--------------------- -->\n                <h1>Blogs File:</h1>\n                <lib-file-upload [config]=\"fileConfigData\"></lib-file-upload>\n                <!-- -------------------------------------------------------------------------------- -->\n\n                <mat-chip-list class=\"mat_chip\">\n                    <mat-chip color=\"primary\" selected *ngFor=\"let item of file_array_edit;let j = index\">{{ item }}\n                        <mat-icon matSuffix class=\"clickable\" (click)=\"clearFileTags(j)\">clear</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n\n\n                <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"button\"\n                    (click)=\"onSubmit()\">{{buttonText}}</button>\n\n            </form>\n        </mat-card-content>\n    </span>\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddeditBlogmanagementComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ApiService },
    { type: ActivatedRoute },
    { type: Router },
    { type: FormBuilder },
    { type: MatDialog },
    { type: MatSnackBar }
];
AddeditBlogmanagementComponent.propDecorators = {
    config: [{ type: Input }],
    serverUrl: [{ type: Input }],
    getDataEndpoint: [{ type: Input }],
    addEndpoint: [{ type: Input }],
    listRoute: [{ type: Input }],
    action: [{ type: Input }],
    imageUpload: [{ type: Input }],
    fileUpload: [{ type: Input }],
    singleData: [{ type: Input }]
};
if (false) {
    /**
     * ckeditor start here
     * @type {?}
     */
    AddeditBlogmanagementComponent.prototype.Editor;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.editorConfig;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.model;
    /**
     * ckeditor end here
     * @type {?}
     */
    AddeditBlogmanagementComponent.prototype.headerText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.buttonText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.blogCategoryArray;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.configData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.blogManagementForm;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.serverUrlData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.getDataEndpointData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.addEndpointData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.isSubmitted;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.video_prefix;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.options;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.filteredOptions;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.myControl;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.tags_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.dialogRef;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.params_id;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.setData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.messageText;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.listUrl;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.testTag;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.imageConfigData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.ErrCode;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.img_var;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.image_name;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.image_type;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.flag;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.images_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.images_array_edit;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.fileConfigData;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.file_array;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.file_array_edit;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.action2;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.apiservice;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AddeditBlogmanagementComponent.prototype.formBuilder;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.dialog;
    /** @type {?} */
    AddeditBlogmanagementComponent.prototype.snackBar;
}
// ------------------------------------Modal Component Works------------------------------
export class Modal {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.videoid = '';
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
Modal.decorators = [
    { type: Component, args: [{
                selector: 'app-modal',
                template: "<h1 mat-dialog-title>YOUTUBE VIDEO PREVIEW</h1>\n<div mat-dialog-content>\n \n   <p>https://www.youtube.com/embed/{{ (data.msg) }}</p> \n  \n   <lib-youtubeplayer [videoid]=\"data.msg\"></lib-youtubeplayer>\n\n</div>\n\n\n\n\n "
            }] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal.prototype.videoid;
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
// ---------------------------------------------------------------------------------------
export class YoutubeComponent {
}
YoutubeComponent.decorators = [
    { type: Component, args: [{
                template: "<span class=\"log_image\">\n    <img src=\"/assets/images/youtube-link.jpg\">\n</span>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}:host ::ng-deep .ck-editor__editable_inline{min-height:50px}.clickable{cursor:pointer}.mat_chip{padding:20px}.video_embed{position:relative}.video_embed .link_action{position:absolute;right:20px}.snackbar-color{background:#f01d40}.log_image{width:100%;display:block}.log_image img{max-width:100%}h1{color:#673ab7}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ibG9nLyIsInNvdXJjZXMiOlsibGliL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQvYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBYSxVQUFVLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxLQUFLLGFBQWEsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUluRSxnQ0FHQzs7O0lBRkMseUJBQVM7O0lBQ1QsOEJBQWM7O0FBV2hCLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7Ozs7O0lBNkZ6QyxZQUFvQixJQUFnQixFQUFVLFVBQXNCLEVBQzFELGNBQThCLEVBQVUsTUFBYyxFQUN0RCxXQUF3QixFQUFTLE1BQWlCLEVBQ25ELFFBQXFCO1FBSFYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN0RCxnQkFBVyxHQUFYLFdBQVcs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QUFhOztJQUNiLGlEQUFhOztJQUNiLG9EQUFnQjs7SUFDaEIsb0RBQWdCOztJQUNoQiw4Q0FBc0I7O0lBQ3RCLHNEQUF1Qjs7SUFDdkIsMkRBQTRCOztJQUM1Qix3REFBb0I7O0lBQ3BCLG9EQUFxQjs7SUFDckIseURBQTBCOztJQUMxQixpREFBWTs7Ozs7SUE2Q0EsOENBQXdCOzs7OztJQUFFLG9EQUE4Qjs7Ozs7SUFDbEUsd0RBQXNDOzs7OztJQUFFLGdEQUFzQjs7Ozs7SUFDOUQscURBQWdDOztJQUFFLGdEQUF3Qjs7SUFDMUQsa0RBQTRCOzs7QUE0YmhDLE1BQU0sT0FBTyxLQUFLOzs7OztJQUdoQixZQUNTLFNBQThCLEVBQ0wsSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFDTCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBSmxELFlBQU8sR0FBUSxFQUFFLENBQUM7SUFPbEIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLCtPQUF5QjthQUMxQjs7OztZQTlpQnlCLFlBQVk7NENBb2pCakMsTUFBTSxTQUFDLGVBQWU7Ozs7SUFKekIsd0JBQWtCOztJQUdoQiwwQkFBcUM7O0lBQ3JDLHFCQUFnRDs7O0FBY3BELE1BQU0sT0FBTyxnQkFBZ0I7OztZQUo1QixTQUFTLFNBQUM7Z0JBQ1Qsa0dBQThCOzthQUUvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2csIE1hdFNuYWNrQmFyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIG1zZzogYW55O1xuICB2aWRlb3VybDogYW55O1xufVxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFkZGVkaXQtYmxvZ21hbmFnZW1lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWRpdC1ibG9nbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkaXQtYmxvZ21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQWRkZWRpdEJsb2dtYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvKipja2VkaXRvciBzdGFydCBoZXJlKi9cbiAgcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7ICAvL2ZvciBja2VkaXRvclxuICBlZGl0b3JDb25maWcgPSB7XG4gICAgcGxhY2Vob2xkZXI6ICdEZXNjcmlwdGlvbionLFxuICB9O1xuICBwdWJsaWMgbW9kZWwgPSB7XG4gICAgZWRpdG9yRGF0YTogJydcbiAgfTtcbiAgLyoqY2tlZGl0b3IgZW5kIGhlcmUqL1xuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tZGVjbGFyYXRpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwdWJsaWMgaGVhZGVyVGV4dDogYW55ID0gJ0FkZCBCbG9nIE1hbmFnZW1lbnQgRGF0YSc7XG4gIHB1YmxpYyBidXR0b25UZXh0OiBhbnkgPSAnU1VCTUlUJztcbiAgcHVibGljIGJsb2dDYXRlZ29yeUFycmF5OiBhbnkgPSBbXTtcbiAgcHVibGljIGNvbmZpZ0RhdGE6IGFueTtcbiAgYmxvZ01hbmFnZW1lbnRGb3JtOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBzZXJ2ZXJVcmxEYXRhOiBhbnk7XG4gIHB1YmxpYyBnZXREYXRhRW5kcG9pbnREYXRhOiBhbnk7XG4gIHB1YmxpYyBhZGRFbmRwb2ludERhdGE6IGFueTtcbiAgaXNTdWJtaXR0ZWQgPSBmYWxzZTtcbiAgdmlkZW9fcHJlZml4OiBhbnkgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0nO1xuICBvcHRpb25zOiBhbnkgPSBbJyddO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgdGFnc19hcnJheTogYW55ID0gW107XG4gIGRpYWxvZ1JlZjogYW55O1xuICBwdWJsaWMgcGFyYW1zX2lkOiBhbnk7XG4gIHNldERhdGE6IGFueTtcbiAgbWVzc2FnZVRleHQ6IGFueTtcbiAgbGlzdFVybDogYW55O1xuICB0ZXN0VGFnOiBhbnkgPSBbXTtcbiAgaW1hZ2VDb25maWdEYXRhOiBhbnk7XG4gIEVyckNvZGU6IGFueTtcbiAgaW1nX3ZhcjogYW55O1xuICBpbWFnZV9uYW1lOiBhbnk7XG4gIGltYWdlX3R5cGU6IGFueTtcbiAgZmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBpbWFnZXNfYXJyYXk6IGFueSA9IFtdO1xuICBpbWFnZXNfYXJyYXlfZWRpdDogYW55ID0gW107XG4gIGZpbGVDb25maWdEYXRhOiBhbnk7XG4gIGZpbGVfYXJyYXk6IGFueSA9IFtdO1xuICBmaWxlX2FycmF5X2VkaXQ6IGFueSA9IFtdO1xuICBhY3Rpb24yOmFueTtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JbnB1dCBTZWN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBJbnB1dCByZWNlaXZpbmcgZnJvbSBhZGQvZWRpdCBhcHAgXG4gIEBJbnB1dCgpXG4gIHNldCBjb25maWcoZ2V0Q29uZmlnOiBhbnkpIHtcbiAgICB0aGlzLmNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG5cbiAgfVxuXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IHNlcnZlclVybChzZXJ2ZXJVcmw6IGFueSkge1xuICAgIHRoaXMuc2VydmVyVXJsRGF0YSA9IChzZXJ2ZXJVcmwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLnNlcnZlclVybERhdGEgPSBzZXJ2ZXJVcmw7XG4gIH1cblxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBnZXREYXRhRW5kcG9pbnQoZW5kcG9pbnRVcmx2YWw6IGFueSkge1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IChlbmRwb2ludFVybHZhbCkgfHwgJzxubyBuYW1lIHNldD4nO1xuICAgIHRoaXMuZ2V0RGF0YUVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuXG5cbiAgfVxuICBASW5wdXQoKSAgICAgICAgICAvL3NldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XG4gIHNldCBhZGRFbmRwb2ludChlbmRwb2ludFVybHZhbDogYW55KSB7XG4gICAgdGhpcy5hZGRFbmRwb2ludERhdGEgPSAoZW5kcG9pbnRVcmx2YWwpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmFkZEVuZHBvaW50RGF0YSA9IGVuZHBvaW50VXJsdmFsO1xuXG4gIH1cblxuXG4gIEBJbnB1dCgpICAgICAgICAgLy9zZXR0aW5nIHRoZSBsaXN0aW5nIHVybCBmb3JtIHRoZSBhcHBsaWNhdGlvblxuICBzZXQgbGlzdFJvdXRlKGxpc3R2YWw6IGFueSkge1xuICAgIHRoaXMubGlzdFVybCA9IChsaXN0dmFsKSB8fCAnPG5vIG5hbWUgc2V0Pic7XG4gICAgdGhpcy5saXN0VXJsID0gbGlzdHZhbDtcblxuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGFwaXNlcnZpY2U6IEFwaVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7XG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGJsb2d0aXRsZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgYmxvZ2NhdDogWycnLCBdLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHByaW9yaXR5OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBzdGF0dXM6IFsndHJ1ZScsXSxcbiAgICAgIC8vIG1ldGF0aXRsZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgLy8gbWV0YWRlc2M6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGF1dGhvcjpbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGNyZWRlbnRpYWxzOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtdKSxcbiAgICAgIHRhZ3M6IFsnJ10sXG4gICAgICBibG9nc19pbWFnZTogWycnXSxcbiAgICAgIGJsb2dzX2ZpbGU6IFsnJ11cbiAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLyoqT2JzZXJ2YWJsZSBzdGFydCBoZXJlKiovXG4gICAgdGhpcy5hcGlzZXJ2aWNlLmNsZWFyU2VydmVyVXJsKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFwaXNlcnZpY2Uuc2V0U2VydmVyVXJsKHRoaXMuc2VydmVyVXJsRGF0YSk7XG4gICAgfSwgNTApO1xuICAgIHRoaXMuYXBpc2VydmljZS5jbGVhcmdldGRhdGFFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldGdldGRhdGFFbmRwb2ludCh0aGlzLmdldERhdGFFbmRwb2ludERhdGEpO1xuICAgIH0sIDUwKTtcbiAgICB0aGlzLmFwaXNlcnZpY2UuY2xlYXJhZGRFbmRwb2ludCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcGlzZXJ2aWNlLnNldGFkZEVuZHBvaW50KHRoaXMuYWRkRW5kcG9pbnREYXRhKTtcbiAgICB9LCA1MCk7XG4gICAgLyoqT2JzZXJ2YWJsZSBlbmQgaGVyZSoqL1xuXG4gICAgaWYgKHRoaXMuYWN0aW9uMiE9J2VkaXQnKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkWW91dHViZVZpZGVvKCcnLCAnJywgJycpO1xuICAgICAgfSwgNTAwKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmdldEJsb2dDYXRlZ29yeSgpO1xuICAgIH0sIDUwKVxuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZ2V0VGFnc0NvdW50KCk7XG4gICAgfSwgNTApXG5cblxuICAgIGlmICh0aGlzLmFjdGlvbjI9PSdlZGl0Jykge1xuICAgICAgdGhpcy5oZWFkZXJUZXh0PVwiRWRpdCBCbG9nIE1hbmFnZW1lbnQgRGF0YVwiO1xuICAgICAgdGhpcy5mbGFnID0gdHJ1ZTtcbiAgICAgIHRoaXMucGFyYW1zX2lkID0gdGhpcy5zZXREYXRhLl9pZDtcbiAgICAgIHRoaXMuYnV0dG9uVGV4dCA9IFwiVXBkYXRlXCI7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snYmxvZ3RpdGxlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYmxvZ3RpdGxlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydibG9nY2F0J10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYmxvZ2NhdCk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snZGVzY3JpcHRpb24nXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5kZXNjcmlwdGlvbik7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1sncHJpb3JpdHknXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5wcmlvcml0eSk7XG4gICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1snc3RhdHVzJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuc3RhdHVzKTsgIFxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2dzX2ltYWdlJ10ucGF0Y2hWYWx1ZSh0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2UpO1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHNbJ2Jsb2dzX2ZpbGUnXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydhdXRob3InXS5wYXRjaFZhbHVlKHRoaXMuc2V0RGF0YS5hdXRob3IpO1xuXG5cbiAgICAgIC8qSW1hZ2Ugd29ya3MqL1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5pbWdfdmFyID0gdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmJhc2VwYXRoICsgdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmltYWdlO1xuICAgICAgICB0aGlzLmltYWdlX25hbWUgPSB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0ubmFtZTtcbiAgICAgICAgdGhpcy5pbWFnZV90eXBlID0gdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLnR5cGU7XG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5X2VkaXQucHVzaCh7ICdpbWdfdmFyJzogdGhpcy5pbWdfdmFyLCAnaW1hZ2VfbmFtZSc6IHRoaXMuaW1hZ2VfbmFtZSwgJ2ltYWdlX3R5cGUnOiB0aGlzLmltYWdlX3R5cGUgfSk7XG4gICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5LnB1c2goe1xuICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmJhc2VwYXRoLFxuICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLmltYWdlLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfaW1hZ2VbaV0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ltYWdlW2ldLnR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qRmlsZSB3b3JrcyovXG4gICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGUubGVuZ3RoOyBpMisrKSB7XG4gICAgICAgIHRoaXMuZmlsZV9hcnJheV9lZGl0LnB1c2godGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLm5hbWUpO1xuICAgICAgICB0aGlzLmZpbGVfYXJyYXkucHVzaCh7XG4gICAgICAgICAgXCJiYXNlcGF0aFwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0uYmFzZXBhdGgsXG4gICAgICAgICAgXCJmaWxlXCI6IHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2kyXS5maWxlLFxuICAgICAgICAgIFwibmFtZVwiOiB0aGlzLnNldERhdGEuYmxvZ3NfZmlsZVtpMl0ubmFtZSxcbiAgICAgICAgICBcInR5cGVcIjogdGhpcy5zZXREYXRhLmJsb2dzX2ZpbGVbaTJdLnR5cGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cblxuICAgICAgZm9yIChjb25zdCB2aWQgaW4gdGhpcy5zZXREYXRhLmNyZWRlbnRpYWxzKSB7XG4gICAgICAgIHRoaXMuYWRkWW91dHViZVZpZGVvKHRoaXMuc2V0RGF0YS5jcmVkZW50aWFsc1t2aWRdLnZpZGVvX3VybCxcbiAgICAgICAgICB0aGlzLnNldERhdGEuY3JlZGVudGlhbHNbdmlkXS52aWRlb190aXRsZSxcbiAgICAgICAgICB0aGlzLnNldERhdGEuY3JlZGVudGlhbHNbdmlkXS52aWRlb19kZXNjcmlwdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNldERhdGEudGFncyAhPSBcIlwiKVxuICAgICAgICB0aGlzLnNldERhdGEudGFncy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIHRoaXMudGFnc19hcnJheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cblxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BdXRvY29tcGxldGUgRnVuY3Rpb25zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICApO1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB9XG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1fRmlsdGVyIEZVbmN0aW9uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgQElucHV0KClcbiAgc2V0IGFjdGlvbihhY3Rpb246IGFueSkge1xuICAgIHRoaXMuYWN0aW9uMiA9IGFjdGlvbjtcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgc2V0IGltYWdlVXBsb2FkKGdldENvbmZpZzogYW55KSB7XG4gICAgdGhpcy5pbWFnZUNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZmlsZVVwbG9hZChnZXRDb25maWc6IGFueSkge1xuICAgIHRoaXMuZmlsZUNvbmZpZ0RhdGEgPSBnZXRDb25maWc7XG4gIH1cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NT0RBTCBGdW5jdGlvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsLCB7XG4gICAgICB3aWR0aDogJzQ1JScsXG4gICAgICBoZWlnaHQ6ICc1MDBweCcsXG4gICAgICBkYXRhOiB7IG1zZzogeCB9XG5cbiAgICB9KTtcblxuICAgIC8vIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybFxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICB9KTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRWRpYXRibGUgbWF0ZXJpYWwgRm9ybSBBcnJheS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cblxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFkZCBDcmVkZW50aWFsIEZ1Y250aW9ucy0tLS0tLS0tLS0tLS0tLS0tXG4gIGFkZFlvdXR1YmVWaWRlbyh2aWRfdXJsOiBhbnksIHZpZF90aXQ6IGFueSwgdmlkX2Rlc2M6IGFueSkge1xuICAgIGNvbnN0IGNyZWRzID0gdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0uY29udHJvbHMuY3JlZGVudGlhbHMgYXMgRm9ybUFycmF5O1xuICAgIGNyZWRzLnB1c2godGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB2aWRlb191cmw6IFt2aWRfdXJsXSxcbiAgICAgIHZpZGVvX3RpdGxlOiBbdmlkX3RpdF0sXG4gICAgICB2aWRlb19kZXNjcmlwdGlvbjogW3ZpZF9kZXNjXVxuICAgIH0pKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EZWxldGUgQ3JlZGV0aWFsIEZ1Y250aW9ucy0tLS0tLS0tLS0tLS0tLS1cbiAgZGVsZXRlQ3JlZHMoKSB7XG4gICAgY29uc3QgY3JlZHMgPSB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9scy5jcmVkZW50aWFscyBhcyBGb3JtQXJyYXk7XG4gICAgY3JlZHMucmVtb3ZlQXQoMSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tR2V0IEJsb2cgQ2F0ZWdvcnkgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0QmxvZ0NhdGVnb3J5KCkge1xuICAgIHZhciBkYXRhOiBhbnk7XG4gICAgZGF0YSA9IHtcbiAgICAgICdzb3VyY2UnOiAnYmxvZ19jYXRlZ29yeSdcbiAgICB9O1xuICAgIHRoaXMuYXBpc2VydmljZS5nZXREYXRhKGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgICByZXN1bHQgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuYmxvZ0NhdGVnb3J5QXJyYXkgPSByZXN1bHQucmVzO1xuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1UQUdTIHZpZXcgRnVuY3Rpb24tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0VGFnc0NvdW50KCkge1xuICAgIHZhciBkYXRhOiBhbnk7XG4gICAgZGF0YSA9IHtcbiAgICAgICdzb3VyY2UnOiAndGFnc192aWV3J1xuICAgIH07XG4gICAgdGhpcy5hcGlzZXJ2aWNlLmdldERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgIHJlc3VsdCA9IHJlc3BvbnNlO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzWzBdICE9IG51bGwpICAgICAgXG4gICAgICAgIHRoaXMub3B0aW9ucz1yZXN1bHQucmVzWzBdLnRhZ3M7XG4gICAgICBcbiAgICAgICBcblxuXG4gICAgfSk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG5cbiAgLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRURJVCBSRVNPTFZFIEZVTkNUSU9OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIEBJbnB1dCgpICAgICAgICAgIC8vc2luZ2xlIGRhdGEgZnJvbSByZXNvbHZlIGNhbGwgICYgc2V0IHRoZSB2YWx1ZSBmb3IgZWRpdFxuICBzZXQgc2luZ2xlRGF0YShlZGl0RGF0YXZhbHM6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSA9IGVkaXREYXRhdmFscztcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU1VCTUlULS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBvblN1Ym1pdCgpIHtcbiAgICAgXG4gICAgLypfX19fX19fX19fX19fX19fX19fX19fX19fX0lNQUdFIFVQTE9BREVSX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXG4gICAgaWYgKHRoaXMuaW1hZ2VDb25maWdEYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IGxvb3AgaW4gdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXMpIHtcbiAgICAgICAgdGhpcy5pbWFnZXNfYXJyYXkgPVxuICAgICAgICAgIHRoaXMuaW1hZ2VzX2FycmF5LmNvbmNhdCh7XG4gICAgICAgICAgICBcImJhc2VwYXRoXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmJhc2VwYXRoICsgJy8nICsgdGhpcy5pbWFnZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogdGhpcy5pbWFnZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udXBsb2FkLmRhdGEuZGF0YS5maWxlc2VydmVybmFtZSxcbiAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmltYWdlQ29uZmlnRGF0YS5maWxlc1tsb29wXS5uYW1lLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuaW1hZ2VDb25maWdEYXRhLmZpbGVzW2xvb3BdLnR5cGVcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ltYWdlID0gdGhpcy5pbWFnZXNfYXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ltYWdlID0gZmFsc2U7XG4gICAgfVxuICAgIC8qX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXG5cblxuICAgIC8qX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19GSUxFIFVQTE9BREVSX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXG5cbiAgICBpZiAodGhpcy5maWxlQ29uZmlnRGF0YSkge1xuICAgICAgZm9yIChjb25zdCBsb29wIGluIHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXMpIHtcbiAgICAgICAgdGhpcy5maWxlX2FycmF5ID1cbiAgICAgICAgICB0aGlzLmZpbGVfYXJyYXkuY29uY2F0KHtcbiAgICAgICAgICAgIFwiYmFzZXBhdGhcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS51cGxvYWQuZGF0YS5iYXNlcGF0aCArICcvJyArIHRoaXMuZmlsZUNvbmZpZ0RhdGEucGF0aCArICcvJyxcbiAgICAgICAgICAgIFwiZmlsZVwiOiB0aGlzLmZpbGVDb25maWdEYXRhLmZpbGVzW2xvb3BdLnVwbG9hZC5kYXRhLmRhdGEuZmlsZXNlcnZlcm5hbWUsXG4gICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5maWxlQ29uZmlnRGF0YS5maWxlc1tsb29wXS5uYW1lLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IHRoaXMuZmlsZUNvbmZpZ0RhdGEuZmlsZXNbbG9vcF0udHlwZVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfZmlsZSA9IHRoaXMuZmlsZV9hcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3NfZmlsZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xuXG4gICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUudGFncyA9IHRoaXMudGFnc19hcnJheTtcblxuICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWydkZXNjcmlwdGlvbiddLm1hcmtBc1RvdWNoZWQoKTtcblxuICAgIGlmICh0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWxpZCkge1xuICAgICAgaWYgKHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cylcbiAgICAgICAgdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuc3RhdHVzID0gcGFyc2VJbnQoXCIxXCIpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjBcIik7XG4gICAgICBpZiAodGhpcy5wYXJhbXNfaWQhPSBudWxsKSB7ICAgIC8vdXBkYXRlIHBhcnRcbiAgICAgICAgdGhpcy5tZXNzYWdlVGV4dCA9IFwiT25lIHJvdyB1cGRhdGVkISEhXCI7XG4gICAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnRhZ3MgPSB0aGlzLnRhZ3NfYXJyYXk7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgXCJzb3VyY2VcIjogXCJibG9nc1wiLFxuICAgICAgICAgIFwiZGF0YVwiOiB7XG4gICAgICAgICAgICBcImlkXCI6IHRoaXMucGFyYW1zX2lkLFxuICAgICAgICAgICAgXCJibG9ndGl0bGVcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuYmxvZ3RpdGxlLFxuICAgICAgICAgICAgXCJibG9nY2F0XCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2djYXQsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgXCJwcmlvcml0eVwiOiB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS52YWx1ZS5wcmlvcml0eSxcbiAgICAgICAgICAgIFwic3RhdHVzXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLnN0YXR1cyxcbiAgICAgICAgICAgIFwibWV0YXRpdGxlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLm1ldGF0aXRsZSxcbiAgICAgICAgICAgIFwibWV0YWRlc2NcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUubWV0YWRlc2MsXG4gICAgICAgICAgICBcInRhZ3NcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUudGFncyxcbiAgICAgICAgICAgIFwiY3JlZGVudGlhbHNcIjogdGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuY3JlZGVudGlhbHMsXG4gICAgICAgICAgICBcImJsb2dzX2ltYWdlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ltYWdlLFxuICAgICAgICAgICAgXCJibG9nc19maWxlXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmJsb2dzX2ZpbGUsXG4gICAgICAgICAgICBcImF1dGhvclwiOnRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLmF1dGhvclxuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNvdXJjZW9ialwiOiBbXCJibG9nY2F0XCJdXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzU3VibWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGRhdGE6IGFueTtcbiAgICAgICAgZGF0YSA9IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkIHBhcnRcbiAgICAgICAgICBcInNvdXJjZVwiOiBcImJsb2dzXCIsXG4gICAgICAgICAgXCJkYXRhXCI6IHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLnZhbHVlLFxuICAgICAgICAgIFwic291cmNlb2JqXCI6IFtcImJsb2djYXRcIl1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcGlzZXJ2aWNlLmFkZERhdGEoZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgICByZXN1bHQgPSByZXNwb25zZTtcblxuXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycgKyB0aGlzLmxpc3RVcmwpO1xuICAgICAgICB9LCAzMDAwKTtcblxuICAgICAgfSk7XG5cblxuICAgIH1cbiAgICBlbHNlXG4gICAgY29uc29sZS5sb2coXCJGb3JtIGlzIGludmFsaWRcIik7XG4gICAgXG4gIH1cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuXG5cbiAgZ2V0IG9uU2lnblVwVmFsaWRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzO1xuICB9XG5cblxuICBpbnB1dEJsdXIodmFsOiBhbnkpIHtcbiAgICB0aGlzLmJsb2dNYW5hZ2VtZW50Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cblxuXG5cblxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TZWxlY3QgVGFncyBBdXRvQ29tcGxldGUgRmllbGQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzaG93dmFsKGV2ZW50OiBhbnkpIHtcbiAgICBcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgICAgdGhpcy50YWdzX2FycmF5LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHRoaXMuYmxvZ01hbmFnZW1lbnRGb3JtLmNvbnRyb2xzWyd0YWdzJ10ucGF0Y2hWYWx1ZShcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1WSURFTyBVUkwgUFJFVklFVy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByZXZpZXdfdmlkZW8odmlkZW9faW5kZXgpIHtcbiAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5ibG9nTWFuYWdlbWVudEZvcm0udmFsdWUuY3JlZGVudGlhbHNbdmlkZW9faW5kZXhdLnZpZGVvX3VybCk7XG4gIH1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DTEVBUiBUQUdTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyVGFncyhpbmRleCkge1xuICAgIHRoaXMudGFnc19hcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBvcGVuU25hY2tCYXIoKSB7XG4gICAgdGhpcy5zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChZb3V0dWJlQ29tcG9uZW50LCB7XG4gICAgICAvLyBkdXJhdGlvbjogMTUwMCxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnc25hY2tiYXItY29sb3InXVxuICAgIH0pO1xuICB9XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQmxvZ3MgSW1hZ2UgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyX2ltYWdlKGluZGV4KSB7XG4gICAgdGhpcy5pbWFnZXNfYXJyYXkucG9wKHRoaXMuc2V0RGF0YS5ibG9nc19pbWFnZVtpbmRleF0pO1xuICAgIHRoaXMuaW1hZ2VzX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJsb2dzIEZpbGUgY2xlYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNsZWFyRmlsZVRhZ3MoaW5kZXgpIHtcbiAgICB0aGlzLmZpbGVfYXJyYXkucG9wKHRoaXMuc2V0RGF0YS5ibG9nc19maWxlW2luZGV4XSk7XG4gICAgdGhpcy5maWxlX2FycmF5X2VkaXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbn1cblxuXG5cblxuXG5cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Nb2RhbCBDb21wb25lbnQgV29ya3MtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcbiAgdmlkZW9pZDogYW55ID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHtcblxuXG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICd5b3V0dWJldGlwLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGRlZGl0LWJsb2dtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBZb3V0dWJlQ29tcG9uZW50IHtcblxufVxuXG4iXX0=
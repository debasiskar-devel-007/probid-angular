import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  
}
@Component({
  selector: 'app-admin-manage-categories',
  templateUrl: './admin-manage-categories.component.html',
  styleUrls: ['./admin-manage-categories.component.css']
})
export class AdminManageCategoriesComponent implements OnInit {
  public manage_type: any = [];
  public manage_make: any = [];
  public manage_model: any = [];
  public manage_year: any = [];


  public manage_type_skip: any = ['_id','created_at','Status'];
  public manage_type_modify_header: any = {'TypeName': 'Type Name', 'status':'Status', 'categoriesType':'Type'};

  public manage_make_skip: any = [];
  public manage_make_modify_header: any = {};

  public manage_model_skip: any = ['_id','created_at','Status'];
  public manage_model_modify_header: any = {};

  public manage_year_skip: any = ['_id','created_at','Status'];
  public manage_year_modify_header: any = {};

  public tablename: any = 'manage-categories';
  public updateurl: any = 'addorupdatedata';
  public deleteurl: any = 'deletesingledata';
  public custombutton: any = '';
  public statusarray: any = [{val: 1, name: 'Active'}, {val: 0, name: 'Inactive'}];
  public editroute:any = 'editcategori';

  constructor(public router: Router, public apiService: ApiService, public activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.data.forEach(data=>{
      let result:any;
      result=data;
      console.log('result.res');
      console.log(result.serviceList.res);
      if (this.router.url ==='/manage-type') {
        this.manage_type = result.serviceList.res;
      } else if(this.router.url ==='/manage-make') {
        this.manage_make = result.serviceList.res;
        console.log('manage_make');
      } else if(this.router.url ==='/manage-model') {
        this.manage_model = result.serviceList.res;
      } else if (this.router.url ==='/manage-year'){
        this.manage_year = result.serviceList.res;
      }
      // this.admin_datalist = result.results.res;
      
    })
  }



  addType(): void {
    console.log('Type');
   
      const dialogRef = this.dialog.open(DialogAddCategoryDialog, {
        width: '',
        data: {}
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });

  
  }

  addMake() {
    console.log('Make');
    const dialogRef = this.dialog.open(DialogAddCategoryDialog, {
      width: '',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  addModel() {
    console.log('Model')
  }
  addYear() {
    console.log('year')
  }

}


@Component({
  selector: 'addcategory-dialog',
  templateUrl: 'addcategory-dialog.html',
  styleUrls: ['addcategory-dialog.css']
})

export class DialogAddCategoryDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogAddCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
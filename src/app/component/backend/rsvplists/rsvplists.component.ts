import { Component, OnInit,Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";

export interface DialogData {
  data: any;
  msg:any;
} 


@Component({
  selector: 'app-rsvplists',
  templateUrl: './rsvplists.component.html',
  styleUrls: ['./rsvplists.component.css']
})
export class RsvplistsComponent implements OnInit {
public rsvp_list: any = '';
public ststus: number;
public message:any="Are you sure you want to delete this?"
  constructor(public activatedRoute: ActivatedRoute, public apiService: ApiService,public dialog: MatDialog,public snack:MatSnackBar) { }

  ngOnInit() {
    this.activatedRoute.data.forEach((data:any) => {
      // console.log(data)
      this.rsvp_list = data.rsvp.res;
    })
  }
  changeStatus(item: any, val: any) {
    console.log('rsvpSend status',item, val)
    let endpoint: any = "addorupdatedata";
    item.status = val;
    let card_data:any = {
      card_data: item,
      id:item._id
    }
    let data: any = {
      data: card_data,
      source: "send_for_rsvp",
    };
      this.apiService.CustomRequest(data, endpoint).subscribe((res:any) => {
        console.log(res);
        (res.status == "success");
        this.getdata();
      });
  }
  
  getdata() {
    let data: any = {
      endpoint: 'datalist',
      source: 'send_rsvp_view',
      // condition: {
      //   "id":  this.user_id
      // }
    }
    this.apiService.getDatalist(data).subscribe((res:any)=>{
      this.rsvp_list = res.res;
      console.log('>>>>',this.rsvp_list);
    });
  }


  //delete rsvp record


  deleteRsvp(item:any,index:any){
    console.log('delete hit',item,index)
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '250px',
      data:this.message

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      
        if(result=='yes'){
          let data:any;
            data={
            "source":"send_for_rsvp",
            id:item._id
            }
            this.apiService.CustomRequest(data,'deletesingledata').subscribe((res)=>{
              let result:any;
              result=res;
              console.log('success',result)
              
              if(result.status=='success'){
                this.rsvp_list.splice(index,index+1);
                this.snack.open('Record Deleted Successfully..!','Ok',{duration:4000})
                
              }
            })
        }
    });
  }



}


//component for delete modal


@Component({
  selector:'app-deleteModal',
  templateUrl:'./deleteModal.html'
})
export class DeleteModalComponent {
  constructor( public dialogRef: MatDialogRef<DeleteModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData){

  }
}
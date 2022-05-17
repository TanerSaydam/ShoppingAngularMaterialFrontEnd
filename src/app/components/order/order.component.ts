import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderModelDto } from 'src/app/models/ordersModelDto';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders: OrderModelDto[] = [];

  constructor(
    private orderSerivce:OrderService,
    private spinner:NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getList();
  }


  getList(){
    this.spinner.show();
    this.orderSerivce.getList().subscribe((res:any)=>{
      this.spinner.hide();
      this.orders = res.data
    },(err)=>{
      this.spinner.hide();
    })
  }

}

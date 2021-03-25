import { Component, OnInit, Input } from "@angular/core";
import { LocStateSummary } from "./../loc-state-summary";
import { LocService } from "./../loc.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ShipModalComponent } from "./../modals/ship-modal.component";
import { CreateBolModalComponent } from "./../modals/create-bol-modal.component";
import { ViewLocStateModalComponent } from "./../modals/view-loc-state-modal.component";
import { TourService } from "../services/tour.service";
import { RefreshService } from "../services/refresh.service";
import { MatDialog } from "@angular/material";

@Component({
  selector: "all-loc-seller",
  templateUrl: "./all-loc-seller.component.html",
  styleUrls: ["./all-loc-seller.component.css"]
})
export class AllLocSellerComponent implements OnInit {
  @Input()
  getAllUrl: string;
  bsModalRef: BsModalRef;
  locs: LocStateSummary[] = [];

  constructor(
    private locService: LocService,
    private modalService: BsModalService,
    private refreshService: RefreshService
  ) {
    refreshService.missionConfirmed$.subscribe(result => {
      this.update();
    });
  }

  shipGoods(id: string) {
    this.bsModalRef = this.modalService.show(ShipModalComponent);
    this.bsModalRef.content.title =
      "Confirm Shipped - " +
      this.locs.filter(x => x.orderRef === id)[0].description;
    this.bsModalRef.content.orderId = id;
  }

  addBol(loc: LocStateSummary) {
    this.bsModalRef = this.modalService.show(CreateBolModalComponent);
    this.bsModalRef.content.title = "Bill of Lading";
    this.bsModalRef.content.locSummary = loc;
  }

  public openLocModal(ref: string) {
    this.bsModalRef = this.modalService.show(
      ViewLocStateModalComponent,
      Object.assign({}, { class: "gray modal-lg" })
    );
    this.bsModalRef.content.title = "Letter of Credit";
    this.bsModalRef.content.locId = ref;
  }

  rejectOrder(loc: LocStateSummary) {}

  update() {
    this.locService.getActiveLocs().then(locs => (this.locs = locs));
  }

  ngOnInit(): void {
    this.update();
  }
}

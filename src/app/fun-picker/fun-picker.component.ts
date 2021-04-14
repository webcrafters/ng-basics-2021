import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChuckNorrisViewerComponent } from '../chuck-norris-jokes/chuck-norris-jokes-viewer/chuck-norris-viewer.component';
import { DadJokesViewerComponent } from '../dad-jokes/dad-jokes-viewer/dad-jokes-viewer.component';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'app-fun-picker',
  templateUrl: './fun-picker.component.html',
  styleUrls: ['./fun-picker.component.scss'],
})
export class FunPickerComponent implements OnInit {
  constructor(private dialogSvc: MatDialog) {}

  ngOnInit(): void {}

  openChuckNorrisDialog() {
    const dialogRef = this.dialogSvc.open(ChuckNorrisViewerComponent, {
      width: '800px',
      height: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  openDadJokesDialog() {
    this.dialogSvc.open(DadJokesViewerComponent, {
      width: '800px',
      height: '600px',
    });
  }
  openAddressDialog() {
    this.dialogSvc.open(AddressFormComponent, {
      width: '800px',
      height: '700px',
    });
  }
}

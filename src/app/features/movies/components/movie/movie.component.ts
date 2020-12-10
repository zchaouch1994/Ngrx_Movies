import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Movie } from "../../models";
import { ConfirmationDialogComponent } from "../../components/confirmation-dialog/confirmation-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  @Output() updateMovie = new EventEmitter<number>();
  @Output() deleteMovie = new EventEmitter<number>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  delete(MovieId: number) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: "Are you sure want to delete?",
      })
      .afterClosed()
      .subscribe((result) => {
        if (result == true) {
          this.deleteMovie.emit(MovieId);
        }
      });
  }
}

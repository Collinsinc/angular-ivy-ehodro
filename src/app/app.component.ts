import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'fn-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  keyDisplay: string = 'visibility:hidden';
  color: string = 'Red';
  textColor: string = 'redtext';
  winner: string = '';

  onWin(winner) {
    this.winner = winner + '!';
    console.log(winner);
  }

  ngOnInit() {}

  toggleKey() {
    if (this.keyDisplay == '') {
      return (this.keyDisplay = 'visibility:hidden');
    } else {
      return (this.keyDisplay = '');
    }
  }

  btnClicked(color) {
    if (color == 'Red') {
      this.textColor = 'redtext';
    } else {
      this.textColor = 'bluetext';
    }

    this.color = color;
    return this.color;
  }
}

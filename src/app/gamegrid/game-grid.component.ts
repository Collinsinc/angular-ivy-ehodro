import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GamePlayService } from '../game.service';

@Component({
  selector: 'fn-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: [],
})
export class GameGridComponent {
  @Input() Team;
  @Output() Winner = new EventEmitter();

  constructor(public game: GamePlayService) {}

  tileClass00 = '';
  tileClass01 = '';
  tileClass02 = '';
  tileClass10 = '';
  tileClass11 = '';
  tileClass12 = '';
  tileClass20 = '';
  tileClass21 = '';
  tileClass22 = '';

  selectedGrid = '';

  winningteamExists = false;
  winningTeam;

  onGridClick(x, y) {
    this['tileClass' + x + y] = this.game.gridMapping[x][y];
    this.selectedGrid = this['tileClass' + x + y];
    this.game.countTile(this.selectedGrid);
    this.winningteamExists = this.game.checkForWinner(
      this.selectedGrid,
      this.Team
    );
    if (this.winningteamExists == true) {
      this.winningTeam = this.game.winner;
      this.emitWinner(this.winningTeam);
    }
  }

  emitWinner(winners) {
    this.Winner.emit(winners);
  }
}

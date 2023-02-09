import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GamePlayService {
  
  blueTileSelected = 0;
  readTileSelected = 0;
  neutralsSelected = 0;
  winner = '';

  gridMapping = [
    ['blue', 'neutral', 'red'],
    ['assassin', 'blue', 'neutral'],
    ['neutral', 'neutral', 'red'],
  ];

  countTile(selectedGrid) {
    if (selectedGrid == 'blue') {
      this.blueTileSelected++;
    } else if (selectedGrid == 'red') {
      this.readTileSelected++;
    }
  }

  checkForWinner(selectedGrid, team) {
    if (this.blueTileSelected == 2) {
      this.winner = 'Blue Wins';
      return true;
    } else if (this.readTileSelected == 2) {
      this.winner = 'Red Wins';
      return true;
    } else if (selectedGrid == 'assassin') {
      if (team == 'Red') {
        this.winner = 'Blue Wins';
        return true;
      } else {
        this.winner = 'Red Wins';
        return true;
      }
    }
  }
}

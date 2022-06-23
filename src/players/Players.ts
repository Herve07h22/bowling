const MAX_NAME_LENGTH = 10;

export class Players {
  constructor(private _players: string[]) {
    if (!_players.length)
      throw new Error(`Cannot create an empty group of players`);

    if (_players.length !== new Set(this._players).size)
      throw new Error(`Cannot have a group of players with 2 same name`);

    if (_players.some((name) => name.length > MAX_NAME_LENGTH))
      throw new Error(`One player has a too long name`);
  }
}

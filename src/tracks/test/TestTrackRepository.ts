import { Track } from "../models/Track";
import { TrackRepository } from "../interfaces/TrackRepository";

export class TestTrackRepository implements TrackRepository {
  _tracks: Map<number, Track> = new Map([[1, { id: 1, allocated: false }]]);
  async get(idTrack: number) {
    return this._tracks.get(idTrack);
  }
  async save(track: Track) {
    this._tracks.set(track.id, track);
  }
}

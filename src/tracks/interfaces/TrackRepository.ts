import { Track } from "../models/Track";

export interface TrackRepository {
  get: (idTrack: number) => Promise<Track | undefined>;
  save: (track: Track) => Promise<void>;
}

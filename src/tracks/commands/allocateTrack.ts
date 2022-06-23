import { TrackRepository } from "../interfaces/TrackRepository";
import { Track } from "../models/Track";
import { Players } from "../../players/Players";

export async function allocateTrack(
  trackId: number,
  names: string[],
  tracks: TrackRepository
): Promise<string> {
  const players = new Players(names);
  const track: Track | undefined = await tracks.get(trackId);

  if (!track) throw new Error(`track #${trackId} does not exist `);

  if (track.allocated)
    throw new Error(`Cannot allocate track #${trackId} (already allocated)`);

  const allocatedTrack = { ...track, allocated: true };
  await tracks.save(allocatedTrack);

  return "ok";
}

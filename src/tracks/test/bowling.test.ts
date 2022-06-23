import { allocateTrack } from "../commands/allocateTrack";
import { TrackRepository } from "../interfaces/TrackRepository";
import { TestTrackRepository } from "./TestTrackRepository";

var tracks: TrackRepository;
beforeEach(() => {
  tracks = new TestTrackRepository();
});

test("Cannot allocate a track that does not exist", async () => {
  expect(allocateTrack(122, ["Bill", "Joe"], tracks)).rejects.toThrowError(
    "track #122 does not exist"
  );
});

test("Cannot allocate a track without any player", async () => {
  expect(allocateTrack(1, [], tracks)).rejects.toThrowError(
    "Cannot create an empty group of players"
  );
});

test("Cannot allocate a track without any player", async () => {
  expect(allocateTrack(1, ["Bill", "Bill"], tracks)).rejects.toThrowError(
    "Cannot have a group of players with 2 same name"
  );
});

test("Cannot allocate a track without any player", async () => {
  expect(
    allocateTrack(1, ["Billverylongname", "Bill"], tracks)
  ).rejects.toThrowError("One player has a too long name");
});

test("Cannot allocate a track which is already allocated ", async () => {
  await allocateTrack(1, ["Joe", "Bill"], tracks);

  expect(allocateTrack(1, ["Murray", "Steeve"], tracks)).rejects.toThrowError(
    "Cannot allocate track #1 (already allocated)"
  );
});

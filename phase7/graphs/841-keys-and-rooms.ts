function canVisitAllRooms(rooms: number[][]): boolean {
  const canVisit = new Array(rooms.length).fill(0);

  visitRoom(rooms, 0, canVisit);

  return checkCanVisit(canVisit);
}

const visitRoom = (
  rooms: number[][],
  currentRoom: number,
  roomStatus: number[],
): void => {
  //  1: Skip if room already visited
  if (roomStatus[currentRoom] === 1) {
    return;
  }

  //  2: Mark current room as visited
  roomStatus[currentRoom] = 1;

  //  3: Visit all rooms with the current room keys
  for (const key of rooms[currentRoom]) {
    visitRoom(rooms, key, roomStatus);
  }
};

const checkCanVisit = (input: number[]): boolean => {
  for (const room of input) {
    if (room === 0) {
      return false;
    }
  }

  return true;
};

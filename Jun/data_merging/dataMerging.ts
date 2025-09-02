type Session = { user: number; duration: number; equipment: Array<string> };

export default function mergeData(sessions: Array<Session>): Array<Session> {
  const map = new Map();
  sessions.forEach((user) => {
    const { user: id, duration, equipment } = user;
    if (map.has(id)) {
      const {
        user: exid,
        duration: exDuration,
        equipment: exEquipment,
      } = map.get(id);
      const newEquipment = new Set([...exEquipment, ...equipment])
      map.set(exid, {
        user: exid,
        duration: exDuration + duration,
        equipment: [...newEquipment.values()].sort(),
      });
    } else {
      map.set(id, user);
    }
  });
  return [...map.values()];
}

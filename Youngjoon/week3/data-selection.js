/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @param {{user?: number, minDuration?: number, equipment?: Array<string>, merge?: boolean}} [options]
 * @return {Array}
 */
export default function selectData(sessions, options) {
  if (!options) return sessions;

  const { user, minDuration, equipment, merge } = options;

  let processedSessions = sessions;

  if (merge) {
    const userSessionsMap = new Map();
    const userLastIndex = new Map();

    sessions.forEach((session, index) => {
      const userId = session.user;

      if (!userSessionsMap.has(userId)) {
        userSessionsMap.set(userId, []);
      }
      userSessionsMap.get(userId).push(session);
      userLastIndex.set(userId, index);
    });

    const mergedSessions = [];
    for (const [userId, userSessions] of userSessionsMap) {
      const totalDuration = userSessions.reduce((sum, s) => sum + s.duration, 0);
      const allEquipment = [...new Set(userSessions.flatMap(s => s.equipment))].sort();

      mergedSessions.push({
        user: userId,
        duration: totalDuration,
        equipment: allEquipment,
        lastIndex: userLastIndex.get(userId),
      });
    }

    mergedSessions.sort((a, b) => a.lastIndex - b.lastIndex);
    processedSessions = mergedSessions.map(({ lastIndex, ...session }) => session);
  }

  let result = processedSessions;

  if (user !== undefined) {
    result = result.filter(session => session.user === user);
  }

  if (minDuration !== undefined) {
    result = result.filter(session => session.duration >= minDuration);
  }

  if (equipment !== undefined && equipment.length > 0) {
    result = result.filter(session => equipment.some(eq => session.equipment.includes(eq)));
  }

  return result;
}

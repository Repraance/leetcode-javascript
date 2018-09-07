/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = (seats) => {
    let maxDistance = 0;
    let currentDistance = 0;
    let currentSide = 0;
    for (const seat of seats) {
        if (seat) {
            currentSide++;
            let currentMaxDistance = currentSide > 1 ? Math.floor((currentDistance + 1) / 2) : currentDistance;
            if (currentMaxDistance > maxDistance) {
                maxDistance = currentMaxDistance;
            }
            currentDistance = 0;
            currentSide = 1;
        } else {
            currentDistance++;
        }
    }
    if (currentDistance && currentDistance > maxDistance) {
        maxDistance = currentDistance;
    }
    return maxDistance;
};
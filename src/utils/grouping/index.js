/**
 * Calculate number of available columns (group category items)
 *
 * @param colsNeededArr - array of items numbers per each category
 *
 *  [[item, item, item], [item], [item, item]] ===> [3, 1, 2]
 *
 * @param colsTotal - total number of columns
 *
 * @returns array of column numbers available per each category
 */
const group = (colsNeededArr, colsTotal) => {
    if (colsNeededArr.length > colsTotal) {
        return colsNeededArr.map((colsNeeded, idx) => ((idx + 1) <= colsTotal) ? 1 : 0);
    } else {
        let colsCounter = 0;
        let colsNeededArrCounter = 0;
        return colsNeededArr.map((colsNeeded) => {
            colsNeededArrCounter++;
            const colsFree = (colsTotal - colsCounter) - (colsNeededArr.length - colsNeededArrCounter);
            if (colsFree >= colsNeeded) {
                colsCounter += colsNeeded;
                return colsNeeded;
            } else {
                if (colsFree > 1) {
                    colsCounter += colsFree;
                    return colsFree;
                } else {
                    colsCounter += 1;
                    return 1;
                }
            }
        });
    }
};

export default group;
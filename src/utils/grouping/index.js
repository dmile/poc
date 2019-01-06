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

//TODO add tests
export default group;
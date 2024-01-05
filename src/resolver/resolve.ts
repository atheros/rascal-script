// finds the best match between one array of strings linesOld
// and the second array of strings linesNew
// returns the index of string in linesNew that matches linesOld[executionLine]
// i.e. suck k that linesNew[k] == linesOld[executionLine]
// if no such line exists, returns -1
export function findLine(linesOld: string[], linesNew: string[], executionLine: number, isAggressive = true) {
    const di = new Array(linesOld.length + 1);
    const dj = new Array(linesOld.length + 1);
    const matched = new Array(linesOld.length + 1);

    for (let i=0; i<=linesOld.length; i++) {
        matched[i] = new Array(linesNew.length + 1)
        di[i] = new Array(linesNew.length + 1)
        dj[i] = new Array(linesNew.length + 1)
        matched[i][0] = 0;
        di[i][0] = 0;
        dj[i][0] = 0;
    }
    for (let j=0; j<=linesNew.length; j++) {
        matched[0][j] = 0;
        di[0][j] = 0;
        dj[0][j] = 0;
    }
    for (let i=1; i<=linesOld.length; i++) {
        for (let j=1; j<=linesNew.length; j++) {
            di[i][j] = 0;
            dj[i][j] = 0;
            matched[i][j] = -1000000;
            if (linesOld[i-1] === linesNew[j-1]) {
                // accept lines as matching
                matched[i][j] = matched[i-1][j-1] + 1;
                di[i][j] = -1;
                dj[i][j] = -1;
            }
            // when isAggressive is set true only allow dropping i-th line
            // in linesOld if it is not the execution line
            if (!isAggressive || i-1 !== executionLine) {
                if (matched[i][j] < matched[i-1][j]) {
                    // drop i-th lines in linesOld:
                    matched[i][j] = matched[i-1][j];
                    di[i][j] = -1;
                    dj[i][j] = 0;
                }
            }
            // we can always drop lines from linesNew
            if (j>1 && matched[i][j] < matched[i][j-1]) {
                // drop j-th lines in linesNew:
                matched[i][j] = matched[i][j-1];
                di[i][j] = 0;
                dj[i][j] = -1;
            }
        }
    }

    let matchedExecution = -1;

    let i = linesOld.length;
    let j = linesNew.length;

    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (di[i][j] === -1 && dj[i][j] === -1) {
            if (i-1===executionLine) {
                matchedExecution = j-1;
            }
            // uncomment to print matched lines in reverse order
            // console.log(linesOld[i-1], "    <->     ", linesNew[j-1]);
        }
        if (di[i][j]===0 && dj[i][j]===0) {
            break;
        }
        i += di[i][j];
        j += dj[i][j];
    }
    return matchedExecution;
}

// let linesOld = [
//     'x = 1',
//     'y = 2',
//     'print "hello"',
//     'kill humans',
//     'sleep 1',
//     'exit']
//
// let linesNew = [
//     'x = 3',
//     'y = 2',
//     'print "hello"',
//     'kill humans',
//     'x = 1',
//     'sleep 5',
//     'label:',
//     'x = 1',
//     'exit']
//
// let lines3 = [
//     'label:',
//     'x = 1',
// ]
//
// lines3.forEach((l, i) => {
//     const newLine = findLine(lines3, linesNew, i, true);
//     console.log(`${i}: ${lines3[i]} =>> ${newLine}: ${linesNew[newLine]}`);
// });

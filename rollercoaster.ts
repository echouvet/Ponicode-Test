//Add input to the root of this repository and set the filename string below
const filename:string = "roller_coaster.hard"

// Read the file and split it into lines
const lines:Array<string> = require('fs').readFileSync(`./${filename}`, 'utf-8').split('\n')
/**
 * Get our three values:
 * L: amount of available seats on the rollercoaster
 * C: amount of times the roller coaster will run per day
 * N: total number of groups
 */
const inputs: string[] = lines[0].split(' ');
const L: number = parseInt(inputs[0]);
const C: number = parseInt(inputs[1]);
const N: number = parseInt(inputs[2]);
/**
 * Initiate revenue to calculate the output
 * groupArray is used to store the size of every group in our file
 */
let revenue: number = 0;
let groupArray:Array<number> = [];

// get the group sizes and store them within groupArray
for (let i:number = 1; i <= N; i++) {
    const pi: number = parseInt(lines[i]);
    groupArray.push(pi);
}

// Initiate counters
let j:number, groupCount:number;
//  Iterate through the number of rides
for (let i:number = 0; i < C; i++) {
    // Set counters to 0 each ride
    j = 0;
    groupCount= 0;
    /**
     *     Add people to the ride while both
     *     1) the next group can still fit on the ride
     *     2) the entire queue of groups is not already on the ride
     */
    while (j + groupArray[0] <= L && groupCount < N) {
        j += groupArray[0];
        groupArray.push(groupArray[0]);
        groupArray.shift();
        groupCount++;
    }
    // this counts the final output
    revenue += j;
}
console.log(revenue);
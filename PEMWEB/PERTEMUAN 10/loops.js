// For Loop
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// While Loop

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Do-While Loop
let count = 0;
do {
    console.log("Halo!");
    count++;
} while (count < 0);

// Break & Continue
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
}
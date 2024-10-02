let n = parseInt(prompt("n:"));
let boxes = [];
let empty=0;
for (let i = 0; i < n; i++) {
    let box = parseInt(prompt(`Enter the value of boxpacket ${i + 1} (0 for empty packet):`));
    boxes.push(box);
}
let result = new Array(n).fill(0);
let index = 0;
for (let i = 0; i < n; i++) {
    if (boxes[i] !== 0) {
        result[index] = boxes[i];
        index++;
    }
    else{
        empty++;
    }
}
console.log("Modified array of boxes:", result);
console.log("emptycount:", empty);
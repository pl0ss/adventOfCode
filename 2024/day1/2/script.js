const fs = require('fs/promises');

const file_path = '2024/day1/data.txt';

async function init() {
    const data = await read_file(file_path);
    const result = analyse_data(data);
    console.log(result);
}

init();

async function read_file(file_path) {
    try {
        const data = await fs.readFile(file_path, 'utf8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
        throw err;
    }
}

function analyse_data(data) {
    const left = [];
    const right = [];

    const lines = data.split('\n');

    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        const parts = line.split(' ');
        left.push(Number(parts.at(0)));
        right.push(Number(parts.at(-1)));
    }

    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);

    if(left.length != right.length) {
        console.error('left.length != right.length');
    }

    let sum = 0;

    for (let index = 0; index < left.length; index++) {
        const l = left[index];
        const anzahl_l_in_left = left.filter(zahl => zahl === l).length;
        const anzahl_l_in_right = right.filter(zahl => zahl === l).length;

        const x = l * anzahl_l_in_left * anzahl_l_in_right;
        sum += x;

        index += anzahl_l_in_left -1;
    }
    
    return sum;
}
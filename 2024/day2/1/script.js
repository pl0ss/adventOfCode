const fs = require('fs/promises');

const file_path = '2024/day2/data.txt';

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
    let sum = 0;

    const tolerate_levels = 3;

    const lines = data.split('\n');

    for (let index_lines = 0; index_lines < lines.length; index_lines++) {
        const line = lines[index_lines];

        const nums = line.split(' ');
        let last = undefined;
        let safe = true;
        let increasing = undefined;

        for (let index_nums = 0; index_nums < nums.length; index_nums++) {
            const num = Number(nums[index_nums]);

            if(last != undefined && increasing == undefined) {
                increasing = last < num;
            }
            if(increasing != undefined) {
                if((increasing && last > num) || (!increasing && last < num)) {
                    safe = false;
                    break;
                }
            }

            const diff = Math.abs(last - num);

            if(last == undefined || (diff <= tolerate_levels && diff >= 1)) {
                last = num;
            } else {
                safe = false;
                break;
            }
        }

        if(safe) {
            sum++;
        }
    }
    
    return sum;
}
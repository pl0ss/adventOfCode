const input = `Time:        34     90     89     86
Distance:   204   1713   1210   1780`;

const input_test = `Time:      7  15   30
Distance:  9  40  200`


function calc(input){
    data = parse_input(input);

    result = 1;

    for (let i = 0; i < data["times"].length; i++) {
        current_time = data["times"][i];
        current_distance= data["distances"][i];

        //? Suche linken Schnittpunkt
        a = undefined;
        for (let j = 1; j < current_time; j++) {
            speed = j;
            time_left = current_time - j;
            distances = speed * time_left;
            if(distances > current_distance){
                a = j;
                break;
            }
        }

        x = current_time - 2*a + 1;
        //console.log(a, x)
        result *= x;
    }


    return result;
}

function parse_input(input){
    lines = input.split("\n")
    line_time = lines[0];
    line_distance = lines[1];
    times = parse_line(line_time);
    distances = parse_line(line_distance);

    data = {times, distances};

    return data;
}

function parse_line(str){
    arr = [];
    str = str.split(":")[1]

    current_int = "";
    for (let index = 0; index < str.length +1; index++) {
        if(str[index] == " " || str[index] == undefined){
            if(current_int != ""){
                arr.push(Number(current_int));
                current_int = "";
            }
        } else {
            current_int = `${current_int}${str[index]}`
        }
    }

    return arr;
}


console.log(calc(input))
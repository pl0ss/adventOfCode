with open("input.txt", "r") as f:
    data = f.read().splitlines()

def first_num(d):
    i=0
    while i < len(d):
        if d[i] in '0123456789':
            return int(d[i])

        if d[i: i+3] == 'one':
            return 1

        if d[i: i+3] == 'two':
            return 2

        if d[i: i+5] == 'three':
            return 3 

        if d[i: i+4] == 'four':
            return 4

        if d[i: i+4] == 'five':
            return 5

        if d[i: i+3] == 'six':
            return 6

        if d[i: i+5] == 'seven':
            return 7

        if d[i: i+5] == 'eight':
            return 8

        if d[i: i+4] == 'nine':
            return 9

        i += 1

def second_num(d):
    i=len(d)-1
    while i >= 0:
        if d[i] in '0123456789':
            return int(d[i])

        if d[i-2: i+1] == 'one':
            return 1

        if d[i-2: i+1] == 'two':
            return 2

        if d[i-4: i+1] == 'three':
            return 3 

        if d[i-3: i+1] == 'four':
            return 4

        if d[i-3: i+1] == 'five':
            return 5

        if d[i-2: i+1] == 'six':
            return 6

        if d[i-4: i+1] == 'seven':
            return 7

        if d[i-4: i+1] == 'eight':
            return 8

        if d[i-3: i+1] == 'nine':
            return 9
        i -= 1


def solve(input):
    total = 0
    for d in input:
        first = first_num(d)
        second = second_num(d)
        linenumber = int(f'{first}{second}')
        print(f'{linenumber}')
        total += linenumber
    return total

print(f'total: {solve(data)}')
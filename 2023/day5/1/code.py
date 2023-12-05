import sys
from operator import itemgetter
from collections import deque

def parse_input(fin: sys.stdin) -> tuple:
	sections = fin.read().split('\n\n')
	seeds    = sections[0]
	seeds    = list(map(int, seeds[6:].split()))
	mappings = []

	for section in sections[1:]:
		mapping = []
		mappings.append(mapping)

		for line in section.splitlines()[1:]:
			dst, src, length = map(int, line.split())
			mapping.append((src, src + length, dst - src))

	return seeds, mappings

def solve(segments: deque, mappings: list) -> int:
	for mapping in mappings:
		processed = deque()

		while segments:
			a, b = segments.popleft()

			for c, d, delta in mapping:
				left_partial  = c <= a < d
				right_partial = c < b <= d

				if left_partial and right_partial:
					processed.append((a + delta, b + delta))
					break

				if left_partial:
					processed.append((a + delta, d + delta))
					segments.append((d, b))
					break

				if right_partial:
					processed.append((c + delta, b + delta))
					segments.append((a, c))
					break

				if a < c and b > d:
					processed.append((c + delta, d + delta))
					segments.append((a, c))
					segments.append((d, b))
					break
			else:
				processed.append((a, b))

		segments = processed

	return min(map(itemgetter(0), segments))


fin = open('input.txt', 'r')

seeds, mappings = parse_input(fin)

segments = deque((s, s + 1) for s in seeds)
solution = solve(segments, mappings)
print('Part 1:', solution)

segments = deque((a, a + b) for a, b in zip(seeds[::2], seeds[1::2]))
solution = solve(segments, mappings)
print('Part 2:', solution)
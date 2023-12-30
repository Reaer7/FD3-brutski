export function getRandInt(start, end) {
    return Math.floor(Math.random() * Math.abs(end - start) + start);
}
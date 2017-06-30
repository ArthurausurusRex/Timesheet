import { Line } from './line';

export class TimeLine {
    month: number;
    line: Line;

    constructor(line: Line) {
        this.line = line;
        this.month = 1;
    }
}
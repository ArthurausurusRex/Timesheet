import { Line } from './line';

export class TimeLine {
    month: number;
    line: Line;
    date = new Date();

    constructor(line: Line) {
        this.line = line;
        this.month = this.date.getMonth();
    }
}
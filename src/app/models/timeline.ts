import { Line } from './line';

export class TimeLine {
    year: number;
    month: number;
    line: Line;
    date = new Date();
    _id :any;

    constructor(line: Line) {
        this.line = line;
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
    }
}
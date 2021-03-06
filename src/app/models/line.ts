import { Day } from './day';

export class Line{
    numberOfDays: number;
    contract: string;
    clientName: string;
    projectName: string;
    workedDays: number;
    days: Day[];
    modify: boolean;
    month: number;
    year: number;
    date = new Date()

    constructor(contract, clientName, projectName, workedDays, first, month, year){ 
        this.clientName = clientName;
        this.contract = contract;
        this.projectName = projectName;
        this.workedDays = workedDays;
        this.month = month;
        this.year = year;
        this.numberOfDays = new Date(year, month+1, 0).getDate();
        this.setDays(this.numberOfDays, first);
    }


    setContract(contract: string){
        this.contract = contract;
    }

    setProjectName(project: string){
        this.projectName = project;
    }

    setClientName(client: string){
        this.clientName = client;
    }

    setWorkedDays(numDays: number){
        this.workedDays = numDays;
    }

    setDays(numberOfDays: number, first: boolean) {
        this.days = [];
        for (let i = 1; i <=  numberOfDays ; i++ ){
            if(first){
                this.days.push(new Day(i, false, this.year, this.month, i))
            }
            else{
                this.days.push(new Day(i, false, this.year, this.month, 0))
            }
        }
    }

    public updateWorkedDays() {
        for ( let day of this.days){
            this.workedDays=this.workedDays+day.value;
        }
    }
    public getNumOfWorkedDays(): number {
        let num = 0;
        for (const day of this.days){
            if (day.isWorkDay){
                num++
            }
        }
        return num;
    }
}
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

    constructor(contract, clientName, projectName, workedDays, first){ 
        this.clientName = clientName;
        this.contract = contract;
        this.projectName = projectName;
        this.workedDays = workedDays;
        this.month = this.date.getMonth();            
        this.year = this.date.getFullYear();
        this.numberOfDays = new Date(this.year, this.month+1, 0).getDate();
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
}
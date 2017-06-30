export class Line{
    numberOfDays: number;
    contract: string;
    clientName: string;
    projectName: string;
    workedDays: number;
    days: any[];

    constructor(numberOfDays,contract, clientName, projectName, workedDays, first)
        { 
            this.numberOfDays = numberOfDays;
            this.clientName = clientName;
            this.contract = contract;
            this.projectName = projectName;
            this.workedDays = workedDays;
            this.days = this.setDays(numberOfDays, first);

        }

    setNumberOfDays(num: number){
        this.numberOfDays = num;
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

    setDays(numberOfDays: number, first: boolean){
        let line=[];
        for (let i = 1; i  <=  numberOfDays ; i++ ){
            if(first){
                line.push(i)
            }
            else{
                line.push(0)
            }
        }
        return line;
    }
}
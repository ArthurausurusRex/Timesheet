export class Day{
   
    numOfDay: number;
    modify: boolean;
    isWorkDay: boolean;
    month: number;
    year: number;
    value: number;

    
    constructor( numOfDay: number, modify: boolean, year: number, month: number, value: any){
        this.numOfDay = numOfDay;
        this.modify = modify;
        this.month = month;
        this.year = year;
        this.value = value;
        this.isWorkDay = this.setIsWorkDay();
    }

    setIsWorkDay(): boolean {
       const date = new Date(this.year, this.month, this.numOfDay);
       if( date.getDay()==6 || date.getDay()==0){
            return false;
        }
        else{
            return true;
        }

    }

}

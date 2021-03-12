import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable({ 
    providedIn: 'root'
})
export class CalculatorService {

    constructor(private logger: LoggerService) {}
   
    add(numA: number, numB: number) {
        this.logger.log("Addition");
        return numA + numB;
    }

    subtract(numA: number, numB: number) {
        this.logger.log("Subtraction");
        return numA - numB;
    }

}
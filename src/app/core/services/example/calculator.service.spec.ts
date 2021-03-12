import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {

    let calculator: CalculatorService,
        loggerSpy: any;

    beforeEach(() => {
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                { provide: LoggerService, useValue: loggerSpy }
            ]
        });

        calculator = TestBed.inject(CalculatorService);
    });

    it("should add two numbers", () => {

        const result = calculator.add(1, 2);

        expect(result).toBe(3);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it("should subtract two numbers", () => {

        const result = calculator.subtract(1, 3);

        expect(result).toBe(-2);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

});
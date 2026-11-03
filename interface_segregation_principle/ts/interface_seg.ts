interface Printer {
    print(document: string): void;
}

interface Scanner {
    scan(): string;
}

interface Fax {
    sendFax(document: string, number: string): void;
}

class BasicPrinter implements Printer {
    print(document: string): void {
        console.log(`Drukuję: ${document}`);
    }
}

class BasicScanner implements Scanner {
    scan(): string {
        console.log("Skanuję...");
        return "Zawartość zeskanowanego dokumentu";
    }
}

class OfficeMachine implements Printer, Scanner, Fax {
    print(document: string): void {
        console.log(`Drukuję: ${document}`);
    }

    scan(): string {
        console.log("Skanuję...");
        return "Zawartość zeskanowanego dokumentu";
    }

    sendFax(document: string, number: string): void {
        console.log(`Wysyłam fax pod numer ${number}: ${document}`);
    }
}

function printReport(printer: Printer): void {
    printer.print("Raport miesięczny");
}

function digitize(scanner: Scanner): string {
    return scanner.scan();
}

printReport(new BasicPrinter());
printReport(new OfficeMachine());

digitize(new BasicScanner());
digitize(new OfficeMachine())
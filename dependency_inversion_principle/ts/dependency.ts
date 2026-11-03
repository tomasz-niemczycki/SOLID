interface Notifier {
    send(message: string): void;
}

class EmailNotifier implements Notifier {
    send(message: string): void {
        console.log(`📧 Email: ${message}`);
    }
}

class SmsNotifier implements Notifier {
    send(message: string): void {
        console.log(`📱 SMS: ${message}`);
    }
}

class FakeNotifier implements Notifier {
    sentMessages: string[] = [];
    send(message: string): void {
        this.sentMessages.push(message)
    }
}

class OrderService {
    private notifier: Notifier;

    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }

    completeOrder(orderId: number): void {
        //logika zamówienia
        this.notifier.send(`Zamówienie nr: ${orderId} zostało wysłane`)
    }
}

const emailService = new OrderService(new EmailNotifier);
emailService.completeOrder(1);

const smsService = new OrderService(new SmsNotifier());
smsService.completeOrder(2);

const fake = new FakeNotifier();
const testService = new OrderService(fake);
testService.completeOrder(3);

console.log(fake.sentMessages.length);
console.log(fake.sentMessages[0]);
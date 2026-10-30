class User {
    public name: string;
    public email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

class UserDatabaseSaver {
    save(user: User) {
        console.log(`Saving user ${user.name} with email ${user.email} to the database`);
    }
}

class UserEmailSender {
    sendEmail(user: User) {
        console.log(`Sending email to ${user.email} with subject "Welcome, ${user.name}"`);
    }
}

const user = new User("John Doe", "johndoe@example.com");
const saver = new UserDatabaseSaver();
const sender = new UserEmailSender();

saver.save(user)
sender.sendEmail(user)

export {}
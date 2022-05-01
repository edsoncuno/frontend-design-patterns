import { v4 as uuidv4 } from 'uuid';

export class Singleton {

    private static instance: Singleton;
    private userList: any[] = [];

    private constructor() {
    }

    static Instance() {
        if (this.instance == null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }

    public SignIn(user: any): any[] {
        if (this.userList.find((element) => {
            return element.name === user.name
        })) {
            return this.userList;
        } else {
            user._id = uuidv4();
            this.userList.push(user);
            return this.userList;
        }
    }

    public SignOff(user: any): any[] {
        const newUserList = this.userList.filter((element) => {
            return element.name !== user.name
        });
        this.userList = newUserList;
        return this.userList;
    }
}
import { IBodyRequestLogin, IBodyResponseLogin } from "../models/login.model"
export class LoginController {
    public url: string;

    constructor(url: string) {
        this.url = url;
    }
    async login(data: IBodyRequestLogin, endPoint: string): Promise<IBodyResponseLogin> {
        const response = await fetch(this.url + endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status !== 200) {
            throw new Error('There was an error trying to log in. Try again.')
        }

        const token: IBodyResponseLogin = await response.json();
        return token;
    }
}
//------------------------------ LOGIN ------------------------------

//------------------- Requests para la API -------------------

export interface IBodyRequestLogin {
    email: string;
    password: string;
}

//------------------- Responses para la API -------------------

export interface IBodyResponseLogin {
    token: string;
}
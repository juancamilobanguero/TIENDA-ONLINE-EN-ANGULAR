export class User {

    //atributos
    active?: boolean
    address?: string 
    createdAt?: string
    dateBirth?: string 
    email?:string 
    id?: string
    lastName?: string
    name: string
    password?: string
    paymentMethods?: any[]
    phoneNumber?: string
    role?: string
    updatedAt?: string
    username?: string
    _id?: string

    constructor(
        active = false,
        address = '',
        createdAt = '',
        dateBirth = '',
        email = '',
        id = '',
        lastName = '',
        password = '',
        paymentMethods = [],
        phoneNumber = '',
        role = '1',
        updatedAt = '',
        username = '',
        _id = '',
        name = ''
    ) {
        this.active = active;
        this.address = address;
        this.createdAt = createdAt;
        this.dateBirth = dateBirth;
        this.email = email;
        this.id = id;
        this.lastName = lastName;
        this.password = password;
        this.paymentMethods = paymentMethods;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.updatedAt = updatedAt;
        this.username = username;
        this._id = _id;
        this.name = name
    }

}
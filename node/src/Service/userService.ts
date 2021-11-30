import { userDao } from '../Dao/userDao';
import { User } from '../Validation/validation'
import { Response } from '../Utils/Response';
import * as jwt from 'jsonwebtoken'
import { post_response, get_response, error_response, fail_response } from '../Utils/Types'
import {data} from '../Utils/Types'
const response = new Response();
const user_validate = new User();
export class userService{
    
    constructor(public UserDao: userDao = new userDao()) { }
    public async user(body: data): Promise<post_response | get_response | error_response |fail_response>  {
        if( body.password !== 'Admin'){
            return response.error("password incorrect");
        }
        let data :any = await this.UserDao.findone(body.email)
        if (!data) {
            data = await this.UserDao.create_cart(body);
        }
        const token = jwt.sign({
            expiresIn: "3h",
            data: body.email
        }, 'secret');
        console.log("token", token);
        return response.Success(data,token,"login success")
    }

    public async getUser(id: string): Promise<post_response | get_response | error_response >  {
           let user = await this.UserDao.getUser(id);
        if (!user) {
            return response.notFound()
        }
        return response.Success(user, null,"sucess");
    }

    public async updateuser(id: string, body: data): Promise<post_response | get_response | error_response> {

            const user: any = await this.UserDao.getUser(id);
            const validation = user_validate.validateUser(body);
            if (validation.message){
                return response.badRequest(validation.message)
            }
            user.firstName = body.firstName;
            user.lastName = body.lastName;
            user.gender = body.gender;
            user.dob = body.dob;
            user.email = body.email
            user.address = body.address
            await this.UserDao?.updateuser(user._id, user)
        let result = await this.UserDao.getUser(id);
        if(!result){
            return response.notFound()
          }
        return response.Success(result,null,"sucess");
    }

}
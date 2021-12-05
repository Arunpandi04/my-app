import { userDao } from '../Dao/userDao';
import { User } from '../Validation/validation'
import { Response } from '../Utils/Response';
import * as jwt from 'jsonwebtoken'
import { post_response, get_response, error_response, fail_response } from '../Utils/Types'
import {signupData} from '../Utils/Types'
import {omit} from 'lodash'

const response = new Response();
const user_validate = new User();
export class userService{
    
    constructor(public UserDao: userDao = new userDao()) { }
    public async signup(body: signupData): Promise<post_response | get_response | error_response |fail_response>{
        let isUser :any = await this.UserDao.findone(body.email)
        if(!isUser){
            const data = await this.UserDao.create_cart(body);

            const token = jwt.sign({
                expiresIn: "3h",
                data: body.email
            }, 'secret');
            
            return response.Success(omit(data,'password'),token,"signup success")
        }else{
            return response.falied("userAlready exist")
        }
    }
    public async signin(body:any): Promise<post_response | get_response | error_response |fail_response>  {
        let data :any = await this.UserDao.findone(body.email)
        console.log("data",data,body.password)
        if(data.password===body.password){
            const token = jwt.sign({
                expiresIn: "3h",
                data: body.email
            }, 'secret');
            console.log("token",omit(data,'password'));
            return response.Success(omit(data,'password'),token,"signin success")
        }else{
            return response.falied("email or password is incorrect")
        }
    }

    public async getUser(id: string): Promise<post_response | get_response | error_response >  {
           let user = await this.UserDao.getUser(id);
        if (!user) {
            return response.notFound()
        }
        return response.Success(user, null,"sucess");
    }

    public async updateuser(id: string, body: signupData): Promise<post_response | get_response | error_response> {

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
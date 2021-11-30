import { Request, Response } from 'express';
import { userService } from '../Service/userService';
import { data } from '../Utils/Types'
import { post_response, get_response, error_response, fail_response } from '../Utils/Types'

const UserService =new userService();
export class userController{

    public async getUser(req: Request, res: Response): Promise<void>{
        const id :string= req.params.id;
         const data :post_response | get_response| error_response |fail_response=await UserService.getUser(id);
         res.status(data.statusCode).json(data);
    }

    public async login(req: Request, res: Response): Promise<void> {
        const  body : data= req.body
        const data :post_response | get_response| error_response |fail_response = await UserService.user(body);
        console.log("data--->",data)
        res.status(data.statusCode).json(data);
    }
    public async updateuser(req: Request, res: Response): Promise<void> {
        const id= req.params.id
        const body : data= req.body;
        const userdata :post_response | get_response| error_response |fail_response= await UserService.updateuser(id,body);
        res.status(userdata.statusCode).json(userdata);
    }
}
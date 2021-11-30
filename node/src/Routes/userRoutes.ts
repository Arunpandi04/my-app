import { Application } from 'express';
import { userController } from '../Controller/userController'
import { Auth } from '../Auth/Auth'
const Authorization = new Auth();
export class userRoutes {
 constructor(public UserController:userController=new userController()){}
     public userroutes(app: Application):void {
         console.log("routes");
         app.route('/user/:id').put(this.UserController.updateuser);
         app.route('/login').post(this.UserController.login)
         app.route('/user/:id').get(this.UserController.getUser);
         
    }
}
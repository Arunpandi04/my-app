import userModal from '../Modal/userModal';
import {signupData} from '../Utils/Types'

export class userDao {
    public async create_cart(body:signupData):Promise<object>{
        console.log("body",body.password);
        const result = new userModal({
            firstName: body.firstName,
            lastName: body.lastName,
            gender: body.gender ,
            dob: body.dob,
            address: body.address,
            email:body.email,
            password:body.password
          });
        return await result.save();
    }

    public async getUser(id:string):Promise<any>{
        return await userModal.findById(id).select("-password"); 
    }
    public async findone(data:string){
        return await userModal.findOne({email:data}); 
    }
    public async updateuser(id:string,data:signupData):Promise<object | null>{
       return await userModal.findOneAndUpdate({_id: id}, data).select("-password");
    }
}
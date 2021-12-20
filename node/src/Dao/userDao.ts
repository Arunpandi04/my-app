import userModal from '../Modal/userModal';
import {signupData} from '../Utils/Types'
// import { getRepository,getConnection } from "typeorm";
// import User from '../entity/user.entity'
// import Address from '../entity/address.entity';
// import post from '../entity/post.entity'
export class userDao {
    public async create_cart(body:any){
        console.log("body",body.password);
        // let connection = await getConnection();
        const result = new userModal({
            firstName: body.firstName,
            lastName: body.lastName,
            gender: body.gender ,
            dob: body.dob,
            address: body.address,
            email:body.email,
            password:body.password
          });

        
        //   const users = new User();
        //   const userRepo =connection.getRepository(User)
        //   return userRepo.save(body)
        return result.save()
    }

    public async getUser(id:string):Promise<any>{
        // let connection = await getConnection();
        // const userRepo =connection.getRepository(User)
        // return await userRepo.findOne({id},{ relations: ['posts'] }); 
        return userModal.findById(id)
    }
    public async findone(data:string){
        return await userModal.findOne({email:data}); 
    }
    public async updateuser(id:string,data:any):Promise<object | null>{
        // let connection = await getConnection();
        // const userRepo =connection.getRepository(User)
    //    return await userRepo.update({id}, data);
    // return await userModal.findByIdAndUpdate({})
    return await userModal.findOneAndUpdate({_id: id}, data);
    }
}
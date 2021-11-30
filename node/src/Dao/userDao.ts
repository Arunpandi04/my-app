import userModal from '../Modal/userModal';
import {data} from '../Utils/Types'
export class userDao {
    public async create_cart(body:data):Promise<object>{
        console.log("body",body);
        let data:Array<any>=[];
        data.push(body);
        const result = new userModal({
            firstName: "",
            lastName: "",
            gender: "" ,
            dob:"",
            address:"",
            email:body.email
          });
        return await result.save();
    }

    public async getUser(id:string):Promise<any>{
        return await userModal.findById(id); 
    }
    public async findone(data:string){
        return await userModal.findOne({email:data}); 
    }
    public async updateuser(id:string,data:data):Promise<object | null>{
       return await userModal.findOneAndUpdate({_id: id}, data);
    }
}
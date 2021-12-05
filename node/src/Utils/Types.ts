export interface post_response {
  success: boolean,
  statusCode: number,
  data: object | null,
  token : string,
} 
export interface get_response {
  success: boolean,
  statusCode: number,
  data: object | null,
  message:string
} 

export interface error_response{
  success: boolean;
  statusCode: number;
  data: null;
  errorMessage: string
}

export interface fail_response{
  success: boolean;
  statusCode: number;
  message: string;
}

export interface modal{
  _id:string,
  profile_picture: String,
  email_id:String,
  First_Name: String,
  Last_Name: String,
  Gender: String,
  Phone_Number:Number,
  Dateofbirth:Date
}

export interface Unauthorized{
    success: Boolean,
    statusCode: number,
    message: String,
};
  
export interface signupData{
    profilePicture:string,
    firstName:string,
    lastName:string,
    gender: string ,
    phoneNumber:number,
    dob:string,
    address:string,
  email: string,
  password:string
}
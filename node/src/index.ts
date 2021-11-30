import express from "express";
import * as bodyParser from "body-parser";
import {initialRoutes} from './Routes/index'
import cors  from "cors";
import  mongoose from 'mongoose';
import { promises } from "dns";

class App {

   public expressApp: express.Application;
   public mongoUrl: string = 'mongodb+srv://Arun_10d:Arun_10d@cluster0.2nl1h.mongodb.net/user?retryWrites=true&w=majority';

   public initialroutes:initialRoutes = new initialRoutes();;
   constructor() {
      this.expressApp = express();
      this.config();
      this.portSetup();
      this.initialroutes.initialRoutes(this.expressApp)
      this.mongoSetup();
   }

   private config(): void {
      this.expressApp.use(bodyParser.json());
      this.expressApp.use(bodyParser.urlencoded({ extended: false }));
      this.expressApp.use(cors({ credentials: true, origin: true , }));
   }

   private async mongoSetup(): Promise<void> {
    await mongoose.connect(this.mongoUrl, {useCreateIndex: true,useUnifiedTopology: true,
    useFindAndModify: false, useNewUrlParser: true}).then(() => console.log('mongoDB connected...'));
   }

   private portSetup() :void{
    const PORT = 3000 || "";

    this.expressApp.listen(PORT, () => {
       console.log('Express server listening on port ' + PORT);
    });
   }

}
export default new App().expressApp;
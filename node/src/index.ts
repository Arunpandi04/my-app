import express from "express";
import * as bodyParser from "body-parser";
import {initialRoutes} from './Routes/index'
import cors  from "cors";
import  mongoose from 'mongoose';
import {cornRoute} from './Routes/cornRoute'
import * as cron from 'node-cron'
import { createConnection } from 'typeorm';
import config from './config'
import 'reflect-metadata';
require('dotenv').config();
class App {

   public expressApp: express.Application;
   public mongoUrl: string = 'mongodb+srv://Arun_10d:Arun_10d@cluster0.2nl1h.mongodb.net/user?retryWrites=true&w=majority';

   public initialroutes:initialRoutes = new initialRoutes();;
   constructor() {
      this.expressApp = express();
      this.config();
      this.portSetup();
      this.initialroutes.initialRoutes(this.expressApp)
      this.routes(),
      this.mongoSetup();
      this.expressApp.use("/api",cornRoute)
   }

   private config(): void {
      this.expressApp.use(bodyParser.json());
      this.expressApp.use(bodyParser.urlencoded({ extended: false }));
      this.expressApp.use(cors({ credentials: true, origin: true , }));
   }

   private async mongoSetup(){
   //  await mongoose.connect(this.mongoUrl, {useCreateIndex: true,useUnifiedTopology: true,
   //  useFindAndModify: false, useNewUrlParser: true}).then(() => console.log('mongoDB connected...'));
   try {
      await createConnection(config).then(()=>console.log("DataBase Connected"))
    } catch (error) {
      console.log('Error while connecting to the database', error);
      return error;
    }
   }
   private routes():void{
      cron.schedule('5 * * * * *', () => {
  //console.log('running a task every minute at the 5th second');
  
});
      
    }
   private portSetup() :void{
    const PORT = 3000 || "";

    this.expressApp.listen(PORT, () => {
       console.log('Express server listening on port ' + PORT);
    });
   }

}
export default new App().expressApp;
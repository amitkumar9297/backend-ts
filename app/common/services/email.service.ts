import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import createHttpError from "http-errors";
import { loadConfig } from "../helper/config.helper";

loadConfig();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sukumar.75way@gmail.com",
    pass: "mykv wgde xiks ctpm",
  },
});

export const sendEmail = async (mailOptions: Mail.Options): Promise<any> => {
  try {
      console.log("hello from mail block");
     const res=await transporter.sendMail(mailOptions);
     console.log("mail res",res);
     return res;
  } catch (error: any) {
    createHttpError(500, { message: error.message });
  }
};
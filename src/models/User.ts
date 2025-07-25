import { Schema, model, Document } from 'mongoose';

export enum Role {
  ADMIN = 'admin',
  SALES = 'sales',
  MANAGER = 'manager',
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.SALES,
    },
  },
  { timestamps: true }
);

export default model<IUser>('User', userSchema);

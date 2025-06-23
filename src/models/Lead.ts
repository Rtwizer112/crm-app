import { Schema, model, Document, Types } from 'mongoose';

export interface ILead extends Document {
  name: string;
  email: string;
  phone?: string;
  owner: Types.ObjectId;
  status: 'new' | 'contacted' | 'qualified' | 'lost' | 'won';
  notes?: string;
}

const leadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'lost', 'won'],
      default: 'new',
    },
    notes: String,
  },
  { timestamps: true }
);

export default model<ILead>('Lead', leadSchema);

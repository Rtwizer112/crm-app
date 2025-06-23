import { Request, Response } from 'express';
import Lead from '../models/Lead';

export const createLead = async (req: Request, res: Response) => {
  try {
    const lead = await Lead.create({ ...req.body, owner: req.user!.id });
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create lead', error: err });
  }
};

export const getLeads = async (req: Request, res: Response) => {
  try {
    const leads = await Lead.find({ owner: req.user!.id });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch leads', error: err });
  }
};

export const updateLead = async (req: Request, res: Response) => {
  try {
    const lead = await Lead.findOneAndUpdate(
      { _id: req.params.id, owner: req.user!.id },
      req.body,
      { new: true }
    );
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update lead', error: err });
  }
};

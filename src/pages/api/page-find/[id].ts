import data from '../../../../db.json';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const response = data.productPage.find((c) => c._id === req.query.id);
      return res.status(200).json(response);
    } catch (error) {
      const result = error as Error;
      return res.status(400).json(result.message);
    }
  }
}

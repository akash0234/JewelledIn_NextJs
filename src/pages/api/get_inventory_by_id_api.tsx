// pages/api/get_inventory_by_id_api/[invcod].tsx
import axios from 'axios';

import { NextApiRequest, NextApiResponse } from 'next/';

import runMiddleware from './cors';

// Adjust the import path based on your project structure
import { Prdmst } from 'src/types/inventory/InventoryListType';


interface ErrorResponse {
  error: string;
}
async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { invcod } = req.query as { invcod: string };

  try {
    const response = await axios.get<Prdmst[] | ErrorResponse>(`http://116.73.25.127:8069/WebService.asmx/GetJsonDATA?QueryNo=12&co_code=A&invcode=${invcod}&opncl=D&co_id=yj jewellers&b_code=341&txntyp=IS&docod=XX&docno=544&user_id=1&acode=XX&sessionId=sahil&JSONStringFormat1=[{}]`);
    if ('error' in response.data) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.status(200).json(response.data);
    }
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

}

export default async function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await runMiddleware(req, res, handler);
}


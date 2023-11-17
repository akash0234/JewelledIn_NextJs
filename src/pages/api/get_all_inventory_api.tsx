// pages/api/[get_all_inventory_api].tsx
import axios from 'axios';

import { NextApiRequest, NextApiResponse } from 'next/';

import runMiddleware from './cors';

// Adjust the import path based on your project structure
import { Prdmst } from 'src/types/inventory/InventoryListType';

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const response = await axios.get('http://116.73.25.127:8069/WebService.asmx/GetJsonDATA?QueryNo=12&co_code=A&invcode=&opncl=D&co_id=yj jewellers&b_code=341&txntyp=IS&docod=XX&docno=544&user_id=1&acode=XX&sessionId=sahil&JSONStringFormat1=[{}]');
    const data: Prdmst[] = response.data.prdmst;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default async function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await runMiddleware(req, res, handler);
}
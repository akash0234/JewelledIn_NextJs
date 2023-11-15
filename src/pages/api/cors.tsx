import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next/';

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
});

export default function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
): Promise<void> {


    return new Promise((resolve, reject) => {
        cors(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(handler(req, res));
        });
    });
}
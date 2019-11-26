import { Request, Response } from 'express';
import apis from './apis';

export class Routes {
    constructor() {
    }

    public routes(app): void {          
        app.use('/api', apis)

        app.route('/health')
        .get((req: Request, res: Response) => {         
            res.status(200).send({
                status: 'up'
            })
        })  
    }
}
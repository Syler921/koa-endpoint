import Koa from 'koa';
import Router from '@koa/router';
import HealthController from './controller/HealthController';
import CheckDataController from './controller/CheckDataController'

const swaggerUi = require('swagger-ui-koa');
import swaggerSpec from '../lib/swagger';

export default async (app: Koa) => {
    const router = new Router();

    router.get('/health', HealthController.ok);
    router.get('/swagger', swaggerUi.setup(swaggerSpec));
    router.post('/checkData',CheckDataController.checkData)

    app.use(router.routes());
    app.use(router.allowedMethods());
}

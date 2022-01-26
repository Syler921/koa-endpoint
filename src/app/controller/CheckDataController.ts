import { DefaultContext } from 'koa';

export default class CheckDataController {

    /**
     * @swagger
     * /checkData:
     *  post:
     *      tags:
     *          - Check input data and return status
     *      summary: First name needs to be at least 5 char string.
     *      responses:
     *          200:
     *              description: Data check on success
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: json
     *                      example:
     *                          {
     *                              "status": "success",
     *                              "message": "Data verification successful."
     *                          }
     *          400:
     *              description: Data Check failed
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: json
     *                      example:
     *                          {
     *                              "status": "failed",
     *                              "message": "Passed data meets the requirements."
     *                          }
     */
    public static async checkData(ctx: DefaultContext) {
        
        let status: string = 'failed';
        let statusCode: number = 400;
        let message = "Data check failed!"
        const postParams: any = ctx.request.body;
        
        if ( 
            typeof (postParams.firstName) !== "undefined" && 
            typeof (postParams.firstName) == "string" && 
            postParams.firstName.length > 4 
        ) {
            status = "success";
            statusCode = 200;
            message = "Data verification successful."
        }
        
        ctx.status = statusCode;
        ctx.body = {
            status: status,
            message: message
          };
    }
}

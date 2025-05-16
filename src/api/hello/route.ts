import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http';
import { Modules } from '@medusajs/framework/utils';
import { HELLO_MODULE } from '../../modules/hello';
import HelloModuleService from '../../modules/hello/service';

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
	const helloModuleService: HelloModuleService =
		req.scope.resolve(HELLO_MODULE);

	const my_custom = await helloModuleService.createCustoms({
		name: 'test',
	});

	res.json({ my_custom });
};

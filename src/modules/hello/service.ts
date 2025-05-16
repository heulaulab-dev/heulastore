import { MedusaService } from '@medusajs/framework/utils';
import Custom from './models/my-custom';

class HelloModuleService extends MedusaService({
	Custom,
}) {}

export default HelloModuleService;

import type { SubscriberConfig, SubscriberArgs } from '@medusajs/framework';
import { syncBrandToCmsWorkflow } from '../workflows/sync-brands-from-cms';

export default async function brandCreatedHandler({
	event: { data },
	container,
}: SubscriberArgs<{ id: string }>) {
	await syncBrandToCmsWorkflow(container).run({
		input: data,
	});
}

export const config: SubscriberConfig = {
	event: 'brand.created',
};

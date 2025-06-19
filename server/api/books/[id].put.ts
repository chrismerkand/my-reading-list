import { useDB } from '../../db';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
	const { id } = event.context.params!;
	const body = await readBody(event);
	const db = await useDB();
	await db.run('UPDATE books SET is_read = ? WHERE id = ?', body.is_read, id);
	return { success: true };
});

import { useDB } from '../../db';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
	const { id } = event.context.params!;
	const db = await useDB();
	await db.run('DELETE FROM books WHERE id = ?', id);
	return { success: true };
});

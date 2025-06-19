import { useDB } from '../../db';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const db = await useDB();
	const result = await db.run(
		'INSERT INTO books (title, author, is_read) VALUES (?, ?, ?)',
		body.title,
		body.author,
		0,
	);
	return { id: result.lastID };
});

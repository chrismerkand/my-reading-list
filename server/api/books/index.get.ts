import { useDB } from '../../db';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
	const db = await useDB();
	const books = await db.all('SELECT * FROM books');
	return books;
});

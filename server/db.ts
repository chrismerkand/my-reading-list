import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const useDB = async () => {
	const db = await open({
		filename: './my-reading-list.sqlite',
		driver: sqlite3.Database,
	});
	return db;
};

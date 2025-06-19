<template>
	<div>
		<UButton to="/add-book">Add Book</UButton>
		<div class="grid gap-4 mt-4">
			<BookListItem v-for="book in books" :key="book.id" :book="book" @toggle="toggleStatus" @delete="deleteBook" />
		</div>
	</div>
</template>

<script setup>
const { data: books, refresh } = await useFetch('/api/books');

const toggleStatus = async (book) => {
	await $fetch(`/api/books/${book.id}`, {
		method: 'PUT',
		body: { is_read: book.is_read ? 0 : 1 },
	});
	refresh();
};

const deleteBook = async (id) => {
	await $fetch(`/api/books/${id}`, { method: 'DELETE' });
	refresh();
};
</script>

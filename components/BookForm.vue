<template>
	<UForm :state="state" @submit="submit">
		<UInput v-model="state.title" placeholder="Title" required />
		<UInput v-model="state.author" placeholder="Author" required />
		<UButton type="submit">Add Book</UButton>
	</UForm>
</template>

<script setup>
const state = reactive({
	title: '',
	author: '',
});

const emit = defineEmits(['submitted']);

const submit = async () => {
	await $fetch('/api/books', {
		method: 'POST',
		body: state,
	});

	emit('submitted');
};
</script>

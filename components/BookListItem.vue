<template>
	<UCard>
		<div class="flex justify-between items-center">
			<div>
				<p class="font-bold">{{ book.title }}</p>
				<p class="text-sm text-gray-500">{{ book.author }}</p>
				<p>Status: {{ status ? 'Read' : 'Unread' }}</p>
			</div>
			<div class="flex gap-2 items-center">
				<USwitch v-model="status" @change="updateStatus" />
				<UButton color="red" @click="$emit('delete', book.id)">Delete</UButton>
			</div>
		</div>
	</UCard>
</template>

<script setup>
const props = defineProps({
	book: {
		type: Object,
		required: true,
	},
});

defineEmits(['delete']);

const status = ref(!!props.book.is_read);

const updateStatus = async () => {
	try {
		await $fetch(`/api/books/${props.book.id}`, {
			method: 'PUT',
			body: { is_read: status.value },
		});
	} catch (e) {
		console.error('Failed to update status', e);
		// Optional: revert switch if failed
		status.value = !status.value;
	}
};
</script>

<template>
	<BookForm @submitted="navigateTo('/')" />
</template>

<script setup>
const router = useRouter();
const navigateTo = (path) => router.push(path);
</script>

<script setup>
	import { ref } from 'vue'

	defineProps({
		websites: Array
	})
</script>

<template>
	<div class="mt-14 px-8">
		<h1 class="text-4xl text-center underline decoration-red-500 tracking-tight uppercase text-gray-800 font-bold">
			Discover Websites
		</h1>

		 <div class="my-8 grid gap-x-8 grid-cols-3 md:grid-cols-3 lg:grid-cols-6 m">
	        <a v-for="website in websites" :href="website.url" class="mx-auto">
	            <img :src="'/src/assets/img/'+website.img" alt="" class="h-40 w-40 rounded-full mb-2 ring ring-gray-400/30 hover:ring-red-500">
	            <p class="text-sm font-medium md:text-lg md:text-gray-700 tracking-tight text-center">
	            {{ website.name }}
	        	</p>
	        </a>
	    </div>
	</div>
</template>
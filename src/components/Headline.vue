<script setup>
	import { ref } from 'vue'

	const websites = ref([
		"Facebook",
		"Twitter",
		"Google",
		"Youtube",
		"AirBnb",
		"Instagram",
		"TikTok",
		"Amazon",
		"NewEgg",
		"Reddit",
		"MySpace",
		"Github",
		"Wikipedia",
		"Netflix",
		"LinkedIn",
		"Twitch",
		"Discord",
		"Qoura",
		"StackOverflow",
		"Booking",
		"Apple",
		"Yahoo",
		"Weather",
		"Twitter",
		"Google",
		"Youtube",
		"AirBnb",
		"Instagram",
		"TikTok",
		"Amazon",
		"NewEgg",
		"Reddit",
		"MySpace",
		"Yahoo",
		"Weather",
		"Twitter",
		"Google",
		"Youtube",
		"TikTok",
		"Amazon",
		"NewEgg",
		"Reddit",
		"MySpace",
		"Yahoo",
		"Weather",
		"Twitter",
		"Google",
		"Youtube",
		"MySpace",
		"Yahoo",
		"Weather",
		"Twitter",
		"Google",
		"Youtube",
		"TikTok",
		"TikTok",
		"Amazon",
		"NewEgg",
		"Reddit",
		"MySpace",
		"Yahoo",
		"Weather",
	])
</script>
<template>
	<div class="md:h-80 border-b border-red-400 mb-4 flex relative overflow-hidden bg-zinc-100 shadow-sm">
    <div class="px-2 py-8 md:px-14 md:py-8 lg:px-12 lg:py-8 w-full md:w-4/6 lg:w-2/4">
        <h1 class="tracking-tight text-center text-gray-800 font-extrabold text-4xl md:text-4xl lg:text-5xl md:text-left mb-3"><span class="text-red-700"> Welcome</span> to Awesome Website</h1>
        <h1 class="md:text-1xl lg:text-2xl md:text-left text-center font-light tracking-tight mb-8 text-lg text-gray-700">Search and discover your favorite websites</h1>

        <div class="group relative">
            <div class="absolute left-12 mx-auto w-14 inset-y-1 text-gray-700 focus-within:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
        	<input type="search" name="" placeholder="Search for you favorite website..." class="pl-10 pr-4 py-2 rounded-lg outline-none w-80 block mx-auto lg:h-12 md:w-4/5 lg:w-full text-gray-800 ring-1 ring-slate-500 focus:ring-2 focus:ring-red-500 focus:outline-none shadow-sm">
        </div>
    </div>
    <div class="hidden md:inline">
        <div class="absolute top-0 overflow-hidden md:w-3/5">
	        <div class="animate-scroll-slow lg:animate-scroll-fast">
	            <div class="flex flex-wrap">
	                <p v-for="website in websites" class="px-2 py-0 mr-3 text-zinc-900 text-md font-lighter opacity-75 tracking-widest bg-gray-200 mb-2 pointer-events-none">
	                    {{ website }}
	                </p>
	            </div>
	            <div class="flex flex-wrap">
	                <p v-for="website in websites" class="px-2 py-0 mr-3 text-zinc-900 text-md font-lighter opacity-75 tracking-widest bg-gray-200 mb-2 pointer-events-none">
	                    {{ website }}
	                </p>
	            </div>
	        </div>
        </div>
    </div>
</div>
</template>
<script setup>
	import { ref } from 'vue'

	defineProps({
	  title: String
	})

	const showMenu = ref(false)
	const menus = ref(['About', 'Features', 'Sign In'])
</script>

<template>
	<div class="px-2 py-4 md:px-8 flex items-center justify-between border-b border-gray-300 shadow-sm bg-red-700">
    <div class="flex items-center">
        <a href="/" class="flex items-center">
            <img src="../assets/vue.svg" alt="vue logo" class="mr-2">
            <h1 class="hidden md:inline font-semibold text-lg leading-tight text-white mr-6">
            {{ title }}
        	</h1>
        </a>
        <div class="relative flex items-center">
            <div class="absolute ml-2 text-gray-700 focus-within:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <input type="search" name="" placeholder="Search websites" class="pr-3 pl-10 py-4 text-sm h-6 w-64 lg:h-8 lg:w-72 rounded-md outline-none text-gray-800 border border-gray-100 shadow-md">
        </div>
    </div>
    
    <div class="lg:hidden">
        <button @click="showMenu = !showMenu" class="px-1 font-bold flex justify-between text-black w-full">
            <svg v-show="!showMenu" class="w-6 h-6 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-show="showMenu" class="w-6 h-6 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </div>
    <nav class="hidden lg:flex">
        <a href="/" v-for="menu in menus" class="mr-5 font-semibold text-white border-b border-red-500">
        {{ menu }}
    	</a>
    </nav>
  </div>
  	<Transition enter-active-class="duration-300 ease-out"
	    enter-from-class="transform opacity-0"
	    enter-to-class="opacity-100"
	    leave-active-class="duration-100 ease-in"
	    leave-from-class="opacity-100"
	    leave-to-class="transform opacity-0">
    <nav class="lg:hidden" v-show="showMenu">
        <div class="flex flex-col bg-gray-100">
            <a href="{{ url }}}" v-for="menu in menus" class="py-3 text-gray-800 text-center font-semibold text-md border-b border-gray-200">{{ menu }}</a>
        </div>
    </nav>
    </Transition>
</template>
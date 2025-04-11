<script lang="ts">
	let { children } = $props();
	import "../app.css";
</script>

<nav class="flex justify-center gap-2 mt-3">
	<a class="bg-blue-200 hover:bg-blue-300 font-bold py-2 px-4 rounded" href="/">
		Widget
	</a>
	<a
		class="bg-blue-200 hover:bg-blue-300 font-bold py-2 px-4 rounded"
		href="/jsop"
	>
		JSOP
	</a>
</nav>

{@render children()}

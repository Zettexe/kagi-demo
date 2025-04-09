<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/">Widget</a>
	<a href="/jsop">JSOP</a>
</nav>

{@render children()}

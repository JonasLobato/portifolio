<script>
	let { Class = 'desligado' } = $props();
</script>

<div class="quadrado {Class}">
	{#if Class === 'desligado'}
		<p>Desligado</p>
	{:else}
		<p>Ligado</p>
	{/if}
</div>

<style>
	.quadrado {
		width: 100px;
		height: 100px;
		/* background-color: black; */
	}
	.ligado {
		background-color: green;
	}
	.desligado {
		background-color: red;
	}
</style>

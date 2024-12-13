<script>
	import { infoPortifolio } from '$lib/portifolio/body/Works';
</script>

<section class="portfolio container">
	<div class="portfolio-header">
		<h1>/work.</h1>
		<p>Trabalhos selecionados que realizei no passado.</p>
	</div>

	<div id="portfolioFlex" class="portfolio-flex">
		{#each infoPortifolio as { image, dir, nome, alt, copywrite }}
			<div class="portfolio-item">
				<img src="{image.dir + image.nome}.png" {alt} />
				<h3>{copywrite.title}</h3>
				<a href={copywrite.link.href} target="_blank"> {copywrite.link.text}</a>
			</div>
		{/each}
	</div>
</section>

<style>
	.portfolio {
		padding: 40px;
		text-align: center;
	}

	.portfolio-header h1 {
		font-size: 2.5rem;
		font-weight: bold;
		color: #444;
		margin-bottom: 10px;
	}

	.portfolio-header p {
		font-size: 1rem;
		color: #555;
	}

	.portfolio-flex {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 30px;
		justify-content: center;
	}

	.portfolio-item {
        border: red 1px solid;
		max-width: 250px;
		background-color: #fff;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		padding: 20px;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		flex: 1 1 calc(25% - 20px); /* Define um tamanho flexível */
		border-radius: 10px;
	}

	.portfolio-item:hover {
		transform: translateY(-10px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.portfolio-item img {
		width: 100%;
		height: auto;
		margin-bottom: 15px;
        border: red 1px solid;
	}

	.portfolio-item h3 {
		font-size: 1.2rem;
		color: #222;
		margin-bottom: 5px;
	}

	.portfolio-item a {
		color: #0073e6;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.portfolio-item a:hover {
		text-decoration: underline;
	}
</style>
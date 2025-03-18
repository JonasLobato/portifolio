<script>
	import { infoPortifolio } from '$lib/portifolio/body/Works';
</script>

<section class="portfolio container">
	<div class="portfolio-header">
		<h1>/work.</h1>
		<p>Trabalhos selecionados que realizei no passado.</p>
	</div>

	<div class="portfolio-flex">
		{#each infoPortifolio as { image, dir, nome, alt, copywrite }}
			<div class="portfolio-item">
				<img src="{image.dir + image.nome}.png" {alt} />
				<a href={copywrite.link.href} target="_blank">{copywrite.title}</a>
			</div>
		{/each}
	</div>
</section>

<style>
	@media (min-width: 300px) {
		.portfolio {
			display: flex;
			flex-direction: column;
			text-align: center;
			gap: 20px;
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
			gap: 20px;
		}

		.portfolio-item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 25px;
			max-width: 350px;
			height: auto;
			background-color: #fff;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
			padding: 10px;
			border-radius: 10px;
			overflow: hidden;
			transition:
				transform 0.2s ease,
				box-shadow 0.2s ease;
			/* Define um tamanho flexível */
			flex: 1 1 calc(30% - 20px);
		}

		.portfolio-item:hover {
			transform: translateY(-10px);
			box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		}

		.portfolio-item img {
			width: 100%;
			height: auto;
			margin-bottom: 15px;
		}

		.portfolio-item img {
			object-fit: cover;
			transition: transform 0.8s;
			height: 100%;
		}

		.portfolio-item:hover img {
			transform: scale(1.5);
		}

		.portfolio-item a {
			font-size: 1.2rem;
			font-weight: bold;
			color: #222;
			margin-bottom: 5px;
			font-size: 0.9rem;
		}

		.portfolio-item a:hover{
			color: #e0460d;
		}

		.portfolio-flex {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	@media (min-width: 768px) {
		.portfolio-flex {
			display: grid;
			grid: auto-flow / 1fr 1fr 1fr;
			justify-items: center;
		}
		.portfolio-item a{
			font-size: 0.9rem;
		}
	}
	@media (min-width: 1024px) {
		.portfolio-flex {
			display: grid;
			grid: auto-flow / 1fr 1fr 1fr;
			justify-items: center;
		}
		.portfolio-item a{
			font-size: 1rem;
		}
	}
</style>

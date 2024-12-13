<script>
	const infoPortifolio = [
		{
			image: 'logo1.png',
			alt: 'imagem logo',
			h3: 'Cinema',
			href: 'google.com',
			textContent: 'nome do link projeto'
		},
		{
			image: 'logo2.png',
			alt: 'imagem logo',
			h3: 'Cinema',
			href: 'google.com',
			textContent: 'nome do link projeto'
		},
		{
			image: 'logo3.png',
			alt: 'imagem logo',
			h3: 'Cinema',
			href: 'google.com',
			textContent: 'nome do link projeto'
		}
	];

	const AZZZ = document.getElementById('portfolioFlex');

	// infoPortifolio.forEach((infoPortifolio) => {
	// 	const portfolioItem = document.createElement('div');
	// 	portfolioItem.className = 'portfolio-item';

	// 	const img = document.createElement('img');
	// 	img.src = infoPortifolio.image;
	// 	img.alt = infoPortifolio.alt;

	// 	const h3 = document.createElement('h3');
	// 	h3.textContent = infoPortifolio.h3;

	// 	const link = document.createElement('a');
	// 	link.href = infoPortifolio.href;
	// 	link.target = '_blank';
	// 	link.textContent = infoPortifolio.textContent;

	// 	portfolioItem.appendChild(img);
	// 	portfolioItem.appendChild(h3);
	// 	portfolioItem.appendChild(link);

	// 	AZZZ.appendChild(portfolioItem);
	// });
</script>

<section class="portfolio container">
	<div class="portfolio-header">
		<h1>/work.</h1>
		<p>Trabalhos selecionados que realizei no passado.</p>
	</div>

	<div id="portfolioFlex" class="portfolio-flex">
		<div class="portfolio-item">
			<img src="logo1.png" alt="hellotax logo" />
			<h3>hellotax</h3>
			<a href="https://app.hellotax.com" target="_blank">app.hellotax.com</a>
		</div>

		<div class="portfolio-item">
			<img src="logo2.png" alt="Conectar logo" />
			<h3>Conectar</h3>
			<a href="google" target="_blank">conectar.com</a>
		</div>

	</div>
</section>

<div class="section-about-me container">
	<div class="islands">
		<div>
			<span>Sobre</span>
		</div>
		<div>
			<h2 class="trajectory">
				Olá, Seja Bem-Vindo(a)!
				<br />Meu nome é Jonas Lobato, sou formado em Matemática pela Universidade Federal do Pará
				(UFPA).
				<br /><br />Atualmente, estou na área de TI, graduando Tecnologia em Análise e
				desenvolvimento de Sistemas, pela (UNAMA). Além disso, estou aprendendo, tecnologias como
				HTML, CSS e Javascript.
				<br /><br />Estou aberto a novas experiências e sempre em busca de aprendizado contínuo. Se
				tiver alguma dúvida, estou à disposição! 🌟📚💻
				<br /><br />e-mail: jonaslobat50@gmail.com
				<br />GitHub:
				<a target="_blank" rel="noreferrer noopener" href="https://github.com/JonasLobato"
					>https://github.com/JonasLobato</a
				>
			</h2>
		</div>
	</div>
</div>

<style>
	/* Configuração geral */
	section {
		border: 1px solid red;
	}
	.portfolio {
		padding: 40px;
		/* max-width: 1200px; */
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
		border: 1px solid red;
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		margin-top: 30px;
		justify-content: center;
	}

	.portfolio-item {
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
		width: 80px;
		height: auto;
		margin-bottom: 15px;
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

	/* ----------------------------------------------------- */
	.section-about-me {
		/* border: 1px red solid; */
		line-height: 1.6;
	}
	.islands {
		/* width: 100%; */
		height: 400px;
		padding: 20px;
		background-color: silver;
		margin-bottom: 1rem;
		border-radius: 10px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	}

	.islands span {
		display: inline-block;
		font-size: 24px;
		font-weight: bold;
		background: rgba(255, 255, 255, 0.2);
		padding: 5px 15px;
		border-radius: 8px;
		margin-bottom: 15px;
	}

	.trajectory {
		font-size: 16px;
		color: black;
		margin: 20px 0 0;
		text-align: left;
	}

	.trajectory a {
		color: black;
		text-decoration: underline;
	}

	.trajectory a:hover {
		color: #ffd740;
	}

	.trajectory br {
		margin: 10px 0;
	}

	@media (min-width: 300px) {
		.section-about-me {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	@media (min-width: 768px) {
	}
</style>

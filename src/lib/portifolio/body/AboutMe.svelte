<script>
	import { onMount } from 'svelte';
	let currentIndex = 0;
	const slides = [
	  {
		title: "Minha Jornada no Desenvolvimento",
		content: "Comecei minha trajetória no desenvolvimento com um grande interesse por tecnologia e programação. Desde os primeiros projetos, fui aprimorando minhas habilidades e explorando novas soluções."
	  },
	  {
		title: "Experiência com Regras de Negócio",
		content: "Atuando como Agente de Sistemas na Stone, adquiri profundo conhecimento sobre regras de negócio em diferentes segmentos, auxiliando na implementação e suporte de sistemas complexos."
	  },
	  {
		title: "Trabalhando com Sistemas ERP",
		content: "Tenho experiência em integração e suporte de sistemas ERP, garantindo que os clientes utilizem a tecnologia de forma eficiente para otimizar seus processos."
	  },
	  {
		title: "Especialização em Front-End",
		content: "Minha paixão pelo desenvolvimento Front-End me levou a dominar tecnologias como <strong>Svelte</strong>, <strong>JavaScript</strong> e práticas modernas para criar interfaces responsivas e dinâmicas."
	  }
	];
  
	function nextSlide() {
	  currentIndex = (currentIndex + 1) % slides.length;
	}
  
	function prevSlide() {
	  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	}
  
	onMount(() => {
	  const interval = setInterval(nextSlide, 5000);
	  return () => clearInterval(interval);
	});
  </script>
  
  <div class="carousel">
	{#each slides as slide, i}
	  <div class="slide" style="transform: translateX({-100 * currentIndex}%);">
		<h2>{slide.title}</h2>
		<p>{slide.content}</p>
	  </div>
	{/each}
	<div class="controls">
	  <button class="button" onclick={prevSlide}>❮</button>
	  <button class="button" onclick={nextSlide}>❯</button>
	</div>
  </div>
  
  <style>
	.carousel {
	  display: flex;
	  justify-content: space-between;
	  overflow: hidden;
	  position: relative;
	  /* width: 90%; */
	  max-width: 800px;
	  margin: 20px auto;
	  background: white;
	  /* padding: 20px; */
	  border-radius: 10px;
	  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	  border: 1px solid red;
	}
	
	.slide {
		flex: 0 0 100%;
		transition: transform 0.5s ease-in-out;
		padding: 10px;
		text-align: center;
		border: 1px solid black;
	}
	
	.controls {
		border: 1px blue solid;
	  position: absolute;
	  top: 50%;
	  width: 100%;
	  display: flex;
	  justify-content: space-between;
	  transform: translateY(-50%);
	}
  
	.button {
	  background: orange;
	  color: white;
	  border: none;
	  padding: 10px;
	  cursor: pointer;
	  border-radius: 5px;
	  transition: background 0.3s;
	}
  
	.button:hover {
	  background: darkorange;
	}
  
	@media (max-width: 300px) {
	  .carousel {
		padding: 10px;
		font-size: 0.8em;
	  }
  
	  .button {
		padding: 5px;
	  }
	}
  
	@media (min-width: 768px) {
	  .carousel {
		max-width: 600px;
	  }
  
	  .button {
		padding: 8px;
	  }
	}
  
	@media (min-width: 1024px) {
	  .carousel {
		max-width: 800px;
	  }
  
	  .slide {
		padding: 20px;
	  }
	}
  </style>
  




<!-- <div class="section-about-me container">
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
h2{
		width: 20ch;
		font-family: monospace;
		text-wrap: nowrap;
		overflow: hidden;
		animation: typing 2s steps(20) infinite alternate-reverse;
	}
	@keyframes typing {
		from{
			width: 0ch;
		}
	}
	@media (max-width: 300px) {
		.section-about-me {
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

		.section-about-me {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	@media (max-width: 300px) {}
	@media (min-width: 768px) {}
	@media (min-width: 1024px) {}
</style> -->

<script>
	import { onMount } from "svelte";
	let activeIndex = 0;
	const slides = [
	  { title: "#1", subtitle: "Create Quality", highlight: "Content", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
	  { title: "#2", subtitle: "Use Relevant", highlight: "Keywords", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
	  { title: "#3", subtitle: "Promote Your", highlight: "Post", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
	  { title: "#4", subtitle: "Always", highlight: "Monitoring", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
	];
  
	function nextSlide() {
	  activeIndex = (activeIndex + 1) % slides.length;
	}
  
	function prevSlide() {
	  activeIndex = (activeIndex - 1 + slides.length) % slides.length;
	}
  
	onMount(() => {
	  const interval = setInterval(nextSlide, 5000);
	  return () => clearInterval(interval);
	});
  </script>
  
  <style>
	.carousel {
	  display: flex;
	  overflow: hidden;
	  position: relative;
	  width: 100%;
	  max-width: 900px;
	  margin: auto;
	}
	.slides {
	  display: flex;
	  transition: transform 0.5s ease-in-out;
	}
	.slide {
	  min-width: 100%;
	  padding: 20px;
	  background: white;
	  color: black;
	  border-radius: 10px;
	  text-align: center;
	}
	.slide h1 {
	  font-size: 2rem;
	}
	.slide h2 {
	  font-size: 1.5rem;
	  font-weight: bold;
	  color: orange;
	}
	.controls {
	  display: flex;
	  justify-content: space-between;
	  position: absolute;
	  top: 50%;
	  width: 100%;
	  transform: translateY(-50%);
	}
	.button {
	  background: orange;
	  color: white;
	  border: none;
	  padding: 10px;
	  cursor: pointer;
	  border-radius: 5px;
	}
  </style>
  
  <div class="carousel">
	<div class="slides" style="transform: translateX(-{activeIndex * 100}%);">
	  {#each slides as slide}
		<div class="slide">
		  <h1>{slide.title}</h1>
		  <h2>{slide.subtitle} <span style="color: black;">{slide.highlight}</span></h2>
		  <p>{slide.text}</p>
		</div>
	  {/each}
	</div>
	<div class="controls">
	  <button class="button" on:click={prevSlide}>&#9665;</button>
	  <button class="button" on:click={nextSlide}>&#9655;</button>
	</div>
  </div>
  




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
	@media (min-width: 768px) {
	}
	@media (min-width: 1024px) {
	}
</style> -->

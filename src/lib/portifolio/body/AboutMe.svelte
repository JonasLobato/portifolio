<div class="container section-about-me">
	<div class="islands">
		<div>
			<span>Sobre</span>
		</div>
		<div>
			<h2>
				Olá, Seja Bem-Vindo(a)!
				<br />Meu nome é Jonas Lobato, sou formado em Matemática pela Universidade Federal do Pará
				(UFPA).
				<br /><br />Atualmente, estou na área de TI, graduando Tecnologia em Análise e
				desenvolvimento de Sistemas, pela (UNAMA). Além disso, estou aprendendo, tecnologias como
				HTML, CSS e Javascript.
				<br /><br />Estou aberto a novas experiências e sempre em busca de aprendizado contínuo. Se
				tiver alguma dúvida, estou à disposição! 🌟📚💻
				<br /><br />e-mail: jonaslobat50@gmail.com
				<br /><a href="https://github.com/JonasLobato">GitHub: https://github.com/JonasLobato</a>
			</h2>
		</div>
	</div>
</div>

<style>
	.container {
		border: 1px blue solid;
	}
	.section-about-me {
		h2 {
			font-size: 12px;
			border: 1px red solid;
			margin: 25px;
		}
	}
	.islands {
		width: 100%;
		height: 400px;
		background-color: silver;
		margin-bottom: 1rem;
		border-radius: 10px;
	}
	span {
		font-size: 20px;
		font-weight: 500;
	}

	@media (min-width: 300px) {
		.container-position {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.profile-wrapped {
			display: inline-flex;
			flex-direction: column;
			align-items: center;
			position: relative;
			top: -125px;
			gap: 1rem;
			& .profile-avatar {
				width: 250px;
				height: 250px;
				border: solid 10px #fff;
				border-radius: 50%;
				overflow: hidden;
				& img {
					width: 100%;
					height: auto;
				}
			}
		}

		.profile-information {
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			& h1 {
				font-size: 3.5rem;
			}
			& h2 {
				font-size: 1.4rem;
				font-weight: 100;
			}
		}
	}
	@media (min-width: 768px) {
		.container-position {
			display: block;
		}
		.profile-wrapped {
			display: flex;
			flex-direction: row;
			align-items: end;
			& .profile-avatar {
				width: 200px;
				height: 200px;
				margin-left: 25px;
			}
		}
		.profile-information {
			text-align: left;
			margin-bottom: -25px;
			& h1 {
				font-size: 3.4rem;
			}
			& h2 {
				font-size: 1.2rem;
			}
		}
	}
</style>

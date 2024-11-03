<header>
	<div class="container container-position">
		<div class="profile-banner"></div>

		<div class="profile-wrapped">
			<div class="profile-avatar">
				<img src="/images/portifolio/header/profile.jpg" alt="Jonas Desenvolvedor" />
			</div>

			<div class="profile-information">
				<h1>Jonas Lobato</h1>
				<h2>Desenvolvedor font-end.</h2>
			</div>
		</div>
	</div>
</header>

<style>
	header {
		padding-top: 2rem;
	}
	.container-position {
		position: relative;
	}
	.profile-banner {
		width: 100%;
		height: 250px;
		background-image: url('https://wallpaper4k.top/wp-content/uploads/2024/01/Imagem-de-fundo-4K-para-codificadores-1024x576.jpg');
		background-size: cover;
		background-position: center;
		border-radius: 10px 0px 50px 100px;
	}

	.profile-wrapped {
		gap: 2.5rem;
		align-items: end;
		/* left: 25px; */
	}

	.profile-information {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		& h1 {
			font-size: 4rem;
		}
		& h2 {
			font-size: 1.5rem;
			font-weight: 100;
		}
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
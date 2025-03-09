<script>
	import IconGithub from '$lib/icons/IconGithub.svelte';
	import IconLinkedin from '$lib/icons/IconLinkedin.svelte';
	import IconWhatsapp from '$lib/icons/iconWhatsapp.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<h3 class="text-init-footer">Manda um Oi!</h3>
		<br />
		<div class="pri-column">
			<div class="svg">
				<a target="_blank" rel="noopener noreferrer" 
				href="https://wa.me/+5594988026840?text=Ol%C3%A1+Jonas,+tudo+bem?+Tenho+interesse+em+conversar+com+vo%C3%A7%C3%AA%F0%9F%98%8F%F0%9F%A7%91%E2%80%8D%F0%9F%92%BB"
				>
					<IconWhatsapp icon="25px" /> Meu Whatsapp!
				</a>
			</div>
			<div class="svg">
				<a target="_blank" rel="noopener noreferrer" 
				href="https://www.linkedin.com/in/jonas-lobato/"
				>
					<IconLinkedin icon="25px" />linkedin.com/in/jonas-lobato
				</a>
			</div>
			<div class="svg">
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/JonasLobato">
					<IconGithub icon="25px" />github.com/JonasLobato
				</a>
			</div>
		</div>

		<div class="divider"></div>

		<div class="copyright">
			<span>&copy Jonas Lobato {currentYear}</span>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: 40px;
		width: 100%;
		height: 300px;
		padding: 2rem;
		background-color: #555;
		.text-init-footer {
			color: #f8f9fc;
		}
		.pri-column {
			/* border: 1px solid purple; */
			width: 270px;
			height: auto;
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
		.svg a {
			display: flex;
			align-items: center;
			gap: 8px;
			color: #f8f9fc;
			text-decoration: none;
			transition: color 0.2s;
		}

		a:hover {
			color: #e0460d;
		}
		.divider {
			grid-column: span 2;
			border-top: 1px solid #e0460d;
			margin: 1rem 0;
		}
		.copyright {
			color: #fff;
			grid-column: span 2;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	@media (min-width: 300px) {
		footer {
			font-size: 0.9rem;
			padding: 15px;
		}
	}
	@media (min-width: 768px) {
	}
	@media (min-width: 1024px) {
	}
</style>

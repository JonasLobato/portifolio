<script>
	import IconGithub from '$lib/icons/IconGithub.svelte';
	import IconLinkedin from '$lib/icons/IconLinkedin.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<h3 class="text-init-footer">Manda um Oi!</h3>
		<div class="svg">
			<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jonas-lobato/">
				linkedin.com/in/jonas-lobato<IconLinkedin color="#e0460d" />
			</a>
		</div>
		<div class="svg">
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/JonasLobato">
				github.com/JonasLobato<IconGithub color="#e0460d" />
			</a>
		</div>

		<div class="divider"></div>

		<div class="copyright">
			<span>© Jonas Lobato {currentYear}</span>
		</div>
	</div>
</footer>

<style>
	footer {
		margin-top: 40px;
		width: 100%;
		height: 500px;
		background-color: #555;
        .text-init-footer{
            color: #fff;
        }
        a {
		    color: #fff;
		    text-decoration: none;
		    transition: color 0.2s;
            border: solid 1px red;
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
</style>
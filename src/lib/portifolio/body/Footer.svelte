<script>
    import IconGithub from "$lib/icons/IconGithub.svelte";
	import IconLinkedin from "$lib/icons/IconLinkedin.svelte";
	import Test from "$lib/icons/Test.svelte";

    let ligado = true;

    function negativo() {
    ligado = !ligado;
    };
    
</script>
<footer>
    <button on:click={negativo}>
                <Test Class={ligado ? 'ligado' : 'desligado'}/>
        </button>

    <div class="container">
        <div class="svg">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jonas-lobato/">
                <IconLinkedin color="#e0460d"/>
            </a>
        </div>
        <div class="svg">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonasLobato">
                 <IconGithub color="#e0460d"/>
            </a>
        </div>
    </div>
</footer>

<style>
    footer {
        margin-top: 40px;
        width: 100%;
        height: 500px;
        background-color: #555;   
    }
    .svg{
        width: 70px;
        height: 70px;
    }
</style>
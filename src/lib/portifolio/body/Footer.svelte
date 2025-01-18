<script>
    import IconGithub from "$lib/icons/IconGithub.svelte";
	import IconLinkedin from "$lib/icons/IconLinkedin.svelte";
	import Test from "$lib/icons/Test.svelte";

    let isOn = true;

    function toggle() {
    isOn = !isOn;
    };
    
</script>
<footer>
    <div class="container">
        <div class="svg">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jonas-lobato/">
                <IconLinkedin/>
            </a>
        </div>
        
        <button class="toggle-button {isOn ? 'on' : 'off'}"
            on:click={toggle}
            >
             {isOn ? 'Ligado' : 'Desligado'}
        </button>

        <div class="svg">
            
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/JonasLobato">
                 <IconGithub color="#e0460d"/>
                 <Test Class={isOn}/>
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
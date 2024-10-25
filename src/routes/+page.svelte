<script>
    // Aqui você pode importar as URLs das suas redes sociais
    let socialLinks = [
      { name: "GitHub", url: "https://github.com/JonasLobato", icon: "github.png" },
      { name: "LinkedIn", url: "https://linkedin.com/in/seu-usuario", icon: "linkedin.png" },
      { name: "Twitter", url: "https://twitter.com/seu-usuario", icon: "twitter.png" }
    ];
  </script>

  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  
  <style>
    /* Estilos para a barra lateral */
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 250px;
      height: 100%;
      background-color: #333;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
    }
  
    .sidebar img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }
  
    .sidebar h1 {
      margin-top: 15px;
      font-size: 1.5rem;
    }
  
    .social-links {
      list-style: none;
      padding: 0;
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  
    .social-links li {
      width: 40px;
    }
  
    .social-links a {
      text-decoration: none;
      color: white;
    }
  
    .social-links img {
      width: 40px;
      height: 40px;
    }
  </style>
  
  <div class="sidebar">
    <img src="sua-foto.jpg" alt="Sua foto">
    <h1>Seu Nome</h1>
    <ul class="social-links">
      {#each socialLinks as link}
        <li>
          <a href={link.url} target="_blank">
            <img src={link.icon} alt={link.name}>
          </a>
        </li>
      {/each}
    </ul>
  </div>  
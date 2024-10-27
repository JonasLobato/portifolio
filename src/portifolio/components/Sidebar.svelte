<script>
    // Aqui você pode importar as URLs das suas redes sociais
    let socialLinks = [
      { name: "GitHub", url: "https://github.com/JonasLobato", icon: "github.png" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/jonas-lobato", icon: "linkedin.png" },
      { name: "Twitter", url: "https://twitter.com/seu-usuario", icon: "twitter.png" }
    ];
  </script>

<div class="sidebar">
    <img src="" alt="Sua foto">
    <h1>Seu Nome</h1>
    <ul class="social-links">
      {#each socialLinks as link}
        <li>
          <a href={link.url} target="_blank">
            <img src={link.icon} alt={link.name}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img">
              <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1s2.5 1.12 2.5 2.5zM0 24h5v-15H0v15zm7.5 0h5v-8.5c0-2.07 1.68-3.75 3.75-3.75S20 13.43 20 15.5V24h5v-9.75C25 9.22 21.28 6 16.25 6 11.22 6 7.5 9.22 7.5 14.25V24z"/>
            </svg>
          </a>
        </li>
      {/each}
    </ul>
  </div>  

  
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
    
    .sidebar svg {
        width: 40px;
        height: 40px;
        fill: white;
    }
  </style>
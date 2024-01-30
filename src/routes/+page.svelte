<script>
   let menuOpen = false;

   function handleClick() {
      menuOpen = !menuOpen;
   }
</script>

<div>
   <header>
      <p class="header-text">BHSMC</p>
      <button on:click={handleClick}>Menu</button>
   </header>
   {#if menuOpen}
      <nav>
         <a on:click={handleClick} href="/#/">Home</a>
         <a on:click={handleClick} href="/#/explore">Explore</a>
      </nav>
   {/if}
   <div class="main-container">
      <p class="statement">Bridgeland Music Club</p>
      <p class="the-what">A Home for all Things Music</p>
   </div>
</div>

<style>
   @import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Montserrat:wght@700&family=Roboto&family=Unbounded&display=swap');

   :root {
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;

      color-scheme: light dark;
      color: rgba(255, 255, 255, 0.87);
      background-color: #242424;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
   }

   html, body {
      margin: 0;
   }
   
   header {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      min-height: 3rem;
   }

   nav {
      margin-top: .2rem;
      width: 100%;
      display: flex;
      flex: 1;
      justify-content: space-evenly;
      position: absolute;
      z-index: 2;
   }

   a {
      font-family: 'Unbounded', cursive;
      text-decoration: none;
      color: rgba(255, 255, 255, 0.87);
   }

   button {
      border: none;
      background-color: transparent;
      color: rgba(255, 255, 255, 0.87);
      font-family: 'Unbounded', cursive;
      font-size: 2rem;
      padding: 0;
      line-height: 2rem;
      padding-top: 1rem;
      padding-right: 3vw;
      padding-bottom: 1rem;
   }

   button:hover {
      cursor: pointer;
   }

   .header-text {
      font-family: 'Unbounded', cursive;
      font-size: 2rem;
      line-height: 2rem;
      margin: 0;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 3vw;
   }

   main {
      text-align: center;
   }

   p {
      padding-left: 1rem;
      padding-right: 1rem;
   }

   .main-container {
      display: flex;
      min-height: calc(100vh - 4rem);
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }

   .statement {
      font-family: 'Montserrat', sans-serif;
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.5rem;
   }

   .the-what {
      font-family: 'Roboto', sans-serif;
   }
</style>

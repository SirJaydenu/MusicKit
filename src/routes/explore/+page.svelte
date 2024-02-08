<script lang="ts">
   import type { PageData } from './$types';

   export let data: PageData;
   
   let scope = "";

   function resetColor() {
      document.getElementById("artists")!.style.color = "rgba(255, 255, 255, 0.87)";
      document.getElementById("songs")!.style.color = "rgba(255, 255, 255, 0.87)";
      document.getElementById("albums")!.style.color = "rgba(255, 255, 255, 0.87)";
   }

   function artistsClick() {
      scope = "artists"
      resetColor();
      document.getElementById("artists")!.style.color = "rgba(252, 252, 79, 0.904)";
   }

   function songsClick() {
      scope = "songs"
      resetColor();
      document.getElementById("songs")!.style.color = "rgba(252, 252, 79, 0.904)";
   }

   function albumsClick() {
      scope = "albums"
      resetColor();
      document.getElementById("albums")!.style.color = "rgba(252, 252, 79, 0.904)";
   }

</script>

<div>
   <h1>EXPLORE</h1>
   <p class="subtitle">Find New Music Suggested by BHS Students</p>
   <div class="main-container">
      <a href="/add">Add Your Own Music Here</a>
      <div class="selector-container">
         <button id="artists" class="unselected-option" on:click={artistsClick}
            >Artists</button
         >
         <button id="songs" class="unselected-option" on:click={songsClick}
            >Songs</button
         >
         <button id="albums" class="unselected-option" on:click={albumsClick}
            >Albums</button
         >
      </div>
      {#if scope === "artists"}
         {#each data.artists as artist}
            <div class="music-container">
               <p class="title">{artist.name}</p>
               <p class="describer-text">{artist.grade}</p>
            </div>
         {/each}
      {:else if scope === "songs"}
         {#each data.songs as song}
            <div class="music-container">
               <p class="title">{song.name}</p>
               <p class="describer-text">{song.artist}</p>
               <p class="describer-text">{song.grade}</p>
            </div>
         {/each}
      {:else if scope === "albums"}
         {#each data.albums as album}
            <div class="music-container">
               <p class="title">{album.name}</p>
               <p class="describer-text">{album.artist}</p>
               <p class="describer-text">{album.grade}</p>
            </div>
         {/each}
      {/if}
   </div>
</div>

<style>
   p {
      font-family: "Roboto", sans-serif;
   }

   button {
      font-family: "Montserrat", sans-serif;
      color: rgba(255, 255, 255, 0.87);
   }

   button:hover {
      cursor: pointer;
   }

   a {
      font-family: "Roboto", sans-serif;
      color: rgba(255, 255, 255, 0.87);
      margin-bottom: 1rem;
   }

   h1 {
      font-family: "Montserrat", sans-serif;
      text-align: center;
      font-size: 3rem;
      margin-top: 5rem;
   }

   .subtitle {
      margin-top: 3rem;
      text-align: center;
      margin-bottom: 0.5rem;
   }

   .selector-container {
      display: flex;
      justify-content: space-evenly;
      margin-left: 2rem;
      margin-right: 2rem;
      min-width: 30rem;
   }

   .unselected-option {
      background-color: transparent;
      border: none;
   }

   .main-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;
   }

   .music-container {
      min-height: 5rem;
      border-radius: 10px;
      min-width: min(90vw, 40rem);
      background-color: rgb(44, 44, 44);
   }

   .title {
      margin-left: 1rem;
      font-size: 1.5rem;
   }

   .describer-text {
      margin-left: 1rem;
   }
</style>

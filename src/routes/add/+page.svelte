<script>
   let name;
   let by;
   let genres;

   let code = "";
   let scope = "";

  function resetColor() {
    document.getElementById("artists").style.color =
      "rgba(255, 255, 255, 0.87)";
    document.getElementById("songs").style.color = "rgba(255, 255, 255, 0.87)";
    document.getElementById("albums").style.color = "rgba(255, 255, 255, 0.87)";
  }

  function artistsClick() {
    scope = "artists";
    resetColor();
    document.getElementById("artists").style.color =
      "rgba(252, 252, 79, 0.904)";
  }

  function songsClick() {
    scope = "songs";
    resetColor();
    document.getElementById("songs").style.color = "rgba(252, 252, 79, 0.904)";
  }

  function albumsClick() {
    scope = "albums";
    resetColor();
    document.getElementById("albums").style.color = "rgba(252, 252, 79, 0.904)";
  }
</script>

<div>
  <h1>Share Music</h1>
  <p class="subtitle">Submit Your Music Recommendations Here</p>
  <div class="selector-container">
    <button id="artists" class="unselected-option" on:click={artistsClick}
      >Artist</button
    >
    <button id="songs" class="unselected-option" on:click={songsClick}
      >Song</button
    >
    <button id="albums" class="unselected-option" on:click={albumsClick}
      >Album</button
    >
  </div>
  {#if scope === "artists"}
    <div class="main-container">
      <input bind:value={name} placeholder="Artist Name" />
      <input bind:value={genres} placeholder="Genres" />
      <p class="info-text">
        Seperate genres with a space and format them with a hyphen aswell as all
        lowercase. For example "hip-hop jazz"
      </p>
      <button class="submit-button" on:click={submit}>Submit</button>
    </div>
  {:else if scope === "songs"}
    <div class="main-container">
      <input bind:value={name} placeholder="Song Name" />
      <input bind:value={by} placeholder="Artist" />
      <input bind:value={genres} placeholder="Genres" />
      <p class="info-text">
        Seperate genres with a space and format them with a hyphen aswell as all
        lowercase. For example "hip-hop jazz"
      </p>
      <button class="submit-button" on:click={submit}>Submit</button>
    </div>
  {:else if scope === "albums"}
    <div class="main-container">
      <input bind:value={name} placeholder="Album Name" />
      <input bind:value={by} placeholder="Artist" />
      <input bind:value={genres} placeholder="Genres" />
      <p class="info-text">
        Seperate genres with a space and format them with a hyphen aswell as all
        lowercase. For example "hip-hop jazz"
      </p>
      <button class="submit-button" on:click={submit}>Submit</button>
    </div>
  {/if}
  {#if code === "error"}
    <div class="main-container">
      <p>Fill out each section!</p>
    </div>
  {:else if code === "success"}
    <div class="main-container">
      <p>Thanks for submitting!</p>
    </div>
  {/if}
</div>

<style>
  h1 {
    font-family: "Montserrat", sans-serif;
    text-align: center;
    font-size: 3rem;
    margin-top: 5rem;
  }

  p {
    font-family: "Roboto", sans-serif;
  }

  button {
    font-family: "Montserrat", sans-serif;
    color: rgba(255, 255, 255, 0.87);
  }

  input {
    text-align: center;
    border: none;
    margin-bottom: 1rem;
  }

  .subtitle {
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  .selector-container {
    display: flex;
    justify-content: space-evenly;
    margin-left: 2rem;
    margin-right: 2rem;
   margin-bottom: 2rem;
  }

  .unselected-option {
    background-color: transparent;
    border: none;
  }

  .unselected-option:hover {
    cursor: pointer;
  }

  .main-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0rem;
    margin-top: 1rem;
    background-color: rgb(44, 44, 44);
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .info-text {
    color: #4d4d4d;
    font-size: 0.8rem;
    width: 16rem;
    line-height: 0.9rem;
    margin: 0;
  }

  .submit-button {
    margin-top: 1rem;
  }
</style>

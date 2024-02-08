<script lang="ts">
   import type {PageData} from './$types';
   import type { Song, Album, Artist } from '@prisma/client';

   export let data: PageData;

   let name = data.session.user!.name;
   let grade = data.student.grade;
</script>

<div>
   <h1>{name}</h1>
   <p class="subtitle">See What Songs You've Added</p>
   <div class="main-container">
      {#each data.additions as addition}
         {#if "artist" in addition }
            <div class="music-container">
               <p class="title">{addition.name}</p>
               <p class="describer-text">{addition.artist}</p>
            </div>
         {:else}
            <div class="music-container">
               <p class="title">{addition.name}</p>
            </div>
         {/if}
      {/each}
   </div>
</div>

<style>
   p {
      font-family: 'Roboto', sans-serif;
   }


   h1 {
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      font-size: 3rem;
      margin-top: 5rem;
   }

   .subtitle {
      margin-top: 3rem;
      text-align: center;
      margin-bottom: .5rem;
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

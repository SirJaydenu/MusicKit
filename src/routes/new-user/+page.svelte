<script lang="ts">
   import { enhance, type SubmitFunction } from '$app/forms';
   import { Grade } from '@prisma/client';

   let formData = {
      grade: "",
   };
   
   const formSubmitHandler: SubmitFunction = () => {
      formData.grade = "";

      return async ({ update }) => {
         await update();
      }
   };
</script>

<h1>Welcome to Music Share!</h1>
<p>Please enter the following info to finish setting up your account</p>
<form method="POST" use:enhance={formSubmitHandler}>
   <label>
      Name
      <input name="name" type="text">
   </label>
   <label>
      Grade
      <input bind:group={formData.grade} name="grade" id="freshman" value="FRESHMAN" type="radio">
      <label for="freshman">Freshman</label>
      <input bind:group={formData.grade} name="grade" id="sophomore" value="SOPHOMORE" type="radio">
      <label for="sophomore">Sophomore</label>
      <input bind:group={formData.grade} name="grade" id="junior" value="JUNIOR" type="radio">
      <label for="junior">Junior</label>
      <input bind:group={formData.grade} name="grade" id="senior" value="SENIOR" type="radio">
      <label for="senior">Senior</label>
   </label>
   <input type="submit" value="Submit">
</form>

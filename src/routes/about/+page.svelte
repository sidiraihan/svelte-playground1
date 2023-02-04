
<svelte:head>
    <title>about</title>
  </svelte:head>
<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
<script>
	import FormSearchEmail from '$lib/FormSearchEmail.svelte';
    let greet = 'hellow2';
</script>


<p>{greet} about</p>
<FormSearchEmail placeholder="type email address and hit Go"/>  

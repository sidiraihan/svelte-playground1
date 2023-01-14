<script>
    export let placeholder = '';
    let emailInput = '';
</script>

<form action="/email/{emailInput}">
    <input type="email" placeholder="{placeholder}" bind:value={emailInput}/>
</form>

<style lang="scss">
	input {
        width: 50%;
    }
</style>
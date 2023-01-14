<script>
    export let placeholder = '';
    let emailInput = '';
</script>

<form action="/email/{emailInput}">
    <input type="email" placeholder="{placeholder}" bind:value={emailInput} required/>
    <button type="submit">Go</button>
</form>

<style lang="scss">
	form {
        display: flex;
        input {
            flex: 2;
            padding: 15px;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border: 1px solid #ccc;
        }

        button {
            flex: 1;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            border: 1px solid #ccc;
            background-color: #111;
            color: #fff;
        }
    }
</style>
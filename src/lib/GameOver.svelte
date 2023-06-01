<script>
  export let state;
</script>

<div>
  <span>You {state}</span>
  <button on:click>New Game</button>
</div>

<style>
  div {
    display: grid;
    place-items: center;
    text-align: center;
    color: var(--n-c);
    font-size: 15vmin;
    font-family: "Play", sans-serif;
    user-select: none;
  }

  button {
    font-family: "Play", sans-serif;
    color: var(--n-c);
    border-color: var(--p-c);
    background-color: transparent;
    width: 40%;
    text-decoration: none;
    font-size: 3vmin;
    padding: 1vmin;
  }
</style>

<script>
  import Board from "./lib/Board.svelte";
</script>

<Board />

<style>
  :root {
    --p-c: #ff3261;
    --s-c: #f43f5e;
    --n-c: #c1c4e8;
    --bg-c: #0f1129;

    background-color: var(--bg-c);
    display: grid;
    place-items: center;
    height: 100vh;
    overflow: hidden;
  }
</style>

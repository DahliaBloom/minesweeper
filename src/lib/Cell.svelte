<script>
  import minesweeper from "minesweeper";
  import bomb from "../assets/bomb.png";
  import flag from "../assets/flag.png";

  export let cell;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click
  on:contextmenu
  style:background-color={cell.state === minesweeper.CellStateEnum.CLOSED
    ? "var(--p-c)"
    : "transparent"}
>
  {#if cell.state === minesweeper.CellStateEnum.CLOSED}
    {#if cell.flag === minesweeper.CellFlagEnum.EXCLAMATION}
      <img src={bomb} alt="" style:width=70%/>
    {:else if cell.flag === minesweeper.CellFlagEnum.QUESTION}
      <img src={flag} alt="" style:width=50%/>
    {/if}
  {:else if cell.isMine}
    <img src={bomb} alt="" style:width=70%/>
  {:else}
    {cell.numAdjacentMines}
  {/if}
</div>

<style>
  div {
    display: grid;
    place-items: center;
    width: 7vh;
    height: 7vh;
    border-radius: 20%;
    text-align: center;
    color: var(--n-c);
    font-size: 4vmin;
    font-family: "Play", sans-serif;
    user-select: none;
  }

  @media (orientation: portrait) {
    div {
      width: 7vw;
      height: 7vw;
    }
  }
</style>

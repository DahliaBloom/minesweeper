<script>
  import minesweeper from "minesweeper";
  import Cell from "./Cell.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  $: {
    if (board.state() === minesweeper.BoardStateEnum.LOST) {
      dispatch("lost");
    } else if (board.state() === minesweeper.BoardStateEnum.WON) {
      dispatch("won");
    }
  }

  const boardSize = 10;
  let board = new minesweeper.Board(
    minesweeper.generateMineArray({
      rows: boardSize,
      cols: boardSize,
      mines: 20,
    })
  );
</script>

<div class="board" style="--boardSize: {boardSize}">
  {#each board.grid().flat() as cell}
    <Cell
      {cell}
      on:contextmenu={(e) => {
        e.preventDefault();
        board.openCell(cell.x, cell.y);
        board = board;
      }}
      on:click={() => {
        board.cycleCellFlag(cell.x, cell.y);
        board = board;
      }}
    />
  {/each}
</div>

<style>
  .board {
    display: inline-grid;
    grid-template-columns: repeat(var(--boardSize), 1fr);
    gap: 0.4rem;
    padding: 1rem;
  }
</style>

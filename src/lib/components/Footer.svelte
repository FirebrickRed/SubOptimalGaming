<script>
  import Trapezoid from "./Trapezoid.svelte";

</script>

<footer>
   <Trapezoid angleTopRight backgroundColor=#EBEBEB borderColor=#6D3359 borderBottom={false} borderLeft={false} inset="3rem"  style="position: absolute; height: 3rem; top: -3rem; width: 10rem;"></Trapezoid>
   <Trapezoid angleTopLeft backgroundColor=#EBEBEB borderColor=#6D3359 borderBottom={false} borderRight={false} inset="3rem"  style="position: absolute; height: 3rem; top: -3rem; right: 0; width: 10rem;"></Trapezoid>
</footer>
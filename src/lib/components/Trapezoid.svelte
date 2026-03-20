<script>
  // Controls how far angled corners cut in. Accepts any CSS length (rem, px, %).
  export let inset = '2rem';

  // Independently toggle each corner's angle.
  export let angleTopLeft = false;
  export let angleTopRight = false;
  export let angleBottomLeft = false;
  export let angleBottomRight = false;

  // Where the middle point sits vertically when both top+bottom on the same
  // side are angled (e.g. for a hexagon). 50% = centered.
  export let midPoint = '50%';

  export let backgroundColor = 'var(--color-dark, #1F1F1F)';
  export let borderColor = 'transparent';
  export let borderWidth = '4px';
  export let padding = '0.5rem 3rem';
  export let textAlign = 'left';
  export let block = false;
  export let shadow = 'none';

  // Control which sides show the border. All true by default.
  export let borderTop = true;
  export let borderRight = true;
  export let borderBottom = true;
  export let borderLeft = true;

  $: bgInset = {
    top:    borderTop    ? borderWidth : '0px',
    right:  borderRight  ? borderWidth : '0px',
    bottom: borderBottom ? borderWidth : '0px',
    left:   borderLeft   ? borderWidth : '0px',
  };

  $: points = [
    angleTopLeft                        ? `${inset} 0%`                : '0% 0%',
    angleTopRight                       ? `calc(100% - ${inset}) 0%`   : '100% 0%',
    (angleTopRight && angleBottomRight) ? `100% ${midPoint}`           : null,
    angleBottomRight                    ? `calc(100% - ${inset}) 100%` : '100% 100%',
    angleBottomLeft                     ? `${inset} 100%`              : '0% 100%',
    (angleTopLeft && angleBottomLeft)   ? `0% ${midPoint}`             : null,
  ].filter(Boolean);

  $: clipPath = `polygon(${points.join(', ')})`;
</script>

<!--
  .shape is just a layout wrapper — no clip-path here so it doesn't clip children.
  .border and .bg are separate absolutely-positioned layers each with their own
  clip-path, so the border layer can sit behind the background layer independently.
-->
<div
  class="shape"
  class:block
  style={$$props.style}
  style:--clip-path={clipPath}
  style:--bg={backgroundColor}
  style:--border-color={borderColor}
  style:--border-width={borderWidth}
  style:--bg-top={bgInset.top}
  style:--bg-right={bgInset.right}
  style:--bg-bottom={bgInset.bottom}
  style:--bg-left={bgInset.left}
  style:--padding={padding}
  style:--text-align={textAlign}
  style:--shadow={shadow}
>
  {#if borderColor !== 'transparent'}
    <div class="border" aria-hidden="true"></div>
  {/if}
  <div class="bg" aria-hidden="true"></div>
  <div class="content"><slot /></div>
</div>

<style>
  .shape {
    position: relative;
    display: inline-block;
    filter: var(--shadow);
  }

  /* Border layer: fills .shape fully, clipped to the trapezoid shape */
  .border {
    position: absolute;
    inset: 0;
    background-color: var(--border-color);
    clip-path: var(--clip-path);
    z-index: 0;
  }

  /* Background layer: inset by borderWidth from .shape, same clip-path.
     The gap between .border and .bg edges forms the visible border. */
  .bg {
    position: absolute;
    top: var(--bg-top);
    right: var(--bg-right);
    bottom: var(--bg-bottom);
    left: var(--bg-left);
    background-color: var(--bg);
    clip-path: var(--clip-path);
    z-index: 1;
  }

  /* Content sits above both layers */
  .content {
    position: relative;
    z-index: 2;
    padding: var(--padding);
    text-align: var(--text-align);
  }
</style>

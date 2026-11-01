/* v2.3 — grow/shrink physical key widths to use available space without scaling text. */
(function(){
 function resizeKeys(){
  const d=document.querySelector('.workspace-grid .input-devices');
  const mouse=d?.querySelector('.mouse-side');
  if(!d||!mouse)return;
  const col=getComputedStyle(d).flexDirection==='column';
  const canvas=d.querySelector('.canvas-scroll');
  const width=canvas?.clientWidth||d.clientWidth;
  // Measure the actual keyboard viewport: the number row is 13 standard
  // keys plus a wide Backspace, 13 gaps and the keyboard's own padding.
  const proposed=(width-13*5-9)/(13+1.828125);
  const keySize=Math.min(140,Math.max(56,proposed));
  d.closest('.workspace-grid')?.style.setProperty('--kbf-key-width',keySize.toFixed(1)+'px');
 }
 window.addEventListener('load',()=>{
  resizeKeys();
  if('ResizeObserver' in window){
   const d=document.querySelector('.workspace-grid .input-devices');
   if(d)new ResizeObserver(resizeKeys).observe(d);
  }
 });
 window.addEventListener('resize',resizeKeys,{passive:true});
})();

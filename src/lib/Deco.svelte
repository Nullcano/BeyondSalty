<div class="deco-provider">
  <div class="deco corner top-left"></div>
  <div class="deco corner top-right"></div>
  <div class="deco corner bottom-left"></div>
  <div class="deco corner bottom-right"></div>
  <div class="deco line-h top"></div>
  <div class="deco line-h bottom"></div>
  <div class="deco line-v left"></div>
  <div class="deco line-v right"></div>
  <div class="scanlines"></div>
</div>

<style>
  .deco-provider {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    pointer-events: none;
    box-shadow: inset 0 0 8rem #000;
    z-index: 9001;
  }
  .scanlines {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, transparent 0%, transparent calc(100% - 2px), rgba(0, 204, 255, 0.1) 100%);
    background-size: .25rem .25rem;
    animation: scan 1s linear infinite;
    mix-blend-mode: screen;
  }
  @keyframes scan {
    from { background-position: 0 0 }
    to { background-position: 0 -1rem }
  }
  .deco {
    position: fixed;
    z-index: 999;
  }
  .corner {
    width: 3rem;
    height: 3rem;
  }
  .top-left {
    top: 1rem;
    left: 1rem;
    border-top: 1px solid rgba(255,255,255,.25);
    border-left: 1px solid rgba(255,255,255,.25);
  }
  .top-right {
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-top: 1px solid rgba(255,255,255,.25);
    border-right: 1px solid rgba(255,255,255,.25);
  }
  .bottom-left {
    bottom: 1rem;
    left: 1rem;
    border-bottom: 1px solid rgba(255,255,255,.25);
    border-left: 1px solid rgba(255,255,255,.25);
  }
  .bottom-right {
    bottom: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-bottom: 1px solid rgba(255,255,255,.25);
    border-right: 1px solid rgba(255,255,255,.25);
  }
  .line-h {
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw - 32rem);
    border-top: 1px solid rgba(255,255,255,.25);
  }
  .line-v {
    top: 50%;
    transform: translateY(-50%);
    height: calc(100vh - 32rem);
    border-left: 1px solid rgba(255,255,255,.25);
  }
  .line-h.top {
    top: 1rem;
  }
  .line-h.bottom {
    bottom: 1rem;
  }
  .line-v.left {
    left: 1rem;
  }
  .line-v.right {
    right: 1rem;
  }
</style>
<div id="gallery">
  <div class="gallery__grid">
    <div class="card hero"></div>
    <div class="text">
      <h1>ReviAI</h1>
      <p>
        Load your videos and automatically get transcripts powered by Open AI's
        Whisper. Make clips just by highlighting te important text. Then you can
        ask questions with the chat interface. Runs completally free using local
        models.
      </p>
    </div>
    <div class="thumb"></div>
  </div>
</div>

<style>
  #gallery {
    --padding: 20px;
    height: 100%;
    min-width: 100vw;
    padding: var(--padding);
    display: flex;
    justify-content: center;
  }
  .gallery__grid {
    width: 100vw;
    max-width: 1024px;
    height: 100%;
    max-height: calc(100svh - (var(--padding) * 2));
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-auto-flow: row;
    gap: var(--gap);
  }
  .card {
    background-color: rgba(var(--rgb-white), 0.6);
    backdrop-filter: blur(4px);
    border-radius: 20px;
  }
  .hero {
    grid-row: span 4;
    width: 100%;
    height: 100%;
  }
  .text {
    padding: 2em;
    font-size: 12px;
    max-width: 50em;
  }
  h1 {
    font-size: 3em;
    line-height: 1;
    margin-top: 0em;
    margin-bottom: 0.5em;
    font-weight: 500;
  }
  p {
    font-size: 1em;
  }
  @media (min-width: 480px) and (orientation: portrait) {
    .text {
      font-size: 18px;
    }
  }
  /*
  @media (min-width: 1024px) {
    .gallery__grid {
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(9, 1fr);
    }
  }
  @media (min-width: 480px) {
    .gallery__grid {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
    .hero {
      grid-column: 1/-1;
      grid-row: 1/-2;
    }
  }
  @media (min-height: 768px) and (min-width: 768px) {
    .text {
      font-size: 16px;
    }
  }
  */
</style>

<?php
// 1)Reduce TTFB metric with fast backend response.
 usleep(180000); // Pause the script for 1,800,000 microseconds (1.8 seconds)
 ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 2)Critical CSS -->
    <style>
      @font-face {
        font-family: "Roboto";
        src: url(/fonts/roboto-regular.woff2) format("woff2"); /* use woff2 over other */
        font-display: swap; /*optional - no font swap if it arrives late.*/
      }

      @font-face {
        font-family: "Roboto-fallback";
        size-adjust: 100.06%;
        ascent-override: 96%;
        src: local("Arial");
      }

      body {
        font-family: "Roboto", "Roboto-fallback", sans-serif; /* add fallback system font */
        padding: 0 20px;
        margin: 0;
      }
    </style>
    <!-- 3)move the CSS at the top of the head - CSS blocks the rendering so it should fetch as soon as possible -->
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="stylesheet" href="css/background.css" />

    <!-- 4)LCP boost - preaload the LCP element -->
    <link
      rel="preload"
      fetchpriority="high"
      as="image"
      href="http://localhost:3030/images/0-500x300.webp"
      type="image/webp"
    />

    <link rel="dns-prefetch" href="http://localhost:3030" />
    <link rel="dns-prefetch" href="https://placehold.co" />

    <!-- 5)preconnect resource hint -->
    <link rel="preconnect" href="http://localhost:3030" />
    <link rel="preconnect" href="http://localhost:3030" crossorigin />
    <link rel="preconnect" href="https://placehold.co" />

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Core Web Vitals</title>
  </head>
  <body>
    <div class="header">
      <img width="300" height="64" src="./images/logo.png" alt="logo" />
      <div class="navbar">

        <div class="menu-icon" onclick="toggleMenu()">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <!-- 6)reduce input delay of the user event - e.g. the menu items are server side rendered, not coming from fetching request -->
        <div class="menu-list" id="menuList">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
        </div>

      </div>
    </div>

    <main>
      <!-- 7)SSR the LCP and above the fold elements -->
      <article>
        <picture>
          <source
            srcset="http://localhost:3030/images/0-500x300.webp"
            media="(min-width: 600px)"
          />
          <img
            src="http://localhost:3030/images/0-360x216.webp"
            alt="lorem ipsum"
            width="500"
            height="300"
          />
        </picture>
        <h2>Lorem Ipsum text</h2>
        <p>
          Do esteem object we called father excuse remove. So dear real on like
          more it. Laughing for two families addition expenses surprise the. If
          sincerity he to curiosity arranging.
        </p>
        <button>More Info</button>
      </article>

      <div id="ad1"></div>
    </main>

    <!-- 8)JS blocks parsing - defer as many as possible -->
    <script src="scripts/script.js" defer></script>
    <script src="http://localhost:3030/scripts/ads.js" defer></script>
    
    <!-- <script src="http://localhost:3030/scripts/3rd-service.js" defer></script> -->
    <!-- 9)use Web Worker to offload the main browser thread -->
    <script>
      // Returns a blob:// URL which points
      // to a javascript file which will call
      // importScripts with the given URL
      function getWorkerURL(url) {
        const content = `importScripts( "${url}" );`;
        return URL.createObjectURL(
          new Blob([content], { type: "text/javascript" })
        );
      }

      // Define the external script URL
      const scriptUrl = "http://localhost:3030/scripts/3rd-service.js";

      const worker_url = getWorkerURL(scriptUrl);

      // Create a new web worker with the external script URL
      const worker = new Worker(worker_url);
    </script>
  </body>
</html>

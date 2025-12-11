<!DOCTYPE html>
<html>
<head>
  <title>Hospital QR System</title>
  <link rel="stylesheet" href="styles.css">

  <!-- Scripts -->
  <script src="speech.js"></script>
  <script src="multilingual.js"></script>
  <script src="directions.js"></script>

  <!-- QR Scanner Library -->
  <script type="module">
    import QrScanner from "./qr-scanner.min.js";
    QrScanner.WORKER_PATH = './qr-scanner-worker.min.js';

    let scanner;

    window.onload = () => {
      const videoElem = document.getElementById("qr-video");

      scanner = new QrScanner(
        videoElem,
        result => {
          console.log("QR Result:", result);

          // Redirect based on QR scanned text
          if (result === "opd") window.location.href = "opd.html";
          else if (result === "pharmacy") window.location.href = "pharmacy.html";
          else if (result === "lab") window.location.href = "lab.html";
          else if (result === "doctors") window.location.href = "doctors.html";
        }
      );

      document.getElementById("start-scan").onclick = () => {
        document.getElementById("scanner-box").style.display = "block";
        scanner.start();
      };

      document.getElementById("stop-scan").onclick = () => {
        scanner.stop();
        document.getElementById("scanner-box").style.display = "none";
      };
    };
  </script>

</head>
<body>

<h1 id="page_title">Hospital Information</h1>

<!-- Language Selector -->
<div class="card">
  <h2>Select Language</h2>
  <button onclick="setLanguage('en')">English</button>
  <button onclick="setLanguage('hi')">Hindi</button>
  <button onclick="setLanguage('kn')">Kannada</button>
</div>

<!-- QR Scanner -->
<div class="card">
  <h2>Scan QR Code</h2>
  <button id="start-scan">Start Scanner</button>
  <button id="stop-scan">Stop Scanner</button>

  <div id="scanner-box" style="display:none; margin-top:10px;">
    <video id="qr-video" width="300" style="border:1px solid #000;"></video>
  </div>
</div>

<!-- Manual QR Images -->
<div class="card">
  <h2>QR Codes</h2>
  <img src="qr_output/opd.png" width="150">
  <img src="qr_output/pharmacy.png" width="150">
  <img src="qr_output/lab.png" width="150">
  <img src="qr_output/doctors.png" width="150">
</div>

</body>
</html>

// Mani Sports demo — wires CONFIG values into links.
// Rules: kabhi ghalat link/number mat dikhao. Agar config khali hai to
// button page ke andar ke section par le jata hai aur placeholder saaf likha hai.
(function () {
  var cfg = window.STORE_CONFIG || {};

  // --- Facebook links ---
  var fbUrl = (cfg.facebookPageUrl || "").trim();
  document.querySelectorAll("[data-fb-link]").forEach(function (a) {
    if (fbUrl) {
      a.setAttribute("href", fbUrl);
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    } else {
      a.setAttribute("href", "#facebook"); // TODO: config.js mein asli page URL aane par khud badal jayega
    }
  });
  var share = document.querySelector("[data-fb-share]");
  if (share) {
    if (fbUrl) {
      share.setAttribute("href",
        "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href));
      share.setAttribute("target", "_blank");
      share.setAttribute("rel", "noopener");
    } else {
      share.setAttribute("href", "#facebook");
    }
  }
  var fbNote = document.querySelector("[data-fb-note]");
  if (fbNote && fbUrl) fbNote.style.display = "none";

  // --- WhatsApp order links ---
  var storeName = cfg.storeName || "MANII SPORTS BHERA";
  var waNum = (cfg.whatsappNumber || "").replace(/\D/g, "");
  document.querySelectorAll("[data-wa-link]").forEach(function (a) {
    if (waNum) {
      var product = a.getAttribute("data-product");
      var text = product
        ? "Assalamualaikum! I want to order: " + product + " (from " + storeName + " website)"
        : "Assalamualaikum! I want to place an order at " + storeName + ".";
      a.setAttribute("href", "https://wa.me/" + waNum + "?text=" + encodeURIComponent(text));
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    } else {
      a.setAttribute("href", "#contact"); // TODO: config.js mein asli number aane par wa.me link ban jayega
    }
  });
  var waDisp = document.querySelector("[data-wa-display]");
  if (waDisp && cfg.whatsappDisplay) waDisp.textContent = cfg.whatsappDisplay;

  // --- Address / timings ---
  var addr = document.querySelector("[data-address]");
  if (addr && cfg.storeAddress) {
    addr.textContent = cfg.storeAddress; // mukammal pata (sheher same address mein shamil hai)
  } else if (addr && cfg.storeCity) {
    addr.textContent = cfg.storeCity;
  }
  var tim = document.querySelector("[data-timings]");
  if (tim && cfg.timings) tim.textContent = cfg.timings;
})();

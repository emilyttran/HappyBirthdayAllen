$(document).ready(function () {
  var terms = ["Your passion for music",
  "Your patience with kids and with anyone ",
  "Your bravery to express your true identity",
  "Your hardworking mentality",
  "Your love for chicken wings and pho",
  "Your determination for a great life",
  "Your ability to always stay hydrated",
  "Being there for those who need you",
  "Pouring your heart into everything you do",
  "Your bright smile and eyes",
  "Caring so much about your friends and family",
  "Inspiring young and old musicians to have fun",
  "Existing in this world for 23 years so far",
  "Believing in yourself and in others",
  "Leaving positive vibes everywhere you go",
  "Your mouth dimples",
  "Advocating for the under-represented",
  "Sharing your thoughts to those who are lucky enough to know you",
  "Standing up when the world wants you to fall",
  "Becoming the handsome, grown man that you are",
  "Being Allen",
  "<3"]; //array of terms to rotate

  function rotateTerm() {
    var ct = $("#rotate").data("term") || 0;
    $("#rotate").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct])
                .fadeIn().delay(4500).fadeOut(400, rotateTerm);
  }
  $(rotateTerm);
});

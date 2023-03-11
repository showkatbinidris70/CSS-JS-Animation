// img and text animation
setInterval(makeFadeInFadeOutBecome, 4000);
setInterval(makeFadeInFadeOutNinja, 3950);
setInterval(makeFadeInFadeOutBtn, 3900);
setInterval(makeFadeInFadeOutImage, 4000);
setInterval(makeFadeInFadeOutTextCircle, 4000);

function makeFadeInFadeOutBecome() {
  if ($("#become").hasClass("animate__fadeOut")) {
    $("#become").removeClass("animate__fadeOut").addClass("animate__fadeIn");
  } else {
    $("#become").removeClass("animate__fadeIn").addClass("animate__fadeOut");
  }
}
function makeFadeInFadeOutNinja() {
  if ($("#ninja").hasClass("animate__fadeOut")) {
    $("#ninja").removeClass("animate__fadeOut").addClass("animate__fadeIn");
  } else {
    $("#ninja").removeClass("animate__fadeIn").addClass("animate__fadeOut");
  }
}
function makeFadeInFadeOutBtn() {
  if ($("#btn").hasClass("animate__fadeOut")) {
    $("#btn").removeClass("animate__fadeOut").addClass("animate__fadeIn");
  } else {
    $("#btn").removeClass("animate__fadeIn").addClass("animate__fadeOut");
  }
}
function makeFadeInFadeOutImage() {
  if ($("#image").hasClass("animate__fadeOutRight")) {
    $("#image")
      .removeClass("animate__fadeOutRight")
      .addClass("animate__fadeInRight");
  } else {
    $("#image")
      .removeClass("animate__fadeInRight")
      .addClass("animate__fadeOutRight");
  }
}

function makeFadeInFadeOutTextCircle() {
  if ($("#text-circle").hasClass("animate__fadeOut")) {
    $("#text-circle")
      .removeClass("animate__fadeOut")
      .addClass("animate__fadeIn");
  } else {
    $("#text-circle")
      .removeClass("animate__fadeIn")
      .addClass("animate__fadeOut");
  }
}

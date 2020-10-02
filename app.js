// Consts and Lets
test = ["a", "b"];

let vizNath;
let vizGeorgie;
const vizContainerNath = document.getElementById("vizContainerNath");
const vizContainerGeorgie = document.getElementById("vizContainerGeorgie");
const nathUrl1 =
  "https://public.tableau.com/shared/CG8NQ6232?:display_count=y&:origin=viz_share_link";
const nathUrl2 =
  "https://public.tableau.com/views/UberTravelTimesfromCamden/Dashboard1?:language=en-GB&:display_count=y&:origin=viz_share_link";
const georgieUrl1 =
  "https://public.tableau.com/views/SetActionsTraining/Title?:language=en-GB&:display_count=y&:origin=viz_share_link";
const georgieUrl2 =
  "https://public.tableau.com/views/PowerLifting_15655400593210/Dashboard1?:language=en-GB&:display_count=y&:origin=viz_share_link";
const options = {
  device: "desktop",
  height: 900,
  width: 1500,
};

//Button constants
const hideVizNath = document.getElementById("hideVizNath");
const showVizNath = document.getElementById("showVizNath");
const hideVizGeorgie = document.getElementById("hideVizGeorgie");
const showVizGeorgie = document.getElementById("showVizGeorgie");
const views = document.getElementById("views");

/*
// function for initiating the viz
function initViz() {
  viz = new tableau.Viz(vizContainer, nathUrl1, options);
}
*/

// Initialise viz, dispose first
function initVizNath(vizurl) {
  if (vizNath) {
    vizNath.dispose();
  }
  vizNath = new tableau.Viz(vizContainerNath, vizurl, options);
}

function initVizGeorgie(vizurl) {
  if (vizGeorgie) {
    vizGeorgie.dispose();
  }
  vizGeorgie = new tableau.Viz(vizContainerGeorgie, vizurl, options);
}

// Function to hide viz
function vizHideNath() {
  console.log("viz hiding");
  hideVizNath.style.display = "none";
  showVizNath.style.display = "inline";
  vizNath.hide();
}

hideVizNath.addEventListener("click", vizHideNath);

function vizHideGeorgie() {
  console.log("viz hiding");
  hideVizGeorgie.style.display = "none";
  showVizGeorgie.style.display = "inline";
  vizGeorgie.hide();
}

hideVizGeorgie.addEventListener("click", vizHideGeorgie);

// Function to show viz
function vizShowNath() {
  console.log("viz showing");
  vizContainerNath.style.display = "flex";
  hideVizNath.style.display = "flex";
  showVizNath.style.display = "none";
  vizNath.show();
}

showVizNath.addEventListener("click", vizShowNath);

function vizShowGeorgie() {
  console.log("viz showing");
  vizContainerGeorgie.style.display = "flex";
  hideVizGeorgie.style.display = "flex";
  showVizGeorgie.style.display = "none";
  vizGeorgie.show();
}

showVizGeorgie.addEventListener("click", vizShowGeorgie);

// Swap The Viz
const swapVizNath = document.getElementById("swapVizNath");
const swapViz2Nath = document.getElementById("swapViz2Nath");
swapVizNath.addEventListener("click", function () {
  if (vizNath.getUrl() === nathUrl1) {
    initVizNath(nathUrl1);
  } else {
    initVizNath(nathUrl2);
  }
  swapVizNath.style.display = "none";
  swapViz2Nath.style.display = "inline";
});

swapViz2Nath.addEventListener("click", function () {
  if (vizNath.getUrl() === nathUrl1) {
    initVizNath(nathUrl2);
  } else {
    initVizNath(nathUrl1);
  }
  swapViz2Nath.style.display = "none";
  swapVizNath.style.display = "inline";
});

// Swap The Viz
const swapVizGeorgie = document.getElementById("swapVizGeorgie");
const swapViz2Georgie = document.getElementById("swapViz2Georgie");
swapVizGeorgie.addEventListener("click", function () {
  if (vizGeorgie.getUrl() === georgieUrl1) {
    initVizGeorgie(georgieUrl1);
  } else {
    initVizGeorgie(georgieUrl2);
  }
  swapVizGeorgie.style.display = "none";
  swapViz2Georgie.style.display = "inline";
});

swapViz2Georgie.addEventListener("click", function () {
  if (vizGeorgie.getUrl() === georgieUrl1) {
    initVizGeorgie(georgieUrl2);
  } else {
    initVizGeorgie(georgieUrl1);
  }
  swapViz2Georgie.style.display = "none";
  swapVizGeorgie.style.display = "inline";
});

// Defining when to run the function
//document.addEventListener("DOMContentLoaded", initViz);

initVizNath(nathUrl1);
initVizGeorgie(georgieUrl1);

// Jose

let vizJose;
const vizContainerJose = document.getElementById("vizContainerJose");
const JoseUrl1 =
  "https://public.tableau.com/views/BerlinAirBnB_15608089542210/Dashboard1?:language=en-GB&:display_count=y&:origin=viz_share_link";
const JoseUrl2 =
  "https://public.tableau.com/views/WorldCupGoals_52/WorldCupGoals-Dashboard?:language=en-GB&:display_count=y&:origin=viz_share_link";
const hideVizJose = document.getElementById("hideVizJose");
const showVizJose = document.getElementById("showVizJose");
function initVizJose(vizurl) {
  if (vizJose) {
    vizJose.dispose();
  }
  vizJose = new tableau.Viz(vizContainerJose, vizurl, options);
}

function vizHideJose() {
  console.log("viz hiding");
  hideVizJose.style.display = "none";
  showVizJose.style.display = "inline";
  vizJose.hide();
}

hideVizJose.addEventListener("click", vizHideJose);

function vizShowJose() {
  console.log("viz showing");
  vizContainerJose.style.display = "flex";
  hideVizJose.style.display = "flex";
  showVizJose.style.display = "none";
  vizJose.show();
}

showVizJose.addEventListener("click", vizShowJose);

const swapVizJose = document.getElementById("swapVizJose");
const swapViz2Jose = document.getElementById("swapViz2Jose");
swapVizJose.addEventListener("click", function () {
  if (vizJose.getUrl() === JoseUrl1) {
    initVizJose(JoseUrl1);
  } else {
    initVizJose(JoseUrl2);
  }
  swapVizJose.style.display = "none";
  swapViz2Jose.style.display = "inline";
});

swapViz2Jose.addEventListener("click", function () {
  if (vizJose.getUrl() === JoseUrl1) {
    initVizJose(JoseUrl2);
  } else {
    initVizJose(JoseUrl1);
  }
  swapViz2Jose.style.display = "none";
  swapVizJose.style.display = "inline";
});

initVizJose(JoseUrl1);

// Sarah

let vizSarah;
const vizContainerSarah = document.getElementById("vizContainerSarah");
const SarahUrl1 =
  "https://public.tableau.com/views/ParametersParameterActionsWorkbook/Titleslide?:language=en-GB&:display_count=y&:origin=viz_share_link";
const SarahUrl2 =
  "https://public.tableau.com/views/Week2_PhiladelphiaRealEstateTransactions/Dashboard2?:language=en-GB&:display_count=y&:origin=viz_share_link";
const hideVizSarah = document.getElementById("hideVizSarah");
const showVizSarah = document.getElementById("showVizSarah");
function initVizSarah(vizurl) {
  if (vizSarah) {
    vizSarah.dispose();
  }
  vizSarah = new tableau.Viz(vizContainerSarah, vizurl, options);
}

function vizHideSarah() {
  console.log("viz hiding");
  hideVizSarah.style.display = "none";
  showVizSarah.style.display = "inline";
  vizSarah.hide();
}

hideVizSarah.addEventListener("click", vizHideSarah);

function vizShowSarah() {
  console.log("viz showing");
  hideVizSarah.style.display = "flex";
  showVizSarah.style.display = "none";
  vizContainerSarah.style.display = "flex";
  vizSarah.show();
}

showVizSarah.addEventListener("click", vizShowSarah);

const swapVizSarah = document.getElementById("swapVizSarah");
const swapViz2Sarah = document.getElementById("swapViz2Sarah");
swapVizSarah.addEventListener("click", function () {
  if (vizSarah.getUrl() === SarahUrl1) {
    initVizSarah(SarahUrl1);
  } else {
    initVizSarah(SarahUrl2);
  }
  swapVizSarah.style.display = "none";
  swapViz2Sarah.style.display = "inline";
});

swapViz2Sarah.addEventListener("click", function () {
  if (vizSarah.getUrl() === SarahUrl1) {
    initVizSarah(SarahUrl2);
  } else {
    initVizSarah(SarahUrl1);
  }
  swapViz2Sarah.style.display = "none";
  swapVizSarah.style.display = "inline";
});

initVizSarah(SarahUrl1);

// Ben

let vizBen;
const vizContainerBen = document.getElementById("vizContainerBen");
const BenUrl1 =
  "https://public.tableau.com/views/MessiMoreThanRonaldo/Dashboard1?:language=en-GB&:display_count=y&:origin=viz_share_link";
const BenUrl2 =
  "https://public.tableau.com/views/CuttingOutCoal/Dashboard1?:language=en-GB&:display_count=y&:origin=viz_share_link";
const hideVizBen = document.getElementById("hideVizBen");
const showVizBen = document.getElementById("showVizBen");
function initVizBen(vizurl) {
  if (vizBen) {
    vizBen.dispose();
  }
  vizBen = new tableau.Viz(vizContainerBen, vizurl, options);
}

function vizHideBen() {
  console.log("viz hiding");
  hideVizBen.style.display = "none";
  showVizBen.style.display = "inline";
  vizBen.hide();
}

hideVizBen.addEventListener("click", vizHideBen);

function vizShowBen() {
  console.log("viz showing");
  hideVizBen.style.display = "flex";
  showVizBen.style.display = "none";
  vizContainerBen.style.display = "flex";
  vizBen.show();
}

showVizBen.addEventListener("click", vizShowBen);

const swapVizBen = document.getElementById("swapVizBen");
const swapViz2Ben = document.getElementById("swapViz2Ben");
swapVizBen.addEventListener("click", function () {
  if (vizBen.getUrl() === BenUrl1) {
    initVizBen(BenUrl1);
  } else {
    initVizBen(BenUrl2);
  }
  swapVizBen.style.display = "none";
  swapViz2Ben.style.display = "inline";
});

swapViz2Ben.addEventListener("click", function () {
  if (vizBen.getUrl() === BenUrl1) {
    initVizBen(BenUrl2);
  } else {
    initVizBen(BenUrl1);
  }
  swapViz2Ben.style.display = "none";
  swapVizBen.style.display = "inline";
});

initVizBen(BenUrl1);

// Ruth

let vizRuth;
const vizContainerRuth = document.getElementById("vizContainerRuth");
const RuthUrl1 =
  "https://public.tableau.com/views/InsuranceDashboards_15869392181890/OperationalDashboard?:language=en-GB&:display_count=y&:origin=viz_share_link";
const RuthUrl2 =
  "https://public.tableau.com/views/Parameters-SelectionHighlighting/Parameters-SelectionHighlighting?:language=en-GB&:display_count=y&:origin=viz_share_link";
const hideVizRuth = document.getElementById("hideVizRuth");
const showVizRuth = document.getElementById("showVizRuth");
function initVizRuth(vizurl) {
  if (vizRuth) {
    vizRuth.dispose();
  }
  vizRuth = new tableau.Viz(vizContainerRuth, vizurl, options);
}

function vizHideRuth() {
  console.log("viz hiding");
  hideVizRuth.style.display = "none";
  showVizRuth.style.display = "inline";
  vizRuth.hide();
}

hideVizRuth.addEventListener("click", vizHideRuth);

function vizShowRuth() {
  console.log("viz showing");
  hideVizRuth.style.display = "flex";
  showVizRuth.style.display = "none";
  vizContainerRuth.style.display = "flex";
  vizRuth.show();
}

showVizRuth.addEventListener("click", vizShowRuth);

const swapVizRuth = document.getElementById("swapVizRuth");
const swapViz2Ruth = document.getElementById("swapViz2Ruth");
swapVizRuth.addEventListener("click", function () {
  if (vizRuth.getUrl() === RuthUrl1) {
    initVizRuth(RuthUrl1);
  } else {
    initVizRuth(RuthUrl2);
  }
  swapVizRuth.style.display = "none";
  swapViz2Ruth.style.display = "inline";
});

swapViz2Ruth.addEventListener("click", function () {
  if (vizRuth.getUrl() === RuthUrl1) {
    initVizRuth(RuthUrl2);
  } else {
    initVizRuth(RuthUrl1);
  }
  swapViz2Ruth.style.display = "none";
  swapVizRuth.style.display = "inline";
});

initVizRuth(RuthUrl1);

// Joe

let vizJoe;
const vizContainerJoe = document.getElementById("vizContainerJoe");
const JoeUrl1 =
  "https://public.tableau.com/views/MakoverMondaywk24SameSexRelations/Dashboard1?:language=en-GB&:display_count=y&:origin=viz_share_link";
const JoeUrl2 =
  "https://public.tableau.com/views/MakeoverMondaywk27UKMentalHealth/Dashboard1?:language=en-GB&:display_count=y&:origin=viz_share_link";
const hideVizJoe = document.getElementById("hideVizJoe");
const showVizJoe = document.getElementById("showVizJoe");
function initVizJoe(vizurl) {
  if (vizJoe) {
    vizJoe.dispose();
  }
  vizJoe = new tableau.Viz(vizContainerJoe, vizurl, options);
}

function vizHideJoe() {
  console.log("viz hiding");
  hideVizJoe.style.display = "none";
  showVizJoe.style.display = "inline";
  vizJoe.hide();
}

hideVizJoe.addEventListener("click", vizHideJoe);

function vizShowJoe() {
  console.log("viz showing");
  hideVizJoe.style.display = "flex";
  showVizJoe.style.display = "none";
  vizContainerJoe.style.display = "flex";
  vizJoe.show();
}

showVizJoe.addEventListener("click", vizShowJoe);

const swapVizJoe = document.getElementById("swapVizJoe");
const swapViz2Joe = document.getElementById("swapViz2Joe");
swapVizJoe.addEventListener("click", function () {
  if (vizJoe.getUrl() === JoeUrl1) {
    initVizJoe(JoeUrl1);
  } else {
    initVizJoe(JoeUrl2);
  }
  swapVizJoe.style.display = "none";
  swapViz2Joe.style.display = "inline";
});

swapViz2Joe.addEventListener("click", function () {
  if (vizJoe.getUrl() === JoeUrl1) {
    initVizJoe(JoeUrl2);
  } else {
    initVizJoe(JoeUrl1);
  }
  swapViz2Joe.style.display = "none";
  swapVizJoe.style.display = "inline";
});

initVizJoe(JoeUrl1);

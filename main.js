console.clear();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

loginBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode.parentNode;
  Array.from(e.target.parentNode.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      signupBtn.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

// Email domain mapping for schools
const schoolEmailDomains = {
  Ecam: "ecam.be",
  EPHEC: "ephec.be",
  ErasmushogeschoolBrussel: "erasmushogeschool.be",
  HE2B: "he2b.be",
  HEFranciscoFerrer: "he-ferrer.eu",
  HEG: "galilee.be",
  HEIchec: "ichec.be",
  HELB: "helb-prigogine.be",
  HELdB: "heldb.be",
  HEVinci: "vinci.be",
  UCLouvainBruxellesWoluwe: "uclouvain.be",
  USaintLouis: "usaintlouis.be",
  ULB: "ulb.be",
};

// Update email placeholder when school is selected
const schoolSelect = document.getElementById("school");
const emailInputs = document.querySelectorAll('input[type="email"]');

if (schoolSelect) {
  schoolSelect.addEventListener("change", (e) => {
    const selectedSchool = e.target.value;
    const domain = schoolEmailDomains[selectedSchool];

    if (domain) {
      emailInputs.forEach((input) => {
        input.placeholder = `email@${domain}`;
      });
    }
  });

  // Set initial placeholder based on default selection
  const initialSchool = schoolSelect.value;
  const initialDomain = schoolEmailDomains[initialSchool];
  if (initialDomain) {
    emailInputs.forEach((input) => {
      input.placeholder = `email@${initialDomain}`;
    });
  }
}

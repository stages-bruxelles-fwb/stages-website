console.clear();

const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");

if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;
    Array.from(e.target.parentNode.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        if (signupBtn && signupBtn.parentNode) {
          signupBtn.parentNode.classList.add("slide-up");
        }
        parent.classList.remove("slide-up");
      }
    });
  });
}

if (signupBtn) {
  signupBtn.addEventListener("click", (e) => {
    let parent = e.target.parentNode;
    Array.from(e.target.parentNode.classList).find((element) => {
      if (element !== "slide-up") {
        parent.classList.add("slide-up");
      } else {
        if (loginBtn && loginBtn.parentNode && loginBtn.parentNode.parentNode) {
          loginBtn.parentNode.parentNode.classList.add("slide-up");
        }
        parent.classList.remove("slide-up");
      }
    });
  });
}

// Email domain mapping for schools
const schoolEmailDomains = {
  "Pas d'école sélectionnée": "",
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

function updateEmailPlaceholders() {
  if (schoolSelect && emailInputs.length > 0) {
    const selectedSchool = schoolSelect.value;
    const domain = schoolEmailDomains[selectedSchool];

    if (domain) {
      emailInputs.forEach((input) => {
        input.placeholder = `email@${domain}`;
      });
    } else {
      emailInputs.forEach((input) => {
        input.placeholder = "Email";
      });
    }
  }
}

if (schoolSelect) {
  // Update on change
  schoolSelect.addEventListener("change", updateEmailPlaceholders);

  // Set initial placeholder
  updateEmailPlaceholders();
}

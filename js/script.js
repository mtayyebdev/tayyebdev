//  navbar logic.................................
const navbarOpenBtn = document.getElementById("navbarOpen");
const navbarCloseBtn = document.getElementById("navbarClose");
const navbar = document.getElementById("navbar");

navbarOpenBtn.addEventListener("click", () => {
  navbar.classList.remove("hidden");
  navbar.classList.add("flex");
});
navbarCloseBtn.addEventListener("click", () => {
  navbar.classList.remove("flex");
  navbar.classList.add("hidden");
});

// logic for header....................................
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("bg-gray-900/75");
  } else {
    header.classList.remove("bg-gray-900/75");
  }
});

// logic for footer.......................................
const year_box = document.getElementById("year");

const today = new Date();
year_box.innerHTML = today.getFullYear();

// logic for portfolio sec....................................
let projects_data = [
  {
    image: "./public/project1.jpg",
    title: "Shop Creator",
  },
  {
    image: "./public/project2.png",
    title: "E Commerce Store",
  },
  {
    image: "./public/project3.jpg",
    title: "Space Stories",
  },
  {
    image: "./public/project4.jpg",
    title: "AI Site Developer",
  },
];

const portfolio_container = document.getElementById("project-container");
let isOpen = false;

projects_data.map(
  (data, i) =>
    (portfolio_container.innerHTML += `
    <div class="w-full port-card shadow-md" key="${i}">
        <img
          src="${data.image}"
          class="w-full h-[250px] project cursor-pointer"
          alt=""
          loading="lazy"
        />
        <div class="p-2">
          <h2 class="text-xl font-semibold">${data.title}</h2>
        </div>
      </div>
  `)
);

const images = document.querySelectorAll(".project");
const img_project = document.getElementById("img-project");
const project_dev = document.getElementById("project-dev");
const close_project_btn = document.getElementById("close-project");

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    console.log(e.target.currentSrc);
    project_dev.classList.remove("hidden");
    project_dev.classList.add("fixed", "flex");
    img_project.src = e.target.currentSrc;
    isOpen = true;
  });
});

close_project_btn.addEventListener("click", () => {
  if (isOpen) {
    project_dev.classList.remove("fixed", "flex");
    project_dev.classList.add("hidden");
  }
});

// contact form handling logic..........................................
const formBtn = document.getElementById("form_submit");
const username = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const userType = document.getElementById("userType");
const email_message = document.getElementById("email_message");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let loading = false;

formBtn.addEventListener("click", () => {
  if (!username.value || !email.value || !message.value || !userType.value) {
    return (email_message.innerHTML = `<p class="text-yellow-600 mt-1 text-lg">Warning: Please fill all fields.</p>`);
  }

  if (!emailRegex.test(email.value)) {
    return (email_message.innerHTML = `<p class="text-yellow-600 mt-1 text-lg">Warning: Invalid Email.</p>`);
  }

  // Send email using EmailJS
  loading = true;
  if (loading) {
    email_message.innerHTML = `<p class="text-green-600 mt-1 text-lg">Loading...</p>`;
  } else {
    email_message.innerHTML = `<p class="text-yellow-600 mt-1 text-lg"></p>`;
  }
  emailjs
    .send("service_d0ris9i", "template_qoqjf8y", {
      name: username.value,
      email: email.value,
      user_type: userType.value,
      message: message.value,
    })
    .then(
      function (response) {
        email_message.innerHTML = `<p class="text-green-600 mt-1 text-lg">Success: Email sent successfully!</p>`;
        console.log("SUCCESS!", response.status, response.text);
        username.value = "";
        email.value = "";
        message.value = "";
        userType.value = "";
        loading = false;
      },
      function (error) {
        email_message.innerHTML = `<p class="text-red-600 mt-1 text-lg">Error: Failed to send email. Please try again.</p>`;
        console.log("FAILED...", error);
        loading = false;
      }
    );
});

//  download cv logic...........................................
const downloadCV = document.getElementById("downloadCV");

downloadCV.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "../public/Muhammad_Tayyeb.pdf";
  link.download = "Muhammad_Tayyeb_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// GSAP animation logic.............................................
let hero = gsap.timeline();

hero.from(
  "#header",
  {
    duration: 1,
    opacity: 0,
    scrub: 2,
    y: -100,
  },
  "hero"
);
hero.from(
  "#hero_right",
  {
    duration: 1,
    opacity: 0,
    scrub: 2,
    y: 300,
  },
  "hero"
);
hero.from(
  "#hero_left",
  {
    duration: 1,
    opacity: 0,
    scrub: 2,
    x: -300,
  },
  "hero"
);
hero.from(
  "#hero_heading",
  {
    duration: 1,
    opacity: 0,
    scrub: 2,
    y: -100,
  },
  "hero"
);
hero.from(
  "#hero_btn",
  {
    duration: 1,
    opacity: 0,
    scrub: 2,
    y: 100,
  },
  "hero"
);
hero.from("#hero_line", {
  duration: 1,
  opacity: 0,
  scrub: 2,
  x: -300,
});

let about = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top 90%",
    end: "30% 80%",
    scrub: 1,
    // markers:true,
    // scroller: "body"
  },
});

about.from("#about", {
  y: 50,
  opacity: 0,
  duration: 2,
});

about.from("#about .h1-title", {
  y: -50,
  opacity: 0,
  duration: 2,
});
about.from("#about .line", {
  x: -300,
  opacity: 0,
  duration: 2,
});
about.from(
  "#about .left",
  {
    x: -300,
    opacity: 0,
    duration: 3,
  },
  "about"
);
about.from(
  "#about .about-desc",
  {
    y: -200,
    opacity: 0,
    duration: 3,
  },
  "about"
);

let portfolio = gsap.timeline({
  scrollTrigger: {
    trigger: "#porfolio",
    start: "28% 90%",
    end: "30% 80%",
    scrub: 1,
    // markers: true,
    // scroller: "body"
  },
});

portfolio.from("#portfolio", {
  y: 50,
  opacity: 0,
  duration: 2,
});

portfolio.from("#portfolio .h1-title", {
  y: -50,
  opacity: 0,
  duration: 2,
});
portfolio.from("#portfolio .line", {
  x: -300,
  opacity: 0,
  duration: 2,
});
portfolio.from("#portfolio .p-desc", {
  y: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#porfolio",
    start: "29% 90%",
    end: "31% 80%",
    scrub: 1,
    // markers: true,
    // scroller: "body"
  },
});

portfolio.from("#project-container .port-card", {
  x: -300,
  rotate: -50,
  opacity: 0,
  duration: 2,
  // stagger:1,
  scrollTrigger: {
    trigger: "#porfolio",
    start: "33% 90%",
    end: "35% 80%",
    scrub: 1,
    // markers: true,
    // pin:true,
    // scroller: "body"
  },
});

let skills = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    start: "-3% 90%",
    end: "0% 80%",
    scrub: 1,
    // markers: true,
    // scroller: "body"
  },
});

skills.from("#skills", {
  y: 50,
  opacity: 0,
  duration: 2,
});

skills.from("#skills .h1-title", {
  y: -50,
  opacity: 0,
  duration: 2,
});
skills.from("#skills .line", {
  x: -300,
  opacity: 0,
  duration: 2,
});
skills.from("#skills .skills-desc", {
  y: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#skills",
    start: "5% 90%",
    end: "13% 80%",
    scrub: 1,
    // markers: true,
    // scroller: "body"
  },
});

skills.from("#skills .skills-card", {
  x: -300,
  rotate: -50,
  opacity: 0,
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: "#skills",
    start: "20% 90%",
    end: "60% 90%",
    scrub: 1,
    // markers: true,
    // pin:true,
    // scroller: "body"
  },
});

let contact = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "-3% 90%",
    end: "0% 80%",
    scrub: 1,
    // markers: true,
    // scroller: "body"
  },
});

contact.from("#contact", {
  y: 50,
  opacity: 0,
  duration: 2,
});

contact.from("#contact .h1-title", {
  y: -50,
  opacity: 0,
  duration: 2,
});
contact.from("#contact .line", {
  x: -300,
  opacity: 0,
  duration: 2,
});
contact.from("#contact .contact-desc", {
  y: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#contact",
    start: "5% 90%",
    end: "13% 80%",
    scrub: 1,
    // markers: true,
    // scroller: "body"
  },
});

contact.from("#contact .c-field", {
  x: -300,
  rotate: -50,
  opacity: 0,
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: "#contact",
    start: "30% 90%",
    end: "70% 90%",
    scrub: 1,
    // markers: true,
    // pin:true,
    // scroller: "body"
  },
});
contact.from("#contact .c-btn", {
  x: -300,
  rotate: -50,
  opacity: 0,
  duration: 2,
  stagger: 1,
  scrollTrigger: {
    trigger: "#contact",
    start: "85% 90%",
    end: "90% 90%",
    scrub: 1,
    // markers: true,
    // pin:true,
    // scroller: "body"
  },
});

let testmonial = gsap.timeline({
  scrollTrigger: {
    trigger: "#testamonials",
    start: "-3% 90%",
    end: "0% 80%",
    scrub: 1,
    // markers: true,
    // scroller: "body"
  },
});

testmonial.from("#testamonials", {
  y: 50,
  opacity: 0,
  duration: 2,
});

testmonial.from("#testamonials .h1-title", {
  y: -50,
  opacity: 0,
  duration: 2,
});
testmonial.from("#testamonials .line", {
  x: -300,
  opacity: 0,
  duration: 2,
});
testmonial.from("#testamonials .test-desc", {
  y: 200,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#testamonials",
    start: "7% 90%",
    end: "19% 80%",
    scrub: 1,
    // markers: true,
    // scroller: "body"
  },
});
testmonial.from(
  "#testamonials .test-card1",
  {
    x: -300,
    opacity: 0,
    duration: 2,
    // rotate:-50,
    scrollTrigger: {
      trigger: "#testamonials",
      start: "35% 90%",
      end: "45% 80%",
      scrub: 1,
      // markers: true,
      // scroller: "body"
    },
  },
  "test-card"
);
testmonial.from(
  "#testamonials .test-card2",
  {
    y: -200,
    opacity: 0,
    duration: 2,
    // rotate:50,
    scrollTrigger: {
      trigger: "#testamonials",
      start: "35% 90%",
      end: "45% 80%",
      scrub: 1,
      // markers: true,
      // scroller: "body"
    },
  },
  "test-card"
);

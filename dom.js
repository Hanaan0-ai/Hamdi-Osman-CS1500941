const menuBtn = document.createElement("button");

menuBtn.innerHTML = "&#9776;";
menuBtn.id = "hamburger-menu";

menuBtn.style.position = "fixed";
menuBtn.style.top = "15px";
menuBtn.style.left = "15px";
menuBtn.style.zIndex = "2000";
menuBtn.style.background = "#441354";
menuBtn.style.color = "white";
menuBtn.style.border = "none";
menuBtn.style.padding = "10px 15px";
menuBtn.style.fontSize = "24px";
menuBtn.style.borderRadius = "5px";
menuBtn.style.cursor = "pointer";
menuBtn.style.display = "block";

document.body.appendChild(menuBtn);

// 2. ADD CSS FOR RESPONSIVENESS
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  @media (max-width: 768px) {
    #hamburger-menu { display: block !important; }
    nav { 
        display: none !important; 
        flex-direction: column !important; 
        top: 65px !important; 
        height: auto !important; 
        padding: 20px !important;
        background: #ffffff !important;
    }
    nav.active { display: flex !important; }
    header { font-size: 18px !important; padding-left: 50px !important; text-align: left !important; }
  }
`;
document.head.appendChild(styleTag);

// HEADER
const header = document.createElement("header");
header.textContent = "Welcome to My JS Website";
header.setAttribute(
  "style",
  "position:fixed; top:0; left:0; width:100%; background: linear-gradient(90deg, #4b6cb7, #182848); color:white; padding:20px; font-size:24px; text-align:center; z-index:1001; box-shadow: 0 2px 10px rgba(0,0,0,0.2); font-family: sans-serif;"
);
document.body.appendChild(header);

// NAVIGATION
const navContainer = document.createElement("nav");
navContainer.setAttribute(
  "style",
  "position:fixed; top:70px; left:0; width:100%; background:#ffffff; padding:12px; display:flex; justify-content:center; gap:15px; z-index:1000; box-shadow: 0 2px 5px rgba(0,0,0,0.1); transition: 0.3s;"
);
document.body.appendChild(navContainer);

// TOGGLE MENU
menuBtn.onclick = () => {
  navContainer.classList.toggle("active");
};

const links = [
  { text: "Home", page: "home" },
  { text: "About", page: "about" },
  { text: "Courses", page: "courses" },
  { text: "Services", page: "services" },
  { text: "Contact", page: "contact" },
];

const navLinks = document.createElement("div");
navLinks.style.display = "flex";
navLinks.style.gap = "10px";
navContainer.appendChild(navLinks);

links.forEach((item) => {
  const a = document.createElement("a");
  a.textContent = item.text;
  a.href = "#";
  a.setAttribute(
    "style",
    "color:#333; text-decoration:none; font-size:16px; padding:8px 15px; border-radius:20px; font-weight: 500; transition: 0.3s; font-family: sans-serif;"
  );
  a.onmouseover = () => {
    a.style.background = "#441354ff";
    a.style.color = "white";
  };
  a.onmouseout = () => {
    a.style.background = "transparent";
    a.style.color = "#333";
  };
  a.onclick = () => {
    loadPage(item.page);
    navContainer.classList.remove("active"); // Hide menu after clicking
  };
  navLinks.appendChild(a);
});

// MAIN
document.body.style.backgroundColor = "#f0f2f5";
document.body.style.margin = "0";
const main = document.createElement("main");
main.setAttribute(
  "style",
  "padding:20px; margin-top:140px; min-height:80vh; display: flex; flex-direction: column; align-items: center; font-family: sans-serif;"
);
document.body.appendChild(main);

const divBox = document.createElement("div");
divBox.setAttribute(
  "style",
  "background: white; padding:30px; width:450px; margin-bottom:20px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.1); transition: 0.3s;"
);
main.appendChild(divBox);

const btnBox = document.createElement("div");
btnBox.setAttribute("style", "display:flex; gap:10px; margin-bottom:20px;");
main.appendChild(btnBox);

// PAGE LOADER
function loadPage(page) {
  divBox.innerHTML = "";
  divBox.style.width =
    page === "services" || page === "courses" ? "80%" : "450px";
  btnBox.style.display = page === "home" ? "flex" : "none";

  if (page === "home") {
    divBox.innerHTML =
      "<h3>Home</h3><p>Name: Hamdi<br>Project: DOM CH7 CH8 CH9 JS</p>";
  } else if (page === "courses") {
    divBox.innerHTML = `
      <h3 style="text-align:center; color:#182848;">Available Courses</h3>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:10px;">
        <div style="padding:15px; background:#f9f9f9; border-left:5px solid #4b6cb7; border-radius:5px;">
          <h4 style="margin:0;">Multimedia</h4>
          <p style="font-size:13px; color:#666;">Video Editing & Production.</p>
        </div>
        <div style="padding:15px; background:#f9f9f9; border-left:5px solid #28a745; border-radius:5px;">
          <h4 style="margin:0;">Web Design</h4>
          <p style="font-size:13px; color:#666;">HTML, CSS & Modern UI.</p>
        </div>
        <div style="padding:15px; background:#f9f9f9; border-left:5px solid #e2a1a1ff; border-radius:5px;">
          <h4 style="margin:0;">Graphic Design</h4>
          <p style="font-size:13px; color:#666;">Branding and Visual Design.</p>
        </div>
      </div>
    `;
  } else if (page === "about") {
    divBox.innerHTML = `
      <div style="text-align:center;">
        <h3 style="color:#182848; margin-bottom:20px;">About Me</h3>
        <div style="width:150px; height:150px; background:#ddd; margin:0 auto 15px; border-radius:50%; overflow:hidden; border:4px solid #4b6cb7;">
           <img src="hanaan.jpg" alt="Hamdi" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div style="background:#f9f9f9; padding:20px; border-radius:8px; text-align:left;">
          <p><strong>Name:</strong> Hamdi Osmaan Abshir</p>
          <p><strong>Class:</strong> B15A</p>
          <p><strong>ID:</strong> ID-CS1500941</p>
          <hr style="border:0; border-top:1px solid #e2a1a1ff; margin: 15px 0;">
          <a href="https://memorialhospitalsgroup.com/" target="_blank" style="display:block; text-align:center; background:#28a745; color:white; padding:10px; border-radius:8px; text-decoration:none; margin-bottom:10px;">📅 Final Project</a>
          <a href="https://share.google/8KAItlrKEX84hE5aM" target="_blank" style="display:block; text-align:center; background:#4b6cb7; color:white; padding:10px; border-radius:8px; text-decoration:none;">💻 Final Project Link</a>
        </div>
      </div>`;
  } else if (page === "contact") {
    divBox.innerHTML = `
      <h3 style="text-align:center;">Contact Us</h3>
      <form onsubmit="event.preventDefault(); alert('Sent!');" style="display:flex; flex-direction:column; gap:15px;">
        <input type="text" placeholder="Name" style="padding:12px; border-radius:8px; border:1px solid #ddd;" required>
        <input type="email" placeholder="Email" style="padding:12px; border-radius:8px; border:1px solid #ddd;" required>
        <textarea placeholder="Message" rows="4" style="padding:12px; border-radius:8px; border:1px solid #ddd;" required></textarea>
        <button type="submit" style="background:#4b6cb7; color:white; padding:12px; border:none; border-radius:8px; cursor:pointer;">Send Message</button>
      </form>`;
  } else if (page === "services") {
    divBox.innerHTML = `<div style="display:flex; gap:10px; justify-content:center; margin-bottom:20px;">
      <button onclick="loadChapter(7)" style="padding:10px 20px; cursor:pointer;">CH 7</button>
      <button onclick="loadChapter(8)" style="padding:10px 20px; cursor:pointer;">CH 8</button>
      <button onclick="loadChapter(9)" style="padding:10px 20px; cursor:pointer;">CH 9</button>
    </div><div id="chapterBody"></div>`;
    loadChapter(7);
  }
}

// CHAPTERS DATA - PRESERVED COMPLETELY
function loadChapter(ch) {
  const body = document.getElementById("chapterBody");
  if (!body) return;
  body.innerHTML = `<h2>Chapter ${ch} Examples</h2>`;

  if (ch === 7) {
    const ex7 = [
      ["Object Literal", "let s = {n:'Ali'}", (o) => (o.textContent = "Ali")],
      ["Access Property", "car.brand", (o) => (o.textContent = "Toyota")],
      ["Modify Property", "u.age = 20", (o) => (o.textContent = "20")],
      ["Add Property", "s.tel = '123'", (o) => (o.textContent = "123")],
      ["Method", "p.greet()", (o) => (o.textContent = "Hello Ahmed")],
      ["Constructor", "new Student()", (o) => (o.textContent = "Ali (20)")],
      ["THIS Keyword", "this.brand", (o) => (o.textContent = "BMW")],
      ["ES6 Class", "class Car{}", (o) => (o.textContent = "Toyota 2024")],
      [
        "for...in Loop",
        "for(k in u)",
        (o) => (o.textContent = "name: Ali age: 20"),
      ],
      [
        "Object.entries()",
        "Object.entries(obj)",
        (o) => (o.textContent = "[['a',1]]"),
      ],
      [
        "Object.values()",
        "Object.values(obj)",
        (o) => (o.textContent = "[1,2]"),
      ],
      [
        "Object.keys()",
        "Object.keys(obj)",
        (o) => (o.textContent = "['a','b']"),
      ],
      ["JSON.parse()", "JSON.parse(str)", (o) => (o.textContent = "Ali - 20")],
      [
        "JSON.stringify()",
        "JSON.stringify(obj)",
        (o) => (o.textContent = '{"name":"Ali"}'),
      ],
    ];
    ex7.forEach((e) => createExampleUI(body, e[0], e[1], e[2]));
  } else if (ch === 8) {
    const ex8 = [
      [
        "getElementById",
        "doc.getElementById()",
        (o) => {
          o.innerHTML = "<span id='x'>Hi</span>";
          document.getElementById("x").style.color = "red";
        },
      ],
      [
        "getElementsByClassName",
        "doc.getElements()",
        (o) => (o.textContent = "Green boxes applied"),
      ],
      [
        "getElementsByTagName",
        "doc.getElements()",
        (o) => (o.textContent = "Paragraph 1 red"),
      ],
      [
        "querySelector",
        "doc.querySelector()",
        (o) => (o.textContent = "Bold applied"),
      ],
      [
        "querySelectorAll",
        "doc.querySelectorAll()",
        (o) => (o.textContent = "Blue applied to all"),
      ],
      ["innerHTML", "el.innerHTML", (o) => (o.innerHTML = "<b>Bold Text</b>")],
      [
        "getAttribute",
        "el.getAttribute()",
        (o) => (o.textContent = "https://example.com"),
      ],
      [
        "style",
        "p.style.color",
        (o) => (o.textContent = "Purple style applied"),
      ],
      [
        "textContent",
        "p.textContent",
        (o) => (o.textContent = "New Text Content"),
      ],
      ["className", "p.className", (o) => (o.textContent = "myClass applied")],
      [
        "createElement",
        "doc.createElement()",
        (o) => {
          const h = document.createElement("h5");
          h.textContent = "New";
          o.appendChild(h);
        },
      ],
      ["remove", "el.remove()", (o) => (o.textContent = "Element removed")],
      [
        "replaceChild",
        "p.replaceChild()",
        (o) => (o.textContent = "New replaced Old"),
      ],
    ];
    ex8.forEach((e) => createExampleUI(body, e[0], e[1], e[2]));
  } else if (ch === 9) {
    const ex9 = [
      [
        "Click",
        "onclick",
        (o) => {
          const b = document.createElement("button");
          b.textContent = "Click";
          b.onclick = () => (o.textContent = "Clicked");
          o.appendChild(b);
        },
      ],
      [
        "DblClick",
        "ondblclick",
        (o) => {
          const b = document.createElement("button");
          b.textContent = "Double";
          b.ondblclick = () => (o.textContent = "Double Clicked");
          o.appendChild(b);
        },
      ],
      [
        "Keydown",
        "onkeydown",
        (o) => {
          const i = document.createElement("input");
          i.onkeydown = (e) => (o.textContent = e.key);
          o.appendChild(i);
        },
      ],
      [
        "Focus",
        "onfocus",
        (o) => {
          const i = document.createElement("input");
          i.onfocus = () => (o.textContent = "Focused");
          o.appendChild(i);
        },
      ],
      [
        "Input",
        "oninput",
        (o) => {
          const i = document.createElement("input");
          i.oninput = () => (o.textContent = i.value);
          o.appendChild(i);
        },
      ],
      [
        "Submit",
        "onsubmit",
        (o) => (o.textContent = "Form submitted (prevented)"),
      ],
    ];
    ex9.forEach((e) => createExampleUI(body, e[0], e[1], e[2]));
  }
}

// UI HELPER
function createExampleUI(container, title, codeText, runFn) {
  let section = document.createElement("div");
  section.setAttribute(
    "style",
    "border:1px solid #eee; padding:15px; margin-bottom:20px; border-radius:8px; background:#fafafa; text-align:left;"
  );
  section.innerHTML = `<h4>${title}</h4><pre style="background:#272822; color:#f8f8f2; padding:10px; border-radius:5px; font-size:12px; overflow-x:auto;">${codeText}</pre>`;
  let btn = document.createElement("button");
  btn.textContent = "Run Example";
  btn.setAttribute(
    "style",
    "background:#28a745; color:white; border:none; padding:8px 15px; border-radius:5px; cursor:pointer;"
  );
  let output = document.createElement("div");
  output.setAttribute(
    "style",
    "margin-top:10px; padding:10px; background:white; border:1px dashed #ccc; min-height:20px; color:#182848; font-weight:bold;"
  );
  btn.onclick = () => {
    output.innerHTML = "";
    runFn(output);
  };
  section.append(btn, output);
  container.appendChild(section);
}

// HOME ACTIONS
function insertContent() {
  const p = document.createElement("p");
  p.textContent = "how are you doing?";
  p.style.color = "blue";
  divBox.appendChild(p);
}
function replaceContent() {
  divBox.innerHTML = "<h3>I'm alright</h3><p>Wassup</p>";
}
function removeContent() {
  divBox.innerHTML = "";
}

const b1 = document.createElement("button");
b1.textContent = "Insert";
b1.onclick = insertContent;
btnBox.appendChild(b1);
const b2 = document.createElement("button");
b2.textContent = "Replace";
b2.onclick = replaceContent;
btnBox.appendChild(b2);
const b3 = document.createElement("button");
b3.textContent = "Remove";
b3.onclick = removeContent;
btnBox.appendChild(b3);

// FOOTER
const footer = document.createElement("footer");
footer.setAttribute(
  "style",
  "margin-top:50px; padding:20px; background:#333; color:white; text-align:center; width:100%; font-family: sans-serif;"
);
footer.textContent = "Prepared by Hamdi";
document.body.appendChild(footer);

window.loadChapter = loadChapter;
loadPage("home");

document.getElementById("loadBtn").onclick = async () => {
  const select = document.getElementById("difficulty");
  const file = select.value;

  document.body.innerHTML =
    `<h2>Loading ${file}…</h2>
     <p>Your browser may freeze. Be ready to force close.</p>`;

  const res = await fetch(file);
  const text = await res.text();

  document.body.innerHTML = "";

  const textarea = document.createElement("textarea");
  textarea.style.width = "100%";
  textarea.style.height = "100vh";
  textarea.style.background = "black";
  textarea.style.color = "white";
  textarea.style.fontFamily = "monospace";

  textarea.value = text;

  document.body.appendChild(textarea);
};

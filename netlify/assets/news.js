async function loadNews(){
  const box = document.getElementById("news-list");
  try{
    const res = await fetch("/.netlify/functions/fetch-news");
    const data = await res.json();
    box.innerHTML = (data.items||[]).map(i =>
      `<li><a href="${i.link}" target="_blank" rel="noopener">${i.title}</a></li>`
    ).join("") || "No headlines right now.";
  }catch{ box.textContent = "Failed to load headlines."; }
}
document.addEventListener("DOMContentLoaded", loadNews);

document.addEventListener("DOMContentLoaded", () => {
  fetch("messages.json")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("message-list");
      data.messages.forEach(msg => {
        const div = document.createElement("div");
        div.className = "message";
        div.innerHTML = `
          <div class="meta"><strong>${msg.author}</strong> • ${msg.timestamp}</div>
          <div class="content">${msg.content}</div>
        `;
        list.appendChild(div);
      });
    });
});

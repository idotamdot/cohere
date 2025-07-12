document.addEventListener("DOMContentLoaded", () => {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  if (Notification.permission === "granted") {
    new Notification("📬 COHERE", {
      body: "New message from ChatGPT has arrived.",
      icon: "https://img.icons8.com/fluency/48/000000/chat.png"
    });
  }
});

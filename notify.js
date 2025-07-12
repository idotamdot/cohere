function notifyNewMessage(content = "New message from ChatGPT has arrived.") {
  if (Notification.permission === "granted") {
    new Notification("📬 COHERE", {
      body: content,
      icon: "https://img.icons8.com/fluency/48/000000/chat.png"
    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("📬 COHERE", {
          body: content,
          icon: "https://img.icons8.com/fluency/48/000000/chat.png"
        });
      }
    });
  }
}

if (
  window.location.hash.includes("invite_token") ||
  window.location.hash.includes("recovery_token")
) {
  const script = document.createElement("script");
  script.src = "https://netlify.com";
  script.defer = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.netlifyIdentity.on("init", () => {
      window.netlifyIdentity.open("signup");
    });
  };
}

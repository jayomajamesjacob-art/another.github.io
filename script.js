function openLink(url) {
    window.open(url, "_blank");
}
    
// Style buttons dynamically
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".icon-btn");

    buttons.forEach((btn, index) => {
        // Base style
        btn.style.width = "60px";
        btn.style.height = "60px";
        btn.style.borderRadius = "50%";
        btn.style.border = "none";
        btn.style.display = "flex";
        btn.style.alignItems = "center";
        btn.style.justifyContent = "center";
        btn.style.fontSize = "24px";
        btn.style.cursor = "pointer";
        btn.style.transition = "all 0.3s ease";
        btn.style.background = "rgba(255,255,255,0.15)";
        btn.style.backdropFilter = "blur(10px)";
        btn.style.color = "white";
        btn.style.boxShadow = "0 0 15px rgba(255,255,255,0.3)";

        // Hover animation
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.2) rotate(10deg)";
            btn.style.boxShadow = "0 0 25px #00f2ff";
            btn.style.background = "#00f2ff";
            btn.style.color = "black";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1) rotate(0deg)";
            btn.style.boxShadow = "0 0 15px rgba(255,255,255,0.3)";
            btn.style.background = "rgba(255,255,255,0.15)";
            btn.style.color = "white";
        });

        // Floating animation
        btn.style.animation = `float${index} 3s ease-in-out infinite`;

        const styleSheet = document.createElement("style");
        styleSheet.innerHTML = `
            @keyframes float${index} {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-6px); }
                100% { transform: translateY(0px); }
            }
        `;
        document.head.appendChild(styleSheet);
    });
});
/* BACKGROUND */
window.addEventListener("DOMContentLoaded", () => {
    VANTA.WAVES({
        el: "#background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0x3c3c3c,
        shininess: 80,
        waveHeight: 11,
        waveSpeed: 0.3,
        zoom: 0.65
    });
});


/* CERTIFICATE MODAL */
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".cert-img");

    if (modal && modalImg && closeBtn && images.length > 0) {

        images.forEach(img => {
            img.addEventListener("click", function () {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
const megaMenu = document.querySelector(".mega-menu");
const test = document.querySelector(".test");
const landing = document.querySelector(".landing");

// تأكد من أنماط أولية لـ megaMenu
megaMenu.style.transition = "top 0.5s ease-in-out, opacity 0.5s ease-in-out;";
megaMenu.style.opacity = 0;
megaMenu.style.top = "calc(100% + 50px)"; // اضبط حسب الحاجة
megaMenu.style.visibility = "hidden";

function toggleMegaMenu() {
  test.classList.toggle("block");

  if (test.classList.contains("block")) {
    megaMenu.style.opacity = 1;
    megaMenu.style.top = "calc(100% + 1px)";
    megaMenu.style.zIndex = "100";
    megaMenu.style.visibility = "visible";
  } else {
    megaMenu.style.opacity = 0;
    megaMenu.style.top = "calc(100% + 50px)";
    megaMenu.style.zIndex = "-1";
    megaMenu.style.visibility = "hidden";
    test.classList.remove("block");
  }
}
// قم بتوصيل مستمع الحدث
landing.addEventListener("click", () => {
  megaMenu.style.opacity = 0;
  megaMenu.style.top = "calc(100% + 50px)";
  megaMenu.style.zIndex = "-1";
  megaMenu.style.visibility = "hidden";
  test.classList.toggle("block");
});

test.addEventListener("click", toggleMegaMenu);

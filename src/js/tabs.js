const tabs = document.querySelectorAll(".tab");
// Tabs

const contents = document.querySelectorAll(".content");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    for (let j = 0; j < contents.length; j++) {
      contents[j].classList.remove("content--active");
    }
    for (let jj = 0; jj < tabs.length; jj++) {
      tabs[jj].classList.remove("tab--active");
    }
    contents[i].classList.add("content--active");
    tabs[i].classList.add("tab--active");
  });
}

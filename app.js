window.addEventListener('load', function () {
    const elements = document.querySelectorAll('.container-dashboard > *');
    elements.forEach(function (element) {
        element.classList.add('fade-in');
    });
});

let showMore = false;

function toggleProjects() {
  const additionalProjectsContainer = document.getElementById("additionalProjectsContainer");
  additionalProjectsContainer.classList.toggle("show");
  showMore = !showMore;

  const viewMoreButton = document.getElementById("viewMoreButton");
  if (showMore) {
    viewMoreButton.textContent = "Show Less";
  } else {
    viewMoreButton.textContent = "Show More Projects";
  }
}

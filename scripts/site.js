function clearForm() {
  //document.getElementById("name").value = '';
  document.getElementById("contactform").reset();
}
function hidePTags() {
  //ptags is a variable and it stores all p tags in the document and also called html collection
  let ptags = document.getElementsByTagName("p");
  for (let item of ptags) {
    //item.style.visibility = "hidden"; //removes element but still takes up space
    item.style.display = "none"; // while this removes element and does not take up space
  }
}
$("#JqueryBtn").click(function () {
  $("p").hide();
});



$(function () {
  //This is me defining an array of pages that I have in my website
  var pages = ["index.", "about", "contact"];
  // And this is me defining a pathname variable that stores the path of the current page that I am on
  var pathname = window.location.pathname;
  //This is me looking through every navlink on my page and for each execute this function
  $(".nav-link").each(function (item) {
    if (pathname.includes(pages[item])) {
      // And this is me adding the active class to the navlink that matches the page I am on
      $(this).addClass("active");
      $(this).attr("aria-current", "page");
    }
  })
});

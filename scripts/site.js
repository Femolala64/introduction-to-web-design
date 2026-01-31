function clearForm(){
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

document.querySelectorAll("#like")
.forEach(function(el) {  
   el.addEventListener("click",
    function() {
      if (this.classList.contains("active")== false)
        this.classList.add("active");
      else this.removeAttribute("class");
    });
});
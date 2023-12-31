


  $("#upload").on("change", function (e) {
    e.preventDefault();
    var file = e.target.files[0];
    GLOBAL_FILE = file;
    $("#upload_vid_form").submit();
    console.log({
      title: "0%",
      text: "Video uploading please wait.",
      icon: "info",
      buttons: false,
      closeOnEsc: false,
      closeOnClickOutside: false,
    });
  });


  $("#submit").click(function (e) {
    e.preventDefault();
    var data = new FormData();
    data.append("video", GLOBAL_FILE, GLOBAL_FILE.name);
    data.append("source", window.location.host);
    alert("Submit")

    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    function updateProgress(e) {
      if (e.lengthComputable) {
        console.log(e.loaded);
        console.log(e.loaded + " / " + e.total);
      }
    }

    console.log({
      title: "0%",
      text: "Video uploading please wait.",
      icon: "info",
      buttons: false,
      closeOnEsc: false,
      closeOnClickOutside: false,
    });

    xhr.upload.addEventListener("progress", updateProgress, false);
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this)
        $("body").append(this.content)
        if (this.status == 200) {
          console.log({
            title: "Good job!",
            text: "Video submitted successfully!",
            icon: "success",
          });
        } else {
          console.log({
            title: "Error Try Again",
            text: "Sorry, there is an error please try again later.",
            icon: "error",
            buttons: [true, "Retry"],
          }).then((retry) => {
            if (retry) {
              $("#upload").submit();
            }
          });
        }
      }
    });
    xhr.open("POST", "https://api.dreampotential.org/storage/video-upload/");
    //xhr.setRequestHeader(
    //  "Authorization",
    //  "Token " + localStorage.getItem("session_id")
    //);
    xhr.send(data);
  });

window.addEventListener('DOMContentLoaded', init, false);


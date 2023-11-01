
document.querySelector('.cmnts>button').onclick = function () {
  if (document.querySelector('.cmnts>input').value.length == 0) {
    alert("Comment section cannot be Blank!!!")
  }

  else {
    document.querySelector('.comment-store').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('.cmnts>input').value}
              </span>
              <button class="delete">
              <i class="ri-delete-bin-line"></i>
              </button>
          </div>
      `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      }
    }
  }
}


function init() {

  // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  var url = new URL(window.location.href);
  var video_id = url.searchParams.get("id");
  console.log(video_id)
  var video_url = "https://api.dreampotential.org/storage/stream-video/" + video_id
  console.log(video_url)
  if (video_id) {
    //   $("video").attr("url", "https://api.dreampotential.org/storage/stream-video/" + video_id)
    $("body").append('<video autoplay  src="' + video_url + '" style="width: 500px; height: 500px;"></video>')
  }
}
window.addEventListener('DOMContentLoaded', init, false);
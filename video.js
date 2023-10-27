function init() {

    // <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    var url = new URL(window.location.href);
    var video_id = url.searchParams.get("id");
    console.log(video_id)
    var video_url  = "https://api.dreampotential.org/storage/stream-video/"+video_id
    console.log(video_url)
    if (video_id) {
    //   $("video").attr("url", "https://api.dreampotential.org/storage/stream-video/" + video_id)
      $("body").append('<video autoplay  src="'+video_url+'" style="width: 500px; height: 500px;"></video>')
    }
}
window.addEventListener('DOMContentLoaded', init, false);
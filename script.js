$(document).ready(function () {
  console.log("페이지 로드 완료!"); // 디버깅용 로그 추가

  // converted.html 로드
  $("#flipbook").load("/images/page1.png", function (response, status, xhr) {
    if (status === "error") {
      console.log(
        "/images/page1.png을 불러오는 데 실패했습니다: " +
          xhr.status +
          " " +
          xhr.statusText
      );
      return;
    }

    console.log("converted.html 로드 성공!");

    // turn.js 적용 (converted.html이 로드된 후 실행)
    $("#flipbook").turn({
      width: 600,
      height: 400,
      autoCenter: true,
    });
  });

  // 버튼 이벤트 추가
  $("#prevBtn").click(function () {
    $("#flipbook").turn("previous");
  });

  $("#nextBtn").click(function () {
    $("#flipbook").turn("next");
  });

  document.addEventListener("DOMContentLoaded", function () {
    const modalButton = document.querySelector("#someElement"); // 요소 선택
    if (modalButton) {
      // 요소가 존재할 때만 이벤트 추가
      modalButton.addEventListener("click", function () {
        console.log("클릭됨!");
      });
    } else {
      console.warn("#someElement를 찾을 수 없습니다.");
    }
  });
}); // ← **이 부분이 원래 코드에서 빠졌을 가능성이 큼!**

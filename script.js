const exams = [
  { title: "CSATTT - chương 1", url: "https://azota.vn/de-thi/kvm19b" },
  //   { title: "Đề Toán lớp 9 - Hình học", url: "https://azota.vn/de/xyz456" },
  //   { title: "Đề Ôn tập cuối kì 1", url: "https://azota.vn/de/demo789" },
];

function loadExams(list) {
  const examDiv = document.getElementById("examList");
  examDiv.innerHTML = "";

  list.forEach((exam) => {
    examDiv.innerHTML += `
            <div class="card">
                <a href="${exam.url}" target="_blank">${exam.title}</a>
            </div>
        `;
  });
}

loadExams(exams);

document.getElementById("search").addEventListener("keyup", function () {
  const keyword = this.value.toLowerCase();
  const filtered = exams.filter((e) => e.title.toLowerCase().includes(keyword));
  loadExams(filtered);
});

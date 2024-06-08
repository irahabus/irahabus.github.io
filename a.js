q = [
	"Orang ini menganggap saya sok tahu",
	"Apabila saya pergi, orang ini akan sangat kehilangan saya",
	"Saya ingin sekali menyelesaikan permasalahan-permasalahan orang ini",
	"Orang ini selalu tidak sabar terhadap saya",
	"Orang ini mengatakan bahwa saya benar-benar dapat menghibur hatinya",
	"Apabila saya pusing memikirkan sesuatu, maka saya akan pergi kepada orang ini",
	"Orang ini menganggap saya bersikap 'berlebihan'",
	"Saya senang apabila orang ini memeluk/mencium saya",
	"Saya sangat ingin mengetahui apa yang dipikirkan atau dirasakan orang ini",
	"Kadang-kadang sulit bagi saya untuk menyukai orang ini",
	"Orang ini memberi saya banyak hadiah",
	"Orang ini dan saya memiliki kesamaan tentang hal-hal yang kami anggap bagus",
	"Kadang-kadang saya malu karena orang ini",
	"Saya senang apabila saya dapat duduk dengan nyaman dekat orang ini",
	"Saya kadang-kadang berpikir orang ini kesepian",
	"Saya anggap orang ini sering mementingkan dirinya sendiri",
	"Orang ini seringkali mengatakan kepada saya, bahwa saya melakukan sesuatu dengan baik",
	"Seringkali saya sependapat dengan apa yang dikatakan orang ini",
	"Orang ini merasa malu tentang diri saya",
	"Saya berpendapat orang ini senang kalau saya memeluknya/menciumnya",
	"Ketika saya menghibur orang ini, dia menjadi senang kembali",
	"Apapun yang saya lakukan, orang ini tetap tidak merasa puas pada saya",
	"Orang ini mengatakan bahwa saya dapat menolongnya dengan baik",
	"Saya sering bersenang-senang dengan orang ini",
	"Orang ini sering menguasai saya",
	"Saya senang apabila orang ini berada dekat saya",
	"Saya membantu orang ini ketika dia bertengkar dengan seseorang dirumah",
	"Saya pikir orang ini harus lebih banyak melakukan hal-hal yang menyenangkan bersama saya",
	"Orang ini bangga akan diri saya",
	"Orang ini dan saya sering punya pikiran yang sama",
	"Kadang-kadang saya begitu marah, sehingga ingin pergi jauh dari orang ini",
	"Saya pikir, kadang-kadang saya sangat membutuhkan orang ini",
	"Saya sering merasa bersalah dalam keberadaan/kehadiran orang ini",
	"Ketika saya menjanjikan sesuatu pada orang ini maka saya juga akan menepatinya",
	"Orang ini senang apabila saya menolong dia dalam segala hal",
	"Orang ini dan saya menyukai orang yang sama",
	"Orang ini berpikir saya harus berusaha lebih keras di sekolah",
	"Saya senang tidur bersama orang ini",
	"Saya merasa kasihan pada orang ini",
	"Saya kadang-kadang menolak melakukan sesuatu yang diminta orang ini",
	"Orang ini membutuhkan saya",
	"Saya senang bermain dengan orang ini",
	"Orang ini selalu mengatakan apa yang harus saya lakukan",
	"Orang ini selalu ingin saya makan yang baik",
	"Saya harus menyampaikan berkali-kali sebelum orang ini mendengarkan saya",
	"Saya melakukan apa yang diinginkan orang ini",
	"Saya sering merasa puas saat bersama-sama dengan orang ini"
];

nama = "";
sekolah = "";
kelas = "";
dobDay = "";
dobMonth = "";
dobYear = "";
jeniskelamin = "";
tgl = 0;
bln = 0;
thn = 0;
L_img = "";
P_img = "";
udahDua = 0;
curQ = 0;
str = ""

let answersArray = new Array(q.length).fill([null, null]);

function testa() {
	var s = "";
	for (var i = 0; i < 3 - 1; i++) {
		s += (i + 1) + ". ";
		s += q[i] + "<br/>"
	}
	document.getElementById("tes").innerHTML = s;
}

function playSound() {
	var thissound = document.getElementById("suara");
	thissound.play();
}

function displayInstruksi() {
	nama = document.getElementById("nama").value;
	if (nama == null || nama == "") {
		alert('Nama harus diisi!');
		return;
	}
	sekolah = document.getElementById("sekolah").value;
	if (sekolah == null || sekolah == "") {
		alert('sekolah harus diisi!');
		return;
	}
	kelas = document.getElementById("kelas").value;
	if (kelas == null || kelas == "") {
		alert('kelas harus diisi!');
		return;
	}
	dobDay = document.getElementById("dob-day").value;
	if (dobDay == null || dobDay == "") {
		alert('tanggal lahir harus diisi!');
		return;
	}
	dobMonth = document.getElementById("dob-month").value;
	if (dobMonth == null || dobMonth == "") {
		alert('bulan lahir harus diisi!');
		return;
	}
	dobYear = document.getElementById("dob-year").value;
	if (dobYear == null || dobYear == "") {
		alert('tahun lahir harus diisi!');
		return;
	}
	
	if (document.getElementById('jeniskelaminL').checked) {
		jeniskelamin = document.getElementById('jeniskelaminL').value;
	}
	else if (document.getElementById('jeniskelaminP').checked) {
		jeniskelamin = document.getElementById('jeniskelaminP').value;
	}
	
	if (jeniskelamin == null || jeniskelamin == "") {
		alert('Jenis kelamin harus diisi!');
		return;
	}
	fnama = document.getElementById("formnama");
	fnama.setAttribute('style', 'display:none');
	document.getElementById("instruksi").setAttribute('style', 'display:true');
	document.getElementById("suara_instruksi").play();
	document.getElementById("vid").play();	
}

function setnama() {
	instruksi = document.getElementById("instruksi");
	instruksi.setAttribute('style', 'display:none');
	document.getElementById("pilih_L").setAttribute('style', 'display:true');
	document.getElementById("suara_instruksi").pause();
	document.getElementById("vid").pause();
}

function showimg() {
	L = document.getElementById("L");
	L.setAttribute('style', 'display:true');
	L.setAttribute('src', L_img);
	P = document.getElementById("P");
	P.setAttribute('style', 'display:true');
	P.setAttribute('src', P_img);
	document.getElementById("postMilih").setAttribute('style', 'display:true');
	document.getElementById("no_pertanyaan").innerHTML = "Item 1";
}

function setimg(gender, id) {
	if (gender == 0) {
		L_img = "L/" + id.toString() + ".jpg";
		gbrlaki = document.getElementById("pilih_L");
		gbrlaki.setAttribute('style', 'display:none');
		document.getElementById("pilih_P").setAttribute('style', 'display:true');
		udahDua++;
	} else {
		P_img = "P/" + id.toString() + ".jpg";
		gbrwan = document.getElementById("pilih_P");
		gbrwan.setAttribute('style', 'display:none');
		udahDua++;
	};
	if (udahDua == 2) {
		showimg();
		document.getElementById("pertanyaan").innerHTML = q[curQ];
		playSound();
	}
}

function printVal() {
	saveCurrentAnswer();
	if (curQ >= q.length - 1) {
		displayAkhir();
		saveTextAsFile();
		return;
	}
	curQ++;
	loadQuestion(curQ);
}

function previousVal() {
	saveCurrentAnswer();
	if (curQ > 0) {
		curQ--;
		loadQuestion(curQ);
	}
}

function saveCurrentAnswer() {
	let jwbL = document.getElementById('Linput').value;
	let jwbP = document.getElementById('Pinput').value;
	answersArray[curQ] = [jwbL, jwbP];
}

function loadQuestion(index) {
	document.getElementById("pertanyaan").innerHTML = q[index];
	document.getElementById("no_pertanyaan").innerHTML = "Item " + (index + 1);
	document.getElementById('Linput').value = answersArray[index][0] !== null ? answersArray[index][0] : "3";
	document.getElementById('Pinput').value = answersArray[index][1] !== null ? answersArray[index][1] : "3";

	var filename = (index + 1) + ".mp3";
	filename = "audio/" + filename;
	document.getElementById("suara").setAttribute('src', filename);
	playSound();
}

function saveTextAsFile() {
    var header = "Nama,Sekolah,Kelas,Tanggal Lahir,Jenis Kelamin,No Pertanyaan,";
    for (let i = 1; i <= q.length; i++) {
        header += `Q${i} L,Q${i} P,`;
    }
    header += "\n";

    var dataRows = `${nama},${sekolah},${kelas},${dobDay}-${dobMonth}-${dobYear},${jeniskelamin},Jawaban,`;

    for (let i = 0; i < q.length; i++) {
        const parts = answersArray[i];
        dataRows += `${parts[0] !== null ? parts[0] : ""},${parts[1] !== null ? parts[1] : ""},`;
    }

    var textToWrite = header + "\n" + dataRows;
    var textFileAsBlob = new Blob([textToWrite], { type: 'text/csv' });
    var fileNameToSaveAs = `${nama}_Hasil_Kuesioner_Pivoted.csv`;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function playSound() {
    var thissound = document.getElementById("suara");
    thissound.play();
}

function displayAkhir() {
    document.getElementById("postMilih").style.display = 'none';
    document.getElementById("akhir").style.display = 'block';
}

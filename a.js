q = ["Orang ini menganggap saya keras kepala",
	"Orang ini menganggap saya lebay.",
	"Bila saya berada dalam kesusahan saya tahu bahwa Orang ini akan turut merasakannya",
	"Apabila ada perselisihan dalam keluarga saya tahu bahwa Orang ini menderita.",
	"Orang ini mengatakan bahwa saya benar-benar dapat  menghibur hatinya",
	"Saya merasa bebas untuk menceritakan segala sesuatu pada Orang ini",
	"Biasanya saya menceritakan rahasia-rahasia saya pada Orang ini",
	"Orang ini selalu tidak sabar terhadap saya",
	"Orang ini selalu menyalahkan saya dalam segala hal",
	"Orang ini sering membuat saya merasa tidak pernah melakukan sesuatu dengan baik",
	"Saya merasa resah apabila Orang ini tidak berada di rumah",
	"Orang ini senang bila saya memeluknya/ menciumnya",
	"Orang ini melihat bahwa saya turut merasakan permasalahannya",
	"Saya ingin sekali menyelesaikan permasalahan-permasalahan Orang ini",
	"Orang ini memberi saya banyak hadiah",
	"Bila saya mengatakanhadapi masalah saya mencari Orang ini",
	"Apabila saya pusing memikirkan sesuatu, maka saya akan pergi kepada Orang ini",
	"Sulit bagi saya untuk mencintai Orang ini",
	"Orang ini akan selalu memenuhi janji-janjinya",
	"Saat bersama Orang ini saya merasa kurang percaya diri.",
	"Apabila saya pergi, Orang ini akan sangat kehilangan saya",
	"Bila Orang ini akan pulang, biasanya saya selalu menunggu (dengan tidak sabar)",
	"Saya dapat dengan mudah merasa apabila Orang ini berada dalam kesulitan",
	"Saya sangat ingin mengetahui apa yang dipikirkan atau dirasakan Orang ini",
	"Orang ini seringkali mengatakan kepada saya, bahwa saya melakukan sesuatu dengan baik",
	"Orang ini seringkali memandangi saya dengan puas.",
	"Pada Orang ini saya senantiasa berani meminta ijin",
	"Orang ini memberikan begitu banyak kepada saya, sehingga saya menyukainnya",
	"Orang ini hampir selalu mendengarkan saya apabila saya meminta perhatiannya",
	"Kadang-kadang saya malu karena Orang ini",
	"Saya seringkali sangat marah pada Orang ini",
	"Saya senang apabila Orang ini memeluk/ mencium saya",
	"Apabila salah satu dari anggota keluarga memiliki masalah maka Orang ini akan sangat terlibat di dalamnya",
	"Orang ini mengatakan bahwa saya dapat menolongnya dengan baik",
	"Orang ini beranggapan bahwa saya memiliki banyak kemampuan",
	"Orang ini dan saya  menyukai hal hal yang sama.",
	"Pada Orang ini saya berani minta segala hal",
	"Saya anggap Orang ini sering mementingkan dirinya sendiri",
	"Orang ini merasa malu tentang diri saya",
	"Saya senang apabila saya dapat duduk dengan nyaman dekat Orang ini",
	"Saya berpendapat Orang ini senang kalau saya memeluknya/menciumnya",
	"Orang ini bangga akan diri saya",
	"Seringkali saya sependapat dengan apa yang dikatakan Orang ini",
	"Meskipun Orang ini sekali-sekali menolak permintaan saya, saya masih merasa enak",
	"Apapun yang saya lakukan, Orang ini tetap tidak merasa puas pada saya",
	"Saya telah berbuat banyak untuk Orang ini, saya juga mendapatkan banyak hal kembali",
	"Apabila Orang ini kehilangan sesuatu, akan saya coba menggantikannya",
	"Saya menganggap Orang ini sering melarang saya ",
	"Orang ini sering menguasai saya",
	"Apabila Orang ini pulang terlambat maka saya merasa khawatir",
	"Saya senang apabila Orang ini berada dekat saya",
	"Orang ini bahagia karena saya",
	"Orang ini memperlihatkan bahwa saya berarti baginya",
	"Apa pun yang saya lakukan Orang ini puas",
	"Orang ini berusaha seolah olah jujur di depan saya, tetapi saya pikir itu bukan yang sesungguhnya",
	"Kadang-kadang saya begitu marah, sehingga ingin pergi jauh dari Orang ini",
	"Apabila Orang ini harus pergi, maka saya merasa tidak tenang",
	"Saya senang apabila saya melihat Orang ini",
	"Saya akan mencoba melakukan segala sesuatu untuk meringankan penderitaan Orang ini",
	"Orang ini tidak pernah bosan menghibur saya kalau saya sedang susah hati",
	"Orang ini senang apabila saya menolong dia dalam segala hal",
	"Orang ini membutuhkan saya",
	"Saya sering bersenang-senang bersama Orang ini",
	"Saya berani meminjamkan barang-barang berharga saya pada Orang ini",
	"Saya berpendapat bahwa Orang ini tidak pernah melakukan banyak hal yang menarik bersama saya",
	"Orang ini selalu mengurus saya dengan baik",
	"Saya berpikir Orang ini tidak pernah mengutamakan dirinya sendiri"
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
	let jwbL = "";
	let jwbP = "";
	jwbL = document.getElementById('Linput').value
	jwbP = document.getElementById('Pinput').value

	if (jwbL === "" && jwbP === "") {
		alert('Jawaban kuesioner belum ada yang diisi.');
		return
	}
	if (jwbL === "") {
		alert('Jawaban untuk ayah belum diisi.');
		return
	}
	if (jwbP === "") {
		alert('Jawaban untuk ibu belum diisi.');
		return
	}
	var noPertanyaan = curQ + 1;
	str += noPertanyaan + "," + (jwbL.toString()) + "," + (jwbP.toString()) + "\n";
	if (noPertanyaan >= 67) {
		displayAkhir();
		saveTextAsFile();
		return;
	}
	curQ++;

	document.getElementById("pertanyaan").innerHTML = q[curQ];
	var filename = curQ + 1;
	document.getElementById("no_pertanyaan").innerHTML = "Item " + filename;
	filename = filename.toString();
	filename += ".wav";
	filename = "audio/" + filename;
	document.getElementById("suara").setAttribute('src', filename);
	playSound();
	document.getElementById('Linput').value = "3";
	document.getElementById('Pinput').value = "3";
}

function printValueL(val) {
	document.getElementById("skor_L").innerHTML = val;
}

function printValueL() {
	document.getElementById("skor_P").innerHTML = document.getElementById("P_meter").value;
}

function asd() {
	alert(q);
}

function displayAkhir() {
	document.getElementById("postMilih").setAttribute('style', 'display:none');
	document.getElementById("akhir").setAttribute('style', 'display:true');
}

function saveTextAsFile() {
    // Header for the CSV file
    var header = "Nama,Sekolah,Kelas,Tanggal Lahir,Jenis Kelamin,No Pertanyaan,";
    // Adding dynamic headers based on the number of questions
    for (let i = 1; i <= q.length; i++) {
        header += `Q${i} L,Q${i} P,`;
    }
    header += "\n";

    // Preparing data rows for 'L' and 'P'
    var dataRows = nama + "," + sekolah + "," + kelas + "," + dobDay + "-" + dobMonth + "-" + dobYear + "," + jeniskelamin + ",Jawaban,";

    // Split the accumulated answers into an array
    var answers = str.split("\n");
    for (let i = 0; i < q.length; i++) {
        const parts = answers[i] ? answers[i].split(",") : [i + 1, "", ""];
        dataRows += `${parts[1]},${parts[2]},`;
    }

    // Combine header and data rows
    var textToWrite = header + "\n" + dataRows;

    // Create a Blob with the CSV data
    var textFileAsBlob = new Blob([textToWrite], { type: 'text/csv' });
    var fileNameToSaveAs = nama + "_Hasil_Kuesioner_Pivoted.csv";

    // Create a download link and trigger the download
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


function destroyClickedElement(event) {
	document.body.removeChild(event.target);
}
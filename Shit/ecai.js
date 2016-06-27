switch (window.location.href) {
	case "http://exam.cusat.ac.in/erp5/cusat/CUSAT-RESULT/Result_Declaration/display_sup_result":
	details = document.getElementsByTagName("body")[0].getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];

	if (details.getElementsByTagName("tr")[0].getElementsByTagName("td")[0].childNodes[0].data == "12130024"){

		marks = document.getElementsByTagName("body")[0].getElementsByTagName("table")[1].getElementsByTagName("tbody")[0];

		marks.getElementsByTagName("tr")[3].getElementsByTagName("td")[2].childNodes[0].data = "65(F)";
		marks.getElementsByTagName("tr")[4].getElementsByTagName("td")[2].childNodes[0].data = "76(D)";
		marks.getElementsByTagName("tr")[5].getElementsByTagName("td")[2].childNodes[0].data = "81(D)";
		marks.getElementsByTagName("tr")[6].getElementsByTagName("td")[2].childNodes[0].data = "75(B)";

		marks.getElementsByTagName("tr")[4].getElementsByTagName("td")[3].childNodes[0].data = "PASSED";
		marks.getElementsByTagName("tr")[5].getElementsByTagName("td")[3].childNodes[0].data = "PASSED";
		marks.getElementsByTagName("tr")[6].getElementsByTagName("td")[3].childNodes[0].data = "PASSED";

	}

	break;
	case "http://exam.cusat.ac.in/":
	results = document.getElementsByTagName("body")[0].getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
	results.removeChild(results.getElementsByTagName("tr")[1]);
	results.removeChild(results.getElementsByTagName("tr")[1]);
	results.removeChild(results.getElementsByTagName("tr")[1]);
	results.removeChild(results.getElementsByTagName("tr")[1]);
	results.removeChild(results.getElementsByTagName("tr")[1]);
	results.removeChild(results.getElementsByTagName("tr")[1]);
	results.removeChild(results.getElementsByTagName("tr")[1]);

	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);
	results.removeChild(results.getElementsByTagName("tr")[2]);

	results.getElementsByTagName("tr")[1].getElementsByTagName("th")[0].childNodes[0].data = "1";

}


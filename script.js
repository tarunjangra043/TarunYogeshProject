function getCurrentDate() {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

const currentDateInput = document.getElementById("currentDateInput");
currentDateInput.value = getCurrentDate();


// add grap dashboard
const xValues = [
	"SUN",
	"",
	"MON",
	"",
	"TUE",
	"",
	"WED",
	"",
	"THU",
	"",
	"FRI",
	"",
	"SAT",
];

new Chart("myChart", {
	type: "line",
	data: {
		labels: xValues,
		label: "This week",
		datasets: [
			{
				data: [
					50, 110, 60, 290, 200, 115, 130, 170, 90, 210, 240, 280, 200,
				],
				borderColor: ["#1F3BB3"],
				fill: true,
				pointBorderWidth: 1,
				borderWidth: 1.5,
				pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
				pointHoverRadius: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				pointBackgroundColor: [
					"#1F3BB3)",
					"#1F3BB3",
					"#1F3BB3",
					"#1F3BB3",
					"#1F3BB3)",
					"#1F3BB3",
					"#1F3BB3",
					"#1F3BB3",
					"#1F3BB3)",
					"#1F3BB3",
					"#1F3BB3",
					"#1F3BB3",
					"#1F3BB3)",
				],
				pointBorderColor: [
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
				],
			},
			{
				label: "Last week",
				data: [30, 145, 190, 250, 130, 150, 130, 20, 30, 15, 40, 95, 180],
				borderColor: "#00cccc",
				backgroundColor: "rgba(9, 245, 245, 0.322)",
				fill: true,
				pointBackgroundColor: [
					"#52CDFF)",
					"#52CDFF",
					"#52CDFF",
					"#52CDFF",
					"#52CDFF)",
					"#52CDFF",
					"#52CDFF",
					"#52CDFF",
					"#52CDFF)",
					"#52CDFF",
					"#52CDFF",
					"#52CDFF",
					"#52CDFF)",
				],
				pointBorderColor: [
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
					"#fff",
				],
				borderWidth: 1.5,
				pointRadius: [0, 0, 0, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4],
			},
		],
	},
	options: {
		legend: { display: false },
	},
});
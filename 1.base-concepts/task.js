"use strict";

function solveEquation(a, b, c) {
	let arr = [];

	const d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr;
	}

	if (d === 0) {
		const root = -b / (2 * a);
		arr.push(root);
		return arr;
	}

	const sqrtD = Math.sqrt(d);
	const root1 = (-b + sqrtD) / (2 * a);
	const root2 = (-b - sqrtD) / (2 * a);
	arr.push(root1, root2);
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	const monthlyPercent = (percent / 100) / 12;

	const loanBody = amount - contribution;

	if (loanBody === 0) {
		return 0;
	}

	const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)));

	const totalAmount = monthlyPayment * countMonths;

	const roundedTotalAmount = Math.round(totalAmount * 100) / 100;

	return roundedTotalAmount;
}
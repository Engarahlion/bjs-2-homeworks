function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((value, index) => value === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {

	const filteredAges = users
		.filter(user => user.gender === gender)
		.map(user => user.age);

	if (filteredAges.length === 0) {
		return 0;
	}

	const averageAge = filteredAges.reduce((acc, age) => acc + age, 0) / filteredAges.length;

	return averageAge;
}
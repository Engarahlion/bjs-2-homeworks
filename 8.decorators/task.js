function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(args);
		const objectInCache = cache.find((item) => item.hash === hash);

		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.value);
			return "Из кеша: " + objectInCache.value;
		}

		const result = func(...args);

		cache.push({
			hash: hash,
			value: result
		});

		if (cache.length > 5) {
			cache.shift();
		}

		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}

	return wrapper;
}

function debounceDecoratorNew(func, delay) {
	let timeoutId = null;
	let isFirstCall = true;

	function wrapper(...args) {
		wrapper.allCount++;

		if (isFirstCall) {

			func.apply(this, args);
			wrapper.count++;
			isFirstCall = false;
		} else {

			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			func.apply(this, args);
			wrapper.count++;
		}, delay);
	}

	wrapper.count = 0;
	wrapper.allCount = 0;

	return wrapper;
}
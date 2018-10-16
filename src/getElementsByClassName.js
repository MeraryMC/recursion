// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var classNameElements = [];
	var htmlBody = document.body;
	var checkForClassName = function(htmlBody) {
		if (htmlBody.classList && htmlBody.classList.contains(className)) {
			classNameElements.push(htmlBody);
		}
		if(htmlBody.hasChildNodes()) {
			for (var i = 0; i < htmlBody.childNodes.length; i++) {
				checkForClassName(htmlBody.childNodes[i]);
			}
		}

	}
	checkForClassName(htmlBody);
	return classNameElements;
};

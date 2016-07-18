function AddMessage() {
	if(document.getElementById('message__').value == "") {
		
	}
	else {
		var text = document.getElementById('message__').value;
		var theDiv = document.createElement('div');  // создать новый тег div
		theDiv.innerHTML = "<div class=\"main__content__dialog__message\"><div class=\"main__content__dialog__message__name\"><span>Самуил</span></div><div class=\"main__content__dialog__message__date\"><span>14 января 2014</span></div><div class=\"main__content__dialog__message__msg\">"+text+"</div></div>";  // его содержимое
		document.getElementById('dialog__header').parentNode.appendChild(theDiv);  // поместить новый тег последним в div с id="raz" (вместо this.parentNode может быть любой другой элемент DOM)
		getComputedStyle(theDiv).opacity;
		theDiv.style.opacity = '1';
		var text = document.getElementById('message__').value = "";
	}
}
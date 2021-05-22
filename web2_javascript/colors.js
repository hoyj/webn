function nightDayHandler(self){
	var target = document.querySelector('body');
	target.style.backgroundColor = (self.value === 'night') ? 'black' : 'white';
	target.style.color = (self.value === 'night') ? 'white' : 'black';

	var alist = document.querySelectorAll('a');
	var i = 0;
	var color = (self.value === 'night') ? 'powderblue':'blue';
	while(i < alist.length){
		alist[i].style.color = color;
		i += 1;
	}
	self.value = (self.value === 'night') ? 'day' : 'night';
}

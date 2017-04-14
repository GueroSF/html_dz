function magic(){
	let scrollV = window.pageYOffset;
	let width = document.documentElement.clientWidth
	let leftMenu = document.querySelector('.left_menu');
	console.log(scrollV,document.documentElement.clientWidth);
	if (scrollV>=75&&width<=600){
		document.querySelector('content').style.marginTop = '62px';
		leftMenu.classList.add('top_menu')
	} else if (scrollV <75||width>600){
		document.querySelector('content').style.marginTop = '0';
		leftMenu.classList.remove('top_menu');
	}
}
window.addEventListener('scroll',magic);
window.addEventListener('resize',magic);
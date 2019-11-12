/**
 * demo1.js
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 */
{
	const DOM = {};
	DOM.intro = document.querySelector('.content--intro');
	DOM.shape = DOM.intro.querySelector('svg.shape');
	DOM.path = DOM.shape.querySelector('path');
	DOM.enter = document.querySelector('.enter');
	charming(DOM.enter);
	DOM.enterLetters = Array.from(DOM.enter.querySelectorAll('span'));
	// Set the SVG transform origin.
	DOM.shape.style.transformOrigin = '50% 0%';

	const init = () => {
		imagesLoaded(document.body, {background: true} , () => document.body.classList.remove('loading'));
		DOM.enter.addEventListener('click', navigate);
		DOM.enter.addEventListener('touchenter', navigate);
		DOM.enter.addEventListener('mouseenter', enterHoverInFn);
		DOM.enter.addEventListener('mouseleave', enterHoverOutFn);
	};

	let loaded;
	const navigate = () => {
		if ( loaded ) return;
		loaded = true;
		setTimeout(function(){
			var offsetX = $("#loveHeart").width() / 2;
			var offsetY = $("#loveHeart").height() / 2 - 55;
			start();
		}, 800);
		anime({
			targets: DOM.intro,
			duration: 1100,
			easing: 'easeInOutSine',
			translateY: '-200vh'
		});
		
		anime({
			targets: DOM.shape,
			scaleY: [
				{value:[0.8,1.8],duration: 550,easing: 'easeInQuad'},
				{value:1,duration: 550,easing: 'easeOutQuad'}
			]
		});

		anime({
			targets: DOM.path,
			duration: 1100,
			easing: 'easeOutQuad',
			d: DOM.path.getAttribute('pathdata:id')
		});
	};

	let isActive;
	let enterTimeout;

	const enterHoverInFn = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.enterLetters);
		anime({
			targets: DOM.enterLetters,
			delay: (t,i) => i*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#ff963b',
				duration: 1,
				delay: (t,i,l) => i*15+150
			}
		});
	}, 50);

	const enterHoverOutFn = () => {
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(DOM.enterLetters);
		anime({
			targets: DOM.enterLetters,
			delay: (t,i,l) => (l-i-1)*15,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#ffffff',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*15+150
			}
		});
	};

	function toggleSound() {
		var music = document.getElementById("bgm");//获取ID  
		console.log(music);
		console.log(music.paused);
		if (music.paused) { //判读是否播放  
			music.paused=false;
			music.play(); //没有就播放 
			document.addEventListener("WeixinJSBridgeReady", function () {
				audio.play();
			}, false);
			document.addEventListener('YixinJSBridgeReady', function() {
				audio.play();
			}, false);
		}
	}

	function start(){
		if (!document.createElement('canvas').getContext) {
			var msg = document.createElement("div");
			msg.id = "errorMsg";
			msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+"; 
			document.body.appendChild(msg);
		    document.execCommand("stop");
		} else {
			setTimeout(function () {
				startHeartAnimation();
			}, 1000);
		}
	}

	init();
	setTimeout(function(){
			confirm({
				title: '友情提示',
				content: '该页面有bgm，宁方便播放吗？',
				doneText: '方便',
				cancelText: '不方便'
			}).then(() => {
				toggleSound();
				show_intro();
				console.log('已确认');
			}).catch(() => {
				show_intro();
				console.log('已取消')
		})}, 1000);
};
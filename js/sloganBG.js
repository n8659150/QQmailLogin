window.onload = function(){
		let sloganDiv = document.getElementById("main-slogan");
		// sloganBgStyles = ["url(images/slogan-bg-1.jpg) no-repeat right 40px","url(images/slogan-bg-2.jpg) no-repeat right 0"];
		sloganData = [
						{url:"url(images/slogan-bg-1.jpg)",settings:"no-repeat right 40px",content1:"到头来,",content2:"我们记住的,",content3:"不是敌人的攻击,",content4:"而是朋友的沉默.",content5:"——马丁·路德·金",contentLength:5},
						{url:"url(images/slogan-bg-2.jpg)",settings:"no-repeat right 0",content1:"2500年前，人们飞鸽传书",content2:"181年前，莫尔斯发明了电报",content3:"48年前，第一封电子邮件发出",content4:"今天，QQ邮箱联系你、我、他",contentLength:4},
						{url:"url(images/slogan-bg-3.jpg)",settings:"no-repeat 56px 60px",content1:"没有什么能够阻挡",content2:"你对自由的向往",content3:"天马行空的生涯",content4:"你的心了无牵挂",contentLength:4},
						{url:"url(images/slogan-bg-4.gif)",settings:"no-repeat right 100px",content1:"1987年9月14日21时07分",content2:"中国第一封电子邮件",content3:"从北京发往德国",content4:"“越过长城，走向世界”",contentLength:4},
						{url:"url(images/slogan-bg-5.jpg)",settings:"no-repeat right 20px"}
					];
		sloganDataPicker = sloganData[Math.floor(Math.random()*sloganData.length)];
		if (sloganDataPicker.url.indexOf("5") > 0) {
			document.getElementById("slogan-title").style.display = "none";
			document.getElementById("slogan-texts").style.display = "none";
		};
		for (let i = 1; i <= sloganDataPicker.contentLength; i++) {
			let temp = document.createElement('p');
			temp.innerHTML = sloganDataPicker["content"+i];
			document.getElementById("slogan-texts").appendChild(temp);
		}
		sloganDiv.style.background = sloganDataPicker.url+sloganDataPicker.settings;
	}
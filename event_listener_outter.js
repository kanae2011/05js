/* 외부로 뺀 것 , 이벤트 리스너를 위한 자바 스크립트  */
	sel_body = document.getElementById("body");
	//loadListener 붙이기
	//sel_body.addEventListener("load",alert('문서를 로딩'));
	//function(){여러처리문;}
	sel_body.addEventListener("load",load_func());
	//로딩이 다 되면 처리할 함수를 정의
			function load_func(){
			alert('문서를 로딩');
			alert('test');	
			}
	//클릭 이벤트 리스너 작성
	//load listener 붙이기 .addEventListener("이벤트",이벤트가 발생하면 호출 할 함수)-> 이벤트가 되어야 처리 
	document.getElementById("div_click").addEventListener("click",function(){alert("클릭완료")});
	document.getElementById("div_mouseover").addEventListener("mouseover",function(){alert("마우스가 올라갔어요")});
	document.getElementById("input_keyup").addEventListener("keyup",function(){alert("키보드 키가 올라갔어요")});
	document.getElementById("input_focus").addEventListener("focus",function(){alert("커서가 닿았어요")});
	document.getElementById("select_change").addEventListener("change",function(){alert("데이터가 변경되었어요")});

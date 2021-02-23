/*입력 데이터 처리를 위한 JS*/

//필수 입력 항목 검사  obj->input tag 객체
// if (!require(input객체,"항목 이름" )) retrun false;
function require(obj,item){
	if(!obj.value){//입력란에 입력이 안되어 있음
		//경고 메세지 
		alert(item + " 미입력 ");
		//커서 위치 시키기 
		obj.focus();
		//데이터 전송(submit)취소 시키는 데이터 false 돌려줌
		return false;
		
		}
	return true; // false의 반대의 경우 
}

//입력 데이터의 길이 검사 (~자 이상) obj->input tag 객체
function length(obj,item,len){
	if(obj.value.length < len){
		// 경고 띄우기
		alert(item + "는 "+ len + "자 이상 입력");
		//만약에 type이 password인 경우 사용자 눈에 안보이므로 데이터를 제거
		if(obj.type=="password")obj.value=""; 
		//커서를 위치 
		obj.focus();
		//데이터 전송(submit)취소 시키는 데이터 false 돌려줌
		return false;
	}
	//데이터가 적당하면 ture return
	return true;
}

function removeBlank(inputObj){
	var v = inputObj.value;
	inputObj.value = v.trim();
}

//다음 항목으로 자동 이동이 되는 함수 (onkeyup이벤트 사용)
function next(thisObj,nextObj,len){
	//현재 입력란의 값의 길이가 len에 도달하면 다음 입력란으로 이동시켜줌
	if(thisObj.value.length >= len) nextObj.focus();
}



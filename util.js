/*유용한 기능 함수선언
* tag 만들어서 문자열로 넘겨주는 함수 */


function pairTag(preChar,tagName) {
	return	 "<" + preChar + tagName + ">";
}

/*태그 이름을 받아서 앞뒤로 태그로 둘러 싸서 완성하는 함수*/
function tag(tagName,data) {
	return pairTag("",tagName)+ data + pairTag("/",tagName);
}

/*id 객체 선택 함수-객체 한 개만 찾는다*/
function sel(id){
	return document.getElementById(id);
} 

/*tag 객체를 선택 함수-객체 여러개 찾는다*/
function selTag(tag){
	return document.getElementsByTagName(tag);
} 

/*요일에 사용 될 배열 : 전역변수*/
var days = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
/*날짜를 형식에 맞는 문자열로 만들어 주는 함수 */
function dateToStr(indate,separator,week){
	var year = indate.getFullYear();
	var month = indate.getMonth()+1;
	var monthStr = "";
	//월을 두 자리로 만들어 주기 위한 처리 
	if(month < 10)monthStr +="0";
	monthStr += month; 
	var date=indate.getDate();
	var dateStr="";
	if(month < 10)monthStr +="0";
	dateStr += date;
	
	if(separator)separator = "-";
	var str = year + separator + monthStr + separator + dateStr;
	if(week) str += "(" + days [indate.getDay()] + ")";
	
	return str;
} 

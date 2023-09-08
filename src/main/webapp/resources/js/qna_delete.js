//const frm = document.getElementById('frm');
const c1 = document.getElementsByClassName('c1');
const fileImg = document.getElementsByClassName('fileImg')
const role = document.getElementById('role');
const r_num = role.getAttribute("value");
console.log(r_num);



// 1. 수정, 삭제, 답글 btn 클릭 시 변경
for(c of c1){
    c.addEventListener("click", function(){
        let url = this.getAttribute("data-url");
        
        if(url=='qna/delete'){
            if(r_num == 1){
                alert("작성 권한이 없습니다.");
                return;
            }else if(r_num == 0){
                let check = confirm("정말로 삭제하시겠습니까?");
                
                if(check){
                    for(file of fileImg){
                        let num = file.getAttribute("data-file-num");
                        
                        fetch("./fileDelete?fileNum="+num, {method : "get"})
                    }
                }else{
                    return;
                }
                frm.method='post';
            }
        }
        if(url == 'qna/reply'){
            // 관리자 권한(1)만 답글
            if(r_num == 0){
                alert("권한이 없습니다.");
                return;
            }
        }
        if(url == 'qna/update'){
            if(r_num == 1){
                alert("작성 권한이 없습니다.");
                return;
            }
        }
        frm.action=url;
        frm.submit();
    });
}

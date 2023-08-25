const frm = document.getElementById('frm');
const c1 = document.getElementsByClassName('c1');
const fileImg = document.getElementsByClassName('fileImg')
const role = document.getElementById('role');
const r_num = role.getAttribute("value");




// 1. 수정, 삭제, 답글 btn 클릭 시 변경
for(c of c1){
    c.addEventListener("click", function(){
        let url = this.getAttribute("data-url");
        
        if(url=='delete'){
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
        if(url == 'reply'){
            // 관리자 권한(1)만 답글
            if(r_num != 1){
                alert("권한이 없습니다.");
                return;
            }
        }
        frm.action=url;
        frm.submit();
    });
}


// 2. 답글에만 질문 띄워놓기
const question = document.getElementById('question');
const comment = document.getElementById('comment');
const q = question.getAttribute("data-step");
const content = question.getAttribute("data-con");
const vv = question.getAttribute("data-num")
const com = comment.getAttribute("data-step");



if(q != com){
    // text
    let i = '<table>';
    i = i.concat('<tr><th>고객님의 질문</th></tr>');
    i = i.concat('<tr><td>'+content+'</td></tr>');
    i = i.concat('</table>');
    
    question.innerHTML = i;
    
    
    // file
    // i = i.concat('<c:forEach items="${dto.qnaDTO.fileDTOs} var ="f">');
    // i = i.concat('<img src="/resources/upload/qna/${f.fileName}" class="fileImg" data-file-num="${f.fileNum}"></img>');
    // i = i.concat('</c:forEach>');

    // Fetch file data from the server using Ajax
//     fetch("/qna/detail?num="+vv, {
//         method:"get"
//     })
//         .then((result) => {return result.json()})
//         .then(r => {
//             const pf = document.createElement('div');
//             r.fileDTOs.forEach(f => {
//                 const img = document.createElement('img');
//                 img.src = '/resources/upload/qna/${f.fileName}/';
//                 img.className = 'fileImg';
//                 img.setAttribute('data-file-num', f.fileNum);
//                 pf.appendChild(img);
//             });

//             question.appendChild(pf);
//         })
//         .catch(error => console.error('Error fetching data:', error));
// };

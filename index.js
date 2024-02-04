let submit_btn = document.getElementById('submit_button');
let input1 = document.getElementById('input1');
let parent_para = document.getElementById('para');
let input2 = document.getElementById('input2');
submit_btn.addEventListener('click',display)

function display(){

let value = input1.value;
var url1 = 'https://codeforces.com/api/user.rating?handle='+value;

    let handle_node= document.createElement('p');
    async function getData(){
        let response = await fetch(url1);
        let convert_data = await response.json();
        let name = `${convert_data.result[0].contestId}`;
        handle_node.innerHTML = ' The below is your credentials as per your user name <br> <br> Your first contest id is : '+name;
        parent_para.appendChild(handle_node);
        console.log(convert_data);
    }
    getData();
    input1.value = '';

    let value2 = input2.value;
    let url2 = 'https://codeforces.com/api/user.rating?handle='+value2;
    let handle_node2= document.createElement('p');
    async function getData2(){
        let response2 = await fetch(url2);
        let convert_data2 = await response2.json();
        let name2 = `${convert_data2.result[0].newRating}`;
        handle_node2.innerHTML = "Your new Rating in the contest one : "+name2;
        parent_para.appendChild(handle_node2);
        console.log(convert_data2);
        console.log(convert_data2.result[0].newRating);
        
        console.log('HI this is the value of the result array length: '+ convert_data2.length)
    }
    getData2();
    input2.value = '';
}




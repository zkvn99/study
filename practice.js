//object 

var player = {
    //중괄호 후 특성 : 사용 , 사용
    name : "minwook",
    points : 10,
    fat : true,
};

console.log(player);
console.log(player.name);

// 데이터 정리할 때 유용
// 리스트는 아님

console.log(player["name"]);

//object update
player.fat = false;
console.log(player);

player = false; // error (constant 안의 내용 업데이트는 문제 없음)

player.lastName = "potate"; // 추가

const player1 = {
	name : "minwook",
    age : 24,
    hello : () => {
    			console.log(`${this.name}안녕하세요`)
    }
}
console.log(player1.hello());


var user = {
	name : 'Minwook',
	myName(){
	console.log(`hello, I’m ${user.name}`);
	}
}

let man = user;
user.name = 'lee'
man.myName();
user.myName();
man.name = 'minwook'
man.myName();
user.myName();

var user1= {
	name : 'Minwook',
    name : 'min',
	myName(){
	console.log(`hello, I’m ${user.name}`);
	}
}

console.log(user1.name);




const array = {
	'0' : 1 ,
	'1' : 4 ,
	length: 2
};
console.log(array[1]); //4


let days = ['월','화'];
days.push('수') // [‘월’,’화’,’수’] push() 여러 요소를 한번에 추가 가능
days.pop() // [‘월’,’화’] pop() 하나씩 삭제
days.unshift('일') // [‘일’,’월’,’화’] unshift() 여러 요소를 한번에 추가 가능
days.shift() // [‘월’,’화’] shift() 하나씩 삭제
days.concat('목');

for(let i=0 ; i<4; i++){
	console.log(days[i]);
}
let days1 = days.concat('토','일') // [‘토’,’일’,’월’,’화’]
for(let i=0 ; i<4 ; i++){
	console.log(days1[i]);
}
const arr = [2,3,4,4,6]
for(let i=0 ; i<5; i++){
	console.log(arr[i]);
}


const arr3 = arr.slice(-4,2);
for(let i=0 ; i<4; i++){
	console.log(arr3[i]);
}

console.log(arr.indexOf(4)); // 2
console.log(arr[3]); // 4
console.log(arr.indexOf(8)); // -1
console.log(arr.indexOf(6,1));

console.log(arr.join());
console.log(arr.join(''));
console.log(arr.join('-'));
console.log(arr.reverse());
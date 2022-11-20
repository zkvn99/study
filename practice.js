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
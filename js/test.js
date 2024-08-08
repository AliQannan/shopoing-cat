// let arr = [{ id: 1 }, { id: 2 , name: "aliqannan" }];
// function uniqeitem(arr, id){
//   arr.map(item=>item[id])
//   }

let arr = [
  {
    id: 1,
    titel: "headphone",
    size: "larg",
    imgUrl: "../img/headphone.jpg",
    qun: 1,
  },
  {
    id: 2,
    titel: "camera phone",
    size: "medim",
    imgUrl: "../img/camera.jpg",
    qun: 1,
  },
  {
    id: 1,
    titel: "headphone",
    size: "larg",
    imgUrl: "../img/headphone.jpg",
    qun: 1,
  },
];

// function uniqeitem(arr, filtertype) {
//   let uniq = arr
//     .map((item) => item[filtertype]) //=>[1,2]
//     //  1,2 ,1  0,1 ,2 [1,2,1]             0    0 i =0
//     .map((item, i, final) => final.indexOf(item) == i && i)
//     .filter((item) => arr[item])[1,2]
//     .map((item) => arr[item]);
//   return uniq;
// }
/*
arr= [1,2,3]
item=1,2,3
i=0,1,2
final = arr

*/

let ali = [
  { name: "ali", passowrd: "123" },
  { name: "mohmed", passowrd: "123" },
  {},
];
console.log(ali.indexOf(ali[1]) == i && i);

// console.log(uniqeitem(arr, "id"));
// .map((item, i, final) => final.indexOf(item) === i && i)
//     .filter((item) => arr[item])
//     .map((item) => arr[item]);

// let string="ali qannan"
// let newstring=string.split(" ").join("")

// console.log(newstring)

// console.log(uniqeitem(arr,1))

// console.log(arr.filter((item) => item!== item.indexOf("ali")));

// console.log(arr.find( item => item.indexOf("ali")) )

// console.log(arr.indexOf("ali"))
// for ( let i in arr){
//  if ( arr[i].indexOf("ali")){
//     console.log(arr[i])
//  }
// }
//search function
// function search(arr, titel) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().trim().indexOf(titel.toLowerCase().trim()) >= 0) {
//       newArr = [...newArr, arr[i]];
//     }
//   }
//   return newArr;
// }

// console.log(search(arr, "ali"));

// improve search function
// function search(titel) {
//   contentItem.innerHTML = "";
//   let newArr = [];
//   productData.map(function (item) {
//     if (
//       item.titel.toLowerCase().trim().indexOf(titel.toLowerCase().trim()) >= 0
//     ) {
//       newArr = [...newArr, item.titel];
//     }
//   });
//   newArr.map(function (uitem) {
//     let newstorage = productData.filter((item) => item.titel == uitem);

//     localStorage.setItem("search-item", newstorage);
//     drawUi(newstorage);
//   });
// }

// searchInput.onkeyup = function () {
//   search(searchInput.value);
// };

// let string = "ali qannan";

// let newi=string.split(' ')
// console.log(JSON.stringify(newi))
// console.log(newi)
// // console.log(JSON.stringify(newi))
// // console.log(JSON.parse(string))

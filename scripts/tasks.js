// task 1

let usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNameIsBob' }
];

function getFieldValues(usersData, 'user') {
		let result = [];
		usersData.forEach(function(name, i, usersData) {
			result.push(name['user']);
		});
		return result.sort();
}
console.log(getFieldValues(usersData, 'user'));

// task 2

let numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) {if (x % 2==0) return x;}
function filter(X, func1){return X.filter(func1);}
console.log(filter(numbers, isEven)); 

// task 3 

var firstLongString = 'Load up on guns and bring your friends it is fun to lose and to pretend';
var secondLongString = 'She is over bored and self assured oh no I know a dirty word';
var firstarr = str.split(' ');
var secondarr = str.split(' ');
function findSimilarWords(firstarr, secondarr){
  var result = [];

 nextInput:
    for (var i = 0; i < firstarr.length; i++) {
      var str = firstarr[i]; 
      for (var j = 0; j < second.length; j++) { 
        if (result[j] == str) continue nextInput;
      }
      result.push(str);
    }

  return result;
}
console.log(findSimilarWords(firstarr, secondarr));

// task 4

var IpAddress = '10.223.98.2';
var subnetMask = 28;
function generateBroadcastAndNetworsAddresses(IpAddress, bitmask) {
 	if (typeof IpAddress != 'string')
 		return 'IpAddress ' + IpAddress + ' must be a string';
 
 	var arr = IpAddress.split('.');
 	if (arr.length != 4)
 		return 'IpAddress ' + IpAddress + ' must consist of 4 octets';
 
 	if (arr.some(function(num) {
 		return isNaN(parseInt(num)) || num < 0 || num > 255;
 	})) return 'IpAddress ' + IpAddress + ' must consist of numbers from 0 to 255';
 
 	var IpAddressFull = 0;
 	for (var i = 0; i < 4; i++) {
 		IpAddressFull += arr[i] << (3 - i) * 8;
 	}
 
 	var subnetMaskFull = Math.pow(2, 32) - Math.pow(2, 32 - bitmask);
 
 	var networkFull   = IpAddressFull & subnetMaskFull;
 	var broadcastFull = networkFull | ~subnetMaskFull;
 
 	var network   = IPv4_intA_to_dotquadA(networkFull);
 	var broadcast = IPv4_intA_to_dotquadA(broadcastFull);
 
 	return 'Broadcast - ' + broadcast + ', Network - ' + network;
 }
 function IPv4_intA_to_dotquadA(num) {
     var byte1 = (num >>> 24);
     var byte2 = (num >>> 16) & 255;
     var byte3 = (num >>>  8) & 255;
     var byte4 = num & 255;
     return byte1 + '.' + byte2 + '.' + byte3 + '.' + byte4;
 }
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); 

// task 5

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
console.log(makeItClean(totalMessArray));
function makeItClean(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i]);
    }
    result = result.filter(function(element, e) {
        return result.indexOf(element) == e;
    });
    return result;
}
console.log(makeItClean(totalMessArray));


//Given a string, the task is to reverse the order of the words in the given string

function reverseString(input_value){
    return input_value.split(' ').reverse().join(' ')
}

const reverse_string_input_1 = "reverse this given string";
const reverse_string_input_2 = "i love programming very much";
const reverse_string_output_1 = reverseString(reverse_string_input_1);
const reverse_string_output_2 = reverseString(reverse_string_input_2);

console.log("reverse_string_input_1",reverse_string_output_1);
console.log("reverse_string_input_2",reverse_string_output_2);


//Given three Sorted arrays in non-decreasing order, print all common elements in these arrays.

function sortCommonArray(array1,array2,array3){
    return array1.filter(number => array2.includes(number)).filter((number) => array3.includes(number))
}

const sort_common_elements_1 = [1, 5, 10, 20, 40, 80];
const sort_common_elements_2 = [6, 7, 20, 80, 100];
const sort_common_elements_3 = [3, 4, 15, 20, 30, 70, 80, 120]
const sort_common_array_output_1 = sortCommonArray(sort_common_elements_1,sort_common_elements_2,sort_common_elements_3)
console.log("sort_common_array_output_1",sort_common_array_output_1);

const sort_common_elements_4 = [1, 5, 5]
const sort_common_elements_5 = [3, 4, 5, 5, 10]
const sort_common_elements_6 = [5, 5, 10, 20]

const sort_common_array_output_2 = sortCommonArray(sort_common_elements_4,sort_common_elements_5,sort_common_elements_6)

console.log("sort_common_array_output_3",sort_common_array_output_2);


// Given two strings S1 and S2, The task is to find if S1 is a substring of S2. If yes, return the index
// of the first occurrence, else return -1.

const  s1 = "for";
const s2 = "rockfordock";
const  s3 = "practice";
const s4 = "s2isnots1";
const find_index_output_1 =  s2.indexOf(s1);
const find_index_output_2 =  s4.indexOf(s3);
console.log("find_index_output_1",find_index_output_1);
console.log("find_index_output_2",find_index_output_2);

//Given a sorted array and a number x, find a pair in an array whose sum is closest to x

const array_input_1 = [0, 22, 28, 29, 30, 40]
const array_closet_1 = 54;

const array_input_2 = [1, 3, 4, 7, 10]
const array_closet_2 = 15

function closetNumber(array,array_closet){
    let closet_array = {number1:0,number2:0};
    array.forEach(loop_1 => {
        array.filter(n => n !=loop_1).forEach((loop_2) => {
             if((loop_1 + loop_2 < array_closet) && (loop_1 + loop_2 >closet_array.number1 + closet_array.number2)) {
                closet_array = { number1 : loop_1, number2: loop_2}
             }
        })
    })
    return closet_array;
}

const closet_number_output_1 = closetNumber(array_input_1,array_closet_1)
const closet_number_output_2 = closetNumber(array_input_2,array_closet_2)

console.log("closet_number_output_1",closet_number_output_1)
console.log("closet_number_output_2",closet_number_output_2)

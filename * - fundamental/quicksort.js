//Hàm đổi chỗ phần tử thứ a và b trong mảng
let swap = (arr, a , b) => { 
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

let partition = (arr, low, high) => {
    let pivot = arr[high]; //Chọn pivot là phần tử cuối cùng
    let left = low; 
    let right = high - 1;
    while(true){
        //Hai vòng while này để tìm ra phần tử bên trái nhất và bên phải nhất đầu tiên không thoẻ điều kiện để đỗi chỗ
        while (left <= right && arr[left] < pivot) left++; 
        while (right >= left && arr[right] > pivot) right--; 

        if (left >= right) break; // Đã duyệt xong hết các phần từ 

        swap(arr, left, right); //Đổi chỗ 2 phần tử đang xét nếu không được duyệt
        left++; //Left hiện tại đã xét nên cần tăng
        right--; //right hiện tại đã xét nên cần giảm xuống
    }
    swap(arr, left, high) //đổi chỗ phần tử bên trái đầu tiên không thoả điều kiện 
    //vừa xét trên với phần tử cuối cùng là pivot của dãy

    return left;  //Trả về left là phần tử pivot
}

let quickSort = (arr, low, high) =>{
    if(low < high){ 
        let pi = partition(arr, low, high) // Tìm ra được phần tử pivot trong dãy

        quickSort(arr, low, pi - 1) //Gọi đệ quy cho mảng con bên trái
        quickSort(arr, pi + 1, high) // Gọi để quy cho mảng con bên phải
    }
}
let a = [1,2,4,5,6,8,7,20,12]
let n = a.length - 1
quickSort(a, 0, n)
console.log(a)
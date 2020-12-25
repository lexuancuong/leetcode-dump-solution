// Đây là một giải thuật khá hay! 
// Bài toán được chia ra, phép chia đó theo kiểu roate đó thì sẽ có 2 trường hợp xảy ra:
// Trường hợp 1: giá trị từ mid đến end có khoảng những phần tử lớn nhất của dãy rồi đến là phần tử nhỏ nhất của dãy, 
//     còn khoảng từ start đến mid là nhóm những phần tử nằm giữa 2 khoảng đó (nhóm phần tử trung bình)
// Trường hợp 2: Khoảng từ mid đến end là khoảng nhỏ nhất hoặc khoảng nhỏ ở giữa, khoảng từ start đến mid là khoảng chứa 
//     cả nhóm lớn nhất ở đầu (hoặc tiếp đến là nhóm phần tử trung lập ở giữa)


let search = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let mid;
    while(start < end){
        mid = Math.floor((end - start) / 2) + start;
        if (nums[mid] > nums[end]){
            if (nums[mid] < target || target <= nums[end]){
                start = mid + 1
            }
            else {
                end = mid
            }
        } else {
            if (nums[mid] < target && target <= nums[end]){
              start = mid + 1;
            }
            else{
                end = mid }
        }
    }
    if (target != nums[start]) return -1;
    return start;
}

console.log(search([4,5,6,7,0,1,2],2))
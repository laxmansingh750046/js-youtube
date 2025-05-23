// const tinderUser = new Object(); // singelton object

const tinderUser = {}  // non singelton object

tinderUser.id = "123abc";
tinderUser.name = "Demon";
tinderUser.isLoggedIn = false

const regularUser = {
    email: "demon@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Demon",
            lastName: "Bisht"
        }
    }
}

const obj1 = {1: 'a', 2:'b'}
const obj2 = {3: 'c', 4:'d'}
const obj3 = {5: 'e', 6:'f'}

const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
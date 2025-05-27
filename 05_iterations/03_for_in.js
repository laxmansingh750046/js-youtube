// | Use Case        | Works with `for...in`?  | Notes/Best Practice                             |
// | --------------- | ----------------------  |-----------------------------------------------  |
// | Plain Object    | ✅ Yes                  | Perfect for iterating keys                      |
// | Array           | ✅ Yes                  | Works but avoid, use `for...of` or `.forEach()` |
// | String          | ✅ But not recommended  | Use `for...of` for chars                        |
// | Map             | ❌ No                   | Use `.forEach()` or `for...of`                  |
// | Set             | ❌ No                   | Use `.forEach()` or `for...of`                  |
// | Other Iterables | ❌ No                   | Use `for...of`                                  |


const myObj = {
    "game1":"NFS",
    "game2":"Spiderman",
    "game3":"Tanks",
    "game4":"GTA",
    "game5":"PUBG"
}

for(key in myObj)console.log(`${key} ${myObj[key]}`);

let myarray = ["flash", "batman", "superman", "wonderwoman", "aquaman"];
let i = 0;
for(k in myarray)console.log(myarray[k]);
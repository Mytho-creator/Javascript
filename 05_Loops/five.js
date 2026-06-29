 //const coding = ['JAvascript',"C++","Ruby","Python","Java"]

// const values =  coding.forEach((item)=>{
//     // console.log(item);
//     return item;
//  })

//  console.log(values);  [For each loop returns nothing - undefined]

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => (num>4))
// const newNums = myNums.filter((num) => {
//     return num > 5
// })
// const newNums = []
// myNums.forEach((num) =>{
//     if (num > 5) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title:"Book_one", genre:"Fiction",publish:2008,edition:2014},
    {title:"Book_two", genre:"non-Fiction",publish:2000,edition:2009},
    {title:"Book_three", genre:"History",publish:1999,edition:2010},
    {title:"Book_three", genre:"Science",publish:1995,edition:2000},
    {title:"Book_five", genre:"Fiction",publish:2004,edition:2019},
    {title:"Book_six", genre:"non-Fiction",publish:2008,edition:2017},
    {title:"Book_three", genre:"Science",publish:1991,edition:2010},
    {title:"Book_eight", genre:"History",publish:1995,edition:2023},
    {title:"Book_nine", genre:"Political-science",publish:2018,edition:2021},
    {title:"Book_ten", genre:"non-Fiction",publish:1999,edition:2018},
    {title:"Book_eleven", genre:"Science",publish:2005,edition:2015},
    {title:"Book_twelve", genre:"non-Fiction",publish:2006,edition:2018},
    {title:"Book_thirteen", genre:"History",publish:2018,edition:2025},
    {title:"Book_fourteen", genre:"Political-science",publish:1989,edition:2003},
    {title:"Book_fifteen", genre:"non-Fiction",publish:1998,edition:2010}
];

// console.log(books[7]);

// const userBooks = books.filter((book) => (book.genre) === "History")
// const userBooks = books.filter((book) => (book.publish > 2003))
// const userBooks = books.filter((book)=>{
//     if (book.publish > 1995 && book.genre === "History") {
//         return book;
//     }
// })

const userBooks = books.filter((book) => {
    return book.edition > 2005 && book.genre === "Science"
})
console.log(userBooks);


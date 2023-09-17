// What is Call,Apply,Bind ?

/*JavaScript me call, apply, aur bind ka upayog kisi function ko specific context (object) me call karne ke 
liye kiya jata hai. Ye methods especially tab kaam aate hain jab aap ek function ko kisi specific object ke
 saath use karna chahte hain.
Yadi aap ek normal function bana kar use kar rahe hain, to wo function global context (yaani window object)
 ke saath execute hoga. Lekin, kabhi-kabhi aap chahte hain ki wo function kisi specific object ke saath execute
  ho. Iske liye call, apply, aur bind ka upayog hota hai:*/


// first Class Function - its mean hm kisi function ko variable ki trah threat kr skte h


// High Order function - High Order Function - Vo function jo koi dusra function ya to argument
//  me accept krta ho ya koi function return krta ho


// Temporal Dead Zone - Agar kisi code ko create kiya gya h line no. 10 pr to use 10 se pehle
//                      use nhi kr skte Only Var ko kr skte h lekin vaue Undefined aaegi


// DRY Principle - DO NOT REPEAT YOURSELF
// EK HI CODE KO BAAR BAAR NHI LIKHNA ISKE BJAAE USKO FUNCTION ME STORE KRWA LO


// // Hoisting - Jis line pr code create kia hai usse phle function call kr skte hai ya nhi ?
// //     Function Declaration - Phle use kr skte hain
// //     Func expression and Arrow function ko phle use ni kr skte hain
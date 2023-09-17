// What is Json?
// Json Data ko store and transfer krne ka kaaam krta h...

let obj = {
    name: "Wecode",
    age: 21,
    address: {
        pincode: 341515,
    },
    marks: [1, 2, 3, 4, 5],
    sum: function () {
        console.log("Hello"); // Not Allow in Json
    },
    fatherName: undefined,// Not Allow in Json
}

const Json = JSON.stringify(obj);
console.log(Json);

const myobj = JSON.parse(Json);
console.log(myobj);





// What is XML?
// XML - Extensible Markup Language
// XML Data ko store krwane And transfer krwane ke kaam aata h

<wecodeacademy>
    <batches>
        <javaScript>
            <id>1</id>
            <name>javaScript batch 101</name>

            <students>
                <name>Amir</name>
                <age>24</age>
            </students>

            <students>
                <name>Arif</name>
                <age>35</age>
            </students>

        </javaScript>
    </batches>
</wecodeacademy>


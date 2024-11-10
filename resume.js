
let summaryDetail = "Dedicated and highly motivated Infomatiion Technology graduate with a foundation in software development, Proficient in multiple programming languages, including Python, C++, and Java. Expericed  in college project-based lesrning with a focus on developing innovative solutions through teamwork and independent projects."
let skillDetails = ["C", "C++", "HTML, CSS, JS"]

let educationDetails = [
    {
        name: "VES College of Arts,Science and Commerce",
        degree: "BSc in Information Technology",
        CGPA: "B+"
    },
    {
        name: "AEJC",
        degree: "HSC",
        percentage: 61.69
    }
];


let personalDetails = [
    {
        date: "14/05/2001",
        nationality: "Indian",
        gender: "Female",
        address: "Trombay koliwada, Mumbai-4000088"
    }

];


let myResume = {
    name: "Anushka Keni",
    mobile: [9867790416, 123456798],
    email: ["kenianushka@gmail.com", "hkh@mail"],
    location: "Mumbai",
    summaryDetail: summaryDetail,
    skillDetails: skillDetails,
    educationDetails: educationDetails,
    personalDetails: personalDetails
};
console.log({ myResume })


console.log("         " + myResume.name)
console.log("Location: " + myResume.location)
console.log("Mobile:  " + myResume.mobile)
console.log("Email:   " + myResume.email)

console.log("-----------------------")

console.log("Summary")
console.log(myResume.summaryDetail)

console.log("------------------------")

console.log("Skills")
console.log(myResume.skillDetails[0])
console.log(myResume.skillDetails[1])
console.log(myResume.skillDetails[2])

console.log("--------------------------")

console.log("Education")


console.log("Course:  " + myResume.educationDetails[0].degree + "  June 2024")
console.log("College: " + myResume.educationDetails[0].name)
console.log("CGPA:    " + myResume.educationDetails[0].CGPA)

console.log(" ")

console.log("Course:     " + myResume.educationDetails[1].degree + " May 2021")
console.log("School:     " + myResume.educationDetails[1].name)
console.log("Percentage: " + myResume.educationDetails[1].percentage)


console.log(" ")

console.log("Personal Details")
console.log("Date Of Birth: " + myResume.personalDetails[0].date)
console.log("Nationality:   " + myResume.personalDetails[0].nationality)
console.log("Gender:        " + myResume.personalDetails[0].gender)
console.log("Address:       " + myResume.personalDetails[0].date)





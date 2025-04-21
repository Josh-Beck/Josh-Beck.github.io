// Description in card
let triangleInfoSeCon = `Embark on a journey through the OWASP Juice Shop, an infamously vulnerable web application. I use the techniques of secure code review to evaluate a few common vulnerabilities, showing the power of reviewing code to uncover intrinsic problems within an application, and explaining the flow through an application from API to exploit.`

let cloudSecurity = `Join me as I walk through a few basic elements of cloud security and encourage listeners
to avoid some common pitfalls of shifting legacy applications directly into the cloud.`

let uscLecture = `In April of 2023 I was invited to give a lecture for USC's secure software course, and attend a Q&A session after.
 I taught on code security, informed them how they can learn and grow in application security skills, and 
 answered career growth questions.`

export const portfolio = [
    {
        "title": "Juice Shop Secure Code Review",
        "name": "Triangle InfoSeCon",
        "date": "November 2023",
        "data": triangleInfoSeCon,
        "href": "https://www.youtube.com/watch?v=1aaGJrJxVwk",
        "video": '<iframe style="height:250px; width: 100%;border-radius: 0.5rem;" src="https://www.youtube.com/embed/1aaGJrJxVwk" title="YouTube video player" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        "title": "Cloud Security 101",
        "name": "NC-PaCE Cyber Security Symposium",
        "date": "January 2023",
        "data": cloudSecurity,
        "href": "https://www.youtube.com/watch?v=KMlow3DsC3A",
        "video": '<iframe style="height:250px; width: 100%;border-radius: 0.5rem;" src="https://www.youtube.com/embed/KMlow3DsC3A" title="YouTube video player" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    },
    {
        "title":"Juice Shop Secure Code Walkthrough",
        "name":"University of South Carolina Lecture",
        "date":"April 2023",
        "data": uscLecture,
        "href":"https://www.cse.sc.edu/class/548",
        "video": ""
    },
]
let codeSecurityData = `Secure code review is an incredibly important part of any security minded organization. 
It's more than PR code review. It's taking into account the entire realm of a website, 
examining how inputs & malicious attacks enter into the codebase, then tracing all interactions to their source. 
Using secure code review methodologies, I have reviewed many applications in about a dozen different languages, 
with excellent results, not only finding vulnerabilities, but also using the deep knowledge gained about a 
target application to better educate developers about how to secure their code.`;

let archSecurityData = `As a Staff Application Security Engineer, reviewing
newly developed architectures through a security lens is critical part of both my role
and the security posture of my organization. Secure Architecture Review involves 
looking at an application as the sum of many parts, recognizing how those parts
interact, and developing guidance to ensure they interact both correctly and safely. 
Additionally, this often involves threat modeling, identifying inputs, data 
boundaries and trust boundaries, to establish the most likely attack points
and outline specific actions to neutralize likely threats.`;

let awsData = `AWS is the main cloud provider I have used throughout my career. I have received two certifications 
from AWS, the Security Specialty and Developer Associate certifications. Specifically, I have experience developing 
in EC2, Fargate and Lambda, and have experience securing entire enterprise AWS accounts, from entrance through API Gateway
until storage or release of data through systems like S3, Dyanmo and RDS.`

let pythonData = `I use Python for many enterprise and personal level use cases. I was instrumental in the set up of 
new Python Lambda functions for John Deere Financial's Security by Design portal, improving our development cycle time, 
lowering burden on our Java server, and simplifying our codebase.
Additionally, I use Python as my primary scripting
language for hacking and projects for which simple and quick code is necessary.`

let javaData = `During my time and Genesys, I worked to maintain and 
develop stateless and stateful microservices as part of the Search team. 
I made use of standard Java Object Oriented Programming and POJO serialization,
and used Java Streams to more efficiently and cleanly write high quality code.`;

export const skillInformation = [
    {
        "title":"Code Security",
        "name":"Reviewing & testing web applications with a security mindset.",
        "date":"",
        "data":codeSecurityData,
        "skill":[],
        "href":"https://owasp.org/www-project-top-ten/",
        "video":""
    },
    {
        "title":"Architecture Security",
        "name":"Ensuring secure architecture development in the cloud.",
        "date":"",
        "data":archSecurityData,
        "skill":[],
        "href":"",
        "video":""
    },
    {
        "title":"AWS",
        "name":"Engineering and developing with a cloud first approach.",
        "date":"",
        "data":awsData,
        "skill":[],
        "href":"https://owasp.org/www-project-top-ten/",
        "video":""
    },
    {
        "title":"Python",
        "name":"Developing AWS Lambda Functions and hacking scripts.",
        "date":"",
        "data":pythonData,
        "skill":[],
        "href":"https://www.python.org/",
        "video":""
    },
    {
        "title":"Java",
        "name":"Optimzing and maintaining large data cloud services.",
        "date":"",
        "data":javaData,
        "skill":[],
        "href":"https://www.oracle.com/java/",
        "video":""
    },
]
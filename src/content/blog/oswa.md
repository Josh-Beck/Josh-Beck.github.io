---
slug: "/blog/oswa"
date: "April 2023"
title: "My Experience with the OSWA Certification"
subtitle: "Offensive Security Web Assessor"
desc: "In April of 2023 I passed the OSWA, a web application hacking certification. See how I did it, what I learned, and how you can pass it too!"
priority: 1
---

### Introduction
In April of 2023 I passed Offensive Security's Web Assessor 
Certification, abbreviated "OSWA". Not only was this quite
difficult for me to complete, but it came with many
challenges along the way. I found that due to the recency of 
the exam, it was very difficult to find information about 
it and that is was hard to prepare appropriately. 
As such, below I will attempt to sum up both my experience with 
the course and exam, but also hopefully give some helpful advice.
This way, if you are looking to take this exam for yourself, you 
can be well prepared for the format and unique procedures for this 
test.


### Coursework
I found that this course was very similar to a lot of
content I had seen before. Vulnerabilities like [SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection) (SQLi),
[Cross Site Scripting](https://owasp.org/www-community/attacks/xss/) (XSS), and [Command Injection](https://owasp.org/www-community/attacks/Command_Injection) were all very 
familiar to me. That isn't to say that you will have similar 
experience before you begin the course, but these topics are very
common in introductory ethical hacking lessons, as well as common
vulnerabilities to exploit on sites like HackTheBox. 

More important to me than theory about vulnerabilities was the "hacker mindset" which Offensive Security espouses. I learned
a good deal about applying hacking concepts in "offensive" ways, making the knowledge much more practical. I believe this course and certification can provide both entry level vulnerability knowledge, as well as prepare learners for more advanced penetration testing concepts, and is well worth it for any early career red teamer or web application security engineer.


**Advice: This certification is about practical capabilities, not theoretical knowledge. You will want to have plenty of hands on practice to make sure you can properly/efficiently exploit vulnerabilities.**  



### Practice Boxes

One of the more difficult problems I had during my study for this exam was knowing what resources were available to me. Specifically, which of the many different boxes to hack on the plethora of platforms. To help you study, here are a list of retired HackTheBox walkthroughs which go over covered exam topics (requires VIP subscription). No box will perfectly simulate the exam (HTB is a game after all), so look through Proving Grounds resources as well and know the course content, as that is what you'll be tested over.

**HackTheBox**
* [Validation (SQLi)](https://0xdf.gitlab.io/2021/09/14/htb-validation.html)
* [Photobomb (Command Injection)](https://infosecwriteups.com/htb-photobomb-walkthrough-d007e9d6001e)
* [Schooled (XSS)](https://0xdf.gitlab.io/2021/09/11/htb-schooled.html)
* [Forge (SSRF)](https://0xdf.gitlab.io/2022/01/22/htb-forge.html)
* [FriendZone (LFI)](https://0xdf.gitlab.io/2019/07/13/htb-friendzone.html)
* [Red Panda (SSTI)](https://0xdf.gitlab.io/2022/11/26/htb-redpanda.html)
* [Bounty Hunter (XXE)](https://0xdf.gitlab.io/2021/11/20/htb-bountyhunter.html)
* [SecNotes (CSRF)](https://0xdf.gitlab.io/2019/01/19/htb-secnotes.html)

### Practice Tips

In addition to generic study resources, I found I would've benefited from some niche study methods, which aren't normally necessary for a standard certification.

One thing you have to do is get your processes and commands down ahead of time. With only 24 hours to hack, you can't be wasting precious time trying to remember how to use nmap. During your hacking study, compile a list of commands for enumeration and exploitation of each vulnerability found in the coursework. Additionally, mark down important sections of the course PDF so you can easily reference it during the exam (also great for the report). Consider using the following resources to help you prepare.

**Tools**

* [SQLMap](https://sqlmap.org/)
* [Gobuster](https://www.kali.org/tools/gobuster/)
* [Nmap](https://nmap.org/)
* [Nikto (vuln scanner)](https://github.com/sullo/nikto)

**Payloads/Vulnerabilities**

* [SSTI Payloads](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Server%20Side%20Template%20Injection/README.md)
* [SSTI HackTricks](https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection)
* [SSRF HackTricks](https://book.hacktricks.xyz/pentesting-web/ssrf-server-side-request-forgery)
* [Command Injection Intruder](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Command%20Injection/Intruder/command-execution-unix.txt)
* [XML Injection](https://github.com/payloadbox/xxe-injection-payload-list)

*(By far not an exhaustive list of tools or vulns)*

**Advice: Know your tools (nmap, SQLmap, Gobuster, etc.) inside and out. You should know which tools are used for which vulnerabilty types and have example payloads ready to go.**


Because the hacking portion of the exam is 24 hours, you must be able to stay sharp for long periods of time. I regret not practicing either of these skills ahead of the exam. Consider spinning up two study boxes at once, and not "stopping" until you have finished both (take breaks and meals, as you will during the exam). Learn to pivot between them and understand how you feel when slogging through the 6th hour of a box that seems hopeless. 

**Advice: This exam is a marathon! Learn how to hack and how to remain calm/focused during long hacking sessions. Also, determine how to manage any testing stress you have that may increase or come in go during the exam.**

While I didn't know how I would fair hacking for 24 hours, I did learn a method of preventing myself from falling down rabbit trails and getting stuck. I chose to set a timer for myself, so that every 20-30 minutes I had to switch boxes unless I was incredibly close to a flag. This also gave me opportunities to get up and moving throughout the testing period, getting the blood pumping. I still got stuck some, but was able to keep myself from losing too much time to any one flag, which was critical for success.

**Advice: Find some way to prevent yourself from falling down rabbit trails or getting stuck on one problem. Time limits or breaks every 30 minutes seemed to work well for me.**


### Testing Format

The general format for the OSWA exam looks like this:


**24 hour hacking time**
- Hack 5 boxes with 2 flags per box (10 possible flags, 7 minimum to pass).
- Taking screen shots and notes of the hacking process.
- Using the exam dashboard for flag submission and retrieving IP addresses.

*(The exam is specifically designed to not take all 24 hours. You are meant to eat, sleep and exercise normally,  while spending normal work and leisure hours focused on the exam.)*

**24 hour writing time**
- Write about your methodology for hacking each box.
- Include screenshots and copy paste from tooling outputs.
- Very obvious proof of flags obtained **with box IP address visible!** (This is a very clear note in the exam guide, make sure they know which IP addresses you're working on)

*(Again, meant to be done while balancing normal life activities like sleep and self care.)*


The OSWA may well have been the most difficult assessment I have ever taken, exclusively because of the format.
If it wasn't apparent above, this test is essentially **48 hours long!** You'll hear "24 hours", as that is the amount of time
you'll have to hack at the 5 boxes. However, after the initial hacking period is over, you have an additional 24 hours to submit 
your report. For reference, my report was ~160 pages long. Now, this contained a lot of screenshots and copy pasta from
the terminal, but it is still a significant amount of content to get onto a page, especially after a 24 hour exam immediately before. 
This ended up being a lot more of a time and headspace investment than I realized. As I will explain below, I was wiped mentally after only a few hours, and it was a significant challenge to continue hacking and then writing in a high quality manner for so long.

I am the type of person that feels the most stress during an exam. During a 2 hour test, this is manageable and I feel fine after. But for 24-48 hours, that level of stress was something I didn't expect. For me, if I ever choose to take an exam like this again, I will need to develop mechanisms for myself to ensure I am not so stressed for so long. Before you begin this exam, take a look in the mirror and figure out what type of test taker you are. This isn't to scare you, this is to help prepare you for what is a very long 48 hours. 


**Advice: Plan for/reflect on your exam taking style and make sure you take plenty of breaks and regularly review your mental state, so you can stay focused and on point during the exam.**



### My Exam Experience (Hacking)

I started my test at 2pm, which gave me a "full" night's sleep during the exam. I did my exam during the work week (Wednesday to Friday), as my company was gracious enough to let me spend work hours on the exam.


**Advice: When scheduling your exam, consider when you would like to start and when you would like to sleep. Also keep in mind any normal life patterns you would like to or need to continue such as workouts, child care or pet car needs, etc. This will help you best select a start time.**


Starting at 2pm, I had roughly 8 hours before bed, with a break for dinner. I spent a bit of time getting used to the setup and boxes, then dove in, using the 30 minute timer method I discussed above to stay focused and fresh. I was able to find 4 flags during the first stretch. This was great, but as the evening went on I found myself feeling more and more defeated as I couldn't make additional progress.

My sleep was horrible *(see "I am the type of person that feels the most stress during the exam")*, but the time away from keyboard allowed me to collect my thoughts and create a plan for how I would approach the morning. With essentially 6-8 hours remaining, I wanted to know exactly what my next steps would be to maximize my "refreshed" morning hours.

This worked remarkably well. I went back to a box I had previously struggled with and in **17 minutes** I had the next flag. I wasn't close at all before, but forcing myself to step away and look in a totally different direction put me on the right track.

After this flag fell, the admin flag behind it ended up being one of the easiest, and with only about an hour spent of my second day I had only one flag left to reach the seven minimum. I found it after another couple hours, leaving me a decision. With around three hours left in the 24 hour hacking period, I had reached the minimum number of required flags. I could go for more, although I was already very tired and worn out of hunting, or I could begin collecting anything I felt I needed for the report.

I chose to go the second route, and went back to collect screenshots and double/triple/quadruple check that I had the correct flags with the correct IP addresses. This is when I realized that many of my screenshots were poor quality and hard to read. So I spent about an hour retaking all the screenshots for every step of the process for each flag. This was annoying, but made for a much better final report.

**Advice: After you have reached the minimum number of flags, double check all your notes and screenshots before continuing. You can't go back later, so make sure you have what you need while you have time to go back and get more.**


### My Exam Experience (Report)

With the remaining afternoon and following morning, I wrote the report, which mainly consisted of copy pastes and screenshots, along with explanations of my methodologies and tools used. I used the [OSWA template](https://www.offensive-security.com/oswa-online/OSWA-Exam-Report.docx) and in browser Word for the report, which worked well enough. However, I did have troubles with my picture formatting.

**Advice: Fill out a sample report ahead of time (copy paste random tool output and write about an exploit) in order to get a feel for the report style. Ensure you know how to best screenshot your work and make sure that you have a writing tool which prints to PDF. Also, the OSWA Template adds a header to each page, so understand how that will affect your formatting.**

Finally, with an hour left in the report writing time, I submitted my report. Like I said, it was around 160 pages and I had to spend at least an hour or two just working on polish and formatting. Two days later (on a weekend) I received the notice that I had passed! Very arduous exam, but I can look back feeling accomplished and look forward with more tools in my penetration testing belt.

### Other great blogs about the OSWA:
Here are some other great resources to check out when considering taking or studying for the OSWA:

* [Hy3n4's prep guide](https://medium.com/@hy3n4/oswa-experience-and-exam-preparation-guide-b4270348f2fa)
* [Bastijn's journey](https://bastijnouwendijk.com/my-oswa-certification-journey/)
* [Machevalia's Blog](https://machevalia.blog/blog/oswa-web-200-experience)

<br><br>
<br><br>
<br><br>
<br><br>

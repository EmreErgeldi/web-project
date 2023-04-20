export const BLOGS = [
  {
    blog_id: 0,
    title: "You’re Using ChatGPT Wrong! Here’s How to Be Ahead of 99% of ChatGPT Users",
    description: "Master ChatGPT by learning prompt engineering.",
    link: "https://www.gpt-3-experiments.com/blog/youre-using-chatgpt-wrong-heres-how-to-be-ahead-of-99-of-chatgpt-users",
    content: {
      intro:
        "Most of us use ChatGPT wrong. We don’t include examples in our prompts. We ignore that we can control ChatGPT’s behavior with roles. We let ChatGPT guess stuff instead of providing it with some information. This happens because we mostly use standard prompts that might help us get the job done once, but not all the time. We need to learn how to create high-quality prompts to get better results. We need to learn prompt engineering! And, in this guide, we’ll learn 4 techniques used in prompt engineering.",
      sections: [
        {
          title: "Few Shot Standard Prompts",
          contents: [
            "Few shot standard prompts are the standard prompts we’ve seen before, but with examples of the task in them. Why examples? Well, If you want to increase your chances to get the desired result, you have to add examples of the task that the prompt is trying to solve. Few-shot standard prompts consist of a task description, examples, and the prompt. In this case, the prompt is the beginning of a new example that the model should complete by generating the missing text. Here are the components of few shot standard prompts.",
            "Now let’s create another prompt. Say we want to extract airport codes from the text “I want to fly from Orlando to Boston” Here’s the standard prompt that most would use. Extract the airport codes from this text: “I want to fly from Orlando to Boston” This might get the job done, but sometimes it might not be enough. In such cases, you have to use few shot standard prompts. Extract the airport codes from this text: Text: “I want to fly from Los Angeles to Miami.” Airport codes: LAX, MIA Text: “I want to fly from Nashville to Kansas City.” Airport codes: BNA, MCI Text: “I want to fly from Orlando to Boston” Airport codes: If we try the previous prompt on ChatGPT, we’re going to get the airport code in the format we specified in the example (MCO, BOS) Keep in mind that previous research found that the actual answers in the examples are not important, but the labelspace is. A labelspace is all the possible labels for a given task. You could improve the results of your prompts by even providing random labels from the labelspace. Let’s test this by typing random airport codes in our example. Extract the airport codes from this text: Text: “I want to fly from Los Angeles to Miami.” Airport codes: DEN, OAK Text: “I want to fly from Nashville to Kansas City.” Airport codes: DAL, IDA Text: “I want to fly from Orlando to Boston” Airport codes: If you tried the previous prompt on ChatGPT, you’ll still get the right airport codes MCO and BOS. Whether your examples are correct or not, include random labels from the labelspace. This will help you improve results and instruct the model on how to format the answer to the prompt.",
          ],
          images: ["/1-1.webp"],
        },
        {
          title: "Role Prompting",
          contents: [
            "Sometimes the default behavior of ChatGPT isn’t enough to get what you want. This is when you need to set a role for ChatGPT. Say you want to practice for a job interview. By telling ChatGPT to “act as hiring manager” and adding more details to the prompt, you’ll be able to simulate a job interview for any position.",
            "As you can see, ChatGPT behaves like he’s interviewing me for a job position. Just like that, you can turn ChatGPT into a language tutor to practice a foreign language like Spanish or a movie critic to analyze any movie you want. In this article, I dive more into how to turn ChatGPT into your language tutor or language buddy. You only need to start your prompt with the words “Act as a … ” and then add as many details as possible. If you need some inspiration, check this repository where you’ll find prompts to make ChatGPT behave like a stand-up comedian, doctor, and more.",
          ],
          images: ["/1-2.webp"],
        },
      ],
    },
    cratedAt: "2023-03-17",
    createdBy: 0,
    approxReadTime: "7 min",
    tags: ["Artifical Intellegence", "ChatGPT"],
    mainImage: "/0.webp",
  },
  {
    blog_id: 1,
    title: "Programming Languages NOT To Learn In 2023!",
    description: "You are better off learning something else.",
    link: "https://www.gpt-3-experiments.com/blog/how-to-use-chatgpt-to-practice-a-foreign-language",
    content: {
      intro:
        "Hey everyone! My name is Imaad, and here we talk about everything software engineering and computer science. If that’s something that interests you, please consider following for more content like this! Today we will talk about some programming languages that you should not learn this year, so let’s get started! I want to start by saying that there is no bad programming language. Every programming language has a role and is very important to the applications the world uses daily. As some of the older programming languages are getting replaced by newer ones that are also much higher in demand, it makes more sense to focus on learning those. The cool thing about programming languages is that the basic syntax is usually the same. So once you have a solid understanding of one language, picking another language becomes much easier.",
      sections: [
        {
          title: "C#",
          contents: [
            "The first language you should avoid learning is C#. Now C# has been a very popular programming language for years with a huge online community of support and knowledge. My biggest issue with the language is that it takes a lot to get up and running and make progress with if you’re completely new to programming. For example, with C#, you have to download the .net runtime and the .net framework. You then have to compile your code to something, so you need a command line tool or you need to download Visual Studio or have an extension on Visual Studio Code. In the beginning, while you’re learning and say you want to start building some projects you’re pretty much limited to console applications which is pretty boring. A great first programming language to learn is one that doesn’t require a lot to get up and running. C# isn’t that unfortunately as you have much better options.",
          ],
          images: [],
        },
        {
          title: "PHP",
          contents: [
            "Another language you should avoid is PHP. PHP is a very popular language, and according to some statistics from an article I’ve read in the past, it’s used in 8 out of every 10 websites you visit on the internet. Now as popular as the language is it is slowly phasing out in my opinion. I’d rather learn JavaScript as my first language over PHP as it’s still very popular and high in demand. PHP also suffers the same issue I mentioned with Java and C#. It takes time to set up and get up and running. When starting out, it’s better to learn a language where you don’t have this obstacle, like JavaScript or Python, and you can save PHP as a second language to learn.",
          ],
          images: [],
        },
        {
          title: "C++",
          contents: [
            "Another language to avoid which is also a very popular language taught in computer science programs is C++. Now quite a few people will say that C++ is the perfect language because it’s the right way to learn programming. I don’t agree with this because that’s like going to the gym and starting off by lifting 300 pounds right away. It’s just not the right way to go about it, as it’ll be too much. You have to work your way up. C++ is not your average programming language. It’s a low level programming language which means that it has direct access to a computer's resources such as memory and CPU registers. This means that you as the programmer will have to learn how memory management works and other low-level tasks. Now many programmers will say that this is a good thing for you to know, but for someone who is starting out, learning the basics and fundamentals of a programming language is hard enough, and it won’t make sense to add something extra and more advanced to learn on top of that. It’s better to learn a high-level programming language instead, like Python. With Python, you don’t have direct access to resources, and you don’t have to learn about memory management either.",
          ],
          images: [],
        },
      ],
    },
    cratedAt: "2023-03-17",
    createdBy: 1,
    approxReadTime: "5 min",
    tags: ["Programming Languages", "C#", "PHP", "C++"],
    mainImage: "/2.webp",
  },
  {
    blog_id: 2,
    title: "My top 3 programming languages to learn in 2023",
    description: "What are your plans for 2023?",
    link: "https://www.gpt-3-experiments.com/blog/how-to-use-chatgpt-to-practice-a-foreign-language",
    content: {
      intro:
        "This time of year can feel saturated with talk of resolutions. But the changing of the calendar is still a good opportunity to take stock of our personal and professional goals. If you’re looking for a goal for 2023 to help you advance as a developer, here’s an idea to boost your career and keep your skills fresh: learn a new programming language. Learning new languages is a central part of being a developer. It provides new opportunities and keeps our work interesting. Adding a language to your toolkit could help you in your current role, open new doors, or inspire your next passion project. Now, picking one language might seem hard, given the number of options. But ask yourself: What languages would help me upskill in my role or land my dream job? What languages are in demand? You can look at rankings of languages’ popularity, but that still leaves many choices. Perennial favorites like Python and JavaScript might be on your radar. These languages remain as in demand as ever. But I’m going to make the case for three relative newcomers that developers who want to position for the future should keep on their watchlists: Go, Rust, and Kotlin. They were among the most wanted technologies in last year’s Stack Overflow Developer Survey, and each has captured my personal curiosity for reasons I will explain.",
      sections: [
        {
          title: "1. Go (Golang)",
          contents: [
            "Go is an open-source, higher-level language developed at Google and first released in 2012. It’s in the top 20 most popular languages in the RedMonk and TIOBE Index rankings. With Go, you get: A standard library Package management Static typing Support for testing Platform independence If I were creating Educative from scratch today, I would love to work with Go. Given my background in C/C++, it would have been easier to transition to the static typing of Go than to learn Python. But Go wasn’t as mature back then as it is today. More importantly, Google Cloud and the Google App Engine didn’t support Go when we started building Educative. They supported Java and Python, and we chose Python for its combination of functionality and ease of learning. However, I don’t recommend Go simply because I like statically typed languages. Let’s drill deeper into its many useful attributes.",
          ],
          images: ["/3-1.webp"],
        },
        {
          title: "2. Rust",
          contents: [
            "My interest in Rust will be familiar to regular newsletter readers, who might recall my recent story about coming around to Rust. As a reminder, Rust is: An open-source, cross-platform language. Strongly and statically typed, which lets you catch errors during compilation rather than runtime. Supported by a great package management system called Cargo. Good at eliminating common sources of bugs and security vulnerabilities found in traditional compiled languages. Backed by a large and welcoming community that helps learners find answers quickly. The developer community is ardent about Rust. RedMonk and the TIOBE Index rank it in the top 20 popular languages. Meanwhile, respondents to the 2022 Stack Overflow survey identified Rust as their most wanted technology, alongside Python. It’s not just a popularity contest, either. Rust’s safety and security features have spurred a tech industry shift toward adopting the language as a mainstream substitute for C and C++.",
          ],
          images: ["/3-2.webp"],
        },
        {
          title: "3. Kotlin",
          contents: [
            "With all the attention on Go and Rust, I’m not exactly going out on a limb recommending them. By comparison, Kotlin might seem like a bit of a dark horse. But don’t get me wrong, this open-source language developed at JetBrains enjoys some well-deserved buzz. That’s largely thanks to Google’s 2019 announcement of Kotlin as the preferred language for Android operating system development. Of course, Google may have been thinking about more than Kotlin’s capabilities. You might recall Google’s U.S. Supreme Court victory over Oracle in April 2021. The justices found that Google didn’t infringe on Oracle’s copyright of Java SE when it used Java APIs while developing its Android mobile platform for app developers. This ruling capped off more than a decade of litigation between the two companies, starting when Oracle sued Google in 2010. (By the time of the Supreme Court decision, Google had created a “clean room implementation” for Android to be compatible with Java without using its code.) While this context is important, Kotlin is more than a Java alternative, and Google isn’t the only major player to recognize that. Companies and platforms that use Kotlin in production include: Netflix Uber Slack Evernote’s Android client The Spring Java platform Atlassian’s Trello app for Android Gradle, an open-source build tool Corda, an open-source distributed ledger platform Increasing industry adoption means increasing demand for Kotlin developers, but there are other reasons to learn this language.",
          ],
          images: ["/3-3.webp"],
        },
      ],
    },
    cratedAt: "2023-06-09",
    createdBy: 2,
    approxReadTime: "9 min",
    tags: ["Programming Languages", "Kotlin", "Rust", "Go"],
    mainImage: "/3.webp",
  },
];

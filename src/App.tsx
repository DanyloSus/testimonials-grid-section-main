import { useEffect } from "react";
import GridElement from "./Elements/GridElement";

const App = () => {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main className="grid grid-cols-4 grid-rows-2 max-w-[1110px] min-h-[574px] gap-6 lg:px-6 lg:py-[72px] lg:flex flex-col">
      <GridElement
        img="image-daniel.jpg"
        h1="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
        p="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
        color="hsl(263, 55%, 52%)"
        name="Daniel Clifford"
        colSpan={2}
        rowSpan={1}
        imgColor="white"
        isDark={true}
      />
      <GridElement
        img="image-jonathan.jpg"
        h1="The team was very supportive and kept me motivated"
        p="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”"
        color="hsl(217, 19%, 35%)"
        name="Jonathan Walters"
        colSpan={1}
        rowSpan={1}
        imgColor="white"
        isDark={true}
      />
      <GridElement
        img="image-kira.jpg"
        h1="Such a life-changing experience. Highly recommended!"
        p="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”"
        color="white"
        name="Kira Whittle"
        colSpan={1}
        rowSpan={2}
        imgColor="white"
        isDark={false}
        isEnd={true}
      />
      <GridElement
        img="image-jeanette.jpg"
        h1="An overall wonderful and rewarding experience"
        p="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”"
        color="white"
        name="Jeanette Harmon"
        colSpan={1}
        rowSpan={1}
        imgColor="white"
        isDark={false}
      />
      <GridElement
        img="image-patrick.jpg"
        h1="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
        p="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”"
        color="hsl(219, 29%, 14%)"
        name="Patrick Abrams"
        colSpan={2}
        rowSpan={1}
        imgColor="hsl(263, 55%, 52%)"
        isDark={true}
      />
      <GridElement
        img="image-kira.jpg"
        h1="Such a life-changing experience. Highly recommended!"
        p="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”"
        color="white"
        name="Kira Whittle"
        colSpan={1}
        rowSpan={2}
        imgColor="white"
        isDark={false}
        isEnd={false}
      />
    </main>
  );
};

export default App;

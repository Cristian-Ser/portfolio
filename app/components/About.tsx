function About() {
  return (
    <section
      id="about"
      className="relative border-b overflow-hidden scroll-mt-14"
    >
      <div className="flex flex-col justify-center gap-5 max-w-3xl mx-auto px-4 py-10 min-h-100">
        <span className="text-base font-bold text-gray-500">ABOUT</span>
        <p>
          I started with a foundation in React and Next.js. I had learned the
          concepts and theory, but I hadn’t really applied them in a real
          project before.
          <br />
          With Cashwell, that changed. I already had the idea of a personal
          finance tracker, but I started by building it just as a UI mockup,
          because that was the only thing I was comfortable with at the time.
          <br />
          After finishing the UI, I decided to move into something I didn’t
          really know yet... backend development: server-side logic,
          authentication, database integration, and everything related to that
          side.
          <br />
          That’s how I started implementing those concepts, which eventually led
          to Cashwell be the full-stack application it is today.
          <br />
          Right now, I’m still learning more about the technologies I’ve already
          used in the project, and I’m also going deeper into backend
          development because I want to understand how things really work.
          <br />
          The goal is to understand how everything connects and how to design
          better applications end to end.
        </p>
      </div>
    </section>
  );
}

export default About;

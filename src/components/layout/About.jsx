import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="bg-[#f1f1f1] p-2">
        <h2 className="text-[#383838] text-[2.25rem] font-bold text-center">
          About
        </h2>
        <main className="text-[#383838] text-[1rem] text-left grid gap-3 p-5 font-medium">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            molestias reprehenderit cum, expedita quisquam accusamus optio ut
            eum quis minima rem dolorum! Nesciunt earum neque quia aperiam
            magnam voluptates rerum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sapiente cumque fugit consectetur pariatur ex deleniti aliquid
            quisquam eius illo reprehenderit laborum quia obcaecati amet,
            corporis soluta maiores dignissimos quo?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            sequi neque, unde aut delectus, accusantium odio voluptas dolorem
            perferendis, earum in incidunt illo eveniet voluptates libero
            veritatis nulla quis velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            labore explicabo architecto, totam corporis omnis impedit
            consectetur, at iusto delectus ut eum aspernatur modi molestiae
            maxime consequatur nesciunt aperiam culpa.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;

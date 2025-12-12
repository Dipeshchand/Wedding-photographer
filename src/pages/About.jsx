import cover1 from "../assets/images/cover1.png"
export default function About() {
  return (
    <section className="w-full bg-[#F7F4ED]   py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Image + Text (Side-by-Side on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-10">
          {/* Photographer / Studio Image */}
          <div className="overflow-hidden rounded-3xl shadow-md">
            <img
              src="/images/main.jpeg"
              alt="About WeFoundALoveStory"
              className="w-full h-[400px] object-cover "
            />
          </div>

          {/* About Content */}
          <div className="text-left">
            <p className="font-light">Hello there, I'm Rudahra</p>
            <br />
            <p className="text-gray-700 leading-relaxed text-lg mb-6 ">
              A fine art luxury wedding photographer, with a love of telling
              stories full of simplicity and emotion. Heavily influenced by the
              glory of Indian culture and its people, I love to create stylised
              wedding portraits & focus on the details of the day.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              There are only few times in life that are bigger or more
              meaningful than weddings. And we get to witness them. So, nothing
              brings me more joy than witnessing love over and over again. My
              only hope is one day your children or grandchildren discover your
              wedding album and you pass on the story of your love and special
              day through it.
            </p>
          </div>
        </div>
      </div>
          <div className="mt-20">
        <img src={cover1}/>
      </div>
    </section>
  );
}

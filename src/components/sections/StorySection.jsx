import img1 from "../../assets/images/story-img-1.jpg";
import img2 from "../../assets/images/story-img-2.jpg";

export default function StorySection() {
  return (
    <section className="w-full bg-[#F6F3EC] px-6 py-16 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE TEXT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-serif italic mb-6">
            Stories in Still Frames
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-4">
            A wedding is more than a celebration — it's a story of love, a
            journey of two souls becoming one. From breathtaking venues to
            intricate jewellery, joyful guests, and heartfelt vows, every detail
            matters. But what if it could never be recorded?
          </p>

          <p className="text-base md:text-lg leading-relaxed text-[#4B463E]">
            At Rudra Clicks, we believe in turning fleeting moments into lasting
            memories. We create fiction out of reality — crafting timeless,
            editorial portraits and aesthetic visuals that go beyond the
            surface. Through each frame, we strive to capture the emotion,
            connection, and true essence of your special day, so your love story
            lives on, beautifully told.
          </p>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="relative flex justify-center md:justify-end">
          
          {/* BACK IMAGE */}
          <img
            src={img1}
            className="w-[250px] md:w-[400px] lg:w-[450px] rounded-lg shadow-lg opacity-90"
          />

          {/* FRONT IMAGE */}
          <img
            src={img2}
            className="w-[170px] md:w-[260px] lg:w-[320px] rounded-lg shadow-xl absolute top-10 left-8 md:top-20 md:left-10"
          />
        </div>

      </div>
    </section>
  );
}

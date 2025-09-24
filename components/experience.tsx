import CountUp from "./ui/reactbits/CountUp";

export function ExperienceSection() {
  return (
    <div className="flex justify-around items-center mx-auto max-w-4xl py-12">
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#FCB917] mb-2">
          <CountUp
            from={0}
            to={10}
            separator=","
            direction="up"
            duration={2}
            className="inline text-7xl"
            startWhen
          />
          <span>+</span>
        </div>
        <p className="text-2x font-bold">Projects Done</p>
      </div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#FCB917] mb-2">
          <CountUp
            from={0}
            to={3}
            separator=","
            direction="up"
            duration={2}
            className="inline text-7xl"
            startWhen
          />
          <span>+</span>
        </div>
        <p className="text-2x font-bold">Years of Experience</p>
      </div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#FCB917] mb-2">
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={2}
            className="inline text-7xl"
            startWhen
          />
          <span>%</span>
        </div>
        <p className="text-2x font-bold">Customer Satisfaction</p>
      </div>
    </div>
  );
}

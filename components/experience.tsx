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
            className="inline"
            startWhen
          />
          <span>+</span>
        </div>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-bold">
          Projects Done
        </p>
      </div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#FCB917] mb-2">
          <CountUp
            from={0}
            to={3}
            separator=","
            direction="up"
            duration={2}
            className="inline"
            startWhen
          />
          <span>+</span>
        </div>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-bold">
          Years of Experience
        </p>
      </div>

      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-[#FCB917] mb-2">
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={2}
            className="inline"
            startWhen
          />
          <span>%</span>
        </div>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-bold">
          Customer Satisfaction
        </p>
      </div>
    </div>
  );
}

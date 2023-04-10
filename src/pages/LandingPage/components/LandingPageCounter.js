import { useState, useEffect, useRef } from "react";
import { Text, Button, Input, Img, List, CheckBox, Slider } from "components";

function CountUp({ end, duration }) {
  const [count, setCount] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = Date.now();
          const step = () => {
            const now = Date.now();
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            let value;
            if (Number.isInteger(end)) {
              // Whole number calculation
              value = Math.floor(progress * end);
            } else {
              // Decimal calculation
              const decimalCount = end.toString().split(".")[1].length;
              value = +(progress * end).toFixed(decimalCount);
            }
            setCount(value);
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (startRef.current) {
      observer.observe(startRef.current);
    }

    return () => {
      if (startRef.current) {
        observer.unobserve(startRef.current);
      }
    };
  }, [duration, end]);

  return <span ref={startRef}>{count}</span>;
}

function LandingPageCounter() {
  return (
    <div className="bg-gray_50 flex font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] py-[50px] w-full">
      <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start max-w-[1200px] mx-auto w-full">
        <List
          className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[73%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-[18px] items-start justify-start w-full">
            <Button className="bg-white_A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
              <Img src="images/img_clock.svg" className="h-8" alt="clock" />
            </Button>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="text-gray_900 text-left tracking-[-0.92px] w-auto"
                as="h2"
                variant="h2"
              >
                <CountUp end={15.4} duration={1000} /> $
              </Text>
              <Text
                className="font-semibold leading-[140.00%] text-bluegray_600 text-left tracking-[-0.40px]"
                variant="body1"
              >
                <>
                  Owned from
                  <br />
                  Properties transactions
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[18px] items-start justify-start w-full">
            <Button className="bg-white_A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
              <Img
                src="images/img_arrowdown.svg"
                className="h-8"
                alt="arrowdown"
              />
            </Button>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="text-gray_900 text-left tracking-[-0.92px] w-auto"
                as="h2"
                variant="h2"
              >
                <CountUp end={25} duration={1000} />
                K+
              </Text>
              <Text
                className="font-semibold leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray_600 text-left tracking-[-0.40px]"
                variant="body1"
              >
                Properties for Buy & sell Successfully
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[18px] items-start justify-start w-full">
            <Button className="bg-white_A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
              <Img src="images/img_reply.svg" className="h-8" alt="reply" />
            </Button>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="text-gray_900 text-left tracking-[-0.92px] w-auto"
                as="h2"
                variant="h2"
              >
                <CountUp end={500} duration={1000} />
              </Text>
              <Text
                className="font-semibold leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray_600 text-left tracking-[-0.40px]"
                variant="body1"
              >
                Daily completed transactions
              </Text>
            </div>
          </div>
        </List>
        <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-full">
          <Button className="bg-white_A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
            <Img
              src="images/img_checkmark.svg"
              className="h-8"
              alt="checkmark"
            />
          </Button>
          <div className="flex flex-col gap-3.5 items-start justify-start w-full">
            <Text
              className="text-gray_900 text-left tracking-[-0.92px] w-auto"
              as="h2"
              variant="h2"
            >
              <CountUp end={600} duration={1000} />+
            </Text>
            <Text
              className="font-semibold text-bluegray_600 text-left tracking-[-0.40px] w-auto"
              variant="body1"
            >
              Reagular Clients
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageCounter;

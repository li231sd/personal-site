"use client";

import Image from "next/image";

const layers = [1, 2, 3, 4];
const repeats = Array.from({ length: 8 });

export default function CityscapeBackground() {
  return (
    <div className="cityscape-bg" aria-hidden="true">
      <div className="cityscape-stack cityscape-day" aria-hidden="true">
        {layers.map((layer) => (
          <div
            className={`cityscape-layer cityscape-layer-${layer}`}
            key={`day-${layer}`}
          >
            <div className="cityscape-track">
              {repeats.map((_, index) => (
                <Image
                  src={`/City/city_day/${layer}.png`}
                  alt=""
                  width={576}
                  height={324}
                  key={`day-${layer}-${index}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="cityscape-stack cityscape-night" aria-hidden="true">
        {layers.map((layer) => (
          <div
            className={`cityscape-layer cityscape-layer-${layer}`}
            key={`night-${layer}`}
          >
            <div className="cityscape-track">
              {repeats.map((_, index) => (
                <Image
                  src={`/City/city_night/${layer}.png`}
                  alt=""
                  width={576}
                  height={324}
                  key={`night-${layer}-${index}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

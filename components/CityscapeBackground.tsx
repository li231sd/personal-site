"use client";

export default function CityscapeBackground() {
  return (
    <div className="cityscape-bg" aria-hidden="true">
      <svg
        className="cityscape-layer cityscape-far"
        viewBox="0 0 3200 220"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="cityscape-far-outline"
            d="M0,180 L40,180 L40,120 L90,120 L90,180 L150,180 L150,90 L160,90 L160,180 L220,180 L220,140 L260,140 L260,180 L320,180 L320,60 L340,60 L340,180 L400,180 L400,110 L440,110 L440,180 L500,180 L500,150 L540,150 L540,180 L600,180 L600,80 L620,80 L620,180 L680,180 L680,130 L720,130 L720,180 L780,180 L780,45 L800,45 L800,180 L860,180 L860,100 L900,100 L900,180 L960,180 L960,150 L1000,150 L1000,180 L1060,180 L1060,70 L1080,70 L1080,180 L1140,180 L1140,120 L1180,120 L1180,180 L1240,180 L1240,90 L1280,90 L1280,180 L1340,180 L1340,140 L1380,140 L1380,180 L1440,180 L1440,60 L1460,60 L1460,180 L1520,180 L1520,110 L1560,110 L1560,180 L1600,180"
          />
        </defs>
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <use href="#cityscape-far-outline" />
          <use href="#cityscape-far-outline" x="1600" />
        </g>
      </svg>

      <svg
        className="cityscape-layer cityscape-near"
        viewBox="0 0 3200 260"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="cityscape-near-outline"
            d="M0,240 L30,240 L30,150 L70,150 L70,240 L120,240 L120,100 L125,100 L125,90 L130,90 L130,100 L135,100 L135,240 L200,240 L200,170 L250,170 L250,240 L310,240 L310,60 L360,60 L360,240 L420,240 L420,190 L460,190 L460,240 L520,240 L520,120 L525,120 L525,110 L530,110 L530,120 L535,120 L535,240 L600,240 L600,80 L650,80 L650,240 L710,240 L710,160 L750,160 L750,240 L810,240 L810,40 L860,40 L860,240 L920,240 L920,140 L925,140 L925,130 L930,130 L930,140 L935,140 L935,240 L1000,240 L1000,170 L1040,170 L1040,240 L1100,240 L1100,90 L1150,90 L1150,240 L1210,240 L1210,180 L1250,180 L1250,240 L1310,240 L1310,55 L1360,55 L1360,240 L1420,240 L1420,150 L1460,150 L1460,240 L1520,240 L1520,110 L1560,110 L1560,240 L1600,240"
          />
          <g
            id="cityscape-near-windows"
            className="cityscape-windows"
            stroke="none"
          >
            <circle cx="45" cy="180" r="1.4" />
            <circle cx="145" cy="130" r="1.4" />
            <circle cx="230" cy="200" r="1.4" />
            <circle cx="335" cy="100" r="1.4" />
            <circle cx="440" cy="215" r="1.4" />
            <circle cx="540" cy="150" r="1.4" />
            <circle cx="620" cy="110" r="1.4" />
            <circle cx="730" cy="195" r="1.4" />
            <circle cx="830" cy="70" r="1.4" />
            <circle cx="935" cy="170" r="1.4" />
            <circle cx="1020" cy="200" r="1.4" />
            <circle cx="1125" cy="120" r="1.4" />
            <circle cx="1230" cy="205" r="1.4" />
            <circle cx="1335" cy="90" r="1.4" />
            <circle cx="1440" cy="180" r="1.4" />
            <circle cx="1540" cy="140" r="1.4" />
          </g>
        </defs>
        <g fill="none" stroke="currentColor" strokeWidth="1.25">
          <use href="#cityscape-near-outline" />
          <use href="#cityscape-near-outline" x="1600" />
          <use href="#cityscape-near-windows" />
          <use href="#cityscape-near-windows" x="1600" />
        </g>
      </svg>
    </div>
  );
}

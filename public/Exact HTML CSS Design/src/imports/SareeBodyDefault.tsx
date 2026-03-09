import clsx from "clsx";
import svgPaths from "./svg-gy22s3hcrc";
import imgAvatar from "figma:asset/2c61e626ea2a1a875ac87cfd5a2e177deab4c2f9.png";
import imgImage1959 from "figma:asset/c284cf71b5f202a4ce5a83a7649158ad8d883c2b.png";
import imgChatGptImageJan212026050106Pm1 from "figma:asset/7aee6e22f83ab6a13c71b984d59a73331f084ba6.png";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center px-[8.8px] py-[4.8px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0 w-0", additionalClassNames)}>
      <div className="flex-none rotate-90">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-0 size-[18px] top-[2.5px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <Wrapper1 additionalClassNames={clsx("min-w-[54px] relative shrink-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[6.835px] items-center justify-center min-w-[inherit] relative w-full">{children}</div>
    </Wrapper1>
  );
}

function Vector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[12.5%]">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          {children}
        </svg>
      </div>
    </div>
  );
}

function ChevronDown({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.75%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.42">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <g id="Icon">{children}</g>
    </Wrapper2>
  );
}
type ButtonContainerTypesProps = {
  additionalClassNames?: string;
};

function ButtonContainerTypes({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonContainerTypesProps>) {
  return (
    <div className="relative shrink-0">
      <div className="content-stretch flex items-start relative">
        <div className="min-w-[80px] relative shrink-0" data-name="Sizes">
          <div className="content-stretch flex items-start min-w-[inherit] relative">
            <div className={clsx("relative rounded-[10px] shrink-0", additionalClassNames)}>
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[12px] relative">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Frame99ImageImageProps = {
  additionalClassNames?: string;
};

function Frame99ImageImage({ additionalClassNames = "" }: Frame99ImageImageProps) {
  return (
    <div className={clsx("h-[50px] relative shrink-0 w-[112px]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1959} />
    </div>
  );
}

function Frame1984079049Helper() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-2px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 2">
          <line id="Line 5" stroke="var(--stroke-0, #D9D9D9)" strokeLinecap="round" strokeOpacity="0.25" strokeWidth="2" x1="1" x2="53" y1="1" y2="1" />
        </svg>
      </div>
    </div>
  );
}

function Frame1984078959Helper() {
  return (
    <Wrapper3 additionalClassNames="h-[35px]">
      <div className="h-0 relative w-[35px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 1">
            <line id="Line 6" stroke="var(--stroke-0, #E6E2DF)" x2="35" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </Wrapper3>
  );
}

function Frame1984079573Helper() {
  return (
    <Wrapper3 additionalClassNames="h-[21px]">
      <div className="h-0 relative w-[21px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 1">
            <line id="Line 115" stroke="var(--stroke-0, #D2D2D2)" strokeLinecap="round" x1="0.5" x2="20.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </Wrapper3>
  );
}
type ParagraphTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphText({ text, additionalClassNames = "" }: ParagraphTextProps) {
  return (
    <div className={clsx("absolute h-[22px] left-[24px] top-[0.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] left-0 not-italic text-[14px] text-white top-[0.67px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function NavItemButton3Helper() {
  return (
    <div className="absolute inset-[-45%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.16667 3.16667">
        <path d={svgPaths.pd65a300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function SareeBodyDefault() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start relative size-full" data-name="Saree Body - Default">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[1440px]" data-name="Body">
        <div className="bg-[#460b2f] h-[67px] relative shrink-0 w-[1440px]" data-name="Main-Nav-Header">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative size-full">
              <div className="content-stretch flex flex-col h-[60px] items-start justify-center relative shrink-0 w-[180px]">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="onliest logo">
                  <p className="col-1 font-['Lora:SemiBold',sans-serif] font-semibold leading-[normal] ml-[40.36px] mt-0 relative row-1 text-[42.657px] text-white tracking-[2.1328px] whitespace-nowrap">nliest</p>
                  <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[4.59px] place-items-start relative row-1" data-name="O Variation">
                    <div className="col-1 flex h-[27.114px] items-center justify-center ml-[8.99px] mt-[12.25px] relative row-1 w-[13.579px]">
                      <div className="-scale-y-100 flex-none rotate-180">
                        <div className="h-[27.114px] relative w-[13.579px]" data-name="Vector">
                          <div className="absolute inset-[-0.92%_-1.35%_-0.92%_-1.84%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0126 27.6141">
                              <path d={svgPaths.p1bf45980} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[29.065px] ml-[4.55px] mt-[7.96px] relative row-1 w-[12.441px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4408 29.0651">
                        <g clipPath="url(#clip0_1_6083)" id="Frame 39">
                          <g id="Vector">
                            <path d={svgPaths.p2cdf70f0} fill="var(--fill-0, white)" />
                            <path d={svgPaths.pef1b300} fill="var(--fill-0, white)" />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_6083">
                            <rect fill="white" height="29.0651" width="12.4408" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="col-1 h-[40.997px] ml-[20.33px] mt-0 overflow-clip relative row-1 w-[19.42px]">
                      <div className="absolute h-[39.881px] left-[-19.47px] top-[0.66px] w-[38.727px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.7267 39.8808">
                          <g id="Group 34">
                            <path d={svgPaths.p3dcfeb80} fill="var(--fill-0, white)" id="O" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="col-1 h-[40.997px] ml-0 mt-0 relative row-1 w-[39.75px]" data-name="Frame 44  O">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.75 40.9972">
                        <g clipPath="url(#clip0_1_6251)" id="Frame 44  O">
                          <path clipRule="evenodd" d={svgPaths.p3ca54b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract (Stroke)" />
                          <path d={svgPaths.pffb500} fill="var(--fill-0, white)" id="Subtract" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_6251">
                            <rect fill="white" height="40.9972" width="39.75" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="col-1 h-[40.385px] ml-0 mt-0 relative row-1 w-[13.351px]" data-name="Frame 44  O">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3511 40.3853">
                        <g clipPath="url(#clip0_1_6247)" id="Frame 44  O">
                          <path clipRule="evenodd" d={svgPaths.p3c3d1800} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract (Stroke)" />
                          <path d={svgPaths.p303e9000} fill="var(--fill-0, white)" id="Subtract" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_6247">
                            <rect fill="white" height="40.3853" width="13.3511" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Right Content">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Actions">
                  <div className="bg-[#7c1f58] content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0" data-name="_Nav item button">
                    <div aria-hidden="true" className="absolute border border-[#b3237e] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="relative shrink-0 size-[20px]" data-name="Profile">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g clipPath="url(#clip0_1_6171)" id="Profile">
                          <path d={svgPaths.pf3b0300} fill="var(--fill-0, white)" id="Shape" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_6171">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-[#7c1f58] content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0" data-name="_Nav item button">
                    <div aria-hidden="true" className="absolute border border-[#b3237e] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="languages">
                      <div className="absolute inset-[33.33%_54.17%_41.67%_20.83%]" data-name="Vector">
                        <div className="absolute inset-[-15%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 6.5">
                            <path d="M0.75 0.75L5.75 5.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[41.67%] left-[16.67%] right-1/2 top-[20.83%]" data-name="Vector">
                        <div className="absolute inset-[-10%_-11.25%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16675 9.00008">
                            <path d={svgPaths.p27a9e820} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[20.83%_41.67%_79.17%_8.33%]" data-name="Vector">
                        <div className="absolute inset-[-0.75px_-7.5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 1.5">
                            <path d="M0.75 0.75H10.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[8.33%_66.67%_91.67%_29.17%]" data-name="Vector">
                        <div className="absolute inset-[-0.75px_-90%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33333 1.5">
                            <path d="M0.75 0.75H1.58333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[8.33%] left-1/2 right-[8.33%] top-1/2" data-name="Vector">
                        <div className="absolute inset-[-9%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.83366 9.8335">
                            <path d={svgPaths.p324b27e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1/4 left-[58.33%] right-[16.67%] top-3/4" data-name="Vector">
                        <div className="absolute inset-[-0.75px_-15%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 1.5">
                            <path d="M0.75 0.75H5.75" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#7c1f58] content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0" data-name="_Nav item button">
                    <div aria-hidden="true" className="absolute border border-[#b3237e] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dollar-sign">
                      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
                        <div className="absolute inset-[-4.5%_-0.75px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 18.1667">
                            <path d="M0.75 0.75V17.4167" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
                        <div className="absolute inset-[-6.43%_-7.5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 13.1667">
                            <path d={svgPaths.p23bf0f40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#7c1f58] content-stretch flex items-center p-[8px] relative rounded-[999px] shrink-0" data-name="_Nav item button">
                    <div aria-hidden="true" className="absolute border border-[#b3237e] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="shopping-cart">
                      <div className="absolute inset-[83.33%_62.5%_8.33%_29.17%]" data-name="Vector">
                        <NavItemButton3Helper />
                      </div>
                      <div className="absolute bottom-[8.33%] left-3/4 right-[16.67%] top-[83.33%]" data-name="Vector">
                        <NavItemButton3Helper />
                      </div>
                      <div className="absolute inset-[8.54%_7.96%_33.12%_8.54%]" data-name="Vector">
                        <div className="absolute inset-[-6.43%_-4.49%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2 13.1671">
                            <path d={svgPaths.p28d9f100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#7c1f58] content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[999px] shrink-0" data-name="_Nav item button">
                    <div aria-hidden="true" className="absolute border border-[#b3237e] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="absolute left-[28px] size-[8px] top-0">
                      <div className="absolute inset-[-25%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" fill="var(--fill-0, #FD853A)" id="Ellipse 2899" r="5" stroke="var(--stroke-0, #7C1F58)" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[20px]" data-name="Notification">
                      <div className="absolute inset-[8.34%_13.54%_8.33%_13.54%]" data-name="icon">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.833 16.916">
                          <path d={svgPaths.p306d4900} fill="var(--fill-0, white)" id="icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Account Menu">
                  <div className="relative rounded-[200px] shrink-0 size-[44px]" data-name="Avatar">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[200px]">
                      <img alt="" className="absolute h-[122.48%] left-[-35.3%] max-w-none top-0 w-[170.59%]" src={imgAvatar} />
                    </div>
                    <div className="flex flex-col items-center justify-center size-full">
                      <div className="size-full" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Content">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Emirhan Boruch</p>
                    <div className="content-stretch flex items-center pt-[2px] relative shrink-0" data-name="Arrow">
                      <div className="relative shrink-0 size-[18px]" data-name="Arrow-down">
                        <div className="absolute inset-[36.98%_23.96%]" data-name="icon">
                          <div className="absolute inset-[-16%_-8%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.875 6.1875">
                              <path d={svgPaths.p35a91f00} id="icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[21px] left-[1156px] top-[7px] w-[20px]">
                <div className="absolute bg-white left-0 rounded-[50px] size-[20px] top-px" />
                <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[6px] not-italic text-[0px] text-black top-[10px] whitespace-nowrap">
                  <p className="leading-[20px] text-[12px]">2</p>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-124px)] top-[22.5px] w-[432px]">
                <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-[441px]">
                  <div className="h-[22px] relative shrink-0 w-[129px]" data-name="Container">
                    <Icon>
                      <path d={svgPaths.p192ac80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M6.09 6.09L9 9" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M15 3L6.09 11.91" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p20bebe00} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M11.0996 11.1L14.9996 15" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </Icon>
                    <ParagraphText text="Book a Designer" additionalClassNames="w-[110.104px]" />
                  </div>
                  <Frame1984079573Helper />
                  <div className="h-[22px] relative shrink-0 w-[117px]" data-name="Container">
                    <Icon>
                      <path d={svgPaths.p14dca900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p117fc1f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </Icon>
                    <ParagraphText text="Book a Trainer" additionalClassNames="w-[97.125px]" />
                  </div>
                  <Frame1984079573Helper />
                  <div className="h-[22px] relative shrink-0 w-[63px]" data-name="Container">
                    <Wrapper2>
                      <g clipPath="url(#clip0_1_6158)" id="Icon">
                        <path d={svgPaths.p18498d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M15 2.25V5.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M16.5 3.75H13.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M3 12.75V14.25" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M3.75 13.5H2.25" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_6158">
                          <rect fill="white" height="18" width="18" />
                        </clipPath>
                      </defs>
                    </Wrapper2>
                    <ParagraphText text="AI Rex" additionalClassNames="w-[42.479px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#e4e7ec] border-b border-solid inset-0 pointer-events-none" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Main">
          <div className="bg-white content-stretch flex gap-[32px] items-center justify-end p-[16px] relative shrink-0 w-[1440px]">
            <div aria-hidden="true" className="absolute border-[#e6e2df] border-b border-r border-solid border-t inset-0 pointer-events-none" />
            <div className="relative shrink-0 w-[54px]">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col gap-[6.835px] items-center justify-center relative w-full">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow-left-square">
                    <Vector>
                      <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </Vector>
                    <div className="absolute bottom-[33.33%] left-[33.33%] right-1/2 top-[33.33%]" data-name="Vector">
                      <div className="absolute inset-[-12.5%_-25%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
                          <path d="M5 1L1 5L5 9" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-1/2 left-[33.33%] right-[33.33%] top-1/2" data-name="Vector">
                      <div className="absolute inset-[-1px_-12.5%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
                          <path d="M9 1H1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
              <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-center whitespace-nowrap">
                <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-black">
                  <p className="leading-[24px]">XXXXXXXXXX - Design File Name</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 text-[#cda07a] text-[14px]">
                  <p className="leading-[22px]">XXXXXXXXXX - SB - file name</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                <div className="bg-[#f5efea] relative rounded-[12px] shrink-0" data-name="Group Buttons">
                  <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-start justify-center p-[4px] relative">
                      <div className="bg-[#460b2f] content-stretch flex items-center justify-between overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[142px]">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Saree Body</p>
                        <ChevronDown>
                          <path d={svgPaths.p3abbeb00} fill="var(--fill-0, white)" id="Vector" />
                        </ChevronDown>
                      </div>
                      <Frame1984078959Helper />
                      <div className="relative rounded-[8px] shrink-0" data-name="Group Button">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative">
                            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#460b2f] text-[14px] whitespace-nowrap">Blouse Design</p>
                          </div>
                        </div>
                      </div>
                      <Frame1984078959Helper />
                      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip pl-[23px] pr-[24px] py-[8px] relative rounded-[8px] shrink-0 w-[142px]">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#460b2f] text-[14px] whitespace-nowrap">Fitting Room</p>
                        <ChevronDown>
                          <path d={svgPaths.p3abbeb00} fill="var(--fill-0, #460B2F)" id="Vector" />
                        </ChevronDown>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#e6e2df] border-solid inset-0 pointer-events-none rounded-[12px]" />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[0px] whitespace-nowrap">
                    <p className="decoration-solid leading-[26px] text-[18px] underline">Price: ₹80,497.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] items-start justify-end min-h-px min-w-px relative w-full">
            <div className="bg-white h-[690px] shrink-0 sticky top-0" data-name="Side-NavBar - variants - saree body">
              <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col h-full items-center justify-between px-[16px] py-[24px] relative">
                  <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full">
                    <Wrapper additionalClassNames="w-full">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Profile">
                        <div className="absolute contents inset-[4.17%_20.83%_5.13%_20.83%]" data-name="Group">
                          <div className="absolute inset-[4.17%_20.83%_7.07%_24.05%]" data-name="Group">
                            <div className="absolute inset-[-0.94%_-1.51%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6275 21.7029">
                                <g id="Group">
                                  <path d={svgPaths.p3f960040} fill="var(--fill-0, #460B2F)" id="Vector" stroke="var(--stroke-0, #460B2F)" strokeWidth="0.4" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[15.86%_50.37%_60.77%_24.44%]" data-name="Group">
                            <div className="absolute inset-[-4.72%_-4.38%_-4.97%_-4.61%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.59044 6.15178">
                                <g id="Group">
                                  <path d={svgPaths.p31cff380} fill="var(--fill-0, #460B2F)" id="Vector" stroke="var(--stroke-0, #460B2F)" strokeWidth="0.4" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[6.12%_58.94%_81.33%_28.28%]" data-name="Group">
                            <div className="absolute inset-[-6.64%_-6.78%_-9.1%_-6.52%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.47604 3.48518">
                                <g id="Group">
                                  <path d={svgPaths.p4e9e880} fill="var(--fill-0, #460B2F)" id="Vector" stroke="var(--stroke-0, #460B2F)" strokeWidth="0.4" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[51.23%_48.13%_5.13%_20.83%]" data-name="Group">
                            <div className="absolute inset-[-2.5%_-2.69%_-1.91%_-2.68%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.84775 10.9345">
                                <g id="Group">
                                  <path d={svgPaths.p2d24e780} fill="var(--fill-0, #460B2F)" id="Vector" stroke="var(--stroke-0, #460B2F)" strokeWidth="0.4" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[47.24%_65.02%_14.91%_28.6%]" data-name="Group">
                            <div className="absolute inset-[-2.93%_-17.39%_-2.84%_-16.85%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.05477 9.60802">
                                <g id="Group">
                                  <path d={svgPaths.p3fd40880} fill="var(--fill-0, #460B2F)" id="Vector" stroke="var(--stroke-0, #460B2F)" strokeWidth="0.4" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[42.74%_55.69%_16.11%_36.08%]" data-name="Group">
                            <div className="absolute inset-[-2.77%_-11.6%_-2.32%_-10.13%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.40419 10.3783">
                                <g id="Group">
                                  <path d={svgPaths.p31bdd400} fill="var(--fill-0, #460B2F)" id="Vector" stroke="var(--stroke-0, #460B2F)" strokeWidth="0.4" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#460b2f] text-[10px] text-center text-ellipsis w-[min-content]">Saree Details</p>
                    </Wrapper>
                    <Frame1984079049Helper />
                    <Wrapper additionalClassNames="w-full">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Profile">
                        <div className="absolute inset-[12.49%_6.45%_11.54%_6.45%]" data-name="Icon">
                          <div className="absolute inset-[-4.39%_-3.83%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5031 19.8318">
                              <path d={svgPaths.p7d3c900} id="Icon" stroke="var(--stroke-0, #460B2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#460b2f] text-[10px] text-center text-ellipsis w-[min-content]">Favorites</p>
                    </Wrapper>
                    <Frame1984079049Helper />
                    <Wrapper additionalClassNames="w-full">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Profile">
                        <Vector>
                          <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #460B2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </Vector>
                        <div className="absolute inset-[29.17%_54.17%_54.17%_29.17%]" data-name="Vector">
                          <div className="absolute inset-[-25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                              <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, #460B2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-[12.5%] left-1/4 right-[12.5%] top-[47.2%]" data-name="Vector">
                          <div className="absolute inset-[-10.34%_-6.67%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11.6716">
                              <path d={svgPaths.p2d798d00} id="Vector" stroke="var(--stroke-0, #460B2F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#460b2f] text-[10px] text-center text-ellipsis whitespace-nowrap">Background</p>
                    </Wrapper>
                    <Frame1984079049Helper />
                    <Wrapper additionalClassNames="w-[54px]">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Profile">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-[calc(50%-1px)] top-[calc(50%+1.5px)] w-[18px]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 17">
                            <g id="Vector" opacity="0.9">
                              <path d={svgPaths.p1b588e80} fill="var(--fill-0, #460B2F)" />
                              <path d={svgPaths.p1b588e80} stroke="var(--stroke-0, #460B2F)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#460b2f] text-[10px] text-center text-ellipsis w-[min-content]">Artwork</p>
                    </Wrapper>
                    <Frame1984079049Helper />
                    <Wrapper additionalClassNames="w-[54px]">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Profile">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19px] left-[calc(50%-1px)] top-[calc(50%+1.5px)] w-[16px]" data-name="Vector">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19">
                            <path d={svgPaths.p2d7bdf80} fill="var(--fill-0, #460B2F)" id="Vector" stroke="var(--stroke-0, #460B2F)" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#460b2f] text-[10px] text-center text-ellipsis w-[min-content]">Custom Artwork</p>
                    </Wrapper>
                    <Frame1984079049Helper />
                  </div>
                  <Wrapper1 additionalClassNames="min-w-[54px] relative shrink-0">
                    <div className="content-stretch flex flex-col gap-[6.835px] items-center justify-center min-w-[inherit] relative">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Profile">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[16px] top-1/2" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
                          <div className="flex-none rotate-90">
                            <div className="relative size-[16px]" data-name="Vector">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                <path d={svgPaths.p46a3400} fill="var(--fill-0, #460B2F)" id="Vector" opacity="0.9" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] min-w-full not-italic overflow-hidden relative shrink-0 text-[#460b2f] text-[10px] text-center text-ellipsis w-[min-content]">Settings</p>
                    </div>
                  </Wrapper1>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e6e2df] border-r border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
              <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[20px] py-[80px] relative size-full">
                    <div className="absolute content-start flex flex-wrap gap-0 h-[686px] items-start left-0 overflow-clip py-px top-0 w-[1354px]" data-name="32237069_sl_072622_51930_13 4">
                      <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[repeat(15,minmax(0,1fr))] h-[750px] relative shrink-0 w-[1344px]">
                        <Frame99ImageImage additionalClassNames="col-1 row-1" />
                        <Frame99ImageImage additionalClassNames="col-2 row-1" />
                        <Frame99ImageImage additionalClassNames="col-3 row-1" />
                        <Frame99ImageImage additionalClassNames="col-4 row-1" />
                        <Frame99ImageImage additionalClassNames="col-5 row-1" />
                        <Frame99ImageImage additionalClassNames="col-6 row-1" />
                        <Frame99ImageImage additionalClassNames="col-7 row-1" />
                        <Frame99ImageImage additionalClassNames="col-8 row-1" />
                        <Frame99ImageImage additionalClassNames="col-9 row-1" />
                        <Frame99ImageImage additionalClassNames="col-10 row-1" />
                        <Frame99ImageImage additionalClassNames="col-11 row-1" />
                        <Frame99ImageImage additionalClassNames="col-12 row-1" />
                        <Frame99ImageImage additionalClassNames="col-1 row-2" />
                        <Frame99ImageImage additionalClassNames="col-2 row-2" />
                        <Frame99ImageImage additionalClassNames="col-3 row-2" />
                        <Frame99ImageImage additionalClassNames="col-4 row-2" />
                        <Frame99ImageImage additionalClassNames="col-5 row-2" />
                        <Frame99ImageImage additionalClassNames="col-6 row-2" />
                        <Frame99ImageImage additionalClassNames="col-7 row-2" />
                        <Frame99ImageImage additionalClassNames="col-8 row-2" />
                        <Frame99ImageImage additionalClassNames="col-9 row-2" />
                        <Frame99ImageImage additionalClassNames="col-10 row-2" />
                        <Frame99ImageImage additionalClassNames="col-11 row-2" />
                        <Frame99ImageImage additionalClassNames="col-12 row-2" />
                        <Frame99ImageImage additionalClassNames="col-1 row-3" />
                        <Frame99ImageImage additionalClassNames="col-2 row-3" />
                        <Frame99ImageImage additionalClassNames="col-3 row-3" />
                        <Frame99ImageImage additionalClassNames="col-4 row-3" />
                        <Frame99ImageImage additionalClassNames="col-5 row-3" />
                        <Frame99ImageImage additionalClassNames="col-6 row-3" />
                        <Frame99ImageImage additionalClassNames="col-7 row-3" />
                        <Frame99ImageImage additionalClassNames="col-8 row-3" />
                        <Frame99ImageImage additionalClassNames="col-9 row-3" />
                        <Frame99ImageImage additionalClassNames="col-10 row-3" />
                        <Frame99ImageImage additionalClassNames="col-11 row-3" />
                        <Frame99ImageImage additionalClassNames="col-12 row-3" />
                        <Frame99ImageImage additionalClassNames="col-1 row-4" />
                        <Frame99ImageImage additionalClassNames="col-2 row-4" />
                        <Frame99ImageImage additionalClassNames="col-3 row-4" />
                        <Frame99ImageImage additionalClassNames="col-4 row-4" />
                        <Frame99ImageImage additionalClassNames="col-5 row-4" />
                        <Frame99ImageImage additionalClassNames="col-6 row-4" />
                        <Frame99ImageImage additionalClassNames="col-7 row-4" />
                        <Frame99ImageImage additionalClassNames="col-8 row-4" />
                        <Frame99ImageImage additionalClassNames="col-9 row-4" />
                        <Frame99ImageImage additionalClassNames="col-10 row-4" />
                        <Frame99ImageImage additionalClassNames="col-11 row-4" />
                        <Frame99ImageImage additionalClassNames="col-12 row-4" />
                        <Frame99ImageImage additionalClassNames="col-1 row-5" />
                        <Frame99ImageImage additionalClassNames="col-2 row-5" />
                        <Frame99ImageImage additionalClassNames="col-3 row-5" />
                        <Frame99ImageImage additionalClassNames="col-4 row-5" />
                        <Frame99ImageImage additionalClassNames="col-5 row-5" />
                        <Frame99ImageImage additionalClassNames="col-6 row-5" />
                        <Frame99ImageImage additionalClassNames="col-7 row-5" />
                        <Frame99ImageImage additionalClassNames="col-8 row-5" />
                        <Frame99ImageImage additionalClassNames="col-9 row-5" />
                        <Frame99ImageImage additionalClassNames="col-10 row-5" />
                        <Frame99ImageImage additionalClassNames="col-11 row-5" />
                        <Frame99ImageImage additionalClassNames="col-12 row-5" />
                        <Frame99ImageImage additionalClassNames="col-1 row-6" />
                        <Frame99ImageImage additionalClassNames="col-2 row-6" />
                        <Frame99ImageImage additionalClassNames="col-3 row-6" />
                        <Frame99ImageImage additionalClassNames="col-4 row-6" />
                        <Frame99ImageImage additionalClassNames="col-5 row-6" />
                        <Frame99ImageImage additionalClassNames="col-6 row-6" />
                        <Frame99ImageImage additionalClassNames="col-7 row-6" />
                        <Frame99ImageImage additionalClassNames="col-8 row-6" />
                        <Frame99ImageImage additionalClassNames="col-9 row-6" />
                        <Frame99ImageImage additionalClassNames="col-10 row-6" />
                        <Frame99ImageImage additionalClassNames="col-11 row-6" />
                        <Frame99ImageImage additionalClassNames="col-12 row-6" />
                        <Frame99ImageImage additionalClassNames="col-1 row-7" />
                        <Frame99ImageImage additionalClassNames="col-2 row-7" />
                        <Frame99ImageImage additionalClassNames="col-3 row-7" />
                        <Frame99ImageImage additionalClassNames="col-4 row-7" />
                        <Frame99ImageImage additionalClassNames="col-5 row-7" />
                        <Frame99ImageImage additionalClassNames="col-6 row-7" />
                        <Frame99ImageImage additionalClassNames="col-7 row-7" />
                        <Frame99ImageImage additionalClassNames="col-8 row-7" />
                        <Frame99ImageImage additionalClassNames="col-9 row-7" />
                        <Frame99ImageImage additionalClassNames="col-10 row-7" />
                        <Frame99ImageImage additionalClassNames="col-11 row-7" />
                        <Frame99ImageImage additionalClassNames="col-12 row-7" />
                        <Frame99ImageImage additionalClassNames="col-1 row-8" />
                        <Frame99ImageImage additionalClassNames="col-2 row-8" />
                        <Frame99ImageImage additionalClassNames="col-3 row-8" />
                        <Frame99ImageImage additionalClassNames="col-4 row-8" />
                        <Frame99ImageImage additionalClassNames="col-5 row-8" />
                        <Frame99ImageImage additionalClassNames="col-6 row-8" />
                        <Frame99ImageImage additionalClassNames="col-7 row-8" />
                        <Frame99ImageImage additionalClassNames="col-8 row-8" />
                        <Frame99ImageImage additionalClassNames="col-9 row-8" />
                        <Frame99ImageImage additionalClassNames="col-10 row-8" />
                        <Frame99ImageImage additionalClassNames="col-11 row-8" />
                        <Frame99ImageImage additionalClassNames="col-12 row-8" />
                        <Frame99ImageImage additionalClassNames="col-1 row-9" />
                        <Frame99ImageImage additionalClassNames="col-2 row-9" />
                        <Frame99ImageImage additionalClassNames="col-3 row-9" />
                        <Frame99ImageImage additionalClassNames="col-4 row-9" />
                        <Frame99ImageImage additionalClassNames="col-5 row-9" />
                        <Frame99ImageImage additionalClassNames="col-6 row-9" />
                        <Frame99ImageImage additionalClassNames="col-7 row-9" />
                        <Frame99ImageImage additionalClassNames="col-8 row-9" />
                        <Frame99ImageImage additionalClassNames="col-9 row-9" />
                        <Frame99ImageImage additionalClassNames="col-10 row-9" />
                        <Frame99ImageImage additionalClassNames="col-11 row-9" />
                        <Frame99ImageImage additionalClassNames="col-12 row-9" />
                        <Frame99ImageImage additionalClassNames="col-1 row-10" />
                        <Frame99ImageImage additionalClassNames="col-2 row-10" />
                        <Frame99ImageImage additionalClassNames="col-3 row-10" />
                        <Frame99ImageImage additionalClassNames="col-4 row-10" />
                        <Frame99ImageImage additionalClassNames="col-5 row-10" />
                        <Frame99ImageImage additionalClassNames="col-6 row-10" />
                        <Frame99ImageImage additionalClassNames="col-7 row-10" />
                        <Frame99ImageImage additionalClassNames="col-8 row-10" />
                        <Frame99ImageImage additionalClassNames="col-9 row-10" />
                        <Frame99ImageImage additionalClassNames="col-10 row-10" />
                        <Frame99ImageImage additionalClassNames="col-11 row-10" />
                        <Frame99ImageImage additionalClassNames="col-12 row-10" />
                        <Frame99ImageImage additionalClassNames="col-1 row-11" />
                        <Frame99ImageImage additionalClassNames="col-2 row-11" />
                        <Frame99ImageImage additionalClassNames="col-3 row-11" />
                        <Frame99ImageImage additionalClassNames="col-4 row-11" />
                        <Frame99ImageImage additionalClassNames="col-5 row-11" />
                        <Frame99ImageImage additionalClassNames="col-6 row-11" />
                        <Frame99ImageImage additionalClassNames="col-7 row-11" />
                        <Frame99ImageImage additionalClassNames="col-8 row-11" />
                        <Frame99ImageImage additionalClassNames="col-9 row-11" />
                        <Frame99ImageImage additionalClassNames="col-10 row-11" />
                        <Frame99ImageImage additionalClassNames="col-11 row-11" />
                        <Frame99ImageImage additionalClassNames="col-12 row-11" />
                        <Frame99ImageImage additionalClassNames="col-1 row-12" />
                        <Frame99ImageImage additionalClassNames="col-2 row-12" />
                        <Frame99ImageImage additionalClassNames="col-3 row-12" />
                        <Frame99ImageImage additionalClassNames="col-4 row-12" />
                        <Frame99ImageImage additionalClassNames="col-5 row-12" />
                        <Frame99ImageImage additionalClassNames="col-6 row-12" />
                        <Frame99ImageImage additionalClassNames="col-7 row-12" />
                        <Frame99ImageImage additionalClassNames="col-8 row-12" />
                        <Frame99ImageImage additionalClassNames="col-9 row-12" />
                        <Frame99ImageImage additionalClassNames="col-10 row-12" />
                        <Frame99ImageImage additionalClassNames="col-11 row-12" />
                        <Frame99ImageImage additionalClassNames="col-12 row-12" />
                        <Frame99ImageImage additionalClassNames="col-1 row-13" />
                        <Frame99ImageImage additionalClassNames="col-2 row-13" />
                        <Frame99ImageImage additionalClassNames="col-3 row-13" />
                        <Frame99ImageImage additionalClassNames="col-4 row-13" />
                        <Frame99ImageImage additionalClassNames="col-5 row-13" />
                        <Frame99ImageImage additionalClassNames="col-6 row-13" />
                        <Frame99ImageImage additionalClassNames="col-7 row-13" />
                        <Frame99ImageImage additionalClassNames="col-8 row-13" />
                        <Frame99ImageImage additionalClassNames="col-9 row-13" />
                        <Frame99ImageImage additionalClassNames="col-10 row-13" />
                        <Frame99ImageImage additionalClassNames="col-11 row-13" />
                        <Frame99ImageImage additionalClassNames="col-12 row-13" />
                        <Frame99ImageImage additionalClassNames="col-1 row-14" />
                        <Frame99ImageImage additionalClassNames="col-2 row-14" />
                        <Frame99ImageImage additionalClassNames="col-3 row-14" />
                        <Frame99ImageImage additionalClassNames="col-4 row-14" />
                        <Frame99ImageImage additionalClassNames="col-5 row-14" />
                        <Frame99ImageImage additionalClassNames="col-6 row-14" />
                        <Frame99ImageImage additionalClassNames="col-7 row-14" />
                        <Frame99ImageImage additionalClassNames="col-8 row-14" />
                        <Frame99ImageImage additionalClassNames="col-9 row-14" />
                        <Frame99ImageImage additionalClassNames="col-10 row-14" />
                        <Frame99ImageImage additionalClassNames="col-11 row-14" />
                        <Frame99ImageImage additionalClassNames="col-12 row-14" />
                        <Frame99ImageImage additionalClassNames="col-1 row-15" />
                        <Frame99ImageImage additionalClassNames="col-2 row-15" />
                        <Frame99ImageImage additionalClassNames="col-3 row-15" />
                        <Frame99ImageImage additionalClassNames="col-4 row-15" />
                        <Frame99ImageImage additionalClassNames="col-5 row-15" />
                        <Frame99ImageImage additionalClassNames="col-6 row-15" />
                        <Frame99ImageImage additionalClassNames="col-7 row-15" />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-end min-h-px min-w-px relative w-full">
                      <div className="bg-white flex-[1_0_0] h-full max-w-[320px] min-h-px min-w-px relative" data-name="artwork-background">
                        <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
                            <div className="bg-[#f5efea] relative shrink-0 w-full" data-name="Tab List">
                              <div className="flex flex-row items-center size-full">
                                <div className="content-stretch flex items-center justify-between p-[4px] relative w-full">
                                  <div className="bg-white flex-[1_0_0] h-[29px] min-h-px min-w-px relative rounded-[8px]" data-name="Primitive.button">
                                    <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                    <Wrapper4>
                                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#604a4e] text-[14px] whitespace-nowrap">Artwork</p>
                                    </Wrapper4>
                                  </div>
                                  <button className="cursor-pointer flex-[1_0_0] h-[29px] min-h-px min-w-px relative rounded-[8px]" data-name="Primitive.button">
                                    <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                    <Wrapper4>
                                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[22px] not-italic relative shrink-0 text-[#604a4e] text-[14px] text-left whitespace-nowrap">Background</p>
                                    </Wrapper4>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative w-full">
                              <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative">
                                <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
                                  <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Saree Body">
                                    <div className="flex flex-row items-center justify-center size-full">
                                      <div className="content-stretch flex gap-[10px] items-center justify-center size-full" />
                                    </div>
                                  </div>
                                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[22px] left-[calc(50%-41px)] not-italic text-[#dcdcdc] text-[14px] top-[calc(50%-10.5px)] whitespace-nowrap">Design Area</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#e6e2df] border-solid inset-[-0.5px] pointer-events-none" />
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-h-px min-w-px relative" data-name="Saree template">
                        <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Saree Body">
                          <div aria-hidden="true" className="absolute border border-[#e6e2df] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex gap-[10px] items-center justify-center relative size-full">
                              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e6e2df] text-[14px] whitespace-nowrap">
                                <p className="leading-[22px]">Saree Body</p>
                              </div>
                              <div className="absolute bottom-0 content-stretch flex items-center p-[10.286px] right-0 size-[36px]">
                                <div className="overflow-clip relative shrink-0 size-[15.429px]" data-name="share">
                                  <div className="absolute inset-[20.83%_12.5%_16.67%_12.5%]" data-name="Vector">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5714 9.64286">
                                      <path d={svgPaths.p2bceda00} fill="var(--fill-0, #460B2F)" id="Vector" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Bottom layout">
                <div className="flex flex-row justify-center overflow-x-clip overflow-y-auto size-full">
                  <div className="content-stretch flex items-start justify-center pl-[36px] pr-[203px] py-[16px] relative w-full">
                    <div className="content-stretch flex flex-col items-center justify-center mr-[-167px] relative shrink-0">
                      <div className="bg-white relative rounded-[8px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[#e6e2df] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative">
                            <div className="bg-[#d9d9d9] h-[25px] rounded-[4px] shrink-0 w-[3px]" />
                            <div className="content-stretch flex items-center relative rounded-[8px] shrink-0">
                              <div className="content-stretch flex items-center relative rounded-[8px] shrink-0" data-name="Icon Button">
                                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="save">
                                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <g id="Group">
                                      <path d={svgPaths.pbf7bf80} fill="var(--fill-0, #460B2F)" id="Vector" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mannequin-mannequin-svgrepo-com (1) 1">
                              <div className="absolute contents inset-[0_26.19%]" data-name="Group">
                                <div className="absolute contents inset-[0_26.19%]" data-name="Group">
                                  <div className="absolute inset-[0_26.19%]" data-name="Group">
                                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4269 24">
                                      <g id="Group">
                                        <path d={svgPaths.p2bec6bc0} fill="var(--fill-0, #460B2F)" id="Vector" />
                                        <path d={svgPaths.p24071aa0} fill="var(--fill-0, #460B2F)" id="Vector_2" />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex items-center relative shrink-0">
                              <button className="cursor-pointer relative rounded-[8px] shrink-0" data-name="Icon Button">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex items-center p-[6px] relative">
                                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="tool-box">
                                      <div className="absolute inset-[-0.01%_-0.01%_-0.01%_0]" data-name="Vector">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0016 24.0029">
                                          <path d={svgPaths.p3e810380} fill="var(--fill-0, #460B2F)" id="Vector" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex gap-[10px] items-center justify-end pr-[24px] right-0 top-[16px]" data-name="Button container">
                      <ButtonContainerTypes additionalClassNames="bg-[#f0c28c]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Profile">
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Shape">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                              <path d={svgPaths.p12f46840} fill="var(--fill-0, #2F1A1C)" id="Shape" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#460b2f] text-[16px] text-center">
                          <p className="leading-[24px]">Add to Cart</p>
                        </div>
                      </ButtonContainerTypes>
                      <ButtonContainerTypes additionalClassNames="bg-[#460b2f]">
                        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Profile">
                          <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
                            <div className="absolute inset-[-7.14%_-5%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
                                <path d={svgPaths.pc26e480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute inset-[41.67%_8.33%_58.33%_8.33%]" data-name="Vector">
                            <div className="absolute inset-[-1px_-5%]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 2">
                                <path d="M1 1H21" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">
                          <p className="leading-[24px]">Buy Now</p>
                        </div>
                      </ButtonContainerTypes>
                      <div className="bg-gradient-to-b content-stretch flex from-[#460b2f] items-center justify-center relative rounded-[22369600px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.25)] shrink-0 size-[50px] to-[#7c1f58]" data-name="HelpWidget">
                        <div className="relative shrink-0 size-[32px]" data-name="Icon">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <g id="Icon">
                              <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                              <path d={svgPaths.p10ed4300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                              <path d="M16 22.6667H16.0133" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                            </g>
                          </svg>
                        </div>
                        <div className="absolute left-[2px] rounded-[222px] size-[46px] top-[2px]" data-name="ChatGPT Image Jan 21, 2026, 05_01_06 PM 1">
                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[222px] size-full" src={imgChatGptImageJan212026050106Pm1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#e6e2df] border-b border-solid inset-0 pointer-events-none" />
              </div>
            </div>
            <div className="absolute bottom-0 h-[713px] pointer-events-none right-0 top-0">
              <div className="bg-white content-stretch flex h-[650px] items-start p-[4px] pointer-events-auto sticky top-0" data-name="Scrollbar">
                <div className="bg-[#e6e2df] h-[384px] rounded-[999px] shrink-0 w-[6px]" data-name="Bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
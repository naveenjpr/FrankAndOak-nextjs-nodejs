"use client"

import React from "react"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

import Slider from "react-slick"

import Howitallstarted from "../../../public/howv21-1638308615089 (1).webp"
import Whoweare from "../../../public/Who_we_are_c16177ec-409a-4524-92d4-966f83134ca7.webp"
import Sustainable_practices from "../../../public/Sustainable_practices_a1ac0868-0658-44db-8b70-1c3839dcfbb0.webp"
import Design_Philosophy from "../../../public/Design_Philosophy.jpg"
import Fabric_innovation from "../../../public/Fabric_innovation_2.jpg"
import Circular_denim from "../../../public/Circular_denim_ec81db95-1661-4db6-9b1c-24086cbfdbd5.webp"
import Partners_and_Factories from "../../../public/Partners_and_Factories.webp"
import actionsv21 from "../../../public/actionsv21-1638308615012.webp"

export default function page() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  let hundardpercentage = [
    {
      name: "100%",
      par: "our assortment is responsible",
      bigpar:
        "For us, that means all our products either contain low-impact, cruelty-free, organic, biodegradable, or recycled fibres, or are manufactured using industry-leading technologies and processes",
    },
    {
      name: "Less than 0.5%",
      par: "of our products feature virgin polyester.",
      bigpar:
        "We have (almost) eliminated the use of virgin polyester and replaced it with recycled polyester.",
    },
    {
      name: "100%",
      par: "of our denim collection is designed to be circular",
      bigpar:
        "All our denim styles are designed to be easily recycled. This means we craft them using conscious materials, salvaged fibres, and zero rivets  ",
    },
    {
      name: "Over 70%",
      par: "of our styles are made using mono-fibres and bi-fibres.",
      bigpar:
        "The more fibres are mixed together in a garment, the harder it will be to recycle. That is why we strive to keep the percentage of multi-fibre pieces to less than 30% of our collection. ",
    },
    {
      name: "More than 40%",
      par: "of our deliveries were carbon-neutral in 2023.",
      bigpar:
        "Since October 2022, we have been working with our warehousing and last-mile logistics partner, GoBolt, to make our deliveries carbon neutral. Last year, they delivered more than 40% of our packages. 15% of these deliveries were done by Electric Vehicle (EV), and the rest was offset by sequestering carbon.",
    },
    {
      name: "Code of Conduct",
      par: "We require all our manufacturing partners to sign our Code of Conduct",
      bigpar:
        "As part of our commitment to transparency and accountability, we adhere to the highest standards of fair labour practices and environmental protection. That is why we require our partners to have completed, or be in the process of completing, compliance audits conducted by international organizations such as BSCI (Business Social Compliance Initiative) and WRAP (Worldwide Responsible Accredited Production)",
    },
  ]
  let myslider = [
    {
      firstImage: actionsv21,
    },
    {
      firstImage: actionsv21,
    },
    {
      firstImage: actionsv21,
    },
    {
      firstImage: actionsv21,
    },
  ]
  let Who_we_are = [
    {
      image: Whoweare,
      firstkey: "Who we are",
      secondkey: "Learn MOre",
    },
    {
      image: Sustainable_practices,
      firstkey: "Who we are",
      secondkey: "Learn MOre",
    },
    {
      image: Design_Philosophy,
      firstkey: "Design Philosophy",
      secondkey: "Learn MOre",
    },
    {
      image: Fabric_innovation,
      firstkey: "Fabrics Innovation",
      secondkey: "Learn MOre",
    },
    {
      image: Circular_denim,
      firstkey: "Circular denim",
      secondkey: "Learn MOre",
    },
    {
      image: Partners_and_Factories,
      firstkey: "	Partners and Factories",
      secondkey: "Learn MOre",
    },
  ]

  return (
    <>
      <div className="w-full -z-[99]  relative overflow-hidden">
        <video
          class=" w-full h-full  scale-x-100 object-center "
          autoplay
          muted
          loop
          controls
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/6c828d2216314c7a8886b6e45d0050fa.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute z-10 md:top-[10px] md:left-[70px] left-[50%] top-[50%] md:translate-x-[0%] md:translate-y-[0%] translate-x-[-50%] translate-y-[-50%]">
          <ul className="   mx-auto flex flex-col justify-between md:items-start items-center ">
            <li className="font-[600] md:text-[44px] text-[15px] ">Dive in</li>
            <li className="font-[900] md:text-[88px] text-[15px]">
              THE SUMMER SALE
            </li>
            <li className="font-[600] md:text-[64px] text-[15px] mb-[20px] ">
              Up to 50% off*
            </li>
            <li className="flex gap-[20px]">
              <button className="bg-white md:w-[200px] w-[100px] md:py-[10px]">
                Women
              </button>
              <button className="bg-white md:w-[200px] w-[100px] md:py-[10px]">
                Men
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[100%]">
        <div className="w-[80%] mx-auto md:py-[100px] sm:py-[20px] ">
          <p className="md:text-[30px] text-[11px] texy-[black] font-[600] md:leading-[35px] leading-[15px] text-center">
            We believe in considering the impact of the choices we make every
            day and view those choices as an opportunity to better ourselves.
            Our purpose is to Inspire a Better way of Living by creating
            conscious products that last through time. By marrying innovation
            with eco-friendly processes, we strive to help shape a cleaner,
            healthier, and more mindful world where human progress is in harmony
            with the planet's well-being.
          </p>
        </div>
      </div>

      {/* How it all started */}
      <div className="w-[100%] py-[100px]">
        <div className="w-[97%] mx-auto ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 p-[12px]">
            <div className=" md:order-1 order-2">
              <Image
                src={Howitallstarted}
                alt="Picture of the author"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="md:order-2 order-1  flex flex-col	items-center justify-center text-[#000] px-[20px]">
              <h1 className="md:text-[95px] text-[32px]  text-left my-[16px] text-[#000]  ">
                How it all started
              </h1>
              <div className="text-justify">
                <p className="mb-[20px] md:text-[20px] text-[15px] text-[#000] font-[500] ">
                  Frank And Oak was founded in Montreal in 2012, with a mission
                  to create an apparel brand that would speak to a new
                  generation of creatives and entrepreneurs.
                </p>
                <p className="mb-[20px] md:text-[20px] text-[15px] text-[#000] font-[500] ">
                  What once started as a favourite in Montreal’s Mile End
                  quickly blossomed into one of Canada’s leading lifestyle
                  brands and digital retailers.
                </p>
                <p className="mb-[20px] md:text-[20px] text-[15px] text-[#000] font-[500] ">
                  A certified B Corp, Frank And Oak is now a leader in
                  sustainable fashion and using innovative fabrics from nature
                  to make products that are thoughtfully designed to help you
                  live better, enjoy more, and feel good in everything you wear.
                </p>
                <h3 className="text-[#000] mb-[20px] md:text-[25px] text-[12px]  font-[600]">
                  The Frank And Oak team
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our values */}
      <div className="w-[100%] md:mb-[150px] mb-[75px]">
        <div className="w-[80%] mx-auto ">
          <h1 className="md:text-[100px] text-[50px] font-[700] md:pb-[30px] pb-[15px]">
            Our values
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[35px]">
            <div className="">
              <h4 className="font-[500] md:text-[25px] text-[15px]">
                Act with purpose
              </h4>
              <p className="md:pt-[30px] pt-[15px] md:text-[21px] text-[12px] font-[500]">
                We design durable products that blend timeless style with
                functional features that help lay the foundation for better
                living.
              </p>
            </div>
            <div className="">
              <h4 className="font-[500] md:text-[25px] text-[15px]">
                Create communities
              </h4>
              <p className="md:pt-[30px] pt-[15px] md:text-[21px] text-[12px] font-[500]">
                We bring together a community of passionate and diverse
                individuals who want to be part of something bigger.
              </p>
            </div>
            <div className="">
              <h4 className="font-[500] md:text-[25px] text-[15px]">
                Inspire innovation
              </h4>
              <p className="md:pt-[30px] pt-[15px] md:text-[21px] text-[12px] font-[500]">
                We are a forward-thinking brand that delivers cutting-edge
                products to fit our customers' modern and evolving lifestyles.
              </p>
            </div>
            <div className="">
              <h4 className="font-[500] md:text-[25px] text-[15px]">
                Be authentic
              </h4>
              <p className="md:pt-[30px] pt-[15px] md:text-[21px] text-[12px] font-[500]">
                We are driven by passion, not ego. We recognize and celebrate
                our individuality, strengths, and even weaknesses, but remain
                humble and open to continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Our 2023 achievements */}
      <div className="w-[100%] bg-[#f6f2eb] py-[50px]">
        <div className="w-[80%] p-[12px] mx-auto ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] items-start">
            <div className="flex flex-col">
              <h1 className="md:text-[40px] text-[20px] py-[25px] font-[600]">
                Our 2023 achievements
              </h1>
              <p className="md:text-[20px] text-[15px] py-[25px] font-[600]">
                By adopting circularity and innovation as our design philosophy,
                we strive to help shape a better, more mindful world where human
                progress is in harmony with the planet’s well-being. After years
                of work, reflection, and challenges, and in line with our pledge
                for transparency, we are proud to share our progress and the
                significant milestones we’ve reached so far.
              </p>
              <div className="flex items-center md:text-[35px] text-[17px] font-[700] gap-[10px] ">
                <h3 className="">Read the full report</h3>
                <span>
                  <FaArrowRight />
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              {hundardpercentage.map((v, i) => {
                return (
                  <div className="mb-[20px]" key={i}>
                    <p className="md:text-[44px] text-[22px] pb-[10px] font-[700]">
                      {v.name}
                    </p>
                    <p className="text-[22px] leading-[24px] pb-[10px] font-[500]">
                      {v.par}
                    </p>
                    <p className="md:text-[23px] text-[12px] pb-[10px] font-[400]">
                      {v.bigpar}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Our community */}
      <div className="w-[100%] px-[12px]">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="py-[50px]">
            <h2 className="md:text-[60px] text-[35px] leading-[25px] mb-[32px] font-[600]">
              Our community
            </h2>
            <h3 className="text-[22px] mb-[22px] leading-[25px]">
              Mighty oaks from little acorns grow
            </h3>
            <p className="text-[16px] max-w-[540px] border-2 border-[solid] border-[red]">
              It only takes a tiny spark to turn a meaningful idea into an
              impactful pursuit. Today, we are a group of 300 people from over
              20 different countries. Sharing our optimism and embodying our
              values is our job, but it is also a reflection of our true selves.
              We stand together on what’s important. Here are a few throwbacks
              to some of our achievements:
            </p>
          </div>

          <div className="w-[100%] border-2 border-[solid] border-[blue]">
            {myslider.map((v, i) => {
              return (
                <>
                  <Slider {...settings}>
                    <div>
                      <div>
                        <Image
                          src={v.firstImage.src}
                          width={0}
                          height={0}
                          alt="Picture of the author"
                          sizes="100vw"
                          // className="w-[100%] h-[100%]"
                          style={{ width: "100%", height: "100%" }} // optional
                        />
                      </div>
                    </div>
                  </Slider>
                </>
              )
            })}
          </div>
        </div>
      </div>
      {/*Who_we_are  */}
      <div className="w-[100%] bg-[#455f57]">
        <div className="p-[24px] grid md:grid-cols-2 grid-cols-1 gap-[30px] ">
          {Who_we_are.map((v, i) => {
            console.log(v)
            return (
              <>
                <div className="relative" key={i}>
                  <Image
                    src={v.image.src}
                    width={0}
                    height={0}
                    alt="Picture of the author"
                    sizes="100vw"
                    // className="w-[100%] h-[100%]"
                    style={{ width: "100%", height: "100%" }} // optional
                  />
                  <h1 className="absolute md:left-[45px] left-[30px] top-2 font-[500] md:text-[40px] text-[22px] leading-[52px] text-[white]">
                    {v.firstkey}
                  </h1>
                  <p className="absolute md:left-[45px] left-[30px] font-[400] md:text-[30px] text-[20px] leading-[52px] text-[white] bottom-2">
                    {v.secondkey}
                  </p>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

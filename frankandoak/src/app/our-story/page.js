"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Howitallstarted from "../../../public/howv21-1638308615089 (1).webp"
import Whoweare from "../../../public/Who_we_are_c16177ec-409a-4524-92d4-966f83134ca7.webp"
import Sustainable_practices from "../../../public/Sustainable_practices_a1ac0868-0658-44db-8b70-1c3839dcfbb0.webp"
import Design_Philosophy from "../../../public/Design_Philosophy.jpg"
import Fabric_innovation from "../../../public/Fabric_innovation_2.jpg"
import Circular_denim from "../../../public/Circular_denim_ec81db95-1661-4db6-9b1c-24086cbfdbd5.webp"
import Partners_and_Factories from "../../../public/Partners_and_Factories.webp"
import actionsv21 from "../../../public/actionsv21-1638308615012.webp"

export default function Page() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        "All our denim styles are designed to be easily recycled. This means we craft them using conscious materials, salvaged fibres, and zero rivets",
    },
    {
      name: "Over 70%",
      par: "of our styles are made using mono-fibres and bi-fibres.",
      bigpar:
        "The more fibres are mixed together in a garment, the harder it will be to recycle. That is why we strive to keep the percentage of multi-fibre pieces to less than 30% of our collection.",
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
      secondkey: "Learn More",
    },
    {
      image: Sustainable_practices,
      firstkey: "Sustainable Practices",
      secondkey: "Learn More",
    },
    {
      image: Design_Philosophy,
      firstkey: "Design Philosophy",
      secondkey: "Learn More",
    },
    {
      image: Fabric_innovation,
      firstkey: "Fabrics Innovation",
      secondkey: "Learn More",
    },
    {
      image: Circular_denim,
      firstkey: "Circular Denim",
      secondkey: "Learn More",
    },
    {
      image: Partners_and_Factories,
      firstkey: "Partners and Factories",
      secondkey: "Learn More",
    },
  ]

  return (
    <>
      <div className="w-full -z-[99] relative overflow-hidden">
        {isClient ? (
          <video
            className="object-center w-full h-full scale-x-100" // ✅ FIXED: Changed from class to className
            autoPlay // ✅ FIXED: Changed from autoplay to autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/6c828d2216314c7a8886b6e45d0050fa.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-[500px] bg-gradient-to-r from-green-700 to-emerald-500 flex flex-col items-center justify-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">Our Story</h1>
            <p className="mb-8 text-2xl md:text-4xl">Inspiring Better Living</p>
            <div className="flex flex-col gap-4 md:flex-row">
              <button className="px-6 py-3 font-semibold text-black bg-white hover:bg-gray-100">
                Discover Our Journey
              </button>
            </div>
          </div>
        )}

        <div className="absolute z-10 md:top-[10px] md:left-[70px] left-[50%] top-[50%] md:translate-x-[0%] md:translate-y-[0%] translate-x-[-50%] translate-y-[-50%] w-full px-4">
          <ul className="flex flex-col items-center justify-between mx-auto text-center md:items-start md:text-left">
            <li className="font-[600] md:text-[44px] text-[24px] text-white">Our Journey</li>
            <li className="font-[900] md:text-[88px] text-[32px] md:text-[48px] lg:text-[88px] text-white">
              FRANK AND OAK
            </li>
            <li className="font-[600] md:text-[64px] text-[24px] md:text-[36px] lg:text-[64px] mb-[20px] text-white">
              Since 2012
            </li>
            <li className="flex flex-col md:flex-row gap-[20px] mt-4">
              <button className="bg-white text-black md:w-[200px] w-[180px] py-[10px] px-4 text-sm md:text-base font-semibold hover:bg-gray-100 transition-colors">
                Our Values
              </button>
              <button className="bg-transparent border-2 border-white text-white md:w-[200px] w-[180px] py-[10px] px-4 text-sm md:text-base font-semibold hover:bg-white hover:text-black transition-colors">
                Sustainability
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[100%] py-12">
        <div className="w-[95%] md:w-[80%] mx-auto px-4">
          <p className="md:text-[30px] text-[18px] text-black font-[600] md:leading-[40px] leading-[24px] text-center">
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
      <div className="w-[100%] py-16 md:py-[100px]">
        <div className="w-[95%] md:w-[97%] mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 p-4 md:p-[12px]">
            <div className="order-2 md:order-1">
              <Image
                src={Howitallstarted}
                alt="How it all started - Frank And Oak founding story"
                className="w-full h-auto rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:order-2 order-1 flex flex-col items-center justify-center text-black px-4 md:px-[20px]">
              <h1 className="md:text-[95px] text-[40px] text-left my-4 md:my-[16px] text-black font-bold">
                How it all started
              </h1>
              <div className="space-y-4 text-left md:space-y-6">
                <p className="md:text-[20px] text-[16px] text-black font-[500]">
                  Frank And Oak was founded in Montreal in 2012, with a mission
                  to create an apparel brand that would speak to a new
                  generation of creatives and entrepreneurs.
                </p>
                <p className="md:text-[20px] text-[16px] text-black font-[500]">
                  What once started as a favourite in Montreal's Mile End
                  quickly blossomed into one of Canada's leading lifestyle
                  brands and digital retailers.
                </p>
                <p className="md:text-[20px] text-[16px] text-black font-[500]">
                  A certified B Corp, Frank And Oak is now a leader in
                  sustainable fashion and using innovative fabrics from nature
                  to make products that are thoughtfully designed to help you
                  live better, enjoy more, and feel good in everything you wear.
                </p>
                <h3 className="text-black mt-8 md:mt-0 md:text-[25px] text-[18px] font-bold">
                  The Frank And Oak team
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our values */}
      <div className="w-[100%] md:mb-[150px] mb-[75px]">
        <div className="w-[95%] md:w-[80%] mx-auto px-4">
          <h1 className="md:text-[100px] text-[48px] font-bold md:pb-[30px] pb-[15px]">
            Our values
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 md:gap-[35px]">
            <div className="p-4 transition-colors rounded-lg hover:bg-gray-50">
              <h4 className="font-bold md:text-[25px] text-[18px]">
                Act with purpose
              </h4>
              <p className="md:pt-[20px] pt-[10px] md:text-[18px] text-[14px] font-[500]">
                We design durable products that blend timeless style with
                functional features that help lay the foundation for better
                living.
              </p>
            </div>
            <div className="p-4 transition-colors rounded-lg hover:bg-gray-50">
              <h4 className="font-bold md:text-[25px] text-[18px]">
                Create communities
              </h4>
              <p className="md:pt-[20px] pt-[10px] md:text-[18px] text-[14px] font-[500]">
                We bring together a community of passionate and diverse
                individuals who want to be part of something bigger.
              </p>
            </div>
            <div className="p-4 transition-colors rounded-lg hover:bg-gray-50">
              <h4 className="font-bold md:text-[25px] text-[18px]">
                Inspire innovation
              </h4>
              <p className="md:pt-[20px] pt-[10px] md:text-[18px] text-[14px] font-[500]">
                We are a forward-thinking brand that delivers cutting-edge
                products to fit our customers' modern and evolving lifestyles.
              </p>
            </div>
            <div className="p-4 transition-colors rounded-lg hover:bg-gray-50">
              <h4 className="font-bold md:text-[25px] text-[18px]">
                Be authentic
              </h4>
              <p className="md:pt-[20px] pt-[10px] md:text-[18px] text-[14px] font-[500]">
                We are driven by passion, not ego. We recognize and celebrate
                our individuality, strengths, and even weaknesses, but remain
                humble and open to continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our 2023 achievements */}
      <div className="w-[100%] bg-[#f6f2eb] py-12 md:py-[50px]">
        <div className="w-[95%] md:w-[80%] p-4 md:p-[12px] mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-[30px] items-start">
            <div className="flex flex-col">
              <h1 className="md:text-[40px] text-[28px] py-4 md:py-[25px] font-bold">
                Our 2023 achievements
              </h1>
              <p className="md:text-[20px] text-[16px] py-4 md:py-[25px] font-[500]">
                By adopting circularity and innovation as our design philosophy,
                we strive to help shape a better, more mindful world where human
                progress is in harmony with the planet's well-being. After years
                of work, reflection, and challenges, and in line with our pledge
                for transparency, we are proud to share our progress and the
                significant milestones we've reached so far.
              </p>
              <div className="flex items-center md:text-[25px] text-[18px] font-bold gap-[10px] text-emerald-700 hover:text-emerald-800 cursor-pointer">
                <h3>Read the full report</h3>
                <span>
                  <FaArrowRight />
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-8 md:space-y-6">
              {hundardpercentage.map((v, i) => {
                return (
                  <div className="mb-4 md:mb-[20px] p-4 bg-white rounded-lg shadow-sm" key={i}>
                    <p className="md:text-[44px] text-[28px] pb-2 md:pb-[10px] font-bold text-emerald-700">
                      {v.name}
                    </p>
                    <p className="text-[18px] md:text-[22px] leading-[24px] pb-2 md:pb-[10px] font-bold">
                      {v.par}
                    </p>
                    <p className="md:text-[18px] text-[14px] pb-2 md:pb-[10px] font-[400] text-gray-700">
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
      <div className="w-[100%] px-4 md:px-[12px] py-12 md:py-16">
        <div className="w-[95%] mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-8 md:gap-12">
          <div className="py-8 md:py-[50px]">
            <h2 className="md:text-[60px] text-[36px] md:mb-[32px] mb-6 font-bold">
              Our community
            </h2>
            <h3 className="text-[20px] md:text-[22px] mb-6 md:mb-[22px] leading-[25px] font-semibold">
              Mighty oaks from little acorns grow
            </h3>
            <p className="text-[16px] md:text-[18px] max-w-[540px] p-4 bg-gray-50 rounded-lg">
              It only takes a tiny spark to turn a meaningful idea into an
              impactful pursuit. Today, we are a group of 300 people from over
              20 different countries. Sharing our optimism and embodying our
              values is our job, but it is also a reflection of our true selves.
              We stand together on what's important. Here are a few throwbacks
              to some of our achievements:
            </p>
          </div>

          <div className="w-full">
            {isClient && (
              <Slider {...settings}>
                {myslider.map((v, i) => (
                  <div key={i}>
                    <div className="p-2">
                      <Image
                        src={v.firstImage}
                        alt="Our community achievements"
                        className="w-full h-auto rounded-lg shadow-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
            {!isClient && (
              <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Loading community highlights...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Who we are grid */}
      <div className="w-[100%] bg-[#455f57]">
        <div className="p-4 md:p-[24px] grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-[30px]">
          {Who_we_are.map((v, i) => {
            return (
              <div className="relative overflow-hidden rounded-lg cursor-pointer group" key={i}>
                <Image
                  src={v.image}
                  alt={v.firstkey}
                  className="w-full h-[250px] md:h-[350px] object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h1 className="absolute left-4 md:left-[45px] top-4 font-bold md:text-[40px] text-[24px] leading-[52px] text-white">
                  {v.firstkey}
                </h1>
                <div className="absolute left-4 md:left-[45px] bottom-4 flex items-center gap-2 text-white group-hover:translate-x-2 transition-transform">
                  <p className="font-[400] md:text-[20px] text-[16px] leading-[52px]">
                    {v.secondkey}
                  </p>
                  <FaArrowRight className="text-white" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-[100%] bg-emerald-800 text-white py-16">
        <div className="w-[95%] md:w-[80%] mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Join Our Sustainable Journey
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl">
            Be part of our mission to create a more sustainable future through conscious fashion.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <button className="px-8 py-3 text-lg font-semibold transition-colors bg-white rounded-lg text-emerald-800 hover:bg-gray-100">
              Shop Sustainable Styles
            </button>
            <button className="px-8 py-3 text-lg font-semibold text-white transition-colors bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-emerald-800">
              Learn About Our Impact
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
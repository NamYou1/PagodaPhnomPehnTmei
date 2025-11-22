import React, { useState } from "react";

const slidesData = [
  {
    id: 1,
    title: "Mountain Adventure",
    description:
      "Enjoy the breathtaking views and the thrill of climbing the majestic mountains.",
    imgUrl:
      "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/495575345_647990584731082_7155251111118947916_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeF77kDKMw5gprCSc1h8ZdmTUhGIsarl63hSEYixquXreKE9EIpFH4Rj5JSks9ZKD_YIs5_Xj5IzjoDGdJzjr8Rt&_nc_ohc=ylyoPaOVijgQ7kNvwHmgMRg&_nc_oc=AdkV5WycXY6zGOp2r-5ZYDFpG0SQ1IauGSF2oZonZp3nqcANjdhpzwlUE92rvVgq_kc&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=nfxi0uhiAQuEaAQTJLJOuw&oh=00_AfgS1SKESFdMyl3Chc7iR2HmBBf0kVpTYigkODSUsRTicw&oe=69207684",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2024,
  },
  {
    id: 2,
    title: "Beach Relaxation",
    description:
      "Experience peace and calm on golden sands with crystal clear waters.",
    imgUrl:
      "https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/577802852_786965150833624_5643441720380124376_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF7CH3ryL9O3KflA3i-U9gPXikAi4SXwbReKQCLhJfBtF2si5sDGPQYogxJgF37S7BNMF84KG2IC_yC_OhNN69x&_nc_ohc=nJgu5pMbxEEQ7kNvwFk47yV&_nc_oc=AdnGLGWILztTADlYRC7W90z8z29r69HTS8X5d4EuCxTl6BAX5YOL3mfHz-dfqHC16YA&_nc_zt=23&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=jtmu1or-U7MVe4eQwWfocw&oh=00_AfgpYI9a1heZg1-aPEDNkswYh9wwVgSMw4-DRVjvZYNFmg&oe=69208631",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2025,
  },
  {
    id: 3,
    title: "Forest Camping",
    description:
      "Reconnect with nature and enjoy a quiet night under a blanket of stars.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2024,
  },
  {
    id: 4,
    title: "City Lights",
    description:
      "Explore vibrant nightlife, modern architecture, and endless entertainment.",
    imgUrl:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    vdourl: "https://www.w3schools.com/html/mov_bbb.mp4",
    year: 2025,
  },
];

const Carousel = () => {
  const [data, setData] = useState(slidesData);

  return (
    <div className="flex justify-center items-center py-2 px-2 md:px-5">
      <div className="carousel w-full md:w-[80vw] lg:w-[70vw] h-[40vh] md:h-[60vh] lg:h-[70vh] rounded-lg shadow-xl">
        {data.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-full"
          >
            <img
              src={slide.imgUrl}
              alt={slide.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 md:left-5 md:right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? data.length : index}`}
                className="btn btn-circle btn-sm md:btn-md"
              >
                ❮
              </a>
              <a
                href={`#slide${index === data.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle btn-sm md:btn-md"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import { Fragment } from "react";
import Header from "./component/header";
import Entry from "./component/Entry";
export default function App() {
  return (
  <>
    <Header />
    <Entry
    img="../images/mountfunji.jpeg"
    country="Japan"
    googleMapLink="https://www.google.com/maps/place/%E0%B2%9C%E0%B2%AA%E0%B2%BE%E0%B2%A8%E0%B3%8D/@33.5001886,137.1538646,2872718m/data=!3m2!1e3!4b1!4m6!3m5!1s0x34674e0fd77f192f:0xf54275d47c665244!8m2!3d36.204824!4d138.252924!16zL20vMDNfM2Q?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D"
    title="Mount Fuji"
    date="12 Jan,2021 -24 Jan,2021"
    description="Mount Fuji, Japan's highest peak at 3,776 meters, is an iconic stratovolcano known for its symmetrical cone shape. It is a UNESCO World Heritage Site and a sacred symbol in Japanese culture. Popular among hikers and artists, Mount Fuji attracts millions of visitors each year."
    />
    <Entry
    img="../images/fjorg.jpeg"
    country="Iceland"
    googleMapLink="https://www.google.com/maps/place/Iceland/@64.963051,-19.020835,6z/data=!3m1!4b1!4m6!3m5!1s0x48d6f2c7f8c8e9a5:0x7b2d8e9f8c8e9a5!8m2!3d64.963051!4d-19.020835!16zL20vMDNfM2Q?entry=ttu"
    title="Fjorg"
    date="1 Jan,2022 - 15 Jan,2022"
    description="Fjorg, a stunning natural wonder in Iceland, showcases the country's unique geological features. Known for its breathtaking landscapes, including waterfalls, geysers, and volcanic formations, Fjorg attracts nature enthusiasts and photographers alike. The area is a testament to Iceland's raw beauty and geological diversity."
    />
    <Entry
    img="../images/operahouse.jpeg"
    country="Australia"
    googleMapLink="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,15z/data=!4m6!3m5!1s0x6b12ae0f8c8e9a5:0x7b2d8e9f8c8e9a5!8m2!3d-33.8567844!4d151.2152967!16zL20vMDNfM2Q?entry=ttu"
    title="Sydney Opera House"
    date="20 Feb,2023 - 28 Feb,2023"
    description="The Sydney Opera House, an architectural marvel in Australia, is renowned for its distinctive sail-like design. Located on the Sydney Harbour, it serves as a multi-venue performing arts center. The Opera House is a UNESCO World Heritage Site and a symbol of modern architecture, attracting millions of visitors each year."
    />
  
  </>

  );
}
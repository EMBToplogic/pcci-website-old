import React from "react";
import Link from "next/link";
import Image from "next/image";

// Components

import Header from "../Header";
import Buttons from "../Buttons";

// CSS

import eventStyles from "../../styles/components/home/Events.module.css";

// Icons

import { Facebook, Twitter, Linkedin } from "react-feather";

const sampleData = [
  {
    eventno: 1,
    eventname:
      "BSP's QR PH: Accelerating Digital Adoption with the National QR Standard for Person-to-Merchant Payments",
    date: "June 15, 2022",
    eventtype: "Online Event",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIOe6wjzES0CirDRIbJTi_QhcWWhMdYlCwCRniuc1sIUWaNA/viewform",
    imageurl: "../../public/images/test_image.png",
  },
  {
    eventno: 2,
    eventname:
      "PIDS Webinar on Modernizing the Philippines' Agriculture and Fisheries Sector: Issues and Challenges",
    date: "June 15, 2022",
    eventtype: "Online Event",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIOe6wjzES0CirDRIbJTi_QhcWWhMdYlCwCRniuc1sIUWaNA/viewform",
    imageurl: "../../public/images/test_image.png",
  },
  {
    eventno: 3,
    eventname: "The Bull's Eye - Crowd Investing: Fad or Future",
    date: "June 15, 2022",
    eventtype: "Online Event",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIOe6wjzES0CirDRIbJTi_QhcWWhMdYlCwCRniuc1sIUWaNA/viewform",
    imageurl: "../../public/images/test_image.png",
  },
  {
    eventno: 4,
    eventname:
      "Kaka-Internet Mo 'Yan: Priority Policy Reforms for a Better Internet",
    date: "June 15, 2022",
    eventtype: "Online Event",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIOe6wjzES0CirDRIbJTi_QhcWWhMdYlCwCRniuc1sIUWaNA/viewform",
    imageurl: "../../public/images/test_image.png",
  },
  {
    eventno: 5,
    eventname: "Closing Ceremony of WeEmpowerAsia",
    date: "June 15, 2022",
    eventtype: "Online Event",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIOe6wjzES0CirDRIbJTi_QhcWWhMdYlCwCRniuc1sIUWaNA/viewform",
    imageurl: "../../public/images/test_image.png",
  },
  {
    eventno: 6,
    eventname: "31st South Luzon Area Business Conference",
    date: "June 15, 2022",
    eventtype: "Online Event",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIOe6wjzES0CirDRIbJTi_QhcWWhMdYlCwCRniuc1sIUWaNA/viewform",
    imageurl: "../../public/images/test_image.png",
  },
  {
    eventno: 7,
    eventname:
      "43rd National Conference of Employers | Reimagining the Future of Employment From Policies to Action",
    date: "June 15, 2022",
    eventtype: "Online Event",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIOe6wjzES0CirDRIbJTi_QhcWWhMdYlCwCRniuc1sIUWaNA/viewform",
    imageurl: "../../public/images/test_image.png",
  },
  {
    eventno: 8,
    eventname: "NxtGen in Franchising Philippines 2022 Competition",
    date: "June 15, 2022",
    eventtype: "Online Event",
    register:
      "https://docs.google.com/forms/d/e/1FAIpQLSfIOe6wjzES0CirDRIbJTi_QhcWWhMdYlCwCRniuc1sIUWaNA/viewform",
    imageurl: "../../public/images/test_image.png",
  },
];

const Events = () => {
  return (
    <div className={eventStyles.events_main}>
      <Header
        title={"Upcoming Events"}
        customButton={
          <Buttons
            text={
              <Link href='events'>
                <a>See All Events</a>
              </Link>
            }
            type='primary'
          />
        }
      />
      <div className={eventStyles.events_inner}>
        {sampleData.map((data, index) => {
          return (
            <div className={eventStyles.event_container} key={data.eventno}>
              <div className={eventStyles.event_image_container}>
                <Image
                  src={"/images/test_image.png"}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className={eventStyles.event_text_container}>
                <h1 className={eventStyles.event_title}>{data.eventname}</h1>
                <div className={eventStyles.event_date}>{data.date}</div>
                <div className={eventStyles.event_type}>{data.eventtype}</div>
                <div className={eventStyles.event_footer}>
                  <Buttons
                    text={
                      <Link href={data.register}>
                        <a>Register</a>
                      </Link>
                    }
                    type='primary'
                  />
                  <div className={eventStyles.icons_container}>
                    <Link href={data.register}>
                      <a>
                        <Facebook style={{ margin: 10 }} />
                      </a>
                    </Link>
                    <Link href={data.register}>
                      <a>
                        <Twitter style={{ margin: 10 }} />
                      </a>
                    </Link>
                    <Link href={data.register}>
                      <a>
                        <Linkedin style={{ margin: 10 }} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;

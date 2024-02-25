import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Web Development Services",
    text: [
      "Welcome to my Web Development Services! I Embrace the perfect fusion of innovation and functionality as I craft compelling digital experiences. As a proficient MERN stack developer, my expertise lies in MongoDB, Express.js, React.js, and Node.js – the pillars of modern web development. My skills ensure the creation of robust and responsive web applications that redefine user interactions. Harness the power of cutting-edge technology with me and let your digital presence thrive!",
      // "In content management, I bring expertise to WordPress development, tailoring websites for personal blogs, business sites, or e-commerce. Committed to delivering user-friendly and visually compelling online presence, my proficiency ensures a dynamic and customized approach. Let's collaborate for a digital space that resonates and achieves your online objectives.",
      // "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    // image: "assets/img/news/1.jpg",
    video: "assets/img/news/web.mp4",
  },
  {
    id: 2,
    name: "WordPress Development",
    text: [
      "Passionate WordPress developer skilled in custom theme creation, plugin development, and e-commerce solutions using WooCommerce. With a focus on responsive design and performance optimization, I bring expertise to WordPress development. Proficient in HTML, CSS, JavaScript, and PHP, I leverage the latest WordPress technologies for seamless development. Let's collaborate to transform your ideas into visually appealing and functional WordPress websites. Explore my portfolio for a glimpse into my expertise.",
      // "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      // "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "eCommerce Development",
    text: [
      "Dedicated to e-commerce development, I specialize in creating robust and user-friendly online stores using WordPress and MERN Stack. From customizing themes to integrating payment gateways, I bring a tailored approach to each project. My expertise includes optimizing product catalogs, ensuring responsive design, and enhancing overall performance for a seamless shopping experience. Let's transform your e-commerce vision into reality—explore my portfolio for successful online store projects that showcase my commitment to delivering high-quality and visually appealing e-commerce solutions.",
      // "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      // "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
    image: "assets/img/news/3.jpg",
  },
  // {
  //   id: 4,
  //   name: "Live Chat",
  //   text: [
  //     "Kryptic Hash is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //     "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //     "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //   ],
  //   image: "assets/img/news/4.jpg",
  // },
  // {
  //   id: 5,
  //   name: "After Effects",
  //   text: [
  //     "Kryptic Hash is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //     "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //     "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //   ],
  //   image: "assets/img/news/1.jpg",
  // },
  // {
  //   id: 6,
  //   name: "Mobile App",
  //   text: [
  //     "Kryptic Hash is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //     "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //     "That’s why more companies are not only reevaluating their website’s design but also partnering with Kryptic Hash, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //   ],
  //   image: "assets/img/news/2.jpg",
  // },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">{service.name}</h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img className="popup_service_image opacity-0 invisible hidden absolute z-[-111]" src={service.image} alt="image" />
              <img className="popup_service_cideo opacity-0 invisible hidden absolute z-[-111]" src={service.video} alt="video" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;


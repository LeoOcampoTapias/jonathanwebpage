import React from "react";
import "./CloudStyles.css";
import { RiMentalHealthLine } from "react-icons/ri"

const Cloud = () => {
  return (
    <div className="cloud">
      <div className="container">
        <div className="content">
          <h2>
            <span>Desarrollo Personal</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem
            aut vero consequuntur illum repellat, dolores modi, accusantium
            consequatur distinctio doloremque at vel! Quas perspiciatis nam
            aliquam, possimus mollitia exercitationem. Facere maiores voluptas
            dolor minus dolores! Pariatur deleniti incidunt eum expedita
            voluptate, labore at doloribus voluptatum odio ut aperiam impedit
            ullam optio mollitia libero deserunt excepturi dolore temporibus
            laboriosam perspiciatis!
          </p>
          <div><button><RiMentalHealthLine />Conoce mas</button></div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;

/** @format */

import React from "react";
import star from "../images/star.png";

export default function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">
                    ({props.item.stats.reviewCount}) •{" "}
                </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.item.price}</span> / person
            </p>
        </div>
    );
}

// const cards = [
//   {
//     img: "./images/katie-zaferes.png",
//     rating: "5.0",
//     reviewCount: 6,
//     country: "USA",
//     title: "Life lessons with Katie Zafers",
//     price: 136,
//   },
//   {
//     img: "./images/wedding-photography.png",
//     rating: "5.0",
//     reviewCount: 30,
//     country: "USA",
//     title: "Learn wedding photography",
//     price: 125,
//   },
//   {
//     img: "./images/mountain-bike.png",
//     rating: "4.8",
//     reviewCount: 2,
//     country: "USA",
//     title: "Group Mountain Biking",
//     price: 50,
//   },
// ];

// export default function Card() {
//   return (
//     <section className="card">
//       {cards.map((card) => (
//         <div className="card--container">
//           <img src={card.img} alt="Katie Zafers" className="card--image" />

//           <div className="card--stat">
//             <img
//               src="./images/star.png"
//               alt="star icon"
//               className="card--star"
//             />
//             <span>{card.rating}</span>
//             <span className="gray">({card.reviewCount}) • </span>
//             <span className="gray">{card.country}</span>
//           </div>

//           <p>{card.title}</p>
//           <p>
//             <span className="bold"> From ${card.price}</span> / person
//           </p>
//         </div>
//       ))}
//     </section>
//   );
// }

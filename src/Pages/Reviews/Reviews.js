import React, { useEffect, useState } from 'react';
import './Reviews.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { RatingView } from 'react-simple-star-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://enigmatic-harbor-71567.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {

                setReviews(data);
            })
    }, [])


    return (
        <div className="mb-5">
            <h5 className="text-center mt-5 primary_clr">Reviews</h5>
            <h2 className="font_rale text-center mb-5">What Our Customer Saying About Us</h2>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                {reviews.map((review) => <div key={review._id}>
                    <img src={review.img} alt="" />
                    <div className="myCarousel">
                        <h3 className="mt-3">{review.name}</h3>


                        <RatingView ratingValue={review.rating} />
                        <p>
                            {review.review}
                        </p>
                    </div>
                </div>)}



            </Carousel>

        </div>
    );
};

export default Reviews;
import React, { useState } from 'react';
import './Reviews.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { RatingView, Rating } from 'react-simple-star-rating';

const Reviews = () => {
    const [rating, setRating] = useState(5) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        console.log(rate);
        setRating(rate)
        // Some logic
    }
    console.log(rating);

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
                <div>
                    <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                    <div className="myCarousel">
                        <h3 className="mt-3">Name</h3>
                        <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
                        <h4>Designer</h4>
                        <RatingView ratingValue={2} />
                        <p>
                            Description
                        </p>
                    </div>
                </div>


            </Carousel>

        </div>
    );
};

export default Reviews;
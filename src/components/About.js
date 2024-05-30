
import React from 'react'
import Services from './ServicesHeader';
import Tabs from './Tabs';
function About() {
  return (
    <div className='about'>
        <Services />
        <Tabs tabItems = {['about']} />
      <p id='about'>
        
        Welcome to Uradi Encore Restaurant and Resort, where luxury meets hospitality in the heart of Kisii Town. As a prestigious 5-star hotel, we pride ourselves on offering a myriad of services and amenities to ensure an unforgettable experience for every guest.<br/><br/>

        Nestled amidst the lush landscapes of Kisii, our resort boasts unparalleled tranquility and elegance. Whether you're seeking a relaxing getaway, a culinary adventure, or a venue for your next business event, Uradi Encore has something for everyone.<br/><br/>

        Indulge in a world-class dining experience at our exquisite restaurant, where culinary mastery meets creativity. Our talented chefs craft delectable dishes that cater to diverse palates, showcasing flavors from around the globe. From sumptuous local delicacies to international cuisine, every bite is a journey of culinary delight.<br/><br/>

        For accommodation, our luxurious rooms and suites provide the perfect retreat after a day of exploration or business activities. Immerse yourself in comfort and style, with modern amenities and breathtaking views that promise a restful stay.<br/><br/>

        But the luxury doesn't end there. Uradi Encore is also your gateway to adventure and relaxation. Take a dip in our inviting swimming pool, embark on a scenic hike through the surrounding trails, or test your skills at our state-of-the-art bowling alley. With activities tailored to all interests, there's never a dull moment at our resort.<br/><br/>

        In addition to leisure facilities, we also offer versatile spaces for conferences, meetings, and special events. Whether you're hosting a corporate gathering or celebrating a milestone occasion, our dedicated team will ensure every detail is executed flawlessly, leaving you free to focus on what matters most.<br/><br/>

        At Uradi Encore, we welcome visitors of all kinds with open arms. Whether you're a business traveler, a family on vacation, or a couple seeking a romantic escape, our commitment to exceptional service ensures a memorable stay for every guest.<br/><br/>

        Conveniently located just 200 meters from the main stage in Kisii Town, Uradi Encore is easily accessible yet offers a serene retreat from the hustle and bustle of city life. Join us and experience the epitome of luxury, hospitality, and cultural diversity at Uradi Encore Restaurant and Resort.<br/><br/>
      </p>
    </div>
  )
}

export default About;

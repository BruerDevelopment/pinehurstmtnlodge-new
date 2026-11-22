// All page copy and placeholder content lives here. Swap values to update the site.

// Set by next.config.ts from DEPLOY_TARGET (see there). Empty base path and custom domain by default.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://pinehurstmtnlodge.com";

// Prefixes a root-relative path with the base path. Needed for image src, which Next does not prefix.
export const withBase = (path: string) => `${basePath}${path}`;

// Absolute URL for a page or file, including the base path.
export const absoluteUrl = (path: string) => `${siteOrigin}${basePath}${path}`;

export const site = {
  name: "Pinehurst Mtn Lodge",
  location: "Rollinsville, Colorado",
  tagline:
    "In the beautiful Rocky Mountains, with a fabulous view and a large, brand new Arctic Spas hot tub, awaits the Pinehurst Mtn Lodge.",
  copyright: "© 2026 Pinehurst Mtn Lodge",
  phone: "(000) 000-0000",
  email: "bigpinehurst@gmail.com",
  instagram: "https://www.instagram.com/pinehurstmtnlodge",
  facebook:"https://www.facebook.com/p/Pinehurst-Lodge-Colorado-61557472377926/",

  // Used by the sitemap, robots.txt, llms.txt, and structured data. Follows DEPLOY_TARGET.
  siteUrl: absoluteUrl("/"),
  address: { locality: "Rollinsville", region: "CO", postalCode: "80474", country: "US" },
  // Approximate (about 1 km), so the exact property location is not published.
  geo: { latitude: 39.91, longitude: -105.5, elevationMeters: 2713 },

  nav: [
    { label: "Home", href: "/" },
    { label: "Accommodations", href: "/accommodations" },
    { label: "Things to Do", href: "/things-to-do" },
    { label: "Your Hosts", href: "/about" },
    { label: "FAQs", href: "/faqs" },
  ],

  facts: [
    { label: "Sleeps", value: "6 guests" },
    { label: "Layout", value: "4 rooms · 3 bath" },
    { label: "Check-in", value: "4:00 PM" },
    { label: "Check-out", value: "12:00 PM" },
  ],

  // First three are used in the hero mosaic; all six appear in the gallery.
  photos: [
    { src: withBase("/photos/mtn-views/cont-divide-blue-sky-w-snow.webp"), alt: "View of the cont divide" },
    { src: withBase("/photos/full-house/full-house-drone-2.webp"), alt: "full house drone shot" },
    { src: withBase("/photos/rooms/downstairs-deck-hot-tub/hot-tub-1.webp"), alt: "A hot tub with a view" },
    { src: withBase("/photos/rooms/upstairs-main-space/living-3.webp"), alt: "Living room photo" },
    { src: withBase("/photos/rooms/upstairs-deck/deck-w-people.webp"), alt: "Deck, Outdoor Grill, And a View" },
    { src: withBase("/photos/rooms/upstairs-primary/upstairs-primary-2.webp"), alt: "Upstairs primary bedroom" },
    { src: withBase("/photos/rooms/pool-table/pool-table-w-people.webp"), alt: "Downstairs pool table" },
    { src: withBase("/photos/mtn-views/view-w-ipa.webp"), alt: "Mountain view with two IPAs" },
  ],

  space: [
    "Wake up to Continental Divide views, grab coffee on the deck, then spend the day skiing, hiking, or exploring the mountain towns nearby. Back at Pinehurst Mtn Lodge, soak in the private covered hot tub, challenge friends to a game of pool, or gather around the fireplace after dinner. With two living rooms, two fully equipped kitchens, and plenty of space to spread out, it's an ideal home for families, friends, and unforgettable Colorado getaways.",
    "Whether you're planning a ski trip, hiking adventure, family vacation, or relaxing mountain escape, Pinehurst Lodge is designed to bring everyone together while also having room to spread out.",
    "Located in the peaceful mountain community of Rollinsville, you'll enjoy panoramic mountain views, fresh alpine air, and easy access to Colorado's outdoor adventures—all from the comfort of a spacious, amenity-filled home.",
  ],

  // Portrait photo shown beside the "The Space" copy.
  spacePhoto: { src: withBase("/photos/top-deck-fire-pit-woman.webp"), alt: "Top-deck fire pit with a view" },

  // Longer description used in the structured data.
  description:
    "Luxury 4-bedroom mountain retreat in Rollinsville, Colorado, overlooking the Continental Divide. Features a 6-person Arctic Spas hot tub, two fully equipped kitchens, two living areas, pool table, garage parking, and dedicated crafting or scrapbooking workspaces.",

  // Sleeping details used in the structured data. Sleeping spots total 8 against a maxOccupancy of 6.
  property: {
    bedrooms: 4,
    bathrooms: 3,
    maxOccupancy: 6,
    petsAllowed: false,
    rooms: [
      { name: "Upstairs Master Suite", beds: [{ type: "King", count: 1 }] },
      { name: "Upstairs Queen Bedroom", beds: [{ type: "Queen", count: 1 }] },
      { name: "Downstairs Master Suite", beds: [{ type: "Queen", count: 1 }] },
      {
        name: "Downstairs Queen & Bunks Bedroom",
        beds: [
          { type: "Queen", count: 1 },
          { type: "Twin Bunk", count: 2 },
        ],
      },
      // A twin with a rollout twin, configurable from twin to king: 2 sleeping spots.
      { name: "Downstairs Living Area Configurable Beds", beds: [{ type: "Trundle Twin to King", count: 2 }] },
    ],
  },

  amenities: [
    "Arctic Spas 6-Person Hot Tub",
    "Two Fully Equipped Kitchens",
    "Pool Table",
    "Wood-Burning Stove",
    "Two Living Rooms",
    "Two Full Laundries with Washers and Dryers",
    "Indoor Garage Parking for 2 Vehicles",
    "Outdoor Deck with Large Grill and Propane Fireplace",
    "Scrapbooking and Crafting Stations",
    "Smart TVs",
    "Heated Tile Bathroom Floors",
    "Complimentary Firewood",
  ],

  reviews: {
    average: 5.0,
    items: [
      { name: "Kris", date: "October 2026", platform: "Airbnb", text: "This place was exactly how described! Beautiful views, great central location, clean house, lots of space! Rheo was very responsive and accommodating." },
      { name: "Rory", location: "New Orleans, LA", date: "August 2026", platform: "Airbnb", text: "The house is fantastic. Situated close to world class hikes and great breweries. We had a few hiccups during our stay but Rheo was incredibly responsive and quick to address any concerns." },
      { name: "Nancy", location: "Boulder, CO", date: "August 2026", platform: "Airbnb", text: "Thanks so much! We had a lovely lovely stay, the pictures were exactly like the property and it was very accommodating. We saw deer, foxes and tons of other wildlife right from the back deck. Thanks so much again, Rheo for the wonderful stay! Would highly recommend to anyone!" },
      { name: "Daryl", location: "Centerburg, Ohio", date: "July 2026", platform: "Airbnb", text: "We were looking for a good location with a private setting that we could use as a hub for daily hikes with our adult family.  Rheo & Lisa’s cabin is in a great location and turned out to be more than we had hoped for. Aside from the location in a beautiful mountain setting, Rollinsville is a quaint and authentic little town with an excellent woodfired pizza shop and a nice brewery with coffee shop and a distillery. We had great access to Roosevelt National Forest and Rocky Mountain National Park along with many other local spots that provided all degrees and levels of hikes that we were looking for. Rheo & Lisa were very responsive throughout the entire process and were very helpful in providing local tips for hikes and other things to do. I highly recommend their place if you are looking for a peaceful getaway with beautiful views away from the mainstream. Colorado is absolutely gorgeous in the mountains!! We would definitely visit and stay here again." },
      { name: "Stephanie", location: "Newton, KS", date: "May 2026", platform: "Airbnb", text: "We traveled with some running friends for a nearby event. We felt right at home. We could not have asked for a better equipped and welcoming home. Very responsive and friendly hosts.\n\n This home is large enough that everyone had their privacy and is set up in a way that allowed all of us to come together for meals, hanging out together, playing games, etc. I can't stress enough how comfortable and well taken care of we felt!  I've been on plenty of trips and I can tell you these hosts know how to equip a home to make you feel great about staying there. They gave thought to details that would allow us to really enjoy our time there. Clear instructions, great accommodations!" },
      { name: "Lada", location: "Garwood, NJ", date: "May 2026", platform: "Airbnb", text: "What a lovely, lovely home!  It had absolutely everything we needed, and the hot tub overlooking the Continental Divide was just spectacular. We didn’t plan on getting snowed in (18 inches in May!!) but between the pool table, the board games, the wood burning stove, and the hot tub, we had plenty to do. The beds were super comfortable, the kitchen was well stocked, the views were incredible, and Rheo was the perfect host. He answered all of our questions, and even arranged for a plow to dig us out!  Rollinsville is a tiny town, and thanks to some gift cards that Rheo left on the counter for us, we were able to visit a few local establishments. The property is beautiful, the wildlife is plentiful (deer, birds, and a moose!), and we hope to be back someday!" },
      { name: "Ricky", location: "Rockville, MD", date: "January 2026", platform: "Airbnb", text: "I recently stayed at and had an excellent experience. The location was perfect, allowing easy access to local attractions while providing a peaceful atmosphere. The room was clean, comfortable, and well-decorated, making it feel like a home away from home.\n\n The hosts were incredibly welcoming and attentive, making sure all my needs were met.\n\n Overall, I highly recommend this stay to anyone looking for a cozy and enjoyable stay. I would definitely return!" },
      { name: "L", location: "Boerne, TX", date: "December 2025", platform: "Airbnb", text: "We’re grateful for our time at Pinehurst Lodge; the view was breathtaking and it was a perfect set up with ample space for our family of 5 adults and one toddler. Rheo and his team were extremely responsive and helpful to us ; our time was cut short due to  power outages in  the area and they promptly refunded us. We would have loved to have stayed longer and hope to return in the future." },
      { name: "Tara", location: "Minneapolis, MN", date: "October 2025", platform: "Airbnb", text: "I have stayed in a number of airbnbs and this was my favorite.  The pictures were very accurate and the view and privacy are exactly as they appear in the pictures.  Very spacious.  I went with three friends for a girl's weekend.  The kitchen was excellent, we cooked gourmet food two of the nights.  One night we walked the short distance to the really quaint town (less than 10 min walk).  We had pizza at Toss: Woodfire Eatery that was outstanding and then went next door to the Gold Dirt Distillery for Cocktails.  There is a ton of hiking nearby - we hiked Lower Crater Lake ~7mi and moderate elevation.  We drove the 40 min into Boulder for brunch one morning and walked around Pearl St.  The hot tub was divine after a hike and cocktails watching the sunset was breath taking.  And the beds were really comfortable (and I am normally picky!). Thank you Rheo!!" },
      { name: "Cliff", location: "Lindale, TX", date: "July 2026", platform: "Airbnb", text: "This place was perfect! The view was fantastic and Rheo was amazing." },
      { name: "Adam", location: "Kansas City, MO", date: "May 2026", platform: "Airbnb", text: "We had a great stay. The place was exactly as pictured. The house was clean, the views were stunning and the host was warm/communicative. Was close to some great trails. The hot tub was a great night cap. We’d recommend and stay again as well!" },
      { name: "Tammy", location: "Grand Island, NE", date: "June 2026", platform: "Airbnb", text: "The place was spacious and bright.  We were able to enjoy staying on site with the hot tub and pool table.   access to  many different towns and hiking places." },
      { name: "Kurt", location: "Riverton, UT", date: "February 2026", platform: "Airbnb", text: "This is a beautiful property! The beds are very comfortable and it has everything you would need for a long stay. Rheo was very responsive and addressed any questions I had. We felt right at home and enjoyed every minute we were there! Would definitely stay again!!" },
      { name: "Sebastian", date: "March 2026", platform: "Airbnb", text: "Fantastic house and fantastic location for going up to skiing or even visiting isn’t boulder. It was a great stay for me and 5 guests who had never been to Colorado before." },
      { name: "Michelle", location: "Dalton, OH", date: "June 2026", platform: "Airbnb", text: "The consensus of the group that stayed, this property would be considered again as long as the rate stayed close to where it is per night, especially considering the amount of bedrooms and available space upstairs and downstairs with another small kitchenette available. We didn’t need it this time, but could see the value in using it. Especially if there were couples in all of rooms. And lastly because the hosts were more then willing to accommodate us & have some flexibility!!" },
      { name: "Lindsey", location: "Fort Wayne, IN", date: "October 2025", platform: "Airbnb", text: "This comfortable mountain stay was a perfect base for our hiking adventure. The views were beautiful, and we felt at home. We would stay here again!" },
      { name: "Jennifer", date: "December 2025", platform: "Airbnb", text: "Beautiful home!" },
      { name: "Will", location: "The Colony, TX", date: "September 2025", platform: "Airbnb", text: "Whether it was us enjoying family dinners, watching TV next to the fire, or enjoying - hot tub sunset, this proved to be the perfect location for our group’s Labor Day Trip. Rheo was in incredibly responsive, helping us get an earlier check-in and going out of his way to ensure we had WiFi. We are forever grateful for getting a chance to stay at this gem in Rollinsville, and have even floated the idea of coming back! Thank you again." },
      { name: "Sam", location: "Rapid City, SD", date: "August 2025", platform: "Airbnb", text: "Perfect place to stay! Plenty of room, modern appliances, secluded property, amazing views. The hosts are responsive to any questions or concerns. 10/10" },
      { name: "Jennifer", location: "Austin, TX", date: "October 2024", platform: "Airbnb", text: "We loved our stay! It was everything we wanted for a quick weekend getaway to see the fall aspens - quiet, very close to Nederland and great views of the valley. The house had plenty of room for our family and was well equipped, and we loved the deck and sitting outside with our morning coffee. Very peaceful at night, and so dark we could see the Milky Way and shooting stars. The hot tub was perfect for relaxing after a long day of hiking. And the pizza place just down the road was so good (and convenient), we ate there twice. We will 100% be back again! Thank you for an incredible stay!" },
      { name: "George", location: "Denver, CO", date: "December 2024", platform: "Airbnb", text: "We stayed at Rheo's fantastic cabin for a couple days with a few friends to relax, catch up, enjoy some nature, and the cabin could not have been more perfect for our get away. It is beautifully located with superb views of the Rollins valley and Divide, peaceful and quiet, but a couple minutes walk down to Rollinsville or an easy drive to Nederland etc. The cabin itself is so comfortable, nicely laid out, extremely nicely furnished for both comfort and convenience -- the upstairs open floor plan is super gather space with couches, chairs, the kitchen and dining table all together along with a great deck. Then the bedrooms both upstairs and downstairs are nicely set off giving them a good degree of quiet and privacy. The bonus family common area downstairs and pool table are also super fun, and of course the outdoor hot tub on the lower deck is excellent. Rheo was a superb host, extremely friendly, helpful, and responsive. Loved the cabin & definitely look forward to returning!" },
      { name: "Tasnim", location: "New York, NY", date: "September 2024", platform: "Airbnb", text: "Beautiful home with a stunning view! The house is well-kept, spacious, and clean. Rheo was always available, responsive, and super helpful throughout our stay. He ensured everything from check-in to checkout was seamless and smooth. Whenever I needed him, he was just a text away. We also needed to check in a day early, and he was very flexible. I highly recommend this home. My friends and I truly loved our Colorado experience!" },
      { name: "Matt", location: "New Jersey, United States", date: "July 2025", platform: "Airbnb", text: "Our stay at Rheo’s was exactly what we wanted! The house was absolutely beautiful, comfortable and spacious. There was plenty of room, the house was very updated and offered many nice amenities. Rollinsville was a great home base for many great hikes and nice and close to Nederland. The neighborhood was great to take a walk or run around and also had a nice coffee shop/brewery and a good pizza spot! I would highly recommend Rheo’s location and I look forward to coming back again!" },
      { name: "Leslie", location: "Upper Saddle River, NJ", date: "September 2024", platform: "Airbnb", text: "This home was everything we needed it to be.  Clean, open, spacious and comfortable. There is plenty of space and a well stocked kitchen. The views are amazing. It’s the perfect setup for quality time with the family! We will definitely stay here again. Thank you!" },
      { name: "Sydney", location: "Jacksonville, FL", date: "March 2025", platform: "Airbnb", text: "We had a very nice stay! The views were stunning! The place was clean and very roomy! Host was responsive and very nice even let us get a late checkout!  We definitely recommend! We made the mistake of snowboarding in 1-2 hours away from Rollinsville. Otherwise, we had a fantastic time!" },
      { name: "Nicole", location: "San Antonio, TX", date: "January 2025", platform: "Airbnb", text: "We loved our stay in Rollinsville! The house had beautiful views (including shootings stars and a rainbow) and the passing trains were magical. The house was super close to Nederland and Eldora. We had plenty of space to spread out. Would definitely stay again!" },
      { name: "Elin", location: "Fairfield, IA", date: "July 2024", platform: "Airbnb", text: "Excellent! Better than the pics, wonderful living/dining/kitchen great room with gorgeous views, big decks, nice furniture in and out. Comfortable bedrooms. The big dining table and pool table were especially appreciated when we had family from Boulder join us for a few meals. We really enjoyed cooking in the well stocked kitchen and liked the areas for bar and coffee. Rollinsville was fun - we went to Toss Pizza twice because it was so good, and Salto in Nederland twice, too. The access road to the East Portal parking lot for the trailhead to James Peak wilderness is very close. The hiking there is fabulous. The owners use unscented laundry detergent which I hugely appreciated. All in all, this is a fantastic Airbnb and we hope to come back soon." },
      { name: "Minka", location: "Florissant, CO", date: "January 2024", platform: "Airbnb", text: "Rheo went above and beyond to accommodate us even when we hit an expected snag in our plans. He was very responsive. The place was very warm and cozy, perfect for a family vacation. We loved Toss the pizza restaurant in Rollinsville and Nederland was a cute wee mountain  town. The Train Car Coffee was cool and the homemade donuts there were awesome 😎 Eldora ski area was 12 minutes. We enjoyed snowboarding like locals this holiday season. Rheo's place was an awesome haven at the end of day! Thanks for letting us enjoy your place!!" },
      { name: "Alex", date: "May 2025", platform: "Airbnb", text: "hands down the best Airbnb we've ever stayed in. stunning lodge with tonnes of space and every amenity needed. superbly stocked, beautifully decorated, comfortable, warm, great location and view. very well organised and designed for ease of use. very much appreciated the cleanliness. clean and well-mainainted hot tub, clean BBQ.   loved the upstairs deck and view. Rollinsville a quaint and authentic community just down the drive for a drink or some food. I felt the house was very safe. insect screens on main windows. filtered and remineralised water from a well out of the tap (faucet). would definitely come back. fast response to questions." },
      { name: "Jillian", location: "Denver, CO", date: "January 2025", platform: "Airbnb", text: "The Pinehurst lodge was amazing. Very spacious, clean and cozy. I was visiting with friends during the arctic blast (-10F) and the hot tub worked great and the house stayed very warm. The location is ideal, close to Denver, beautiful views, and walking distance from the brewery, distillery and pizza spot in town.  Rheo was super responsive and came and cleared the driveway before we left. I would love to stay here again and would recommend it for anyone looking for a nice mountain getaway." },
      { name: "Sarah", location: "Omaha, NE", date: "March 2025", platform: "Airbnb", text: "Enjoyed our stay and would stay again!  Ample room for our family and would work very well for multiple families to stay.  My family enjoyed the pool table and cozy chairs.  Scenic drive to Estes and 15 minute drive to Eldora ski resort.  The view here just cannot be beat!" },
      { name: "Jordan", location: "Noblesville, IN", date: "October 2024", platform: "Airbnb", text: "Happy to have stayed at a locally owned & managed Airbnb! Great space for a family get away, great amenities, and accommodating host. Would recommend!" },
      { name: "Reece", date: "August 2024", platform: "Airbnb", text: "Great place to stay up in the mountains! Beautiful home, responsive and friendly hosts, and peaceful. Loved the pizza shop and distillery that were just a walk away! Only downside was it’s a longer drive to get to bigger towns but would definitely stay here again." },
      { name: "Grace", date: "January 2025", platform: "Airbnb", text: "Rheo is an amazing host! Very generous with his local knowledge and extremely quick to respond. The Airbnb was very comfortable and spacious, yet cozy." },
      { name: "Jordan", location: "Las Vegas, NV", date: "August 2024", platform: "Airbnb", text: "We really enjoyed this home! It wasn’t too far out of Denver but allowed for peaceful and private views. The grill cooks great steaks! We’d recommend Toss Pizza and all of the breweries nearby!" },
      { name: "Christopher", date: "July 2025", platform: "Airbnb", text: "Beautiful location and an amazing view! Driveway was a little steep with a 20 foot trailer but doable for sure. The amenities such as the hot tub and garage were exceptional!" },
      { name: "Becka", date: "August 2025", platform: "Airbnb", text: "Very comfortable and included all needed amenities! Definitely would come back!" },
      { name: "John", location: "Oklahoma City, OK", date: "July 2024", platform: "Airbnb", text: "Great cabin in the mountains. Super spacious for multiple people with a great kitchen and all the commodities. Will be visiting again in the future." },
      { name: "Josh", location: "Austin, TX", date: "May 2025", platform: "Airbnb", text: "Great place! Loved the hot tub, local pizza shop, pool table, and layout of the house." },
      { name: "Dillon", location: "Quincy, FL", date: "February 2025", platform: "Airbnb", text: "the house was stunning along with the area that it's located in, 10/10 would recommend especially for larger groups it's very spacious and the hot tub is always a nice plus" },
      { name: "Morgan", date: "July 2024", platform: "Airbnb", text: "Awesome place with a killer view. We enjoyed our stay and enjoyed having everything we needed to cook meals." },
      { name: "Jennifer", location: "Deshler, NE", date: "May 2024", platform: "Airbnb", text: "Beautiful home and gorgeous mountain views. Highly reccommend." },
      { name: "Jamal", location: "Nashville, TN", date: "April 2025", platform: "Airbnb", text: "Beautiful property. Hosts are very friendly and accommodating." },
      { name: "Carla", location: "West Point, UT", date: "August 2025", platform: "Airbnb", text: "This has become a family favorite! Great hosts and a beautiful getaway!" },
      { name: "Joe", location: "Cumming, GA", date: "February 2025", platform: "Airbnb", text: "Had a blast everything was top notch !!" },
      { name: "Shane", location: "New Palestine, IN", date: "July 2025", platform: "Airbnb", text: "Wonderful place wonderful view everything about this place is heaven on earth thank you for the opportunity to stay at this wonderful home" },
      { name: "Wade", location: "Hamilton, IL", date: "July 2024", platform: "Airbnb", text: "Place was very clean and tidy. Location was remote but honestly equal distances to Denver, Estes Park, RMNP, and other National Forests to the south. Rheo was a very responsive host. The hottub and decks were well used with our group! PS: The pizza place (Toss) at the bottom of the hill is fantastic!" },
      { name: "Frank", date: "March 2025", platform: "Airbnb", text: "4 Army vets looking for a peaceful weekend and that’s exactly what we got. Didn’t want to leave. Not once did we need or want something that wasn’t readily available. Highly recommend." },
      { name: "Taufeek", location: "Des Moines, IA", date: "April 2025", platform: "Airbnb", text: "Great stay!" },
      { name: "Angele", location: "Mandeville, LA", date: "March 2025", platform: "Airbnb", text: "The place was so spacious, comfortable and had everything we needed" },
      { name: "Marquel", location: "San Antonio, TX", date: "March 2025", platform: "Airbnb", text: "We had a great family trip and were really close to skiing st Eldora!" },
      { name: "Amy", location: "Denver, CO", date: "February 2025", platform: "Airbnb", text: "Great views!" },
      { name: "Carson", location: "McKinney, TX", date: "May 2025", platform: "Airbnb", text: "Awesome place to visit" },
      { name: "Cole", date: "September 2024", platform: "Airbnb", text: "Pictures do not do this place justice!" },
      { name: "Sally", date: "June 2025", platform: "Airbnb", text: "Good stay" },
      { name: "Lorinda B.", date: "September 2026", platform: "Vrbo", text: "The views were wonderful. Really enjoyed the changing of the leaves and all the colors!" },
      { name: "Angie Z.", date: "September 2026", platform: "Vrbo", text: "Cute house..loved the location and views off the deck. The hot tub was a nice bonus after spending the day hiking. We also enjoyed visiting the local businesses it was a super fun vibe." },
      { name: "Michael B.", date: "August 2026", platform: "Vrbo", text: "Lovely house, 3 full bath rooms, the view was fantastic with a view of the mountains, the setup was good (in terms of kitchen pots and pans, kitchen knives, cutlery, cutting knives, etc).  Also really liked the area; stunning scenery and Nederland, which is the closest town of any size, was great.  We had two meals, both of which were excellent and the whole hippie/quirky/outdoor people vibe was inviting." },
      { name: "Andre L.", date: "August 2026", platform: "Vrbo", text: "Really nice place to stay with everything you need. Save door code on your phone. I had no service and couldn’t log into my emails to get it. Would definitely recommend staying there." },
      { name: "David G.", date: "August 2026", platform: "Vrbo", text: "We thoroughly enjoyed our stay.  The house itself was wonderful and the views were fantastic.  There were plenty of amenities within the house with a very well stocked kitchen.   We made good use of the main living area / kitchen along with both the upper deck and the hot tub on the lower deck.  There was plenty of room for all of us, lots of beds, and nice to have 3 full bathrooms.   The location was perfect with short drives to hiking and to Nederland.   The hosts were very responsive prior to and during the stay." },
      { name: "Cindy M.", date: "September 2026", platform: "Vrbo", text: "This is a wonderful place to stay in the cute, charming village of Rollinsville.  A nice location, within driving distance of Denver, Boulder, and Estes. The lodge accommodates several couples or bigger/generational families well.  The home is exactly as online pics show. We didn’t take advantage of the hot tub, but we LOVED the decks and the views. The hosts were very communicative and responsive to every question and have really tried to think of providing anything you could ever need! Beautiful main level! Well stocked kitchens upstairs and downstairs. Lots of activities to keep everyone entertained while “home “.   Comfortable furniture (upstairs beds!) and all the comforts of home! Highly Recommend!" },
    ],
  },

  linkCards: [
    {
      title: "Things to Do",
      body: "Hikes, fishing spots, local dining, and history around Rollinsville, all in one guide.",
      href: "/things-to-do",
      cta: "Explore the area →",
    },
    {
      title: "Your Hosts",
      body: "We're a Family-hosted Vacation Rental. Our family is a group of passionate travelers and outdoor enthusiasts, who wish to share with you our perfect mountain escape.",
      href: "/about",
      cta: "Meet us →",
      showHostPhotos: true,
    },
  ],

  // Replace the placeholder names, bios, and photos with the real hosts.
  hosts: [
    {
      name: "Host name",
      role: "Host",
      bio: "Placeholder: a few words about this host and what they love about the lodge.",
      photo: withBase("/photos/host-photos/rheo.jpeg"),
      alt: "Portrait of host 1",
    },
    {
      name: "Host name",
      role: "Host",
      bio: "Placeholder: a few words about this host and what they love about the lodge.",
      photo: withBase("/photos/host-photos/lisa.jpg"),
      alt: "Portrait of host 2",
    },
  ],

  

  // About page: two family photos, the intro, each owner's profile, and a closing note.
  about: {
    familyPhotos: [
      { src: withBase("/photos/host-photos/family-between-bolders.webp"), alt: "Pinehurst Lodge owners, photo 1" },
      { src: withBase("/photos/host-photos/family-no-shea-skiing-brett.webp"), alt: "Pinehurst Lodge owners, photo 2" },
    ],
    intro: [
      "Welcome to our home! We are the Pinehurst Lodge owners (Kraig, Lisa, Parker, Rheo, Keegan, and Shea), a group of passionate travelers, outdoor enthusiasts, and your dedicated short-term rental hosts. While our family is spread across North Carolina and Colorado, we come together to ensure you have an unforgettable stay. Here is a little bit about who we are:",
    ],
    members: [
      {
        name: "Rheo & Keegan",
        role: "Your Local Hosts",
        bio: "Rheo is a software developer and avid rock climber and skier who manages our Rollinsville property. Keegan is a freelance coder and tech-whiz who keeps our Airbnb operations running smoothly. When they aren't working, they are out exploring the mountain trails.",
      },
      {
        name: "Parker",
        bio: "An aspiring commercial pilot currently navigating flight school. When not studying weather patterns or up in the air, you can find Parker fishing, skiing, and hiking.",
      },
      {
        name: "Shea",
        bio: "Shea works as a GIS Analyst in urban planning. He balances his career with raising a rambunctious pup named Kerrigan and traveling for both work and family trips.",
      },
      {
        name: "Kraig & Lisa",
        role: "Mom & Dad",
        bio: "Lisa is a local educator who enjoys gardening, hiking and the arts. Kraig is happily retired. Both are avid skiers and globetrotters who love splitting time between world travel and the mountains of Colorado.",
      },
    ],
    closing:
      "As a family of adventurers, we know exactly what makes a trip special: comfort, local insights, and seamless hospitality. We are thrilled to host you and hope our home serves as the perfect launchpad for your own big adventures!",
  },

  // Things to Do index and area guide copy. Categories shown as filter chips when articles exist.
  thingsToDo: {
    heading: "Your local's guide to the area around Pinehurst Mtn Lodge",
    intro: "Trails, lakes, local food, and history around Rollinsville, written by the lodge team.",
    categories: ["Local Guide", "Hiking", "Fishing", "Food & Drink", "History & Culture", "Crafts", "Videos"],
  },
  // Primary booking button, shown as its own call to action.
  directBooking: {
    label: "Book Direct",
    href: "https://checkout.lodgify.com/pinehurstmtnlodge/846898/reservation?currency=USD&adults=1",
  },
  bookingLinks: [
    { label: "Book on Airbnb", href: "https://www.airbnb.com/rooms/1043540721907281297" },
    { label: "Book on Vrbo", href: "https://www.vrbo.com/5114679" },
  ],
};

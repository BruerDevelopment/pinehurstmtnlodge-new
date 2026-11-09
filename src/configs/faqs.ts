// FAQ and house rules content. Each answer is a list of blocks:
// a string is a paragraph, and an array of strings is a bulleted list.
export type Block = string | string[];

export type FaqItem = { question: string; answer: Block[] };
export type FaqGroup = { title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Check-in & Arrival Details",
    items: [
      {
        question: "What are the check-in and arrival instructions?",
        answer: [
          "Welcome to Pinehurst Lodge!",
          "Property is located in Rollinsville, CO 80474.",
          "Check-in is at 4:00 PM or anytime after.",
          "Check-out is 12:00 Noon or anytime before.",
          [
            'To lock the door from the outside, hold down the "#" key.',
            "The garage is accessible from inside using the button near the garage door.",
          ],
        ],
      },
      {
        question: "Do I need a 4WD or AWD vehicle in winter? Are snow chains required?",
        answer: [
          "Rollinsville is in the mountains, and the roads are steep. Winter conditions can change quickly, especially during and after snowfall.",
          [
            "We recommend an all-wheel-drive (AWD) or four-wheel-drive (4WD) vehicle with good winter tires for winter stays, especially if you plan to drive up the steep sections.",
            "If you are arriving in a two-wheel-drive vehicle, please check road conditions before you leave and plan extra time.",
            "Check current road and weather conditions before you travel, and carry snow chains if you have them.",
          ],
          "There is a less steep way in from the top of Rollinsville: the other end of Old Stagecoach Road. If you are unsure of the route, use it or ask us before you arrive.",
        ],
      },
      {
        question: "Is the lodge accessible? Are there stairs?",
        answer: [
          "The main entrance has a small porch with two steps and a handrail.",
          [
            "The top floor can be used for the whole stay, with no further stairs. It has two bedrooms, the upstairs bathrooms, the kitchen, and the living room.",
            "The downstairs bedrooms and bathroom are reached by a flight of stairs.",
            "The hot tub is on the downstairs deck and requires one flight of stairs.",
          ],
          "If you are traveling with someone who has mobility needs, please contact us before you book so we can answer any specific questions about the layout.",
        ],
      },
      {
        question: "Is there cell service and reliable internet at the lodge?",
        answer: [
          "Cell service is available at the lodge, but it can be spotty in some spots and during bad weather.",
          "The lodge has stable Wi-Fi that runs on a normal service connection, so you can rely on it for video calls, streaming, and work. See the Wi-Fi question below for how to connect.",
          "We recommend downloading any maps, tickets, or reservations you need before you head up the mountain, in case signal drops.",
        ],
      },
      {
        question: "Where is the Wi-Fi password?",
        answer: [
          "You can scan one of the physical QR codes located in the upstairs living room for instant connection.",
        ],
      },
      {
        question: "What are the check-in and check-out times?",
        answer: [["Check-in: 4:00 PM", "Check-out: 12:00 PM (noon)"]],
      },
      {
        question: "What is the maximum total guest occupancy allowed?",
        answer: [
          "Pinehurst Lodge comfortably sleeps a maximum of 6 guests.",
          "Our septic system is not designed to handle large groups, so parties and unauthorized gatherings are strictly prohibited out of respect for our neighbors and system infrastructure.",
        ],
      },
      {
        question: "What is the pet policy?",
        answer: ["Pets are not currently allowed at the lodge."],
      },
      {
        question: "What is the cancellation and refund policy?",
        answer: [
          [
            "A 50% payment is due at the time of booking.",
            "The remaining balance is due 7 days before arrival.",
            "All paid prepayments are completely non-refundable.",
            "No security deposit is required.",
          ],
        ],
      },
    ],
  },
  {
    title: "Activities & Amenity Rules",
    items: [
      {
        question: "What are the rules for using the hot tub?",
        answer: [
          "To keep the 7-person Arctic Spas hot tub clean and safe, please follow these guidelines:",
          [
            "No glass is allowed in or around the hot tub area at any time.",
            "Maximum occupancy is 6 people at one time.",
            "Please shower before entering to keep the water clean and shower after use to rinse off pool chemicals.",
            "Always unlatch the side clips before lifting the cover.",
            "Re-latch the clips immediately after use to prevent wind damage.",
            "Do not sit or stand on the hot tub cover.",
            "Supervise all children closely.",
            "Do not use the hot tub if intoxicated.",
            "Consult a physician before use if pregnant.",
          ],
        ],
      },
      {
        question: "How should trash and wildlife safety be handled?",
        answer: [
          [
            "Place all trash inside the three large receptacles located in the garage.",
            'To keep the property "Bear Safe" and deter local mountain wildlife, you must keep the garage door closed at all times when not actively in use.',
          ],
        ],
      },
      {
        question: "How do I operate the indoor wood-burning fireplace?",
        answer: [
          "Our unique indoor fireplace is engineered to gently heat the home rather than provide a roaring fire. Please follow these instructions:",
          [
            "Use only very dry wood.",
            "Burn only 1 or 2 logs at a time.",
            "Completely open the chimney door by pulling the handle on the back of the fireplace before starting your fire.",
            "Keep the chimney door closed when the fireplace is not in use to prevent outdoor drafts.",
          ],
        ],
      },
      {
        question: "Is firewood provided?",
        answer: [
          "Yes! Firewood is provided for the indoor wood-burning fireplace.",
          "There is also a separate propane fireplace available for your enjoyment outside on the deck.",
        ],
      },
      {
        question: "What are the kitchen and check-out cleanup expectations?",
        answer: [
          "Guests are welcome to use any cooking utensils, equipment, or food items in the kitchen.",
          "Before your 12:00 PM check-out, it would be helpful to:",
          [
            "Load and run the dishwasher.",
            "Put any remaining dishes in the sink.",
            "Brush the outdoor grill after use.",
            "Place the protective covers back onto the deck grill and outdoor couch.",
          ],
        ],
      },
      {
        question: "How do I manage the heating units during my stay and at check-out?",
        answer: [
          "The lodge features several heating systems:",
          [
            "Primary heating units upstairs (behind the dining table) and downstairs (in the living room).",
            "Wall-thermostat baseboard heating in the downstairs bedrooms.",
            "Space heaters in the upstairs bedrooms.",
          ],
          "Before checking out, please:",
          [
            "Turn the living room and bathroom heaters down to low.",
            "Turn off the downstairs bedroom baseboard heat completely.",
            "Unplug all portable space heaters.",
          ],
        ],
      },
      {
        question: "Are there designated quiet hours?",
        answer: [
          "Yes. To respect our mountain neighbors, please keep all indoor and outdoor noise to a minimum after 11:00 PM.",
        ],
      },
      {
        question: "What parking is available?",
        answer: [
          "The lodge features an enclosed two-car garage capable of parking two large vehicles indoors to keep cars and gear out of the snow. There is also additional space for up to 4 vehicles. No street parking is allowed in Gilpin County.",
          "As a reminder, the garage door must remain shut at all times to keep out local wildlife.",
        ],
      },
    ],
  },
  {
    title: "Local Attractions & Dining",
    items: [
      {
        question: "What ski resorts and outdoor activities are nearby?",
        answer: [
          "Pinehurst Lodge offers easy access to numerous mountain destinations.",
          "Skiing:",
          [
            "Eldora Mountain Resort – approximately 15 minutes away.",
            "Winter Park",
            "Breckenridge",
            "Arapahoe Basin",
            "Keystone",
            "Copper Mountain",
          ],
          "Hiking & State Parks:",
          [
            "Mud Lake",
            "Caribou Ranch",
            "James Peak",
            "Golden Gate Canyon State Park",
            "Rocky Mountain National Park – approximately 33 miles north.",
          ],
          "You can also walk straight out the front door to explore the surrounding mountain area.",
          "Other Attractions:",
          ["Red Rocks Park & Amphitheatre – approximately 36 miles away.", "Black Hawk – nearby historic gaming town."],
        ],
      },
      {
        question: "Where can I buy groceries nearby?",
        answer: [
          "The closest grocery options are in Nederland: \"The Market at Nederland\" and the \"Mountain People's Co-op\". Hours change, so please check online before going.",
          "For a full grocery trip, we recommend stocking up in Boulder or Denver before you drive up the mountain. Larger stores are much easier to find there, and it saves a trip on steep roads.",
        ],
      },
      {
        question: "Where can I find souvenirs and gifts nearby?",
        answer: [
          "There are a few shops within a short drive:",
          [
            "Central City: the Central City Opera gift shop, at 120 Eureka Street, sells opera memorabilia and unique gifts. Hours vary with the festival and performance schedule.",
            "Central City and Black Hawk: The Emporium carries Irish and Celtic gifts, and its antiques and local history books cover the area's mining and pioneer past.",
            "Nederland: local artists make handmade pieces, and the Carousel of Happiness is in the Nederland shopping center.",
          ],
          "Rollinsville itself is best known for food and drink, including Gold Dirt Distillery.",
        ],
      },
      {
        question: "What other hiking and outdoor activities are close by?",
        answer: [
          "Pinehurst Lodge is a good base for more than the hikes listed above.",
          [
            "Fishing: our [fishing guide](/area-guide/articles/5_best_fishing_rollinsville) covers the top five spots, from creeks to high mountain lakes, with tips on seasons and gear.",
            "Hiking: our [Top 5 Hikes guide](/area-guide/articles/5_best_hikes_rollinsville) covers Mud Lake, Caribou Ranch, the West Magnolia Loop, and more.",
            "Scrapbooking and crafting: our [craft supplies guide](/area-guide/articles/guides/scrapbooking_supplies_rollinsville) lists craft stores in the area, from the closest shops to the stores on the drive from Denver Airport.",
            "The [Things to Do page](/things-to-do) has the full list of guides, including dining and local history.",
          ],
        ],
      },
      {
        question: "Are there dining options within walking distance?",
        answer: [
          "Yes! There are local dining and entertainment options within walking distance.",
          [
            "[Toss Wood Fired Pizza](https://www.tosswoodfired.com/): Located on Main Street in Rollinsville, serving pizzas, fresh salads, and local drinks.",
            "[Gold Dirt Distillery](https://www.golddirtdistillery.com/): Located just down the street, open Wednesday through Sunday, crafting quality spirits and specialty cocktails.",
            "Howlin Wind Brewing & Blending: A Rollinsville neighborhood craft brewery where classical, innovative and funky beers are brought to life in this local community gathering space.",
          ],
        ],
      },
    ],
  },
];

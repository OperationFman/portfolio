import { Advisory } from "./../travel/types";
import { TravelVideoMetaData } from "../travel/types";
import { title } from "process";

export const publicCDNVideoUrl = "https://d3atatnx15erez.cloudfront.net/";
export const insecureRestrictionKey = "adventuretime";
export const scorecardColorsPrimary = ["#ffeb3b", "#2781e7", "#cf32eb"];
export const scorecardColorsSecondary = [
	"rgb(255, 232, 59)",
	"rgb(39 129 231)",
	"rgb(206 147 216)",
];

export const travelVideoMetaData: TravelVideoMetaData[] = [
	{
		title: "China",
		year: 2017,
		hostedLink: "china",
		link: "china",
		backupLink:
			"https://drive.google.com/drive/folders/1aeSnxyDpaxbATvXgPq0CGKsVMvzYYCIp?usp=sharing",
		restricted: false,
		extras: {
			countries: ["China"],
			scorecard: {
				affordability: [9],
				food: [2],
				hospitality: [5],
				safety: [8],
				accessibility: [3],
				video: [1],
			},
			finalScore: 4,
			summary: [
				"I spent a semester studying at Shaoguan University, we traveled the south from Guangzhou to Changsha, cultivating my initial love for travel.",
				"China is one of those few countries which are absolutely enormous, you could travel it for years and still barely scratch the surface.",
				"Each province boasts a unique history and culture spanning millennia. However, I found food quality concerning and the Great Firewall significantly hindered basic tasks like travel planning.",
			],
			challenges: [
				"Many hotels refuse to check foreigners in, often based on skin color",
				"Google and Facebook services are blocked by the government which includes Gmail, Play Store, Maps, Instagram and Youtube",
			],
			dos: [
				"Install a VPN on your phone before arriving to access Google & Facebook services",
			],
			donts: [
				"Visit only major (Tier 1) cities",
				"Attempt a 'hookup', Chinese people generally have strong traditional/conservative values",
			],
			advice: {
				travelLength: "1 - 3 Months",
				currency: "CN¥",
				season: "April - October",
				dailyBudget: "¥300 ($40 USD)",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/asia/china",
				advice: Advisory.Level2,
			},
			music: [
				{
					title: "Lay It On Me - Vance Joy",
					link: "https://music.youtube.com/watch?v=pbMWNMB2u7Y&si=ZMJv0TGBG9bXV3Oz",
				},
				{
					title: "La Da Dee - Cody Simpson",
					link: "https://music.youtube.com/watch?v=Qo9YPK4-IEQ&si=lSap8-n8r3vzOAcO",
				},
				{
					title: "I'm Born To Run - American Authors",
					link: "https://music.youtube.com/watch?v=TTvWhWZPrZs&si=o5ayxDdnHZs73ikA",
				},
				{
					title: "Chinatown - Liam Gallagher",
					link: "https://music.youtube.com/watch?v=1yh8sp12U58&si=n1nISGoMYRatztdb",
				},
				{
					title: "Pandora - James Horner AVATAR",
					link: "https://music.youtube.com/watch?v=qGV7o3wiadg&si=QmF5VQxVok9P1_oP",
				},
				{
					title: "Me and Juliet Down By The Schoolyard - Paul Simon",
					link: "https://music.youtube.com/watch?v=1cs6U097kNQ&si=ZMXN6ZM4X83LWb4H",
				},
			],
			extraLinks: [
				{
					title: "38 countries can now visit China visa-free",
					link: "https://www.euronews.com/travel/2024/11/22/china-aims-to-boost-tourism-by-giving-visa-free-entry-to-these-five-european-countries",
				},
			],
			extraVideos: [
				{
					title: "New Colombo Plan Official Presentation",
					hostedLink: "chinancp",
				},
				{
					title: "Bloopers and Funny Moments",
					hostedLink: "chinabloopers",
				},
			],
		},
	},
	{
		title: "Nepal",
		year: 2018,
		hostedLink: "nepal",
		link: "nepal",
		backupLink:
			"https://drive.google.com/drive/folders/1o683sYupSphrD9cv-SHIXUILJ_NJNy1W?usp=sharing",
		restricted: false,
	},
	{
		title: "Indonesia",
		year: 2019,
		hostedLink: "indonesia",
		link: "indonesia",
		backupLink:
			"https://drive.google.com/drive/folders/1xwYqAdgA8zi0T_mJ2ulkJ9iHIRlxRz8n?usp=sharing",
		restricted: true,
	},
	{
		title: "Malaysia & Singapore",
		year: 2019,
		hostedLink: "malaysiasingapore",
		link: "malaysia-singapore",
		backupLink:
			"https://drive.google.com/drive/folders/1PZPEkze3XtwuziX6-Caz3x5M3C8uxKsU?usp=sharing",
		restricted: false,
		extras: {
			countries: ["Malaysia", "Singapore"],
			scorecard: {
				affordability: [7, 4],
				food: [4, 7],
				hospitality: [5, 5],
				safety: [7, 10],
				accessibility: [7, 10],
				video: [3, 3],
			},
			finalScore: 4,
			summary: [
				"Malaysia is a simple yet multi-cultural destination blending Chinese, Indian and Arabic cultures all into one fairly unassuming package.",
				"Singapore is an impressive hub of commerce and efficiency you don,t see often. It is what Hong Kong wishes it still was and continues to thrive and attracts the best minds from asia into one concentrated pinhead.",
				"We had a very short vacation but we made the most of it by drinking, hanging out and checking out the local attractions from the rainbow steps in Kuala Lumpur to the Gardens By the Bay.",
			],
			challenges: [
				"Malaysia is fairly boring over all, nothing really happens so it's good to travel fast and bring some buddies.",
			],
			donts: ["Chewing gum publically is illegal in Singapore."],
			advice: {
				travelLength: "Malaysia: 1 week / Singapore: 1 week",
				currency: "Malaysia Ringit MYR / Singapore dollar SGD",
				season: "February - April",
				dailyBudget: "Malaysia: $30usd / Singapore $60-100usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/Asia",
				advice: Advisory.Level1,
			},
			music: [
				{
					title: "Thrills - Space Primates",
					link: "https://music.youtube.com/watch?v=UuSepF0OT9E&si=gc-Yq-yP-vYJ-mjw",
				},
				{
					title: "Sleeping At Night - Caught a Ghost",
					link: "https://music.youtube.com/watch?v=uH7jG5aI82g&si=Rk59Itgv3KN8Gw4U",
				},
				{
					title: "Sleepless Nights - Ayokay",
					link: "https://music.youtube.com/watch?v=uH7jG5aI82g&si=Cnc7tF2cWqscK9-1",
				},
				{
					title: "Open My Mouth - Kiiara",
					link: "https://music.youtube.com/watch?v=GrioYGaPRUM&si=qzP9xc_2eDUzuJjN",
				},
				{
					title: "High - Sir Sly",
					link: "https://music.youtube.com/watch?v=Zrck6SV6T4M&si=mmf7j7jw7Ei4tk_o",
				},
				{
					title: "Vodka Nation - DJ Blyatman",
					link: "https://music.youtube.com/watch?v=rI_SOnt4KwY&si=ynSECMNdzLVZy9bo",
				},
			],
			extraVideos: [
				{
					title: "Aengus Bowers - Registered Shape Cutter",
					hostedLink: "registeredShapeCutter",
				},
			],
		},
	},
	{
		title: "New Zealand",
		year: 2019,
		hostedLink: "newzealand",
		link: "new-zealand",
		backupLink:
			"https://drive.google.com/drive/folders/1q-5yyEWifu1rdyHtk5leUm_JDaIoEpFO?usp=sharing",
		restricted: false,
	},
	{
		title: "Japan",
		year: 2020,
		hostedLink: "japan",
		link: "japan",
		backupLink:
			"https://drive.google.com/drive/folders/16ekQGT90_76BCrX_mbiN3JDhnKrMG1-2?usp=sharing",
		restricted: false,
	},
	{
		title: "Australia",
		year: 2021,
		hostedLink: "australia",
		link: "australia",
		restricted: false,
		instagramLinks: [
			"https://www.instagram.com/p/C-ccDuVToNn/?hl=en&img_index=1",
		],
	},
	{
		title: "Thailand",
		year: 2022,
		hostedLink: "thailand",
		link: "thailand",
		backupLink:
			"https://drive.google.com/drive/folders/1MMl5yLAUNf9t-nBdIVktxjwQbfo385ZV?usp=sharing",
		restricted: false,
	},
	{
		title: "South Korea",
		year: 2022,
		hostedLink: "southkorea",
		link: "south-korea",
		backupLink:
			"https://drive.google.com/drive/folders/1-qXArc3DWxqAKXxQfIAWwwtha53Qcn0O?usp=sharing",
		restricted: true,
	},
	{
		title: "United Arab Emirates",
		year: 2022,
		hostedLink: "uae",
		link: "uae",
		backupLink:
			"https://drive.google.com/drive/folders/1u6-BtdvLQ8E-azD-iOX8b7aM1ngCuiMH?usp=sharing",
		restricted: true,
	},
	{
		title: "Fiji",
		year: 2022,
		hostedLink: "fiji",
		link: "fiji",
		backupLink:
			"https://drive.google.com/drive/folders/1lDzBYAhye2L7cbIM8hsbkKXxNSsyeDEH?usp=sharing",
		restricted: true,
	},
	{
		title: "Cambodia, Laos and Vietnam",
		year: 2023,
		hostedLink: "cambodialaosvietnam",
		link: "cambodia-laos-vietnam",
		backupLink:
			"https://drive.google.com/drive/folders/1hSYkYe8KtrLiVZ2CoGtXjDogpRE4gakY?usp=sharing",
		restricted: true,
		reelLinks: ["https://www.instagram.com/reel/Cy-7c3yLFuE/"],
		instagramLinks: [
			"https://www.instagram.com/p/CpfKGORr12k/?img_index=1",
			"https://www.instagram.com/p/Cph3kEdLXFh/?img_index=1",
			"https://www.instagram.com/p/CpolhlDLS87/?img_index=1",
			"https://www.instagram.com/p/CpvKryKr-qx/?img_index=1",
			"https://www.instagram.com/p/Cpxt4mHJiwQ/?img_index=1",
			"https://www.instagram.com/p/Cp23tBbPq61/?img_index=1",
			"https://www.instagram.com/p/CqD9tCMBNH4/?img_index=1",
			"https://www.instagram.com/p/CqJB8WLhyXZ/?img_index=1",
		],
	},
	{
		title: "Taiwan, Hong Kong and Macau",
		year: 2023,
		hostedLink: "taiwanhongkongmacau",
		link: "taiwan-hong-kong-macau",
		backupLink:
			"https://drive.google.com/drive/folders/1hLeWb-uJVG9k68lyrJZ1ambmJcBgAFOA?usp=sharing",
		restricted: false,
		reelLinks: ["https://www.instagram.com/reel/CzTjUurL-5y/"],
		instagramLinks: [
			"https://www.instagram.com/p/CqiBx-QLGMf/?img_index=1",
			"https://www.instagram.com/p/CqkX4dSLqCk/?img_index=1",
			"https://www.instagram.com/p/CqqBXJaJep-/?img_index=1",
			"https://www.instagram.com/p/CqyWFoph6Jq/?img_index=1",
			"https://www.instagram.com/p/Cq0pE9FJtcd/?img_index=1",
			"https://www.instagram.com/p/Cq0vJz4v5Tl/?img_index=1",
			"https://www.instagram.com/p/Cq3MLbyJlQd/?img_index=1",
			"https://www.instagram.com/p/Cq8lp99BCD3/?img_index=1",
			"https://www.instagram.com/p/Cq-ILXzrnjp/?img_index=1",
		],
	},
	{
		title: "India",
		year: 2023,
		hostedLink: "india",
		link: "india",
		backupLink:
			"https://drive.google.com/drive/folders/19qhQX8VIgFv8KlzSQCSH8FuyI6S9Nj52?usp=sharing",
		restricted: false,
		reelLinks: ["https://www.instagram.com/reel/C2uwpY2LGcS/"],
		instagramLinks: [
			"https://www.instagram.com/p/CrGLo47LBNk/?img_index=1",
			"https://www.instagram.com/p/CrK67cDLP-r/?img_index=1",
			"https://www.instagram.com/p/CrQ5ycepdzf/?img_index=1",
			"https://www.instagram.com/p/CrVxYQFLf6t/?img_index=1",
			"https://www.instagram.com/p/CrbOJJRs4nj/?img_index=1",
			"https://www.instagram.com/p/Crd6nDPvlww/?img_index=1",
			"https://www.instagram.com/p/CrklzD8rMhX/?img_index=1",
			"https://www.instagram.com/p/CroDXezM3-G/?img_index=1",
			"https://www.instagram.com/p/CrwEXR7y_k8/?img_index=1",
			"https://www.instagram.com/p/Cr5hNUxL-V8/?img_index=1",
			"https://www.instagram.com/p/Cr884JABum8/?img_index=1",
			"https://www.instagram.com/p/Cr_1nIPhkw1/?img_index=1",
		],
	},
	{
		title: "Oman",
		year: 2023,
		hostedLink: "oman",
		link: "oman",
		backupLink:
			"https://drive.google.com/drive/folders/1mdXFgZrV2yYX82CafSYsISD47124teHg?usp=sharing",
		restricted: true,
		reelLinks: ["https://www.instagram.com/reel/C4DkLuqJ3AR/"],
		instagramLinks: [
			"https://www.instagram.com/p/CsHbTJ8h78G/?img_index=1",
			"https://www.instagram.com/p/CsNvb55M2t8/?img_index=1",
			"https://www.instagram.com/p/CsTFmJHMw5w/?img_index=1",
		],
	},
	{
		title: "Kuwait and Iraqi Kurdistan",
		year: 2023,
		hostedLink: "kuwaitiraq",
		link: "kuwait-iraqi-kurdistan",
		backupLink:
			"https://drive.google.com/drive/folders/13wel5RbzFYBiv4QTA_zgZCtGC07ZrSix?usp=sharing",
		restricted: true,
		reelLinks: ["https://www.instagram.com/reel/C5OA27DJ5Tx/"],
		instagramLinks: [
			"https://www.instagram.com/p/CsW4lzgL_Ec/?img_index=1",
			"https://www.instagram.com/p/CseTQptLmaT/?img_index=1",
			"https://www.instagram.com/p/CshQp_fr_fb/?img_index=1",
			"https://www.instagram.com/p/Csjuc4SrOXF/?img_index=1",
			"https://www.instagram.com/p/CsrDDjhv8s4/?img_index=1",
		],
	},
	{
		title: "Jordan",
		year: 2023,
		hostedLink: "jordan",
		link: "jordan",
		backupLink:
			"https://drive.google.com/drive/folders/1S3pw5ULJD0MWQ_Ro-B9EHt1bdvAGy-S_?usp=sharing",
		restricted: false,
		reelLinks: ["https://www.instagram.com/reel/C750R5uphGc/"],
		instagramLinks: [
			"https://www.instagram.com/p/Csv3RWrszXo/?img_index=1",
			"https://www.instagram.com/p/Cs37edtMV5K/?img_index=1",
			"https://www.instagram.com/p/Cs58X-UpzwX/?img_index=1",
			"https://www.instagram.com/p/Cs5-RJvpXRn/?img_index=1",
			"https://www.instagram.com/p/Cs8X9kSLP7_/?img_index=1",
			"https://www.instagram.com/p/Cs_0-aRPvG5/?img_index=1",
		],
	},
	{
		title: "Saudi Arabia and Bahrain",
		year: 2023,
		hostedLink: "saudiarabia",
		link: "saudi-arabia-bahrain",
		backupLink:
			"https://drive.google.com/drive/folders/1w-woly9RgbllBBRgjj79PMf2RK-_vKzQ?usp=sharing",
		restricted: true,
		reelLinks: ["https://www.instagram.com/reel/C8L4ml_JkSf/"],
		instagramLinks: [
			"https://www.instagram.com/p/CtB7kMjrehP/?img_index=1",
			"https://www.instagram.com/p/CtMUbqlprRL/?img_index=1",
			"https://www.instagram.com/p/CtRlrampitt/?img_index=1",
		],
		extras: {
			countries: ["Saudi Arabia", "Bahrain"],
			scorecard: {
				affordability: [1, 2],
				food: [1, 2],
				hospitality: [1, 4],
				safety: [4, 6],
				accessibility: [1, 2],
				video: [5, 5],
			},
			finalScore: 1,
			summary: [
				"Saudi Arabia, what a mess. I've never really disliked a country let alone hated one but Arabia somehow managed to be one of the worst weeks of travel in my life.",
				"From the local men who openly beat their wives to having a rock thrown at my head for simply whistling while I walked down the highway (Apparently I was noise polluting the 8 lane freeway). I've never been to a place so hostile and closed off.",
				"I'm still not sure if I liked Bahrain or not, but compared to Saudi it was like paradise. Here at least you're allowed to drink, theirs fun things to do and people actually follow through when they say they'll do something. It's a cute little petro-state where fun can be found, compared to it's neighbors.",
			],
			challenges: ["Everything in Saudi is a challenge"],
			donts: [
				"Book anything, they will just cancel 10 minutes before it's supposed to happen.",
				"Visit any tourist attractions, they'll most likely just be closed even if it's a lone rock in a desert. Most sites aren't really real and haven't been built yet.",
				"Be adventurous, someone will tell you off. You're not even allowed to walk anti-clockwise around a building.",
				"Expect to get around via taxi, they will just drop you wherever they want if they even come to pick you up in the first place.",
				"Rely on your hotels even being real. Most exist just to route you to a much more expensive one that's the only choice in the area, ie Al Ula",
				"Rely on information from Google Maps, most data like opening hours/days or links are just broken or lies.",
				"Eat the food, it's disgusting unflavored slop.",
				"Take the trains, the windows are completely frosted so you're basically in a submarine",
				"Hike in the desert, it's super easy to get lost even if you can read the stars.",
				"Even go. The Visa alone was $250.",
			],
			advice: {
				travelLength: "Saudi Arabia: 0 days / Bahrain: 2 days",
				currency: "Saudi Riyal SAR / Bahraini Dinar BHD",
				season: "November - February",
				dailyBudget: "$200usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/Middle%20East",
				advice: Advisory.Level2,
			},
			music: [
				{
					title: "People I Don't Like - UPSAHL",
					link: "https://music.youtube.com/watch?v=EGne6NU1rCc&si=VmokutUeeFlEXM2u",
				},
				{
					title: "Don't Stare At the Sun - Bad Lip Reading",
					link: "https://music.youtube.com/watch?v=kJK-KGbAk_Q&si=w24psaLAakyHXCsC",
				},

				{
					title: "The Fox - Ylvis",
					link: "https://music.youtube.com/watch?v=W20gcM6_UtQ&si=sAzxoeEzviVOOjat",
				},
			],
		},
	},
	{
		title: "Iran",
		year: 2023,
		hostedLink: "iran",
		link: "iran",
		backupLink:
			"https://drive.google.com/drive/folders/1qGisn3RuCffmTbKW4LCR46ZgjYhyneo3?usp=sharing",
		restricted: false,
		reelLinks: ["https://www.instagram.com/reel/C89yh6IS-3R/"],
		instagramLinks: [
			"https://www.instagram.com/p/CtUbIIUrCuB/?img_index=1",
			"https://www.instagram.com/p/CtXWowqpCaG/?img_index=1",
			"https://www.instagram.com/p/CtaALBqLgzO/?img_index=1",
			"https://www.instagram.com/p/CtcU9GaJw7D/?img_index=1",
			"https://www.instagram.com/p/CtkDysGpNU1/?img_index=1",
			"https://www.instagram.com/p/CtmgnktJcUn/?img_index=1",
			"https://www.instagram.com/p/CtrhaHNr2J9/?img_index=1",
		],
		extras: {
			countries: ["Iran"],
			scorecard: {
				affordability: [10],
				food: [6],
				hospitality: [9],
				safety: [3],
				accessibility: [5],
				video: [9],
			},
			finalScore: 7,
			summary: [
				"Iran has a reputation for being a regional destabilizing power, known to regularly detain tourists and violently cracking down on protests.",
				"These are all valid concerns, but if you can stomach the fear and overcome these challenges, you'll get to formulate your own opinion and make up your own mind about the realities on the ground.",
				"It's actually a fascinating land of ancient history, vibrant culture, and surprising hospitality, I experienced some incredible moments like being on German national TV, the friendliness of the soldiers and understood the hardships that come from a powerful nation ruled by an oppressive regime under debilitating sanctions.",
			],
			challenges: [
				"Due to Sanctions you cannot use a visa card here, bring crisp USD/EUR and ensure you're getting the black market rate",
				"Americans and brits must have a guide and be under constant supervision while traveling. other nationalities are completely free however",
			],
			dos: [
				"Bring an android phone and install the app 'ShareIt'. In Iran the VPNs are regularly blocked by the government so locals constantly build and share new clients in person to stay ahead and remain connected",
				"Apply for a visa from SurfIran, GetIranVisa & CIBTvisas in advance. The length of stay you can be granted is generally down to your countries relationship with Iran",
			],
			donts: [
				"Even mention Israel. Many people get offended and will report you if overhearing it. Similarly, don;t visit Iran if theirs even a trace of you having been to israel",
				"Stick around if theirs a crowd forming, ie protests. They quickly turn dangerous and it's largely accepted that unfortunate individuals caught in a bad situation are hurt or killed, simply to make an example",
			],
			advice: {
				travelLength: "1 - 1.5 months",
				currency:
					"Iranian Rial & Toman (1 Tommen = 10 Rials), United States Dollar $USD & Eu Euro €EUR",
				season: "March - May & September - November",
				dailyBudget: "$2-5USD (I'm not kidding)",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/middle-east/iran",
				advice: Advisory.Level4,
			},
			music: [
				{
					title: "Take A Walk - Passion Pit",
					link: "https://music.youtube.com/watch?v=v_5P26wMiAo&si=CAs4sE6Q2sJwNqWt",
				},
				{
					title: "All We Know - The Chainsmokers",
					link: "https://music.youtube.com/watch?v=iObcSzYLQQw&si=Gx8m0Epa36XlkVLc",
				},
				{
					title: "Roam - Ryan Harris",
					link: "https://music.youtube.com/watch?v=zlX0bwZCD0k&si=3cZ0PeEMgeazeqVO",
				},
				{
					title: "The Right Attitude",
					link: "https://music.youtube.com/watch?v=yvZwfRhucSU&si=5PGZbqKVZ83Xlq29",
				},
			],
			extraLinks: [
				{
					title: "My Complete Backpacking Persia Guide",
					link: "https://www.franklin-v-moon.dev/guides/persia-guide",
				},
				{
					title: "Blackmarket USD to Rial Rate",
					link: "https://www.bonbast.com/",
				},
				{
					title: "Travel Insurance",
					link: "https://www.iatitravelinsurance.co.uk/",
				},
				{
					title: "Prior Israel Travel Ban List",
					link: "https://igoogledisrael.com/can-i-visit-arab-countries-with-an-israeli-visa-stamp-in-my-passport/",
				},
			],
			extraVideos: [
				{
					title: "German ZDF Esfahan Interview",
					hostedLink: "iranInterview",
				},
			],
		},
	},
	{
		title: "Armenia, Georgia & Azerbaijan",
		year: 2023,
		hostedLink: "armeniageorgiaazerbaijan",
		link: "armenia-georgia-azerbaijan",
		backupLink:
			"https://drive.google.com/drive/folders/1DogVS8g4liONTD51KvcaVu2XfBrnC_3V?usp=sharing",
		restricted: false,
		reelLinks: ["https://www.instagram.com/reel/C-w6PVhib9V/?hl=en"],
		instagramLinks: [
			"https://www.instagram.com/p/CtupJTxLpN2/?hl=en",
			"https://www.instagram.com/p/CtxSF9Isjco/?hl=en",
			"https://www.instagram.com/p/Ct4xNkmrOpm/?hl=en",
			"https://www.instagram.com/p/Ct7HgwUr25t/?hl=en",
			"https://www.instagram.com/p/Ct-JkPVsuaU/?hl=en",
			"https://www.instagram.com/p/CuDSxN0shnk/?hl=en",
			"https://www.instagram.com/p/CuFqXixr8ES/?hl=en",
			"https://www.instagram.com/p/CuKiuoBLq6p/?hl=en",
			"https://www.instagram.com/p/CuQET6trR_g/?hl=en",
			"https://www.instagram.com/p/CuWSIkQMRzy/?hl=en",
			"https://www.instagram.com/p/CuWWQVoM7FU/?hl=en",
			"https://www.instagram.com/p/CubhrkpMmYm/?hl=en",
		],
		extras: {
			countries: ["Armenia", "Georgia", "Azerbaijan"],
			scorecard: {
				affordability: [8, 8, 4],
				food: [6, 10, 3],
				hospitality: [8, 6, 6],
				safety: [7, 7, 7],
				accessibility: [6, 6, 3],
				video: [6, 8, 7],
			},
			finalScore: 7,
			summary: [
				"I spent a solid month exploring the 3 countries of the South-Caucasus, it was a surprise how good Georgia was  with it's outstanding food and wine.",
				"These 3 nations have a complex history, under Soviet rule they co-existed relatively peacefully. But today Armenia and Azerbaijan regularly clash and Georgia is currently partially occupied by Russia.",
				"Azerbaijan feels like any other gulf petro state and in many ways is proud to be a Turkish puppet. Armenia has a tragic history but some of the most hopeful people you'll ever meet.",
			],
			challenges: [
				"Getting around Azerbaijan can be quite a challenge, similar to Turkey the taxi drivers are very likely to scam and misdirect you at every chance",
			],
			dos: [
				"If you're heading to Kazakhstan you can take a ferry from Baku to Aktau over the Caspian Sea",
				"Make sure you visit as many of the abandoned palaces in Georgia's Tskaltubo before they're all blocked off, renovated or demolished. You can always find a way in if you search hard enough.",
			],
			donts: [
				"If visiting Georgia's Tskaltubo, do not force your way into any locked apartments as they are likely occupied.",
			],
			advice: {
				travelLength: "1 - 1.5 months",
				currency: "Armenian DRAM, Georgian Lati GEL, Azerbaijani Manat AZN",
				season: "July & August",
				dailyBudget: "$30-50 USD",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/Europe",
				advice: Advisory.Level1,
			},
			music: [
				{
					title: "Kaleidoscope - A Great Big World",
					link: "https://music.youtube.com/watch?v=V7JMJPhO5LA&si=eKTTgWDY5QHZh6Q3",
				},
				{
					title: "Enjoy The Ride - Krewella",
					link: "https://music.youtube.com/watch?v=MU8vEVDuR_M&si=6_V6BPI3ub4QYiQK",
				},
				{
					title: "No Stress - Molly Moore",
					link: "https://music.youtube.com/watch?v=9fsaUjUkhqI&si=2B4NLzMOJuJzkTRG",
				},
				{
					title: "Georgia - Vance Joy",
					link: "https://music.youtube.com/watch?v=H8MJ63XScKc&si=0NGNazF6fyFxM2cS",
				},
				{
					title: "Don't Stop Me Now - Queen",
					link: "https://music.youtube.com/watch?v=CczcMarUoVk&si=W_ka2l6DbDU6J_Uy",
				},
			],
			extraVideos: [
				{
					title: "Meeting Aengus Neaves - Cycling Mongolia to Scotland",
					hostedLink: "angusneavesAzerbaijan",
				},
				{
					title: "Endorsing a Random Baku Mobile Store",
					hostedLink: "azerbaijanStoreEndoresment",
				},
			],
		},
	},
	{
		title: "Greece",
		year: 2023,
		hostedLink: "greece",
		link: "greece",
		backupLink:
			"https://drive.google.com/drive/folders/1fESHg-DLWm-QOZhkmBkepQAUaapIG_ku?usp=sharing",
		restricted: false,
		reelLinks: ["https://www.instagram.com/reel/C_PcOfOCX4E/?hl=en"],
		instagramLinks: [
			"https://www.instagram.com/p/CufoGNOsExu/?hl=en",
			"https://www.instagram.com/p/CuklIluLnZE/?hl=en",
			"https://www.instagram.com/p/CuknIYYrTRi/?hl=en",
			"https://www.instagram.com/p/Cup18pisDpr/?hl=en",
			"https://www.instagram.com/p/CutX6yNsmrW/?hl=en",
			"https://www.instagram.com/p/CuxVBypLGrt/?hl=en",
			"https://www.instagram.com/p/CuxaFY_rTD3/?hl=en",
			"https://www.instagram.com/p/Cu1rOL5M2B5/?hl=en",
			"https://www.instagram.com/p/Cu5JTCbrApq/?hl=en",
		],
		extras: {
			countries: ["Greece"],
			scorecard: {
				affordability: [4],
				food: [10],
				hospitality: [6],
				safety: [10],
				accessibility: [9],
				video: [10],
			},
			finalScore: 9,
			summary: [
				"One of the most relaxed and gorgeous regions in the world. From the immense back alleys of Athens to the blue and white cliffs of the many islands, Greece is the perfect place to have fun, kick back and just enjoy life.",
				"While not cheap or easy I managed to squeeze in a wonderful trip where I met some of the loveliest travelers and went on countless little adventures.",
				"Everyone has an idea of what greece will be, somehow it exceeds those expectations and shows you new things you never knew you wanted.",
			],
			dos: [
				"Checkout Crete. Raki here is untaxed and therefore cheaper than water, they literally give it away with every meal.",
			],
			donts: [
				"Spend too much time in Santorini. You can do most of it in a day but it's extremely expensive and theirs better places",
				"Never eat at a restaurant where theirs someone out the front trying to lure you in. If it's good they don't need to do that",
			],
			advice: {
				travelLength: "1 - 3 months",
				currency: "European Euro EUR",
				season: "April - June",
				dailyBudget: "",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/europe/greece",
				advice: Advisory.Level1,
			},
			music: [
				{
					title: "Greased Lightnin' - John Travolta & Jeff Conaway",
					link: "https://music.youtube.com/watch?v=Y1ChbwFlyuE&si=v2IzEFOWG0Dg4JPy",
				},
				{
					title: "Yakety Yak - The Coasters",
					link: "https://music.youtube.com/watch?v=zokNDFo1z7I&si=8BdR2fc6OHwrl2G_",
				},
				{
					title: "Johnny B Goode - Chuck Berry",
					link: "https://music.youtube.com/watch?v=-k2q31pWZzg&si=umA9UzsxnbI_snaK",
				},
				{
					title: "Mamma Mia - ABBA",
					link: "https://music.youtube.com/watch?v=KMViJKmAV4M&si=qN_ll38hcDWR8NK6",
				},
				{
					title: "Crocodile Rock - Elton John",
					link: "https://music.youtube.com/watch?v=75r0nQu-hMs&si=sNEeLlhpJ_K0CQJ3",
				},
			],
		},
	},
	{
		title: "Turkey",
		year: 2023,
		hostedLink: "turkey",
		link: "turkey",
		restricted: false,
		instagramLinks: [
			"https://www.instagram.com/p/Cu9PmFaLhfp/?hl=en",
			"https://www.instagram.com/p/CvFEUc1sqd7/?hl=en",
			"https://www.instagram.com/p/CvQnIUlNDkk/?hl=en",
			"https://www.instagram.com/p/CvRpULzsPWw/?hl=en",
			"https://www.instagram.com/p/CvVZxBmrnNO/?hl=en",
			"https://www.instagram.com/p/CvYKenvMW31/?hl=en",
			"https://www.instagram.com/p/CvcCKJzMUAD/?hl=en",
			"https://www.instagram.com/p/CviNxqQrVSL/?hl=en",
		],
		backupLink:
			"https://drive.google.com/drive/folders/1XCmnocL818puHIMOQHp2jxK0YomOn8Nd?usp=sharing",
		reelLinks: ["https://www.instagram.com/reel/C_cuUwoigGb/?hl=en"],
		extras: {
			countries: ["Turkey"],
			scorecard: {
				affordability: [6],
				food: [4],
				hospitality: [5],
				safety: [6],
				accessibility: [7],
				video: [5],
			},
			finalScore: 5,
			summary: [
				"The bridge between worlds, Türkiye. Meeting and mixing Europe, the Middle East and the Caucuses.",
				"Honestly I didn't spend enough time in Turkey and what I did do and see was a bit 'touristy'. Istanbul is one of those cities you could spend weeks alone, from it's 'Europe side' and it's 'Asia Side' you can experience a great mesh of foods, lifestyles and fun experiences.",
			],
			challenges: [
				"Taxi drivers in Turkey are something else. Never trust the driver, if you know they're going the wrong way don't be afraid to jump out and if they decide to double the agreed-upon price after you've arrived, expect the confrontation to become physical.",
			],
			dos: [
				"Find accommodation on the 'Asia' side of Istanbul, the district of Kadikoy. You can still see all the famous things of the 'Europe' side but save so much on money and the nightlife is best on the Asia anyway.",
				"Negotiate locally for the hot air balloons in Cappadocia. You can secure a half price discount the night before if theirs been a string of good weather days",
			],
			advice: {
				travelLength: "1 month",
				currency: "Turkish Lira TRY",
				season: "March - May",
				dailyBudget: "$50 - 150usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/europe/turkiye",
				advice: Advisory.Level2,
			},
			music: [
				{
					title: "Yarina Kalir, Yanina Kalmaz - Ugur Isilak",
					link: "https://music.youtube.com/watch?v=Q9eyUK5uCDs&si=KKal9phcleMA82dj",
				},
				{
					title: "Bangir Bangir - Gulsen",
					link: "https://music.youtube.com/watch?v=hXJGmGZMV84&si=Ho8pm-5xjyAv0jC2",
				},
				{
					title: "It's a Long Way To Tipperary - Nathan Lay",
					link: "https://music.youtube.com/watch?v=gs5IH76mwCM&si=Uak4Azo-CJZMBrYq",
				},
				{
					title: "Won't Let This Moment Pass Us By - Benji Jackson",
					link: "https://music.youtube.com/watch?v=YUdx9FgId0A&si=Od7XrgsOnVP-39Dk",
				},
				{
					title: "Into a Fantasy - Alexander Rybak",
					link: "https://music.youtube.com/watch?v=tU7C8od6eSk&si=Do4KW0VTc57Dcn7P",
				},
			],
		},
	},
	{
		title: "Lebanon",
		year: 2023,
		hostedLink: "lebanon",
		link: "lebanon",
		restricted: false,
		instagramLinks: [
			"https://www.instagram.com/p/CvspxJLrFVg/?hl=en",
			"https://www.instagram.com/p/CvzNnEssv_r/?hl=en",
			"https://www.instagram.com/p/CvzO2Pxs0os/?hl=en",
			"https://www.instagram.com/p/Cv0gI5yLV3q/?hl=en",
		],
		backupLink:
			"https://drive.google.com/drive/folders/1OToOEBqXkFSJTHRliyt8B2o-LqUKgKqO?usp=sharing",
		reelLinks: ["https://www.instagram.com/reel/C_lNBtKCH0H/?hl=en"],
		extras: {
			countries: ["Lebanon"],
			scorecard: {
				affordability: [8],
				food: [9],
				hospitality: [6],
				safety: [5],
				accessibility: [5],
				video: [2],
			},
			finalScore: 3,
			summary: [
				"Heading through to Syria I had to checkout Lebanon, sometimes nicknamed 'The Switzerland of the Middle East' for it's previous reputation to discreetly store one's wealth.",
				"Sadly at time of filming Lebanon has fallen far. Infested with Hezbollah, an Iran-backed terror organization that sudo-controls the government without any of the benefits a functioning government would provide. They destabilize the whole nation and ensure it's stuck in constant conflict internally and externally.",
				"Even so, the Lebanese press on as some of the kindest and most hospital folks you'll ever meet. Kind, open-minded and fantastic cooks.",
			],
			challenges: [
				"Hezbollah forces are dotted around the country and in Beirut. Generally they'll leave you alone but you'll find that their presence gets in the way of whatever you're trying to do.",
			],
			dos: [
				"Go clubbing. Lebanon has one of the most fun and exciting night life's out there, everyone interacts and has fun together.",
			],
			donts: [
				"Use the ATMs. The official conversion rate of Lebanese pounds is atrocious. Instead bring cash and exchange with stores directly at the black market rate.",
				"Discuss sensitive topics if you're unfamiliar with the person. Lebanon is outrageously diverse in terms of religion and nationality. There are floods of Syrian refugees and struggling folks so you never know who's been affected by what.",
			],
			advice: {
				travelLength: "1 - 2 weeks",
				currency: "Lebanese Pound LPB",
				season: "April - November",
				dailyBudget: "$10 - 15usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/middle-east/lebanon",
				advice: Advisory.Level4,
			},
			music: [
				{
					title: "New Perspective - Noah Kahan",
					link: "https://music.youtube.com/watch?v=9u3OuJTS4hc&si=oqnbNVCkUC85tH9y",
				},
				{
					title: "Shotgun - George Ezra",
					link: "https://music.youtube.com/watch?v=nS7Yoj8qOwU&si=qG8EhiRjc3NxUjRO",
				},
			],
		},
	},
	{
		title: "Syria",
		year: 2023,
		hostedLink: "syria",
		link: "syria",
		restricted: false,
		instagramLinks: [
			"https://www.instagram.com/p/Cv66XjcLuCI/?hl=en",
			"https://www.instagram.com/p/Cv9eJaMsQ1o/?hl=en",
			"https://www.instagram.com/p/CwCTJLKMRo0/?hl=en",
			"https://www.instagram.com/p/CwF09q0spyl/?hl=en",
			"https://www.instagram.com/p/CwNnPkVMIUc/?hl=en",
		],
		backupLink:
			"https://drive.google.com/drive/folders/1SvQ3x2YGW2ibSM3t-kx_gRMiAYf_cPsi?usp=sharing",
		reelLinks: ["https://www.instagram.com/reel/DAGBpdVCaEJ/?hl=en"],
		extras: {
			countries: ["Syria"],
			scorecard: {
				affordability: [10],
				food: [10],
				hospitality: [8],
				safety: [6],
				accessibility: [7],
				video: [10],
			},
			finalScore: 10,
			summary: [
				"Experiencing Syria during the Assad regime was an actual unforgettable experience, the week I spent in Syria might be the most impactful week of my life.",
				"Each and every aspect of this tragic yet resilient country stands out. The people still have so much pride and hope, everyone is wonderful, the history immense and the food to die for.",
				"Damascus has gone down as my favorite city, its so rich and vibrant. Homs and Hama while devastated from decades of war still have so much to offer. Aleppo and Palmyra with it's recent ISIS occupation could alone could be traveled for weeks without learning everything that's just happened.",
			],
			dos: ["Eat and drink everything."],
			donts: [
				"The Kim Jong-il park while fascinating is literally just a patch of grass.",
			],
			advice: {
				travelLength: "3 - 5 weeks",
				currency: "Syrian pound SYP",
				season: "March - May",
				dailyBudget: "$5 - 10usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/middle-east/syria",
				advice: Advisory.Level4,
			},
			music: [
				{
					title: "Viva La Vida - Coldplay",
					link: "https://music.youtube.com/watch?v=3a-q7vPa-UU&si=Hf-IwDnXrKqdy_pv",
				},
				{
					title: "Rasputin - Boney M",
					link: "https://music.youtube.com/watch?v=5Z0dxsFmX7c&si=3jhbv2Jfa5yxyZmo",
				},
				{
					title: "Castle On The Hill - Ed Sheeren",
					link: "https://music.youtube.com/watch?v=wqlTrBCNRiY&si=RYn0NlDrbIZBujp8",
				},
				{
					title: "Hard Sometimes - Ruel",
					link: "https://music.youtube.com/watch?v=OA_Auja3wNQ&si=pcy6uEIeHjJ_pM7c",
				},
				{
					title: "Blank Space - Taylor Swift",
					link: "https://music.youtube.com/watch?v=dC9QIUKviJU&si=Z0Jx7lHOe3mJh0-o",
				},
			],
		},
	},
	{
		title: "Cyprus",
		year: 2023,
		hostedLink: "cyprus",
		link: "cyprus",
		restricted: false,
		reelLinks: [
			"https://www.instagram.com/reel/DAIpVj3iUJI/?igsh=MXY5cjUzZHF3bmFvcA==",
		],
		backupLink:
			"https://drive.google.com/drive/folders/1U8dmbaKFVANjIbDswF4bD-JIwKgraJw3?usp=sharing",
		instagramLinks: [
			"https://www.instagram.com/p/CwTBSZ8rP6c/?hl=en",
			"https://www.instagram.com/p/CwVuLVvrgWP/?hl=en",
		],
		extras: {
			countries: ["Cyprus"],
			scorecard: {
				affordability: [5],
				food: [8],
				hospitality: [7],
				safety: [8],
				accessibility: [6],
				video: [3],
			},
			finalScore: 7,
			summary: [
				"An island nation divided, where ancient ruins meet sun-drenched coastlines with everything you love and hate from it's nearest neighbors.",
				"The Greek Cypriot and Turkish Cypriot communities of Cyprus are a living testament to the island's complex recent history where the UN buffer lines creates an incredibly strange atmosphere yet life goes on in paradise.",
				"I explored a few cities and mostly 'lived it up' aboard cruises and wind surfing, the south feels much more like a Greek island and the north more like a forgotten wasteland from Fallout with countless ghost towns covered in bullet holes.",
			],
			challenges: [
				"Each side of Cyprus uses different currencies, the south uses Euros and the north the Turkish Lira.",
			],
			advice: {
				travelLength: "2 weeks",
				currency: "South: European Union Euro EUR / North: Turkish Lira TL",
				season: "May - July",
				dailyBudget: "$80usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/europe/cyprus",
				advice: Advisory.Level2,
			},
			music: [
				{
					title: "Gone - Jr Jr",
					link: "https://music.youtube.com/watch?v=uQp8xxBp4Pw&si=iY7EUR_z4qMO4m-I",
				},
			],
		},
	},
	{
		title: "Israel & Palestine",
		year: 2023,
		hostedLink: "israelpalestine",
		link: "israel-and-palestine",
		restricted: true,
		instagramLinks: [
			"https://www.instagram.com/p/CwYWLKNr2nj/?hl=en",
			"https://www.instagram.com/p/CwfOOKisfk6/?hl=en",
			"https://www.instagram.com/p/Cwk0xLwsCd_/?hl=en",
			"https://www.instagram.com/p/CwnqtIaLVUC/?hl=en",
			"https://www.instagram.com/p/CwuCqhUMNAd/?hl=en",
			"https://www.instagram.com/p/Cwzr9nZLCDu/?hl=en",
		],
		backupLink:
			"https://drive.google.com/drive/folders/1_CFYkAQu2S0a26A0V6vibE6-t94rZSOW?usp=sharing",
		reelLinks: ["https://www.instagram.com/reel/DASgqv-CzW-/?hl=en"],
		extras: {
			countries: ["Israel", "Palestine"],
			scorecard: {
				affordability: [5, 5],
				food: [8, 3],
				hospitality: [3, 6],
				safety: [7, 6],
				accessibility: [8, 3],
				video: [9, 9],
			},
			finalScore: 8,
			summary: [
				"We witnessed firsthand the tangible realities of the Israeli-Palestinian conflict, including the separation barrier and its impact on daily life.",
				"Israel & Palestine have diverse religious and political narratives shaping the region's complex recent history. growing up a christian, it was fascinating to see the real locations from the bible and even more so, that they always had a gift shop next door.",
				"It's a surreal experience to travel this region, with so many concerning and surprising facts it can be heart breaking to visit but something I believe everyone should try at-least once.",
			],
			challenges: [
				"Israeli border security is fierce. Many travelers are fine, but if you're solo it's likely you will be searched and questioned for hours. Leave extra time.",
			],
			dos: [
				"Cross into Bethlehem on foot and get a day trip with any taxi drivers. First and foremost they want you to understand their circumstances.",
			],
			donts: [
				"Cross the Jordanian border if you plan to visit a long list of other arab countries. Even though Israel does not stamp your passport, the Jordanian land border stamp will indicate you visited Israel - In Lebanon for example, this would get you arrested.",
				"Rent a car in israel then drive it into Palestine. The Israeli numberplate will get your car targeted.",
			],
			advice: {
				travelLength: "2 - 4 weeks",
				currency: "Israeli Shekel (both)",
				season: "April - November",
				dailyBudget: "$100usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/middle-east/israel-and-occupied-palestinian-territories",
				advice: Advisory.Level4,
			},
			music: [
				{
					title: "Bad Liar - Imagine Dragons",
					link: "https://music.youtube.com/watch?v=I203G1sMGDg&si=C9OVxBqSS-ey6T5l",
				},
				{
					title: "5 Foot 9 - Tyler Hubbard",
					link: "https://music.youtube.com/watch?v=K0y8z5jIm3U&si=GmWovi4l1HwiRngf",
				},
				{
					title: "Chemical - Post Malone",
					link: "https://music.youtube.com/watch?v=cEGG77nmrTI&si=O6YFTXRcS8ZwVoux",
				},
				{
					title: "Purple - Hollow Coves",
					link: "https://music.youtube.com/watch?v=KQR03L13SkI&si=RMj3p-kBL51BPmju",
				},
			],
			extraLinks: [
				{
					title: "Countries You Cannot Visit After Israel",
					link: "https://www.quora.com/What-countries-can-you-not-visit-after-going-to-Israel",
				},
			],
		},
	},
	{
		title: "Philippines & Brunei",
		year: 2024,
		hostedLink: "philippinesbrunei",
		link: "philippines-and-brunei",
		restricted: true,
		instagramLinks: [
			"https://www.instagram.com/p/C0qMrfyrRhi/?hl=en",
			"https://www.instagram.com/p/C1EZPPPrN87/?hl=en",
			"https://www.instagram.com/p/C1Q2UQcLqS-/?hl=en",
		],
		reelLinks: ["https://www.instagram.com/reel/DAWBdOpC00S/?hl=en"],
		backupLink:
			"https://drive.google.com/drive/folders/1B2LnxZODyNkqD3TKdZg9PBc0qe0fvXbA?usp=sharing",
		extras: {
			countries: ["Philippines", "Brunei"],
			scorecard: {
				affordability: [7, 4],
				food: [1, 2],
				hospitality: [6, 4],
				safety: [7, 7],
				accessibility: [6, 6],
				video: [7, 4],
			},
			finalScore: 6,
			summary: [
				"The Philippines, an archipelago of over 7,000 islands offering a diverse landscape of beaches, volcanoes, rain forests and infinite diving.",
				"Nearby Brunei is a tiny oil-rich sultanate known for it's mosques, tree canopies and Venetian-style river villages.",
				"Steering clear of Manila due to it's scammy and congested nature, we explored chaotic Cebu by scooter and snorkelled around its gorgeous coast. While the food in both countries is quite bad (philippines voted worst in the world recently) we did enjoy the nightlife and punchy red horse beers.",
			],
			challenges: [
				"Manilla is a hellish city with some truly awful congestion. Many taxi scams exist, particularly the 'airport bus' that you can never rely on.",
			],
			dos: [
				"Give the Philippines a huge amount of time. Each island has so much to offer, think of it like a much bigger Greek archipelago.",
			],
			donts: ["Eat the eggs called 'Balut. Or do, it's your life."],
			advice: {
				travelLength: "Philippines: 1 - 2 months / Brunei 2 - 3 days",
				currency: "Philippine Peso PHP / Brunei Dollar BND",
				season: "December - February",
				dailyBudget: "Philippines: $20usd / Brunei: $40usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/Asia",
				advice: Advisory.Level2,
			},
			music: [
				{
					title: "Manila - Ray Dalton",
					link: "https://music.youtube.com/watch?v=qHhQwoDIDTI&si=uT-MgUZBD9bSeo0S",
				},
				{
					title: "Small Talk - Call Security",
					link: "https://music.youtube.com/watch?v=x-97hc4kIlE&si=xRSvnyP26t4ClH6V",
				},
			],
			extraVideos: [
				{
					title: "Original Philippines 2020 Travel Video",
					hostedLink: "philippines",
				},
			],
		},
	},
	{
		title: "Timor-Leste",
		year: 2024,
		hostedLink: "timorleste",
		link: "timor-leste",
		restricted: false,
		instagramLinks: [
			"https://www.instagram.com/p/C-RGiELTbxA/?hl=en",
			"https://www.instagram.com/p/C-U4hPnzsoJ/?hl=en",
			"https://www.instagram.com/p/C-ZpKlvzLk3/?hl=en",
		],
		reelLinks: ["https://www.instagram.com/reel/DAkVgM9i5tf/?hl=en"],
		backupLink:
			"https://drive.google.com/drive/folders/1maUl4djBYlTRbgBo7WrUQYfB8Xdc0mrT?usp=sharing",
		extras: {
			countries: ["Timor-Leste"],
			scorecard: {
				affordability: [6],
				food: [4],
				hospitality: [7],
				safety: [7],
				accessibility: [3],
				video: [7],
			},
			finalScore: 6,
			summary: [
				"One of the world's youngest countries, least traveled and with a truly tragic recent history. Riding through the street you attract a lot of eyeballs followed with a constant stream of 'hello''s, 'hi's and 'where are you from?'.",
				"The infrastructure here is extremely basic with most roads made of only dirt/mud and the 4th slowest cellular network globally.",
				"What it lacks in amenities it makes up for in ecology, by being relatively untouched it has the worlds most bio-diverse coral reefs surrounding the ex-prison island of Atauro.",
			],
			challenges: [
				"There is almost no tourism infrastructure except for dive centers.",
				"The roads are almost nonexistent with potholes regularly swallowing up whole motorbikes. It's fun but ensure ample time and energy",
			],
			dos: [
				"Spend a few days at 'Barry's Place' in Atauro. He's amazing and theirs a lot to do surprisingly",
			],
			advice: {
				travelLength: "1 week",
				currency: "United States Dollar $USD",
				season: "May - November",
				dailyBudget: "$20usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/asia/timor-leste",
				advice: Advisory.Level2,
			},
			music: [
				{
					title: "C'est La Vie - Yung Gravy",
					link: "https://music.youtube.com/watch?v=lHMzHNxkcfE&si=mpjqGMSLjCm4Ie41",
				},
				{
					title: "Married Life - Michael Giacchino",
					link: "https://music.youtube.com/watch?v=S3jmcjyzRI0&si=JLhIzS2EhqnZbeX8",
				},
				{
					title: "The Nosebleed Section - Hilltop Hoods",
					link: "https://music.youtube.com/watch?v=1PgvxPCLQzw&si=vgyrqO9FUsA3sEWN",
				},
				{
					title: "I Don't Wanna Wait - David Ghuetta & One Republic",
					link: "https://music.youtube.com/watch?v=yjNJLr0nX6U&si=_b5mufidUj6lOgtA",
				},
			],
			extraLinks: [
				{
					title: "Days and Ways to Atauro",
					link: "https://ataurotourism.org/plan-your-trip/getting-here/",
				},
			],
		},
	},
	{
		title: "Bangladesh",
		year: 2024,
		hostedLink: "bangladesh",
		link: "bangladesh",
		restricted: false,
		instagramLinks: [
			"https://www.instagram.com/p/DCOMqWmJ4X5/?hl=en&img_index=1",
			"https://www.instagram.com/p/DCUWQ4ohBra/?hl=en&img_index=1",
			"https://www.instagram.com/p/DCWDQIBp3e8/?hl=en&img_index=1",
			"https://www.instagram.com/p/DCYTMYWJ4s6/?hl=en&img_index=1",
			"https://www.instagram.com/p/DCbE7AzJtvw/?hl=en&img_index=1",
		],
		reelLinks: ["https://www.instagram.com/reel/DDwCngSJmuq/?hl=en"],
		backupLink:
			"https://drive.google.com/drive/folders/1_D1GjrhBz6rtuw8-4xNWFXlxmUi5axpZ?usp=sharing",
		extras: {
			countries: ["Bangladesh"],
			scorecard: {
				affordability: [9],
				food: [1],
				hospitality: [8],
				safety: [2],
				accessibility: [1],
				video: [10],
			},
			finalScore: 6,
			summary: [
				"Bangladesh is a very unique country, blending some of the best and worst of experiences into a captivating yet daunting adventure.",
				"Home to the world's largest mangrove forest, the Sundarbans. The worlds longest uninterrupted sea beach, Cox bazaar and a fascinating textiles industry, we had a blast but also, would never go back.",
				"If you're into 'Yes theory' then this is the country for you, it has stunning nature and a type of local you've never met before, Everything here is a challenge but rewarding nonetheless.",
			],
			challenges: [
				"The food is straight-up not fit for animal nor human consumption. Everything, even KFC, gave me food poisoning. Stick to Oreos and potato crisps.",
				"Getting around is very hard, you can't really book anything online and theirs no such thing as a schedule. Just ask around until a solution presents itself but that does mean you can commute in crazy unexpected ways.",
			],
			dos: [
				"Train surf in Dhaka. It's a thrilling experience and nearing it's expected end. Simply try to sneak on the roof when no guards are watching and enjoy the ride.",
			],
			donts: [
				"Solo travel as a woman, even a group of women I would not suggest. Many of the locals have no concept of personal space, they will crowd around you and stare, touch, help themselves to whats in your pocket and even I, a 6-foot man, was sexually harassed multiple times",
			],
			advice: {
				travelLength: "2 weeks",
				currency: "Bangladeshi Taka BDT",
				season: "December - March",
				dailyBudget: "$25usd",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/asia/bangladesh",
				advice: Advisory.Level3,
			},
			music: [
				{
					title: "It Is What It Is - Jenna Raine",
					link: "https://music.youtube.com/watch?v=VLObcolZ6jI&si=8ScTUtHWCfNM7Qjn",
				},
				{
					title: "Beautiful Life - Now United",
					link: "https://music.youtube.com/watch?v=CuOJOtbw0vs&si=Sa_cBseJU6RbI3rd",
				},
				{
					title: "Modern Art - Black Lips",
					link: "https://music.youtube.com/watch?v=9Od7tvXYx60&si=HB5Zuoc9NfGqBRUm",
				},
				{
					title: "We Like To Party - Vengaboys",
					link: "https://music.youtube.com/watch?v=KRQPDlKoaWk&si=2TGZKXw_tebJ7ukn",
				},
			],
			extraLinks: [
				{
					title: "Guest Speaking At Barishal University",
					link: "https://www.facebook.com/share/p/18bAX5KRd2/",
				},
			],
		},
	},
	{
		title: "Bhutan & East India",
		year: 2024,
		hostedLink: "bhutan",
		link: "bhutan-and-east-india",
		restricted: false,
		instagramLinks: [
			"https://www.instagram.com/p/DCdj2OeJbW9/?hl=en&img_index=1",
			"https://www.instagram.com/p/DCmM-vNh-Dt/?hl=en&img_index=1",
			"https://www.instagram.com/p/DCnqTo-pa5L/?hl=en&img_index=1",
			"https://www.instagram.com/p/DCqHnMPBcUE/?hl=en&img_index=1",
			"https://www.instagram.com/p/DCxxx0aBJBv/?hl=en&img_index=1",
		],
		reelLinks: ["https://www.instagram.com/reel/DEAUDrrJPIk/?hl=en"],
		backupLink:
			"https://drive.google.com/drive/folders/1p724j3uqLAlkelWtiekMf1LUhbpzw-Jb?usp=sharing",
		extras: {
			countries: ["East India", "Bhutan"],
			scorecard: {
				affordability: [9, 1],
				food: [1, 2],
				hospitality: [6, 4],
				safety: [5, 10],
				accessibility: [6, 1],
				video: [5, 8],
			},
			finalScore: 5,
			summary: [
				"We hiked and rode our way through a less-traveled section of the Himalayas, everywhere you look is stunning architecture and color.",
				"There are few countries like Bhutan. Nestled 2500m in the mountains it's a bastion of peace and long term thinking. They impose an expensive daily Sustainable Development Fee (SDF) on tourists which is what makes it one of the least visited countries on earth.",
				"We also got to enjoy the celebrations of Diwali in the East-Indian region of Darjeerling, surprisingly it felt more like new years with endless screaming fireworks and fire crackers.",
			],
			challenges: [
				"Bhutan essentially forces tourists to hire a guide and driver. Technically you can explore Paro and Thimphu without one but you MUST fly in to the airport, don't try to get there via car.",
			],
			dos: [
				"Travel Bhutan in the off or shoulder season when the SDF is $100 per day instead of $250.",
				"Rent a Himalayan motorbike and enjoy the pure peace that is the twisting yet safe and clean roads of Dochula Pass.",
			],
			donts: [
				"Try to avoid hiring a guide. They kind of suck and make the experience worse but without one many things become locked off and locals still won't engage with you.",
			],
			advice: {
				travelLength: "5 days or 2 weeks if hiking",
				currency: "Bhutanese Ngultrum BTN & Indian Rupee (Accepted in Bhutan)",
				season: "March - May",
				dailyBudget: "$20USD + $100/250USD Daily SDF",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/asia/bhutan",
				advice: Advisory.Level1,
			},
			music: [
				{
					title: "Jag Changa - Raghu Dixit",
					link: "https://music.youtube.com/watch?v=8LIk4sHswiM&si=PZrhB6F95D7F6hgg",
				},
				{
					title: "Send Me On My Way - Rusted Root",
					link: "https://music.youtube.com/watch?v=ZS4m67ElJzU&si=6H-gtf5tsV7Jc9yt",
				},
				{
					title: "A Little Bit Happy - TALK",
					link: "https://music.youtube.com/watch?v=Dr74mEbAtL4&si=ImwQlgw7gKKEzNDF",
				},
				{
					title: "Just A Simple Monk - Jeremy Zuckerman",
					link: "https://music.youtube.com/watch?v=qPw89MgOBvw&si=AHZ0qrVz-ZcFfNLT",
				},
				{
					title: "Avatar The Last Airbender Theme - Samuem Kim",
					link: "https://music.youtube.com/watch?v=BToxRk8X3n8&si=lyKeDvD2I5AUoluq",
				},
			],
		},
	},
	{
		title: "Maldives & Sri Lanka",
		year: 2024,
		hostedLink: "maldivessrilanka",
		link: "maldives-and-sri-lanka",
		restricted: false,
		instagramLinks: [
			"https://www.instagram.com/p/DEyptuVJGbk/?hl=en&img_index=1",
			"https://www.instagram.com/p/DE6s6JFpJ6L/?hl=en&img_index=1",
			"https://www.instagram.com/p/DFE9V62J79b/?hl=en&img_index=1",
		],
		backupLink:
			"https://drive.google.com/drive/folders/1z5GgatabgWeQEKrbZkZZDSOCS_xuEV6r?usp=sharing",
		extras: {
			countries: ["Maldives", "Sri Lanka"],
			scorecard: {
				affordability: [4, 8],
				food: [1, 4],
				hospitality: [5, 6],
				safety: [7, 7],
				accessibility: [2, 8],
				video: [5, 4],
			},
			finalScore: 3,
			summary: [
				"We joined a friend for 2025 New Years, enroute had a stopover in The Maldives for a bit sun and aquatic fun.",
				"The Maldives was once an expensive and exclusive destination but since 2022 they allow tourists to lodge on the normal non-resort islands which dramatically cuts costs. Multiple budget friendly tour companies have emerged since but the food remains deplorable.",
				"After their credit default, Sri Lanka has focused intensely on its tourism industry which has made it a fantastic attractive destination to backpack. It's affordable and beautiful. Safety is top notch making it the ideal first taste of South Asia.",
			],
			challenges: [
				"The Maldives is exceptionally hard to travel freely, there are many 'gotchas' like ferries needing pre-booking or not running on certain days.",
			],
			dos: [
				"Leave an extra day or two in The Maldives free as weather and unforeseen circumstances can make it impossible to see certain ocean life, e.g the whale sharks and manta rays.",
			],
			donts: [
				"Never trust your host/hotel in The Maldives. Whenever they say 'no problem', you're going to have a big problem. Ensure you make your own plans with receipts or guarantees.",
			],
			advice: {
				travelLength: "Maldives: 1 week / Sri Lanka: 3 weeks",
				currency: "Maldivian Rufiyaa MVR & Sri Lankan Rupee LKR",
				season: "December - March",
				dailyBudget: "Maldives: $150USD / Sri Lanka: $30USD",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/Asia",
				advice: Advisory.Level2,
			},
			music: [
				{
					title: "Sharks - Imagine Dragons",
					link: "https://music.youtube.com/watch?v=jvwDooKFMLk&si=P1RAIQ4WdxL_ydzP",
				},
				{
					title: "I'm With You - Matthew Mole",
					link: "https://music.youtube.com/watch?v=mjX1Ywh0p-E&si=2u4fnZHto1HzVI5Z",
				},
				{
					title: "Good Grief - Bastille",
					link: "https://music.youtube.com/watch?v=LDY4Bf8Zwn8&si=deEik0xGNb1S3WIQ",
				},
			],
		},
	},
	{
		title: "Thailand 2",
		year: 2024,
		hostedLink: "thailand2",
		link: "thailand-2",
		restricted: false,
		instagramLinks: [
			"https://www.instagram.com/p/CyasF5_rtLn/?hl=en",
			"https://www.instagram.com/p/C1eWSFRL36K/?hl=en",
			"https://www.instagram.com/p/C4U0p9jr5WA/?hl=en",
			"https://www.instagram.com/p/C4s0esMJkUU/?hl=en",
			"https://www.instagram.com/p/C5ESnw0S7F4/?hl=en",
			"https://www.instagram.com/p/C5oEtdJp60R/?hl=en",
			"https://www.instagram.com/p/C5qQMkhJXJY/?hl=en",
			"https://www.instagram.com/p/C52q31MJEuK/?hl=en",
			"https://www.instagram.com/p/C55IykNJlLO/?hl=en",
			"https://www.instagram.com/p/C5_B99MJq5h/?hl=en",
			"https://www.instagram.com/p/C6BpSSMJ7zT/?hl=en",
			"https://www.instagram.com/p/C6BwrTnJNvM/?hl=en",
			"https://www.instagram.com/p/C6ioC21LNqh/?hl=en",
			"https://www.instagram.com/p/C6rcbsuyXP_/?hl=en",
			"https://www.instagram.com/p/C6x3PapLWaB/?hl=en",
			"https://www.instagram.com/p/C68-j4Up45C/?hl=en",
			"https://www.instagram.com/p/C7AwcDPpTKa/?hl=en",
			"https://www.instagram.com/p/C7I7WJzLR-H/?hl=en",
			"https://www.instagram.com/p/C7TXuGQL4iI/?hl=en",
			"https://www.instagram.com/p/C7hO0S9Jaca/?hl=en",
			"https://www.instagram.com/p/C7j1aAcvwrb/?hl=en",
			"https://www.instagram.com/p/C7n9BygJuDh/?hl=en",
			"https://www.instagram.com/p/C8r1bCISBje/?hl=en",
			"https://www.instagram.com/p/C9w2JPtzGcm/?hl=en",
			"https://www.instagram.com/p/C-mRiXHzW4i/?hl=en",
		],
	},
	{
		title: "Pakistan",
		year: 2025,
		hostedLink: "pakistan",
		link: "pakistan",
		restricted: false,
		backupLink:
			"https://drive.google.com/drive/folders/14vEAX2n-dlTqZ59ywDNLbIte6FeClEV4?usp=sharing",
		extras: {
			countries: ["pakistan"],
			scorecard: {
				affordability: [10],
				food: [6],
				hospitality: [10],
				safety: [4],
				accessibility: [4],
				video: [8],
			},
			finalScore: 7,
			summary: [
				"Pakistan is a culturally rich, predominantly Muslim nation with a complex history, currently navigating extremely challenging economic and political headwinds, but somehow manages to break the scale on what hospitality can be",
				"We visited the 4 major cities to discover an alarming amount of diversity from the Punjabs to the Pashtuns with endless languages in-between",
				"This country is not for new travellers but if you're seeking one of the most rewarding and enriching experiences, you'll probably never find a better option",
			],
			challenges: [
				"Due to security concerns it's common local police forces will try to 'escort' you around. In reality they will nag you to just go back to your hotel so they can play on their phones. It's free but a highly annoying 'service' that you cant opt out of once they start following you",
				"Getting cash is hard, the only bank tat reliably worke dfor me was Standard Charter",
				"Islamabad airport has no SIM services and a virtually non existant ATM, so bring cash if arriving here",
			],
			dos: [
				"Accept people offering you food and services, if you engage them long enough you'll usually find a way to repay them, its okay to say yes",
				"Make sure to visit in the warmer months, Skardu and Gilget close in the winter and they're arguably the best places to be as a tourist",
			],
			donts: [
				"Cross into Afghanistan at the Torkham border. it frequently closes without notice and is hell to navigate, taking hours",
			],
			advice: {
				travelLength: "2 - 6 weeks",
				currency: "Pakistani Rupee Rs",
				season: "May - October",
				dailyBudget: "$10 USD",
			},
			travelAdvisory: {
				link: "https://www.smartraveller.gov.au/destinations/asia/pakistan",
				advice: Advisory.Level3,
			},
			music: [
				{
					title: "Growing Pains - Layup",
					link: "https://music.youtube.com/watch?v=VTLGsOvWrrM&si=nWpTSrvTMPPTpPsI",
				},
				{
					title: "Weight Of Living, Pt. 1 - Bastille",
					link: "https://music.youtube.com/watch?v=kU8UxfpQvO0&si=XIBNbOi_bNIKl1q-",
				},
				{
					title: "An End Once And For All - ME3",
					link: "https://music.youtube.com/watch?v=fcuzMLMZNYc&si=cQ9qBDByK4O9BEqA",
				},
				{
					title: "Fireflies - Owl City",
					link: "https://music.youtube.com/watch?v=KWLGyeg74es&si=y4XWZb9AEodHQGxB",
				},
				{
					title: "Fire and the Flood - Vance Joy",
					link: "https://music.youtube.com/watch?v=IPfQpRV4KIk&si=hK5CidFvOKps58uX",
				},
				{
					title: "Northern Attitude - Noah Kahan & Hozier",
					link: "https://music.youtube.com/watch?v=0dw-rBTQ_P8&si=0djItroTBHIOM75-",
				},
			],
			extraLinks: [
				{
					title: "Car Crash Posted By A Local",
					link: "https://www.facebook.com/share/r/1BeUrNrML8/",
				},
				{
					title: "Calebs Short - Crossing the Wagga Border",
					link: "https://www.youtube.com/shorts/x7EUNTHItsY",
				},
				{
					title: "Calebs Short - Rohtas Fort",
					link: "https://www.youtube.com/shorts/8GL_pRbgnsg",
				},
				{
					title: "Calebs Short - Islamabad",
					link: "https://www.youtube.com/shorts/8GL_pRbgnsg",
				},
			],
		},
	},
		{
			title: "Afghanistan",
			year: 2025,
			hostedLink: "afghanistan",
			link: "afghanistan",
			restricted: false,
			backupLink: "https://drive.google.com/drive/folders/13u7UC_NTr1cXDKtclfhxyl-nokepTDjW?usp=sharing",
			extras: {
				countries: ["afghanistan"],
				scorecard: {
					affordability: [8],
					food: [3],
					hospitality: [9],
					safety: [5],
					accessibility: [4],
					video: [7],
				},
				finalScore: 6,
				summary: [ 
					"Afghanistan is a country caught between worlds. On the one hand, you have the overbearing Taliban with strict sharia law and frankly nonsense rulings.",
					"On the other, you have the wonderful people, each have a story that will squeeze your heart but also a personality that will put a smile on your face.",
					"Beyond the government, Afghanistan has an incredible amount of history and unique traditions to experience, it's somewhere every seasoned traveller should attempt to visit."
				],
				challenges: [ 
					"The Visa for Afghanistan is a huge headache with ever changes requirements. The easiest way currently is at the Peshawar consulate or on arrival at the Tajik border.",
					"It's illegal for foreigners to take a bus or enter a locals home, the loophole is to hitchike where you can still get close with locals and also where you need to be.",
					"Due to sanctions you cannot use any ATM. Bring crisp USD with you, it can be exchanged in almost every town centre easily."
				],
				dos : [
					"Wear local clothing. You can easily buy what you need on arrival in Kabul.",
					"If you're a woman, cover your hair at all times."
				],
				donts: [ 
					"Bring a drone, they are exteremely illegal to even have on you.", 
					"If you're a man, take photos of or approach women, especially in the conservative centres like Mazar-i-Sharif and Kandahar. If they approach you it's fine."
				],
				advice: {
					travelLength: "2 - 3 weeks",
					currency: "Afghan Afghani AFN",
					season: "March - November",
					dailyBudget: "$20 USD",
				},
				travelAdvisory: {
					link: "https://www.smartraveller.gov.au/destinations/asia/afghanistan",
					advice: Advisory.Level4,
				},
				music: [
					{
						title: "Back In Black - AC/DC",
						link: "https://music.youtube.com/watch?v=9vWNauaZAgg&si=PrM-rN2ClGrZyjGH",
					},
					{
						title: "Kiss The Sky - Maren Morris",
						link: "https://music.youtube.com/watch?v=yDeG2SI5R_8&si=YUSja0aFx8vbjGgg",
					},
					{
						title: "Sweet Disaster - DREAMERS",
						link: "https://music.youtube.com/watch?v=2k5W-j9eHcY&si=3r7wRLmAa2WuVtUZ",
					},
					{
						title: "That's So True - Gracie Abrams",
						link: "https://music.youtube.com/watch?v=W_YOJWZIjxo&si=8PtrcNBQiYgZqgVf",
					},
				],
				extraLinks: [
					{
						title: "Paris Hailwood - Afghanistan Beyond the Headlines",
						link: "https://www.instagram.com/reel/DHCCI8-tDIo/?hl=en",
					},
				],
			},
		},
	// {
	// 	title: "",
	// 	year: ,
	// 	hostedLink: "",
	// 	link: "",
	// 	restricted: false,
	// 	instagramLinks: [
	// 		"",
	//      "",
	// 		"",
	//      "",
	// 	],
	// 	reelLinks: [""],
	// 	backupLink: "",
	// 	newestVideo: true,
	// 	extras: {
	// 		countries: [ ""],
	// 		scorecard: {
	// 			affordability: [],
	// 			food: [],
	//			hospitality: [],
	// 			safety: [],
	// 			accessibility: [],
	// 			video: [],
	// 		},
	// 		finalScore: 7,
	// 		summary: [ "" ],
	// 		challenges: [ "" ],
	// 		dos: [ "" ],
	// 		donts: [ "" ],
	// 		advice: {
	// 			travelLength: "",
	// 			currency: "",
	// 			season: "",
	// 			dailyBudget: "",
	// 		},
	// 		travelAdvisory: {
	// 			link: "",
	// 			advice: Advisory.Level1,
	// 		},
	// 		music: [
	// 			{
	// 				title: "",
	// 				link: "",
	// 			},
	// 			{
	// 				title: "",
	// 				link: "",
	// 			},
	// 		],
	// 		extraLinks: [
	// 			{
	// 				title: "",
	// 				link: "",
	// 			},
	// 			{
	// 				title: "",
	// 				link: "",
	// 			},
	// 		],
	// 		extraVideos: [
	// 			{
	// 				title: "",
	// 				hostedLink: "",
	// 			},
	// 		],
	// 	},
	// },
];

export const rankedTravelVideos = [
	//S Tier
	["syria", "greece", "japan"],
	//A Tier
	[
		"israel-and-palestine",
		"armenia-georgia-azerbaijan",
		"iran",
		"jordan",
		"india",
	],
	//B Tier
	[
		"bangladesh",
		"turkey",
		"pakistan",
		"philippines-and-brunei",
		"timor-leste",
		"south-korea",
		"new-zealand",
	],
	//C Tier
	[
		"bhutan-and-east-india",
		"afghanistan",
		"cambodia-laos-vietnam",
		"taiwan-hong-kong-macau",
		"oman",
		"uae",
		"malaysia-singapore",
		"china",
		"nepal",
		"thailand",
	],
	//D Tier
	[
		"maldives-and-sri-lanka",
		"cyprus",
		"lebanon",
		"kuwait-iraqi-kurdistan",
		"fiji",
		"australia",
	],
	//F Tier
	["saudi-arabia-bahrain"],
];

export const tierTitles = [
	"S Tier 🥇",
	"A Tier 🥈",
	"B Tier 🥉",
	"C Tier",
	"D Tier",
	"F Tier 💩",
];

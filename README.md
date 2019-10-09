# meetup-scrape

to start run
```
yarn && yarn start
```
you should have a running server on localhost:3000 and at this time it will output events.

basic output at the moment

```
[
  {
    eventTitle: "The Weekend's Last Call at River Pig Saloon",
    eventLink: 'https://www.meetup.com/CONewFriendsConnection/events/265244899/',
    groupName: 'Central Oregon New Friends Connection',
    groupLink: 'https://www.meetup.com/CONewFriendsConnection/',
    date: '2019-10-13T16:00:00-07:00'
  },
  {
    eventTitle: 'Bless the Earth at the Full Moon--Multiply the Abundant Blessings',
    eventLink: 'https://www.meetup.com/Bend-Pranic-Healing-Meetup/events/265294961/',
    groupName: 'Bend Pranic Healing Meetup',
    groupLink: 'https://www.meetup.com/Bend-Pranic-Healing-Meetup/',
    date: '2019-10-13T16:15:00-07:00'
  },
  {
    eventTitle: 'Cascade View Estates Monthly Book Club Meeting',
    eventLink: 'https://www.meetup.com/CascadeViewEstatesLadiesBookClub/events/264009723/',
    groupName: 'Cascade View Estates Ladies Book Club',
    groupLink: 'https://www.meetup.com/CascadeViewEstatesLadiesBookClub/',
    date: '2019-10-14T11:00:00-07:00'
  },
  {
    eventTitle: '2ND. MONDAY BUNCO & POTLUCK! ���������😈😈👻👻🎃🎃',
    eventLink: 'https://www.meetup.com/ladiesandfriendsofbend/',
    groupName: 'Ladies And Friends',
    groupLink: 'https://www.meetup.com/ladiesandfriendsofbend/',
    date: '2019-10-14T13:30:00-07:00'
  },
  {
    eventTitle: 'Hear and Tell Stories',
    eventLink: 'https://www.meetup.com/Bend-Storytelling-Circle/events/ltlkfryznbsb/',
    groupName: 'Bend Storytelling Circle',
    groupLink: 'https://www.meetup.com/Bend-Storytelling-Circle/',
    date: '2019-10-14T15:30:00-07:00'
  },
  {
    eventTitle: 'Walkabout at the River Trail',
    eventLink: 'https://www.meetup.com/ladiesandfriendsofbend/',
    groupName: 'Ladies And Friends',
    groupLink: 'https://www.meetup.com/ladiesandfriendsofbend/',
    date: '2019-10-15T08:00:00-07:00'
  },
  {
    eventTitle: 'Heart Meditation & Healing Circle',
    eventLink: 'https://www.meetup.com/thehivebend/events/njnkjryznbtb/',
    groupName: 'The Hive, Bend OR',
    groupLink: 'https://www.meetup.com/thehivebend/',
    date: '2019-10-15T14:25:00-07:00'
  },
  {
    eventTitle: 'Bunco!',
    eventLink: 'https://www.meetup.com/Redmond-Womens-Social-Group/events/xlxwjryznbtb/',
    groupName: "Redmond Women's Social Group",
    groupLink: 'https://www.meetup.com/Redmond-Womens-Social-Group/',
    date: '2019-10-15T14:45:00-07:00'
  },
  {
    eventTitle: "LET'S HARMONIZE!",
    eventLink: 'https://www.meetup.com/Bend-Female-Acappella-Barbershop-Singing-Chorus/events/xxcsfryznbtb/',
    groupName: 'Bella Acappella Harmony Chorus',
    groupLink: 'https://www.meetup.com/Bend-Female-Acappella-Barbershop-Singing-Chorus/',
    date: '2019-10-15T15:30:00-07:00'
  },
  {
    eventTitle: 'Become an Instrument of Peace: Healing Your Relationships',
    eventLink: 'https://www.meetup.com/Bend-Pranic-Healing-Meetup/events/265294613/',
    groupName: 'Bend Pranic Healing Meetup',
    groupLink: 'https://www.meetup.com/Bend-Pranic-Healing-Meetup/',
    date: '2019-10-15T16:15:00-07:00'
  },
  {
    eventTitle: 'Bend Watershed & Bridge Creek',
    eventLink: 'https://www.meetup.com/Humpday-hike/events/265396892/',
    groupName: 'Humpday Hike',
    groupLink: 'https://www.meetup.com/Humpday-hike/',
    date: '2019-10-16T06:00:00-07:00'
  },
  {
    eventTitle: "Let's do Brunch!",
    eventLink: 'https://www.meetup.com/Bend-Newly-Retired-Women-getting-Inspired-and-Having-Fun/events/264368752/',
    groupName: 'Bend Newly Retired Women',
    groupLink: 'https://www.meetup.com/Bend-Newly-Retired-Women-getting-Inspired-and-Having-Fun/',
    date: '2019-10-16T07:00:00-07:00'
  },
  {
    eventTitle: "DRY CANYON WALK AND LUNCH AT LYNDA'S HOUSE",
    eventLink: 'https://www.meetup.com/RedmondGirlsDayOut/',
    groupName: 'Redmond Girls Day Out',
    groupLink: 'https://www.meetup.com/RedmondGirlsDayOut/',
    date: '2019-10-16T07:00:00-07:00'
  },
  {
    eventTitle: 'Be seen, be heard, be recognized. Learn public speaking with us.',
    eventLink: 'https://www.meetup.com/Communicators-Plus-Toastmaster-Meetup/events/nlcltqyznbvb/',
    groupName: 'Communicators Plus Toastmasters Meetup',
    groupLink: 'https://www.meetup.com/Communicators-Plus-Toastmaster-Meetup/',
    date: '2019-10-16T15:15:00-07:00'
  },
  {
    eventTitle: 'David Suzuki on Climate: The Future Trajectory',
    eventLink: 'https://www.meetup.com/Sierra-Club-Juniper-Group/events/265051417/',
    groupName: 'Sierra Club - Juniper Group',
    groupLink: 'https://www.meetup.com/Sierra-Club-Juniper-Group/',
    date: '2019-10-16T15:45:00-07:00'
  },
  {
    eventTitle: 'Hike the Deschutes River at Eaglecrest ( dog friendly)',
    eventLink: 'https://www.meetup.com/Women-exploring-Nature-together/events/265049432/',
    groupName: 'Women exploring Nature together with dogs',
    groupLink: 'https://www.meetup.com/Women-exploring-Nature-together/',
    date: '2019-10-17T06:00:00-07:00'
  },
  {
    eventTitle: 'Lunch',
    eventLink: 'https://www.meetup.com/Redmond-Womens-Social-Group/events/265270461/',
    groupName: "Redmond Women's Social Group",
    groupLink: 'https://www.meetup.com/Redmond-Womens-Social-Group/',
    date: '2019-10-17T09:00:00-07:00'
  },
  {
    eventTitle: 'MAH JONGG at Bend Senior Center',
    eventLink: 'https://www.meetup.com/Bend-Newly-Retired-Women-getting-Inspired-and-Having-Fun/events/glprxqyznbwb/',
    groupName: 'Bend Newly Retired Women',
    groupLink: 'https://www.meetup.com/Bend-Newly-Retired-Women-getting-Inspired-and-Having-Fun/',
    date: '2019-10-17T10:00:00-07:00'
  },
  {
    eventTitle: 'A Different Kind of Book Club - Chapter Book Club!',
    eventLink: 'https://www.meetup.com/ladiesandfriendsofbend/',
    groupName: 'Ladies And Friends',
    groupLink: 'https://www.meetup.com/ladiesandfriendsofbend/',
    date: '2019-10-17T13:00:00-07:00'
  },
  {
    eventTitle: 'Bible Discussion: "From worry to Wonder"',
    eventLink: 'https://www.meetup.com/bend-bible-discussions/events/265290685/',
    groupName: 'Friends Hang Outs and Bible Discussions',
    groupLink: 'https://www.meetup.com/bend-bible-discussions/',
    date: '2019-10-17T15:00:00-07:00'
  },
  {
    eventTitle: 'The Expanse SciFi Series: Watch and discuss together...',
    eventLink: 'https://www.meetup.com/Bend-Astronomy-and-Beyond/events/264207320/',
    groupName: 'Bend Astronomy and Beyond',
    groupLink: 'https://www.meetup.com/Bend-Astronomy-and-Beyond/',
    date: '2019-10-17T16:00:00-07:00'
  },
  {
    eventTitle: 'COTA Movie Night @ McMenamins: RETURN TO EARTH',
    eventLink: 'https://www.meetup.com/COTA-Central-Oregon-Trail-Alliance/events/264387267/',
    groupName: 'COTA: Central Oregon Trail Alliance',
    groupLink: 'https://www.meetup.com/COTA-Central-Oregon-Trail-Alliance/',
    date: '2019-10-17T17:00:00-07:00'
  },
  {
    eventTitle: 'The Canterville Ghost: Cascades Theatrical Company',
    eventLink: 'https://www.meetup.com/CONewFriendsConnection/events/265306003/',
    groupName: 'Central Oregon New Friends Connection',
    groupLink: 'https://www.meetup.com/CONewFriendsConnection/',
    date: '2019-10-18T15:30:00-07:00'
  },
  {
    eventTitle: 'Painted Hills Day trip',
    eventLink: 'https://www.meetup.com/beerfoodandwine/',
    groupName: 'Adventures in Beer, Food, and Wine',
    groupLink: 'https://www.meetup.com/beerfoodandwine/',
    date: '2019-10-19T05:45:00-07:00'
  },
  {
    eventTitle: 'Tree Planting Work Party - Sunriver Trails',
    eventLink: 'https://www.meetup.com/COTA-Central-Oregon-Trail-Alliance/events/265455886/',
    groupName: 'COTA: Central Oregon Trail Alliance',
    groupLink: 'https://www.meetup.com/COTA-Central-Oregon-Trail-Alliance/',
    date: '2019-10-19T06:00:00-07:00'
  },
  {
    eventTitle: 'Spear Making and Throwing',
    eventLink: 'https://www.meetup.com/Central-Oregon-Primative-Skills/events/265214285/',
    groupName: 'Central Oregon Primitive Skills',
    groupLink: 'https://www.meetup.com/Central-Oregon-Primative-Skills/',
    date: '2019-10-19T07:30:00-07:00'
  },
  {
    eventTitle: 'Maize Day & Pumpkin Patch! ���',
    eventLink: 'https://www.meetup.com/bend-bible-discussions/events/265270758/',
    groupName: 'Friends Hang Outs and Bible Discussions',
    groupLink: 'https://www.meetup.com/bend-bible-discussions/',
    date: '2019-10-19T09:00:00-07:00'
  },
  {
    eventTitle: 'Pine Needle Basket Weaving Class',
    eventLink: 'https://www.meetup.com/Thirty-Somethings-ish-in-Bend/',
    groupName: 'Thirty-Somethings in Bend',
    groupLink: 'https://www.meetup.com/Thirty-Somethings-ish-in-Bend/',
    date: '2019-10-19T10:00:00-07:00'
  },
  {
    eventTitle: 'Central Oregon Symphony - Saturday Evening',
    eventLink: 'https://www.meetup.com/CONewFriendsConnection/events/264925540/',
    groupName: 'Central Oregon New Friends Connection',
    groupLink: 'https://www.meetup.com/CONewFriendsConnection/',
    date: '2019-10-19T16:00:00-07:00'
  },
  {
    eventTitle: 'Board Games Night',
    eventLink: 'https://www.meetup.com/bendgames/events/dnrfdryznbzb/',
    groupName: 'Bend Board Games',
    groupLink: 'https://www.meetup.com/bendgames/',
    date: '2019-10-19T16:00:00-07:00'
  },
  {
    eventTitle: "Steins Pillar Day hike 6m RT, 680' EG.",
    eventLink: 'https://www.meetup.com/Bend-Backpacking-Adventure-Collective/events/264032077/',
    groupName: 'Bend Backpacking & Adventure Collective',
    groupLink: 'https://www.meetup.com/Bend-Backpacking-Adventure-Collective/',
    date: '2019-10-20T06:00:00-07:00'
  },
  {
    eventTitle: "Mt. Bachelor Climb 9,065' & Ice Axe Self Arrest Class",
    eventLink: 'https://www.meetup.com/Oregon-Alpine-Project/events/265496000/',
    groupName: 'Oregon Alpine Project',
    groupLink: 'https://www.meetup.com/Oregon-Alpine-Project/',
    date: '2019-10-20T06:00:00-07:00'
  },
  {
    eventTitle: 'Bend DnD October Meetup',
    eventLink: 'https://www.meetup.com/BendDnD/events/264804585/',
    groupName: 'Bend DnD',
    groupLink: 'https://www.meetup.com/BendDnD/',
    date: '2019-10-20T09:00:00-07:00'
  },
  {
    eventTitle: 'Beginner/ Intermediate Lessons with Joe Davidson ITPTA CERTIFIED',
    eventLink: 'https://www.meetup.com/Bend-Pickleball-Meetup/events/264960221/',
    groupName: 'Bend Pickleball Meetup',
    groupLink: 'https://www.meetup.com/Bend-Pickleball-Meetup/',
    date: '2019-10-21T06:00:00-07:00'
  },
  {
    eventTitle: 'Circle of Sisters Book Club',
    eventLink: 'https://www.meetup.com/Bend-Newly-Retired-Women-getting-Inspired-and-Having-Fun/events/kpkwdryznbcc/',
    groupName: 'Bend Newly Retired Women',
    groupLink: 'https://www.meetup.com/Bend-Newly-Retired-Women-getting-Inspired-and-Having-Fun/',
    date: '2019-10-21T10:33:00-07:00'
  },
  {
    eventTitle: '3RD MONDAY Bunco & Potluck!',
    eventLink: 'https://www.meetup.com/ladiesandfriendsofbend/',
    groupName: 'Ladies And Friends',
    groupLink: 'https://www.meetup.com/ladiesandfriendsofbend/',
    date: '2019-10-21T13:30:00-07:00'
  },
  {
    eventTitle: 'Martini Monday',
    eventLink: 'https://www.meetup.com/Redmond-Womens-Social-Group/events/265270545/',
    groupName: "Redmond Women's Social Group",
    groupLink: 'https://www.meetup.com/Redmond-Womens-Social-Group/',
    date: '2019-10-21T14:00:00-07:00'
  }
]
```

### TODO's

- add json endpoint links to groups up comming events
  - list group name
  - list group events

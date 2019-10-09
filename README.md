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
  ...
]
```

### TODO's

- add json endpoint links to groups up comming events
  - list group name
  - list group events
- cache results for faster load times
